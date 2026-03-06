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
      "외부 플랫폼 변화 앞에서 덜 깨지는 시스템과 팀 리드의 기준 정리가 얼마나 중요한지 배운 프로젝트.",
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
      "정확도만큼 사용자 체감 흐름과 응답 대기 시간을 함께 설계해야 한다는 점을 배운 멀티모달 서비스.",
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
      "기능을 더하는 것보다 도메인 경계와 사용자 흐름을 다시 세우는 판단의 중요성을 배운 프로젝트.",
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
      "복잡한 공동구매 상태를 화면에서 얼마나 단순하게 보여주느냐가 사용자 이해를 좌우한다는 점을 탐구한 프로젝트.",
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
      "반복 작업을 자동화하면 작은 도구도 실제 사용자 시간을 크게 줄일 수 있다는 점을 체감한 스크립트.",
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
      "직접 DOM을 다루며 화면 로직과 입력 흐름을 구조적으로 생각하기 시작한 초기 웹 프로젝트.",
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
      "반응형과 인터랙션 실험을 통해 보여지는 경험도 서비스 인상에 큰 영향을 준다는 점을 배운 초기 작업.",
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
