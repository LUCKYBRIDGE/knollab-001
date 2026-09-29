import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { runInNewContext } from "node:vm";
import test from "node:test";

const root = resolve(import.meta.dirname, "..");
const script = readFileSync(resolve(root, "viewer.js"), "utf8");

function render(query) {
  const experimentLinks = "abcd".split("").map((id) => ({ dataset: { experiment: id }, href: "", setAttribute(name, value) { this[name] = value; } }));
  const versionLinks = [1, 2, 3].map((version) => ({ dataset: { version }, href: "", hidden: false, setAttribute(name, value) { this[name] = value; } }));
  const elements = {
    "#selection-label": { textContent: "" },
    "#source-link": { href: "" },
    "#direct-link": { href: "" },
    "#experience-frame": { src: "", title: "" }
  };
  const document = {
    querySelectorAll(selector) { return selector === "[data-experiment]" ? experimentLinks : versionLinks; },
    querySelector(selector) { return elements[selector]; }
  };
  runInNewContext(script, { document, location: { search: query }, URLSearchParams, Object, Number });
  return { experimentLinks, versionLinks, elements };
}

test("all ten preserved versions have a playable index and their own local assets", () => {
  for (const [id, versions] of Object.entries({ a: [1, 2, 3], b: [1, 2, 3], c: [1, 2, 3], d: [1] })) {
    for (const version of versions) {
      const dir = resolve(root, `experiments/${id}/v${version}`);
      const html = readFileSync(resolve(dir, "index.html"), "utf8");
      for (const path of [...html.matchAll(/(?:src|href)="([^"]+\.(?:css|js))"/g)].map((match) => match[1])) {
        assert.ok(existsSync(resolve(dir, path)), `${id} v${version}: ${path}`);
      }
    }
  }
});

test("A version 2 selects the correct local snapshot and links", () => {
  const { experimentLinks, versionLinks, elements } = render("?experiment=a&version=2");
  assert.equal(elements["#experience-frame"].src, "experiments/a/v2/");
  assert.equal(versionLinks[1]["aria-current"], "true");
  assert.equal(experimentLinks[0]["aria-current"], "true");
  assert.equal(experimentLinks[3].href, "?experiment=d&version=1");
});

test("D exposes only version 1 even when version 3 is requested", () => {
  const { versionLinks, elements } = render("?experiment=d&version=3");
  assert.equal(elements["#experience-frame"].src, "experiences/d/v1/");
  assert.ok(existsSync(resolve(root, "experiments/d/v1/index.html")));
  assert.ok(existsSync(resolve(root, "experiences/d/v1/responsive.css")));
  assert.equal(versionLinks[0].hidden, false);
  assert.equal(versionLinks[1].hidden, true);
  assert.equal(versionLinks[2].hidden, true);
});

test("unknown experiment falls back to A version 1", () => {
  const { elements } = render("?experiment=x&version=99");
  assert.equal(elements["#experience-frame"].src, "experiments/a/v1/");
});
