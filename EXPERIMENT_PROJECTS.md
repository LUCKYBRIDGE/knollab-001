# KNOLLAB-001 Experiment Projects

이 문서는 KNOLLAB-001 비교 실험에서 실제 개발에 사용하는 세 실험 프로젝트의 GitHub Repository와 ChatGPT 프로젝트 폴더 이름을 관리한다.

## 관리 원칙

- `knollab-001`은 실험 전체의 통제·기록용 기준 Repository이다.
- 실제 웹사이트 구현은 아래 세 개의 독립 실험 Repository에서 진행한다.
- 각 실험군은 서로 분리된 ChatGPT 프로젝트 폴더에서 운영한다.
- ChatGPT 프로젝트 폴더명과 GitHub Repository명은 동일하게 유지한다.
- 세 ChatGPT 프로젝트 모두 일반/기본 메모리가 아닌 **프로젝트 전용 메모리(Project-only / project-specific memory)**를 사용한다.
- 세 프로젝트는 가능한 한 동일한 초기 상태에서 시작한다.
- PR1, PR2, PR3 공통 프롬프트는 세 실험군에 동일하게 제공한다.
- B와 C는 동일한 `DESIGN.md`를 사용한다.
- C의 추가 변수는 고정된 Figma 설계와 Figma MCP뿐이다.

## 실험 프로젝트

| 실험군 | 환경 | ChatGPT 프로젝트 폴더 | GitHub Repository |
|---|---|---|---|
| A | AI Only | `knollab-001-a-ai-only` | https://github.com/LUCKYBRIDGE/knollab-001-a-ai-only |
| B | DESIGN.md | `knollab-001-b-design-md` | https://github.com/LUCKYBRIDGE/knollab-001-b-design-md |
| C | DESIGN.md + Figma MCP | `knollab-001-c-design-figma-mcp` | https://github.com/LUCKYBRIDGE/knollab-001-c-design-figma-mcp |

## 현재 확정된 프로젝트 구조

```text
ChatGPT Projects
├─ knollab-001-a-ai-only               # 실험군 A
├─ knollab-001-b-design-md             # 실험군 B
└─ knollab-001-c-design-figma-mcp      # 실험군 C

GitHub Repositories
├─ knollab-001                          # 중앙 실험 통제·기록
├─ knollab-001-a-ai-only               # 실험군 A
├─ knollab-001-b-design-md             # 실험군 B
└─ knollab-001-c-design-figma-mcp      # 실험군 C
```

세 실험 프로젝트는 중앙 `knollab-001`의 하위 실험 폴더가 아니라 서로 독립된 ChatGPT 프로젝트와 GitHub Repository로 유지한다. `knollab-001`에는 각 프로젝트의 주소, 실험 조건, 공통 프롬프트, 단계별 commit/tag, Pages URL, DESIGN.md 버전, Figma 기준 링크, 관찰 결과를 기록한다.

## ChatGPT 프로젝트 및 메모리 통제

이 비교 실험은 ChatGPT 채팅을 통해 실제 바이브코딩 작업을 수행한다. 따라서 코드와 디자인 자료뿐 아니라 **ChatGPT가 어떤 대화 맥락과 메모리에 접근할 수 있는지**도 실험 환경의 일부로 취급한다.

세 실험군은 각각 별도의 ChatGPT 프로젝트 폴더에서 운영하며, 세 프로젝트 모두 일반/기본 메모리 대신 해당 프로젝트 범위에 한정되는 프로젝트 전용 메모리를 사용한다.

이렇게 하는 목적은 다음과 같다.

- 사용자의 과거 일반 대화에서 형성된 선호가 실험 결과에 섞이는 것을 줄인다.
- 다른 개발 프로젝트의 결정이나 코드 스타일이 실험군에 유입되는 것을 줄인다.
- A, B, C 중 한 프로젝트에서 생성된 판단이 다른 실험군의 사전 지식처럼 작동하지 않게 한다.
- 각 Agent가 해당 실험 프로젝트 내부에 실제로 제공된 자료와 그 프로젝트의 대화 이력만을 주된 작업 맥락으로 사용하게 한다.

운영 원칙은 다음과 같다.

1. A, B, C는 서로 다른 ChatGPT 프로젝트에서 시작한다.
2. 세 프로젝트 모두 동일한 프로젝트 전용 메모리 조건을 사용한다.
3. 일반/기본 ChatGPT 메모리의 개인화 정보를 실험 조건으로 활용하지 않는다.
4. 실험군 사이의 대화 내용을 복사하여 추가 컨텍스트로 제공하지 않는다.
5. 공통 프롬프트와 사전에 통제된 실험 자료만 의도적으로 공유한다.
6. PR1 이후 같은 프로젝트 안에서 이어지는 PR2·PR3 대화 맥락은 해당 실험군의 자연스러운 작업 연속성으로 유지한다.

따라서 메모리 격리는 A/B/C의 차이를 만드는 독립변수가 아니라 **세 실험군에 동일하게 적용하는 통제 조건**이다.

## 각 실험군에 존재해야 하는 환경

### A. `knollab-001-a-ai-only`

- 별도의 `DESIGN.md` 없음
- Figma 기준 없음
- Figma MCP 사용 안 함
- AI의 일반적인 판단에 맡김
- 독립된 ChatGPT 프로젝트 + 프로젝트 전용 메모리 사용

### B. `knollab-001-b-design-md`

- 실험용 웹 `DESIGN.md` 제공
- C와 동일한 `DESIGN.md` 사용
- Figma 자료 없음
- Figma MCP 사용 안 함
- 독립된 ChatGPT 프로젝트 + 프로젝트 전용 메모리 사용

### C. `knollab-001-c-design-figma-mcp`

- B와 동일한 `DESIGN.md` 사용
- PR1 전에 확정한 고정 Figma 기준 사용
- Figma MCP 사용
- PR1~PR3 동안 구현 결과에 맞추어 Figma 기준을 변경하지 않음
- 독립된 ChatGPT 프로젝트 + 프로젝트 전용 메모리 사용

## 공통 DESIGN.md 기준

B와 C에 배치된 `DESIGN.md`는 동일한 기준 파일이다.

- B path: `knollab-001-b-design-md/DESIGN.md`
- C path: `knollab-001-c-design-figma-mcp/DESIGN.md`
- Git blob SHA: `3f417549090ff7dba9c66a39e7542ef6c3f64b89`
- 상태: byte-for-byte 동일성 확인 완료

문서는 특수학교 학생용 카페 주문 연습 웹사이트에서 사용할 UX/UI 판단 원칙을 정의한다. 구체적인 정답 화면을 고정하지 않고, 인지 부담, 핵심 행동의 명확성, 선택 상태, 진행 상태, 쉬운 복구, 터치 조작성, 일관성, 실제 생활 연습성을 중심으로 판단하도록 한다.

화면 수, 메뉴 수, 정확한 색상 코드, 버튼 위치, 카드 모양, 구체적인 진행 UI 방식 등은 의도적으로 고정하지 않는다.

## 현재 상태

- [x] 중앙 관리 Repository `knollab-001` 생성
- [x] A 실험 Repository 생성
- [x] B 실험 Repository 생성
- [x] C 실험 Repository 생성
- [x] A ChatGPT 프로젝트 폴더 생성
- [x] B ChatGPT 프로젝트 폴더 생성
- [x] C ChatGPT 프로젝트 폴더 생성
- [x] ChatGPT 프로젝트 폴더명과 Repository명 일치
- [x] 프로젝트 전용 메모리 사용 원칙 확정
- [x] 실험용 웹 `DESIGN.md` 확정
- [x] 동일 `DESIGN.md`를 B와 C에 배치
- [x] B/C `DESIGN.md` byte-for-byte 동일성 확인
- [ ] C 실험군용 Figma 기준 화면 확정
- [ ] 세 프로젝트 초기 상태 통제
- [ ] PR1 시작

## Repository URLs

- Control: https://github.com/LUCKYBRIDGE/knollab-001
- A — AI Only: https://github.com/LUCKYBRIDGE/knollab-001-a-ai-only
- B — DESIGN.md: https://github.com/LUCKYBRIDGE/knollab-001-b-design-md
- C — DESIGN.md + Figma MCP: https://github.com/LUCKYBRIDGE/knollab-001-c-design-figma-mcp
