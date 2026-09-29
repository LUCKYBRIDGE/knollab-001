(() => {
  "use strict";

  const experiments = Object.freeze({
    a: { name: "AI Only", repo: "knollab-001-a-ai-only", versions: [1, 2, 3] },
    b: { name: "DESIGN.md", repo: "knollab-001-b-design-md", versions: [1, 2, 3] },
    c: { name: "Figma MCP", repo: "knollab-001-c-design-figma-mcp", versions: [1, 2, 3] },
    d: { name: "Figma MCP 적극 활용", repo: "knollab-001-d-design-figma-mcp-actively", versions: [1] }
  });

  const query = new URLSearchParams(location.search);
  const experiment = Object.hasOwn(experiments, query.get("experiment")) ? query.get("experiment") : "a";
  const selected = experiments[experiment];
  const requestedVersion = Number(query.get("version"));
  const version = selected.versions.includes(requestedVersion) ? requestedVersion : 1;
  const originalUrl = `experiments/${experiment}/v${version}/`;

  for (const link of document.querySelectorAll("[data-experiment]")) {
    const id = link.dataset.experiment;
    const targetVersion = experiments[id].versions.includes(version) ? version : 1;
    link.href = `?experiment=${id}&version=${targetVersion}`;
    if (id === experiment) link.setAttribute("aria-current", "true");
  }

  for (const link of document.querySelectorAll("[data-version]")) {
    const value = Number(link.dataset.version);
    link.href = `?experiment=${experiment}&version=${value}`;
    link.hidden = !selected.versions.includes(value);
    if (value === version) link.setAttribute("aria-current", "true");
  }

  document.querySelector("#selection-label").textContent = `${experiment.toUpperCase()} · ${selected.name} / 버전 ${version}`;
  document.querySelector("#source-link").href = `https://github.com/LUCKYBRIDGE/${selected.repo}`;
  document.querySelector("#direct-link").href = originalUrl;
  const frame = document.querySelector("#experience-frame");
  frame.title = `${experiment.toUpperCase()} · ${selected.name} 버전 ${version} 카페 주문 연습`;
  frame.src = originalUrl;
})();
