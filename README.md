# 📌 Table Of Contents
1. [소개](#소개)
2. [폴더 구조](#폴더-구조)
3. [커밋 규칙](#커밋-규칙)
4. [도구](#도구)
5. [팀원](#팀원)

## 소개
![echo-694a4 web app_auth_signin (1)](https://github.com/Likelion-YeungNam-Univ/Echo-FE/assets/44726494/90dae9f2-cb3e-40ab-a933-becff5ffdf83)

멋쟁이 사자처럼 팀에서 제작한 노년층을 위한 SNS로, ChatBot(소망이)과 함께 소통하는 SNS 입니다.
저희팀은 디지털 격차가 발생하는 분야 중 하나인 소셜미디어에 집중하였으며, 노년층의 원활한 소셜미디어 이용을 위해 다음과 같은 목적을 가지고 프로젝트를 제작하였습니다.

1. 소망이의 보조와 함께 SNS를 이용하여 노년층이 더욱 편리하고 쉽게 정보를 얻을 수 있게 하자.
2. 우리가 제작한 SNS를 통해 독거 노인들간의 유대감을 형성할 수 있도록 하자.

https://www.youtube.com/watch?v=vRvA8hnr4Q8

## 폴더 구조

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

## 커밋 규칙

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

## 도구
- [Figma](https://www.figma.com/file/w2H5CYBNEw8e2fmv6TS09z/%ED%95%B4%EC%BB%A4%ED%86%A4?type=design&node-id=0-1&mode=design&t=z2b3voyRBQe72kvI-0)
- [ERDCloud](https://www.erdcloud.com/d/36YBQRE8zff4fzQEb)

## 팀원
- 프론트엔드 (2명)
  - [강병준](https://github.com/BangDori)
  - [윤금재](https://github.com/YoonKeumJae)
- 백엔드 (2명)
  - [남은주](https://github.com/arty314)
  - [최한예빈](https://github.com/yeeebin)
- UI/UX 및 기획 (1명)
  - [김윤정]()
