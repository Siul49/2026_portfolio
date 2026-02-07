# 프로젝트 상세 문서화 (Project Documentation)

본 문서는 시얼(Kim Gyeongsu)님의 포트폴리오에 포함된 주요 프로젝트들에 대한 기술적 세부 사항 및 개요를 담고 있습니다.

---

## 1. Pick Habju (픽합주)
**"합주실 예약 경험의 혁신"**

*   **개요:** 분산되어 있는 합주실 정보를 통합하고, 사용자가 원하는 시간에 비어있는 방을 한눈에 찾아 예약할 수 있도록 돕는 서비스입니다.
*   **기술 스택:**
    *   **Back-end:** Python, Django, GraphQL, Supabase
    *   **Front-end:** React, TypeScript, Vite, Tailwind CSS
    *   **AI/Data:** Ollama (Llama 3), Trafilatura (HTML 정제), LLM 기반 시맨틱 크롤링
*   **핵심 성과:**
    *   기존 규칙 기반 크롤러의 한계(UI 변경 시 파손)를 LLM 기반 시맨틱 추출 파이프라인으로 해결.
    *   데이터 정규화 성공률 92% 달성.
    *   Apollo Cache를 활용한 프론트엔드 성능 최적화.

---

## 2. BIMO (비모)
**"Personalized Flight Companion"**

*   **개요:** 탑승권 이미지를 인식하여 항공편 메타데이터를 추출하고, 사용자에게 맞춤형 비행 가이드를 제공하는 개인 비행 비서 서비스입니다.
*   **기술 스택:**
    *   **Back-end:** FastAPI, Google Gemini (Multimodal LLM), Firebase (Auth/DB)
    *   **Front-end:** Flutter (Mobile App)
*   **핵심 기능:**
    *   **AI Concierge:** Gemini Vision API를 통해 탑승권에서 항공사, 편명, 좌석 정보 자동 추출.
    *   **Contextual Guide:** 비행 시간 및 노선에 따른 기내식 정보, 시차 적응 팁 제공.
    *   **Security:** Firebase를 활용한 안전한 사용자 데이터 관리.

---

## 3. DDIP (딥)
**"이웃과 함께하는 공동구매 및 나눔 플랫폼"**

*   **개요:** 식재료, 생활용품 등을 이웃과 함께 구매하거나 나눔할 수 있도록 돕는 커뮤니티 기반의 커머스 플랫폼입니다.
*   **기술 스택:**
    *   **Front-end:** Next.js (App Router), React, Tailwind CSS
*   **핵심 기능 및 분석:**
    *   **State-driven UI:** `mode` 상태(`home`, `sign`, `category`, `product`)에 따른 유연한 페이지 전환 로직 구현.
    *   **Modular Architecture:** `@home`, `@signup`, `@constants` 등 커스텀 Alias를 활용한 체계적인 모듈 관리.
    *   **Custom Design:** 종이 질감의 텍스처와 따뜻한 톤의 컬러(`FFFCED`)를 활용한 독창적인 브랜딩 적용.
    *   **Structured Data:** `category_lists`와 `ingredient_lists` 등 상수를 활용하여 확장성 있는 데이터 구조 설계.

---

## 4. Time Table (타임테이블)
**"지능형 시간표 생성기"**

*   **개요:** 복잡한 인원 및 시간 조건을 입력받아 최적의 팀별 시간표를 자동으로 생성해주는 웹 애플리케이션입니다.
*   **기술 스택:**
    *   HTML5, CSS3, JavaScript (Vanilla JS)
*   **핵심 기능:**
    *   슬라이더 및 인원 조절 버튼을 통한 직관적인 조건 설정.
    *   동적/정적 시간표 변환 기능 지원.
    *   모달을 통한 상세 제작 과정 및 기술 스택 설명 포함.

---

## 5. TwoPlus (투플러스)
**"Interaction & Layout Experiment"**

*   **개요:** 웹 인터랙션의 본질을 탐구하고 다양한 레이아웃 실험을 담은 초기 포트폴리오 프로젝트입니다.
*   **기술 스택:**
    *   React, Next.js, CSS Modules
*   **핵심 내용:**
    *   마우스 궤적에 반응하는 동적 컴포넌트 연구.
    *   비정형 그리드(Asymmetric Grid) 시스템의 시각적 안정성 실험.
    *   Atomic Design 패턴을 적용한 재사용 가능 컴포넌트 설계.

---

## 6. Chronos Gear (크로노스 기어)
**"시간 조작 기반 퍼즐 어드벤처 게임 기획"**

*   **개요:** 시간의 흐름을 조절하여 퍼즐을 해결하는 독창적인 메커니즘을 가진 게임의 세계관 및 시스템 기획서입니다.
*   **구성:**
    *   Story Bible (세계관, 타임라인)
    *   Game Design (전투 시스템, 퍼즐 기믹)
    *   Development Roadmap (단계별 개발 계획)
*   **특이사항:** 현재 노션에 체계적으로 문서화 완료 (V4 정규화 적용).

---

작성일: 2026-02-07
작성자: 설 (Seol) - 김경수님의 AI 비서
