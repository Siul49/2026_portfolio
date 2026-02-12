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
    category: "Crawling & LLM",
    description:
      "LLM 기반 의미론적 크롤링으로 합주실 예약 경험 최적화. 기존 Rule-based 크롤러의 한계를 극복하고 데이터 정규화 성공률 92% 달성.",
    tags: ["Python", "Django", "LLM", "Trafilatura"],
    featured: true,
    link: "/projects/pick-habju",
    thumbnail: "/images/projects/pick-habju.png",
  },
  {
    id: "02",
    slug: "bimo",
    title: "BIMO",
    category: "AI Concierge",
    description:
      "Gemini Vision을 활용하여 탑승권 정보를 자동 추출하고 맞춤형 비행 가이드를 제공하는 개인 비행 비서 서비스.",
    tags: ["FastAPI", "Gemini", "Firebase"],
    featured: false,
    link: "/projects/bimo",
    thumbnail: "/images/projects/bimo.png",
  },
  {
    id: "03",
    slug: "prime-ring",
    title: "PrimeRing",
    category: "Desktop App",
    description:
      "AI 기반 감정 분석을 지원하는 스마트 캘린더 & 다이어리 데스크톱 애플리케이션",
    tags: ["React", "Electron", "Gemini", "Firebase"],
    featured: false,
    link: "/projects/prime-ring",
    thumbnail: "/images/projects/prime-ring.png",
  },
  {
    id: "04",
    slug: "ddip",
    title: "DDIP",
    category: "Community Commerce",
    description:
      "이웃과 함께하는 식재료 공동구매 및 나눔 플랫폼. 상태 기반 UI 전환과 모듈화된 아키텍처 설계.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    featured: false,
    link: "/projects/ddip",
    thumbnail: "/images/projects/ddip.png",
  },
  {
    id: "05",
    slug: "lms",
    title: "LMS Downloader",
    category: "Automation",
    description:
      "숭실대학교 Canvas LMS에서 강의 자료를 자동으로 다운로드하는 Python 스크립트",
    tags: ["Python", "Playwright"],
    featured: false,
    link: "/projects/lms",
    thumbnail: "/images/projects/lms.png",
  },
  {
    id: "06",
    slug: "timetable",
    title: "Time Table",
    category: "Web",
    description:
      "HTML/CSS/JS 기반의 시간표 생성 및 관리 웹 애플리케이션",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    link: "/projects/timetable",
    thumbnail: "/images/projects/timetable.png",
  },
  {
    id: "07",
    slug: "twoplus",
    title: "TwoPlus",
    category: "Frontend",
    description:
      "초기 프론트엔드 실험과 인터랙션 연구를 담은 포트폴리오",
    tags: ["React", "Interaction"],
    featured: false,
    link: "/projects/twoplus",
    thumbnail: "/images/projects/twoplus.png",
  },
];

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
