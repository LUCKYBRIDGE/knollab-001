# KNOLLAB-001 — DESIGN.md · Figma MCP 비교 실험

## 현재 체험 사이트 (2026-09-30)

[놀랩 001 실험 결과 체험 사이트](https://luckybridge.github.io/knollab-001/)에서 상단 버튼으로 A·B·C·D 실험군과 완성된 버전을 전환할 수 있다. A·B·C는 버전 1·2·3, D는 버전 1만 제공한다. 각 화면은 독립된 원본 버전으로 카페 주문 연습 전체 과정을 체험할 수 있다.

| 실험군 | 배포된 개별 사이트 | 완성 버전 |
|---|---|---|
| A · AI Only | [사이트](https://luckybridge.github.io/knollab-001-a-ai-only/) | 1, 2, 3 |
| B · DESIGN.md | [사이트](https://luckybridge.github.io/knollab-001-b-design-md/) | 1, 2, 3 |
| C · DESIGN.md + Figma MCP | [사이트](https://luckybridge.github.io/knollab-001-c-design-figma-mcp/) | 1, 2, 3 |
| D · DESIGN.md + Figma MCP 적극 활용 | [사이트](https://luckybridge.github.io/knollab-001-d-design-figma-mcp-actively/) | 1 |

원본은 각 저장소의 `versions/vN/`에 보관한다. 중앙 사이트는 이를 [`experiments/`](./experiments/SOURCES.md)에 다시 복사하여 원본 저장소의 이후 변경과 관계없이 비교할 수 있게 했다. 아래 내용은 A·B·C 실험을 시작할 때 작성한 **초기 설계 기록**이며, 당시의 준비 상태를 그대로 보존한다.

---

> 강릉오성학교 AI 활용·바이브코딩 연수를 위한 비교 실험의 통제·기록 리포지토리이다.

`knollab-001`은 실제 실험 웹사이트를 구현하는 곳이 아니라, 세 개의 독립된 실험 프로젝트를 동일한 조건으로 운영하고 PR1 → PR2 → PR3의 결과를 기록·비교하기 위한 기준 리포지토리이다.

## 실험 프로젝트

| 실험군 | ChatGPT 프로젝트 폴더 = Repository명 | 추가 환경 |
|---|---|---|
| A. AI Only | [`knollab-001-a-ai-only`](https://github.com/LUCKYBRIDGE/knollab-001-a-ai-only) | 없음 |
| B. DESIGN.md | [`knollab-001-b-design-md`](https://github.com/LUCKYBRIDGE/knollab-001-b-design-md) | `DESIGN.md` |
| C. DESIGN.md + Figma MCP | [`knollab-001-c-design-figma-mcp`](https://github.com/LUCKYBRIDGE/knollab-001-c-design-figma-mcp) | B와 동일한 `DESIGN.md` + 고정 Figma + Figma MCP |

세 실험군은 각각 별도의 **ChatGPT 프로젝트 폴더**와 별도의 **GitHub Repository**로 운영하며, 프로젝트 폴더명과 Repository명을 동일하게 유지한다.

```text
ChatGPT Projects
├─ knollab-001-a-ai-only
├─ knollab-001-b-design-md
└─ knollab-001-c-design-figma-mcp

GitHub Repositories
├─ knollab-001-a-ai-only
├─ knollab-001-b-design-md
└─ knollab-001-c-design-figma-mcp
```

중앙 `knollab-001`은 별도의 Control Repository이며, 실험 조건, 공통 프롬프트, Repository/Pages URL, 단계별 commit/tag, DESIGN.md 버전, Figma 기준, 관찰 결과와 최종 비교를 기록한다.

세 프로젝트의 상세 매핑과 현재 준비 상태는 [`EXPERIMENT_PROJECTS.md`](./EXPERIMENT_PROJECTS.md)에 기록한다.

## ChatGPT 프로젝트와 메모리 통제

세 실험은 ChatGPT 채팅을 개발 Agent 인터페이스로 사용한다. 각 실험군은 서로 분리된 ChatGPT 프로젝트 폴더에서 진행하며, **일반 ChatGPT 메모리가 아니라 해당 프로젝트 내부에 한정되는 프로젝트 전용 메모리(Project-only / project-specific memory)를 사용한다.**

이 설정은 단순한 작업 편의를 위한 것이 아니라 실험 통제 조건이다. 일반 대화에서 축적된 사용자 선호, 이전 개발 경험, 다른 실험군의 정보 또는 별도의 프로젝트 맥락이 새 실험의 판단에 유입되면 작업환경 차이 외의 변수가 추가될 수 있기 때문이다.

따라서 다음 원칙을 세 실험군에 동일하게 적용한다.

- A, B, C 모두 서로 독립된 ChatGPT 프로젝트에서 시작한다.
- 세 프로젝트 모두 프로젝트 전용 메모리 방식을 사용한다.
- 일반/기본 ChatGPT 메모리를 실험 컨텍스트로 사용하지 않는다.
- 한 실험군에서 생성된 대화 내용이나 판단을 다른 실험군에 수동으로 전달하지 않는다.
- 공통으로 제공하기로 정한 프롬프트와 실험 자료 외에는 실험군 사이에서 컨텍스트를 공유하지 않는다.
- 프로젝트 내부에서 PR1 → PR2 → PR3로 이어지는 대화 맥락은 해당 실험군 자체의 연속된 작업 기록으로 허용한다.

즉, 세 실험의 차이는 개인 계정의 과거 기억이나 다른 ChatGPT 대화가 아니라 **각 프로젝트에 의도적으로 제공한 환경**에서 발생하도록 통제한다.

## 핵심 통제 원칙

- 세 실험군에 동일한 목표와 동일한 PR1·PR2·PR3 프롬프트를 사용한다.
- 세 실험군 모두 동일하게 프로젝트 전용 메모리를 사용한다.
- B와 C의 `DESIGN.md`는 동일하게 유지한다.
- C의 추가 변수는 고정된 Figma 설계와 Figma MCP뿐이다.
- PR1~PR3 중 사용자 UI 선호를 추가로 주입하지 않는다.
- 각 단계를 Git commit/tag로 보존한 뒤 다음 단계로 진행한다.
- 비교 실험이 끝날 때까지 미래 PR 단계와 강의용 전시·QR 계획을 실험 Agent에게 미리 알리지 않는다.

## 확정된 공통 DESIGN.md 기준

B와 C에는 동일한 실험용 웹 `DESIGN.md`를 사용한다.

- B: `knollab-001-b-design-md/DESIGN.md`
- C: `knollab-001-c-design-figma-mcp/DESIGN.md`
- Git blob SHA: `c91e3a4182a479dff5e6608efe54107d9c45350c`

두 파일은 byte-for-byte 동일하다.

이 문서는 구체적인 정답 화면을 고정하지 않고, 특수학교 학생의 인지 부담, 독립적인 사용, 실생활 전이, 핵심 행동의 명확성, 선택 상태, 행동 직후 피드백, 진행 상태, 쉬운 복구, 오류 예방, 터치 조작성, 일관성, 접근성, 비유아화 등을 AI가 설계와 자기검토에 사용할 UX/UI 판단 기준으로 제공한다.

화면 수, 메뉴 수, 정확한 색상, 버튼 위치, 카드 모양, 구체적인 진행 UI 방식 등은 의도적으로 고정하지 않는다.

## 공통 실험 대상

특수학교 학생이 카페에서 음료를 주문하는 과정을 연습할 수 있는 웹사이트를 순수 HTML/CSS/JavaScript로 구현한다.

핵심 실험은 **같은 목표와 같은 프롬프트를 받은 AI라도 DESIGN.md와 Figma MCP 등 작업환경의 차이에 따라 최초 판단과 반복 개선 결과가 어떻게 달라지는지** 관찰하는 것이다.

## 현재 상태

- [x] 중앙 관리 Repository `knollab-001` 생성
- [x] A·B·C 실험 Repository 생성
- [x] A·B·C ChatGPT 프로젝트 폴더 생성
- [x] ChatGPT 프로젝트 폴더명과 Repository명 일치
- [x] 세 실험군의 프로젝트 전용 메모리 사용 원칙 확정
- [x] 실험용 웹 `DESIGN.md` 확정
- [x] B·C에 byte-for-byte 동일한 `DESIGN.md` 배치
- [ ] C용 Figma 기준 설계 및 고정
- [ ] 세 프로젝트 초기 조건 확인
- [ ] PR1 시작
