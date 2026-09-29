# KNOLLAB-001 — DESIGN.md · Figma MCP 비교 실험

> 강릉오성학교 AI 활용·바이브코딩 연수를 위한 비교 실험의 통제·기록 리포지토리이다.

`knollab-001`은 실제 실험 웹사이트를 구현하는 곳이 아니라, 세 개의 독립된 실험 프로젝트를 동일한 조건으로 운영하고 PR1 → PR2 → PR3의 결과를 기록·비교하기 위한 기준 리포지토리이다.

## 실험 프로젝트

| 실험군 | 프로젝트 폴더 = Repository | 추가 환경 |
|---|---|---|
| A. AI Only | [`knollab-001-a-ai-only`](https://github.com/LUCKYBRIDGE/knollab-001-a-ai-only) | 없음 |
| B. DESIGN.md | [`knollab-001-b-design-md`](https://github.com/LUCKYBRIDGE/knollab-001-b-design-md) | `DESIGN.md` |
| C. DESIGN.md + Figma MCP | [`knollab-001-c-design-figma-mcp`](https://github.com/LUCKYBRIDGE/knollab-001-c-design-figma-mcp) | B와 동일한 `DESIGN.md` + 고정 Figma + Figma MCP |

로컬에서도 위 Repository 이름과 프로젝트 폴더명을 동일하게 유지한다.

```text
<workspace>/
├─ knollab-001/
├─ knollab-001-a-ai-only/
├─ knollab-001-b-design-md/
└─ knollab-001-c-design-figma-mcp/
```

세 실험 프로젝트는 `knollab-001`의 하위 프로젝트가 아니라 **각각 독립된 Git Repository와 프로젝트 폴더**로 운영한다. 중앙 `knollab-001`에는 실험 조건, 공통 프롬프트, Repository/Pages URL, 단계별 commit/tag, DESIGN.md 버전, Figma 기준, 관찰 결과와 최종 비교를 기록한다.

세 프로젝트의 상세 매핑과 현재 준비 상태는 [`EXPERIMENT_PROJECTS.md`](./EXPERIMENT_PROJECTS.md)에 기록한다.

## 핵심 통제 원칙

- 세 실험군에 동일한 목표와 동일한 PR1·PR2·PR3 프롬프트를 사용한다.
- B와 C의 `DESIGN.md`는 동일하게 유지한다.
- C의 추가 변수는 고정된 Figma 설계와 Figma MCP뿐이다.
- PR1~PR3 중 사용자 UI 선호를 추가로 주입하지 않는다.
- 각 단계를 Git commit/tag로 보존한 뒤 다음 단계로 진행한다.
- 비교 실험이 끝날 때까지 미래 PR 단계와 강의용 전시·QR 계획을 실험 Agent에게 미리 알리지 않는다.

## 공통 실험 대상

특수학교 학생이 카페에서 음료를 주문하는 과정을 연습할 수 있는 웹사이트를 순수 HTML/CSS/JavaScript로 구현한다.

핵심 실험은 **같은 목표와 같은 프롬프트를 받은 AI라도 DESIGN.md와 Figma MCP 등 작업환경의 차이에 따라 최초 판단과 반복 개선 결과가 어떻게 달라지는지** 관찰하는 것이다.

## 현재 상태

- [x] 세 실험 Repository 생성
- [x] 세 프로젝트 폴더/Repository 이름 확정
- [ ] 실험용 웹 `DESIGN.md` 확정
- [ ] B·C에 동일한 `DESIGN.md` 배치
- [ ] C용 Figma 기준 설계 및 고정
- [ ] 세 프로젝트 초기 조건 확인
- [ ] PR1 시작
