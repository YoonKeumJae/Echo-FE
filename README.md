# BlogProject-client

멋쟁이 사자처럼 팀에서 블로그 프로젝트의 프론트엔드 파트를 위한 repository입니다.

### 📌 Directory Rules

```
└─ src
 ├─ assets              이미지, 폰트
 ├─ components          재사용 공통 컴포넌트
 ├─ config              초기 설정 및 구성 정보
 ├─ constants           공통 상수
 ├─ layouts             공통 UI 레이아웃
 ├─ pages               페이지 컴포넌트
 ├─ api (= services)    api 관련 로직 모듈, auth 인증 관련 모듈
 ├─ store               전역 상태 관리 (redux)
 ├─ styles              UI 디자인 스타일 (styled-component)
 ├─ utils               정규표현식 패턴, 공통 함수
 ├─ App.js
```

### 📌 Commit Convention

| Emoji | Message          | Description                                                      |
| :---: | ---------------- | ---------------------------------------------------------------- |
|  ✨   | Feat             | 새로운 기능 추가, 기존 기능을 요구 사항에 맞추어 수정            |
|   🛠   | Fix              | 기능에 대한 버그를 고친 경우                                     |
|  🎨   | Design           | 사용자 UI 디자인 변경                                            |
|   ⚠   | !BREAKING_CHANGE | 커다란 API 변경                                                  |
|  ❗   | !HOTFIX          | 긴급 수정                                                        |
|  🩹   | Style            | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우, 오타 수정 |
|   ⚖   | Refactor         | 프로덕션 코드 리팩토링                                           |
|  👀   | Comment          | 필요한 주석 추가 및 변경                                         |
|  📃   | Docs             | 문서 수정                                                        |
|  📚   | Chore            | 패키지 매니저 설정                                               |
|  📂   | Rename           | 파일 혹은 폴더명을 수정하거나 옮긴 경우                          |
|   🗑   | Remove           | 파일을 삭제하는 경우                                             |
|   ⚙   | Setting          | 초기 세팅 혹은 세팅 수정                                         |
|  🔨   | Test             | 테스트 코드 추가 및 수정                                         |
|  🎊   | Release          | 버전 릴리즈                                                      |
|  🔀   | Branch           | 브랜치 추가 및 병합                                              |
