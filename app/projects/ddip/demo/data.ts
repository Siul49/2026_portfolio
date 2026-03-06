// DDIP 데모용 상품 데이터

export interface Product {
    id: string;
    name: string;
    emoji: string;
    price: string;
    originalPrice: string;
    discount: string;
    spotsTotal: number;
    spotsTaken: number;
    seller: string;
    distance: string;
    timeLeft: string;
    description: string;
    isShare?: boolean;
}

export const categories = [
    { id: "veggie", name: "식재료", emoji: "🥕", description: "신선한 채소 & 과일" },
    { id: "meal", name: "간편식", emoji: "🍱", description: "바로 먹는 간편식" },
    { id: "living", name: "생활용품", emoji: "🧼", description: "주방 & 욕실 용품" },
    { id: "bulk", name: "대용량", emoji: "📦", description: "가성비 대용량 팩" },
];

export const productsByCategory: Record<string, Product[]> = {
    veggie: [
        { id: "v1", name: "유기농 방울토마토 1kg", emoji: "🍅", price: "₩2,800", originalPrice: "₩5,900", discount: "52%", spotsTotal: 4, spotsTaken: 3, seller: "행복한 농부", distance: "350m", timeLeft: "2시간", description: "당일 수확한 유기농 방울토마토를 이웃과 나눠요. 1인당 250g씩 배분됩니다." },
        { id: "v2", name: "제주 감귤 3kg 박스", emoji: "🍊", price: "₩3,200", originalPrice: "₩9,800", discount: "67%", spotsTotal: 3, spotsTaken: 1, seller: "상도동 김씨", distance: "120m", timeLeft: "5시간", description: "제주 직송 감귤을 3명이서 나눠요. 1인당 1kg!" },
        { id: "v3", name: "친환경 계란 30구", emoji: "🥚", price: "₩3,400", originalPrice: "₩8,900", discount: "62%", spotsTotal: 3, spotsTaken: 2, seller: "계란마을", distance: "500m", timeLeft: "1시간", description: "방목 친환경 계란 30구를 3명이서 10구씩 나눠요." },
    ],
    meal: [
        { id: "m1", name: "수제 만두 50개입", emoji: "🥟", price: "₩4,500", originalPrice: "₩15,000", discount: "70%", spotsTotal: 5, spotsTaken: 3, seller: "만두집 이모", distance: "200m", timeLeft: "3시간", description: "직접 빚은 수제 만두! 5명이서 10개씩 나눠요." },
        { id: "m2", name: "샐러드 키트 세트", emoji: "🥗", price: "₩2,500", originalPrice: "₩6,000", discount: "58%", spotsTotal: 2, spotsTaken: 0, seller: "건강한하루", distance: "80m", timeLeft: "6시간", description: "신선한 샐러드 키트 2인 세트. 드레싱 포함!" },
        { id: "m3", name: "수제 떡볶이 밀키트", emoji: "🍜", price: "₩3,000", originalPrice: "₩7,500", discount: "60%", spotsTotal: 3, spotsTaken: 2, seller: "매콤동", distance: "300m", timeLeft: "2시간", description: "2인분 수제 떡볶이 밀키트, 어묵 & 치즈 포함." },
    ],
    living: [
        { id: "l1", name: "대용량 세제 4L", emoji: "🧴", price: "₩2,900", originalPrice: "₩12,000", discount: "76%", spotsTotal: 4, spotsTaken: 2, seller: "깨끗한집", distance: "150m", timeLeft: "1일", description: "대용량 세제를 4명이서 1L씩 나눠 쓰면 훨씬 저렴해요." },
        { id: "l2", name: "화장지 30롤", emoji: "🧻", price: "₩3,300", originalPrice: "₩11,900", discount: "72%", spotsTotal: 3, spotsTaken: 1, seller: "이웃사촌", distance: "400m", timeLeft: "8시간", description: "3명이서 10롤씩! 무형광 천연 펄프 화장지." },
        { id: "l3", name: "주방 수세미 20개", emoji: "🧽", price: "₩800", originalPrice: "₩3,500", discount: "77%", spotsTotal: 4, spotsTaken: 3, seller: "살림달인", distance: "250m", timeLeft: "30분", description: "항균 수세미 20개를 4명이서 5개씩. 마지막 1자리!" },
    ],
    bulk: [
        { id: "b1", name: "코스트코 견과류 1.2kg", emoji: "🥜", price: "₩5,500", originalPrice: "₩18,900", discount: "71%", spotsTotal: 3, spotsTaken: 1, seller: "코스트코매니아", distance: "600m", timeLeft: "12시간", description: "코스트코 프리미엄 견과믹스를 3명이 400g씩!" },
        { id: "b2", name: "생수 2L × 24병", emoji: "💧", price: "₩2,000", originalPrice: "₩8,400", discount: "76%", spotsTotal: 3, spotsTaken: 2, seller: "물좋은동네", distance: "100m", timeLeft: "4시간", description: "깨끗한 생수 24병을 3명이서 8병씩 나눠요." },
        { id: "b3", name: "대용량 올리브유 1L", emoji: "🫒", price: "₩4,200", originalPrice: "₩15,000", discount: "72%", spotsTotal: 3, spotsTaken: 0, seller: "요리왕", distance: "350m", timeLeft: "1일", description: "엑스트라 버진 올리브유. 3명이 330ml씩!" },
    ],
};

export const shareItems: Product[] = [
    { id: "s1", name: "바나나 한 송이", emoji: "🍌", price: "무료 나눔", originalPrice: "", discount: "FREE", spotsTotal: 1, spotsTaken: 0, seller: "이웃집 미영씨", distance: "50m", timeLeft: "오늘까지", description: "혼자 먹기엔 많아서 나눠요~ 1송이 남았어요!", isShare: true },
    { id: "s2", name: "식빵 반 봉지", emoji: "🍞", price: "무료 나눔", originalPrice: "", discount: "FREE", spotsTotal: 1, spotsTaken: 0, seller: "상도동 박씨", distance: "180m", timeLeft: "오늘까지", description: "유통기한이 이틀 남았어요. 빨리 가져가세요!", isShare: true },
    { id: "s3", name: "라면 5봉지", emoji: "🍜", price: "무료 나눔", originalPrice: "", discount: "FREE", spotsTotal: 1, spotsTaken: 0, seller: "이사가는 철수", distance: "300m", timeLeft: "내일까지", description: "이사 전 정리 중! 신라면 5봉지 드려요.", isShare: true },
];
