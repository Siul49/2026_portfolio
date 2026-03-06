# 2026 Portfolio

Kim Gyeongsu의 백엔드 중심 포트폴리오입니다. 데이터 수집 파이프라인, 멀티모달 AI 백엔드, 자동화 도구, 제품형 프로젝트를 채용 문서 관점에서 정리했습니다.

## Live

- Portfolio: [https://siul49.github.io/2026_portfolio/](https://siul49.github.io/2026_portfolio/)

## Highlights

- `Pick Habju`: 2024 프로토타입 기준, 코드 수정 없이 92%의 데이터 수집 성공률을 유지한 시맨틱 크롤링 파이프라인
- `BIMO`: 이미지 전처리 최적화로 내부 테스트 기준 LLM 인식률을 20% 이상 개선한 멀티모달 비행 컨시어지 백엔드
- `PrimeRing`: 로컬 AI 요약과 하루 흐름 분석을 결합한 감정 다이어리 데스크톱 앱

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

GitHub Pages 배포를 위해 `basePath`와 정적 asset 경로 처리가 포함되어 있습니다.

## Deploy

이 저장소는 GitHub Actions 기반 GitHub Pages 배포를 사용합니다.

1. `main` 브랜치에 push 합니다.
2. `.github/workflows/deploy-pages.yml`가 정적 빌드를 생성합니다.
3. GitHub Pages 설정에서 Source를 `GitHub Actions`로 지정합니다.

## Project Structure

- `app/components/sections`: 홈 섹션 컴포넌트
- `app/projects/*`: 프로젝트 상세 페이지와 데모
- `app/lib`: 메타데이터, 프로젝트 데이터, 배포 경로 유틸리티
- `public/demo`: 정적 HTML 데모 자산
