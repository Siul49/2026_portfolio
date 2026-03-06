// BIMO 데모용 탑승권 데이터

export interface FlightData {
    airline: string;
    flightNumber: string;
    departureCode: string;
    departureCity: string;
    arrivalCode: string;
    arrivalCity: string;
    date: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    timezoneOffset: number;
}

export const sampleFlights: FlightData[] = [
    {
        airline: "대한항공",
        flightNumber: "KE713",
        departureCode: "ICN",
        departureCity: "인천",
        arrivalCode: "NRT",
        arrivalCity: "나리타",
        date: "2025.12.15",
        departureTime: "09:30",
        arrivalTime: "11:50",
        duration: "2h 20m",
        timezoneOffset: 0,
    },
    {
        airline: "아시아나",
        flightNumber: "OZ212",
        departureCode: "ICN",
        departureCity: "인천",
        arrivalCode: "SFO",
        arrivalCity: "샌프란시스코",
        date: "2025.12.20",
        departureTime: "13:00",
        arrivalTime: "08:45",
        duration: "11h 45m",
        timezoneOffset: -17,
    },
    {
        airline: "진에어",
        flightNumber: "LJ201",
        departureCode: "GMP",
        departureCity: "김포",
        arrivalCode: "CTS",
        arrivalCity: "삿포로",
        date: "2026.01.05",
        departureTime: "07:45",
        arrivalTime: "10:50",
        duration: "2h 5m",
        timezoneOffset: 0,
    },
];

export const steps = ["탑승권 선택", "AI 분석", "비행 카드", "맞춤 가이드"];
