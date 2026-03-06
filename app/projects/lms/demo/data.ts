// LMS Downloader 데모용 데이터

export interface Course {
    id: string;
    name: string;
    code: string;
    weeks: number;
    materials: number;
}

export interface DownloadItem {
    name: string;
    type: string;
    size: string;
    status: "pending" | "downloading" | "completed" | "failed";
}

export const steps = ["로그인", "강의 목록", "다운로드 중", "완료"];

export const sampleCourses: Course[] = [
    { id: "1", name: "섬김의리더십", code: "2150533701", weeks: 15, materials: 45 },
    { id: "2", name: "오픈소스기반기초설계", code: "2150061301", weeks: 15, materials: 30 },
    { id: "3", name: "행복한가족을만드는관계기술", code: "2150153601", weeks: 15, materials: 35 },
];

export const sampleDownloads: DownloadItem[] = [
    { name: "섬김의리더십_OT(25-2).pdf", type: "PDF", size: "2.4 MB", status: "completed" },
    { name: "섬김의리더십_1주차.pdf", type: "PDF", size: "3.1 MB", status: "completed" },
    { name: "섬김의리더십_2주차.pdf", type: "PDF", size: "2.8 MB", status: "completed" },
    { name: "섬김의리더십_3주차.pdf", type: "PDF", size: "3.5 MB", status: "downloading" },
    { name: "섬김의리더십_4주차.pdf", type: "PDF", size: "2.9 MB", status: "pending" },
    { name: "섬김의리더십_5주차.pdf", type: "PDF", size: "3.2 MB", status: "pending" },
];
