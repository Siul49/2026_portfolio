// PrimeRing 데모용 데이터

export interface DiaryEntry {
    id: string;
    date: string;
    title: string;
    content: string;
    emotion: string;
    emotionEmoji: string;
    emotionScore: number;
    keywords: string[];
    insight: string;
}

export interface CalendarEvent {
    id: string;
    date: string;
    title: string;
    category: string;
    color: string;
}

export const steps = ["캘린더", "다이어리 작성", "AI 감정 분석", "분석 완료"];

export const sampleEvents: CalendarEvent[] = [
    { id: "1", date: "2025-12-15", title: "팀 미팅", category: "업무", color: "#486581" },
    { id: "2", date: "2025-12-18", title: "운동", category: "건강", color: "#829AB1" },
    { id: "3", date: "2025-12-20", title: "독서", category: "취미", color: "#102A43" },
    { id: "4", date: "2025-12-22", title: "카페 공부", category: "취미", color: "#102A43" },
    { id: "5", date: "2025-12-25", title: "크리스마스", category: "가족", color: "#BCCCDC" },
];

export const categories = [
    { name: "업무", color: "#486581" },
    { name: "건강", color: "#829AB1" },
    { name: "취미", color: "#102A43" },
    { name: "가족", color: "#BCCCDC" },
];

// 프리셋 입력 데이터 - 사용자가 빠르게 테스트 가능하게
export const presetTexts = [
    { label: "😊 좋은 하루", text: "오늘 팀 프로젝트에서 칭찬을 받았다. 내가 열심히 준비한 발표가 좋은 평가를 받아서 정말 뿌듯했다. 저녁에는 친구들과 맛있는 저녁을 먹으며 즐거운 시간을 보냈다." },
    { label: "😔 힘든 하루", text: "오늘은 하루종일 피곤하고 지쳤다. 과제 마감에 쫓기면서 스트레스를 많이 받았고, 결과물도 실망스러웠다. 집에 와서도 우울한 기분이 가시지 않았다." },
    { label: "😌 평범한 하루", text: "오늘은 평범한 하루였다. 수업을 듣고 도서관에서 공부를 하다가 저녁에 집에 왔다. 특별한 일은 없었지만 무난하게 보냈다." },
];
