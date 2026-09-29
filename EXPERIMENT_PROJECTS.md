# KNOLLAB-001 Experiment Projects

이 문서는 KNOLLAB-001 비교 실험에서 실제 개발에 사용하는 세 실험 프로젝트의 리포지토리와 로컬 프로젝트 폴더 이름을 관리한다.

## 관리 원칙

- `knollab-001`은 실험 전체의 통제·기록용 기준 리포지토리이다.
- 실제 웹사이트 구현은 아래 세 개의 독립 리포지토리에서 진행한다.
- 로컬 프로젝트 폴더명과 GitHub Repository명은 동일하게 유지한다.
- 세 프로젝트는 가능한 한 동일한 초기 상태에서 시작한다.
- PR1, PR2, PR3 공통 프롬프트는 세 실험군에 동일하게 제공한다.
- B와 C는 동일한 `DESIGN.md`를 사용한다.
- C의 추가 변수는 고정된 Figma 설계와 Figma MCP뿐이다.

## 실험 프로젝트

| 실험군 | 환경 | 로컬 프로젝트 폴더 | GitHub Repository |
|---|---|---|---|
| A | AI Only | `knollab-001-a-ai-only` | https://github.com/LUCKYBRIDGE/knollab-001-a-ai-only |
| B | DESIGN.md | `knollab-001-b-design-md` | https://github.com/LUCKYBRIDGE/knollab-001-b-design-md |
| C | DESIGN.md + Figma MCP | `knollab-001-c-design-figma-mcp` | https://github.com/LUCKYBRIDGE/knollab-001-c-design-figma-mcp |

## 권장 로컬 구조

```text
<workspace>/
├─ knollab-001/                         # 실험 통제·기록
├─ knollab-001-a-ai-only/               # 실험군 A
├─ knollab-001-b-design-md/             # 실험군 B
└─ knollab-001-c-design-figma-mcp/      # 실험군 C
```

세 실험 프로젝트를 `knollab-001`의 하위 디렉터리로 복제하여 관리하는 구조가 아니라, 서로 독립된 프로젝트/리포지토리로 유지한다. `knollab-001`에는 각 프로젝트의 주소, 실험 조건, 공통 프롬프트, 단계별 commit/tag, Pages URL, DESIGN.md 버전, Figma 기준 링크, 관찰 결과를 기록한다.

## 각 실험군에 존재해야 하는 환경

### A. `knollab-001-a-ai-only`

- 별도의 `DESIGN.md` 없음
- Figma 기준 없음
- Figma MCP 사용 안 함
- AI의 일반적인 판단에 맡김

### B. `knollab-001-b-design-md`

- 실험용 웹 `DESIGN.md` 제공
- C와 동일한 `DESIGN.md` 사용
- Figma 자료 없음
- Figma MCP 사용 안 함

### C. `knollab-001-c-design-figma-mcp`

- B와 동일한 `DESIGN.md` 사용
- PR1 전에 확정한 고정 Figma 기준 사용
- Figma MCP 사용
- PR1~PR3 동안 구현 결과에 맞추어 Figma 기준을 변경하지 않음

## 현재 상태

- [x] 중앙 관리 리포지토리 `knollab-001` 생성
- [x] A 실험 리포지토리 생성
- [x] B 실험 리포지토리 생성
- [x] C 실험 리포지토리 생성
- [x] 세 프로젝트 폴더명/리포지토리명 확정
- [ ] 실험용 웹 `DESIGN.md` 확정
- [ ] 동일 `DESIGN.md`를 B와 C에 배치
- [ ] C 실험군용 Figma 기준 화면 확정
- [ ] 세 프로젝트 초기 상태 통제
- [ ] PR1 시작

## Repository URLs

- Control: https://github.com/LUCKYBRIDGE/knollab-001
- A — AI Only: https://github.com/LUCKYBRIDGE/knollab-001-a-ai-only
- B — DESIGN.md: https://github.com/LUCKYBRIDGE/knollab-001-b-design-md
- C — DESIGN.md + Figma MCP: https://github.com/LUCKYBRIDGE/knollab-001-c-design-figma-mcp
