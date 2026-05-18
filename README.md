# 감정 기록 서비스 앱

- [노션에서 보기](https://wonderful-radon-c80.notion.site/0-UI-UX-32c7c08643ad80bc9f55cdd21fe8d423?source=copy_link)

- <a href="https://wonderful-radon-c80.notion.site/0-UI-UX-32c7c08643ad80bc9f55cdd21fe8d423?source=copy_link" target="_blank"> 노션에서 보기 </a>

<div align="left">

# 🌿 mood here

### 위치 기반 감정 기록 아카이빙 서비스

사용자의 현재 위치와 감정을 함께 기록하고,  
지도를 통해 지난 감정들을 다시 돌아볼 수 있는 감정 기록 서비스입니다.

<br/>

`UI/UX Design` · `Web Design` · `Responsive Web` · `HTML` · `CSS` · `JavaScript`

</div>

---

<br/>

# 📌 Overview

**mood here** 는  
사용자가 특정 장소에서 느낀 감정을 기록하고,  
그 감정들을 지도 위에 쌓아가며 아카이빙할 수 있는 서비스입니다.

단순한 일기 형태가 아니라,  
“어디에서 어떤 감정을 느꼈는가” 를 중심으로  
기억과 감정을 시각적으로 남기는 경험에 집중했습니다.

<br/>

---

# ✨ Main Features

## 🗺️ 위치 기반 감정 기록

현재 위치 혹은 검색한 장소를 기반으로  
감정을 기록할 수 있습니다.

```text
현재 위치 선택
   ↓
감정 선택
   ↓
메모 작성
   ↓
지도에 감정 저장
```

---

## 😊 감정 아이콘 선택

감정을 직관적으로 선택할 수 있도록  
아이콘 중심 인터페이스를 구성했습니다.

| 감정 | 설명                 |
| ---- | -------------------- |
| 😄   | 기분 좋은 하루       |
| 🙂   | 편안한 감정          |
| 😐   | 평범한 상태          |
| 😢   | 우울하거나 지친 상태 |
| 😡   | 스트레스 받은 상태   |

---

## 🧭 지도 기반 감정 아카이빙

기록된 감정은 지도 위에 저장되며,  
사용자는 특정 장소의 감정을 다시 확인할 수 있습니다.

```text
감정 기록
   ↓
지도 위 마커 생성
   ↓
마커 클릭
   ↓
감정 상세 보기
```

---

## 📱 모바일 중심 UI

한 손으로 사용하기 쉽도록  
모바일 중심 인터페이스로 설계했습니다.

- Bottom Navigation
- Sticky Header
- Bottom Sheet UI
- Responsive Layout
- Touch Interaction

---

<br/>

# 🎨 Design Concept

## 키워드

```text
감성적인
기록형
가벼운
직관적인
아카이빙
지도 기반 인터랙션
```

---

## 디자인 방향성

- 복잡하지 않고 직관적인 구조
- 감정 기록에 집중할 수 있는 인터페이스
- 지도 중심의 시각적인 경험
- 감정 흐름을 방해하지 않는 UI
- 모바일 사용성 중심 설계

---

<br/>

# 🧩 UX Flow

## 감정 기록 흐름

```text
Home
  ↓
현재 위치 확인
  ↓
감정 선택
  ↓
메모 작성
  ↓
감정 저장
  ↓
지도 아카이브 반영
```

---

## 감정 아카이브 흐름

```text
지도 진입
   ↓
감정 마커 확인
   ↓
마커 선택
   ↓
Bottom Sheet 노출
   ↓
감정 상세 확인
```

---

<br/>

# 🖥️ Screen Structure

| Page         | Description              |
| ------------ | ------------------------ |
| Home         | 서비스 메인 화면         |
| Record Mood  | 감정 기록 화면           |
| Mood Archive | 지도 기반 감정 아카이브  |
| Mood Music   | 감정 기반 음악 추천      |
| Onboarding   | 서비스 소개 및 시작 화면 |

---

<br/>

# 🛠️ Tech Stack

## Design

- Figma
- Illustrator
- Photoshop

---

## Frontend

- HTML
- CSS
- JavaScript

---

## Library

- Swiper.js
- Kakao Maps API
- AOS

---

<br/>

# 📂 Project Structure

```bash
mood-here
│
├── assets
│   ├── images
│   ├── icons
│   └── svg
│
├── css
│   ├── style.css
│   ├── onboarding.css
│   └── splash.css
│
├── js
│   ├── script.js
│   └── pages
│
├── home.html
├── onboarding.html
├── record-mood.html
├── mood-archive.html
└── mood-music.html
```

---

<br/>

# 📱 Responsive

| Device  | Supported |
| ------- | --------- |
| Mobile  | ✅        |
| Tablet  | ✅        |
| Desktop | ✅        |

---

<br/>

# 🔍 Core UI

## Bottom Navigation

```text
Home
Archive
Record
Music
Profile
```

---

## Bottom Sheet Interaction

```text
감정 마커 클릭
      ↓
Bottom Sheet 등장
      ↓
상세 감정 정보 확인
```

---

## 감정 인터랙션

- 감정 선택 시 활성화 애니메이션
- 아이콘 Scale / Opacity 변화
- 직관적인 감정 선택 경험 제공

---

<br/>

# 🌱 What I Focused On

### 사용자 경험 중심 구조 설계

단순히 화면을 꾸미는 것이 아니라,  
사용자가 자연스럽게 감정을 기록하고  
다시 돌아볼 수 있는 흐름을 중요하게 생각했습니다.

---

### 지도 기반 감정 시각화

텍스트 기록보다  
“장소와 감정의 연결” 이 더 오래 기억될 수 있도록  
지도 기반 인터랙션을 중심으로 설계했습니다.

---

### 감성적인 UI 분위기

부담스럽지 않은 컬러와  
가벼운 인터랙션을 통해  
편안한 감정 기록 경험을 만들고자 했습니다.

---

<br/>

# 🔗 Links

## GitHub

👉 https://github.com/shb627/mood-here.git

---

## Notion

👉 https://wonderful-radon-c80.notion.site/0-UI-UX-32c7c08643ad80bc9f55cdd21fe8d423

---

<br/>

# 👨‍💻 Author

### 송현빈

감각적인 그래픽디자인과  
사용자 중심 UI 흐름을 함께 고민하는 웹디자이너입니다.

```text
Web Design
UI Design
Graphic Design
Responsive Web
HTML / CSS / JavaScript
```

---
