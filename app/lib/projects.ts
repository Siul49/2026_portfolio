import { withBasePath } from "./site";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  featured: boolean;
  link: string;
  thumbnail: string;
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "pick-habju",
    title: "Pick Habju",
    category: "Backend / Crawling",
    description:
      "2024 프로토타입 기준, 코드 수정 없이 92%의 데이터 수집 성공률을 유지한 시맨틱 크롤링 파이프라인.",
    tags: ["Python", "LLM", "Semantic Crawling", "Prototype"],
    featured: true,
    link: "/projects/pick-habju",
    thumbnail: withBasePath("/images/projects/pick-habju.png"),
  },
  {
    id: "02",
    slug: "bimo",
    title: "BIMO",
    category: "Backend / Multimodal AI",
    description:
      "이미지 전처리 최적화로 내부 테스트 기준 LLM 인식률을 20% 이상 개선한 멀티모달 비행 컨시어지 백엔드.",
    tags: ["FastAPI", "Gemini", "Firebase", "JWT"],
    featured: true,
    link: "/projects/bimo",
    thumbnail: withBasePath("/images/projects/bimo.png"),
  },
  {
    id: "03",
    slug: "prime-ring",
    title: "PrimeRing",
    category: "Desktop / AI",
    description:
      "로컬 AI 요약과 하루 흐름 분석을 결합한 감정 다이어리 데스크톱 앱. 도메인 경계를 다시 세우며 구조를 정리했습니다.",
    tags: ["React", "Electron", "Zustand", "WebLLM"],
    featured: false,
    link: "/projects/prime-ring",
    thumbnail: withBasePath("/images/projects/prime-ring.png"),
  },
  {
    id: "04",
    slug: "ddip",
    title: "DDIP",
    category: "Community Commerce",
    description:
      "식재료 공동구매와 나눔 흐름을 상태 기반 UI로 정리한 커뮤니티 커머스 프로젝트.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    featured: false,
    link: "/projects/ddip",
    thumbnail: withBasePath("/images/projects/ddip.png"),
  },
  {
    id: "05",
    slug: "lms",
    title: "LMS Downloader",
    category: "Automation",
    description:
      "Canvas LMS 강의 자료 다운로드를 자동화해 반복 수작업을 줄인 Python 스크립트.",
    tags: ["Python", "Playwright"],
    featured: false,
    link: "/projects/lms",
    thumbnail: withBasePath("/images/projects/lms.png"),
  },
  {
    id: "06",
    slug: "timetable",
    title: "Time Table",
    category: "Archive / Web Basics",
    description:
      "순수 HTML, CSS, JavaScript로 시간표 충돌 처리와 직접 DOM 조작을 구현한 초기 웹 프로젝트.",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    link: "/projects/timetable",
    thumbnail: withBasePath("/images/projects/timetable.png"),
  },
  {
    id: "07",
    slug: "twoplus",
    title: "TwoPlus",
    category: "Archive / Frontend Study",
    description:
      "TWOSEA-TECHNOLOGY 인터랙션 실험을 통해 반응형 모션과 컴포넌트 구조를 탐구한 초기 프론트엔드 작업.",
    tags: ["React", "Interaction", "Archive"],
    featured: false,
    link: "/projects/twoplus",
    thumbnail: withBasePath("/images/projects/twoplus.png"),
  },
];

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
