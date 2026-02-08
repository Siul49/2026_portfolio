export interface Room {
  id: string;
  name: string;
  branch: string;
  maxCapacity: number;
  recommendCapacity: number;
  pricePerHour: number;
  subway: { station: string; timeToWalk: string };
}

export const ROOMS: Room[] = [
  { id: "1", name: "블랙룸", branch: "비쥬합주실 1호점", maxCapacity: 15, recommendCapacity: 11, pricePerHour: 22000, subway: { station: "이수역", timeToWalk: "도보 7분" } },
  { id: "2", name: "화이트룸", branch: "비쥬합주실 1호점", maxCapacity: 6, recommendCapacity: 5, pricePerHour: 17000, subway: { station: "이수역", timeToWalk: "도보 7분" } },
  { id: "3", name: "Jazz", branch: "비쥬합주실 3호점", maxCapacity: 12, recommendCapacity: 10, pricePerHour: 25000, subway: { station: "이수역", timeToWalk: "도보 7분" } },
  { id: "4", name: "R룸", branch: "준사운드", maxCapacity: 8, recommendCapacity: 7, pricePerHour: 18000, subway: { station: "상도역", timeToWalk: "도보 4분" } },
  { id: "5", name: "S룸", branch: "준사운드", maxCapacity: 13, recommendCapacity: 11, pricePerHour: 21000, subway: { station: "상도역", timeToWalk: "도보 4분" } },
  { id: "6", name: "A룸", branch: "그루브 사당점", maxCapacity: 17, recommendCapacity: 13, pricePerHour: 22000, subway: { station: "이수역", timeToWalk: "도보 4분" } },
  { id: "7", name: "V룸", branch: "드림합주실 사당점", maxCapacity: 30, recommendCapacity: 17, pricePerHour: 25000, subway: { station: "사당역", timeToWalk: "도보 6분" } },
  { id: "8", name: "L룸", branch: "스페이스개러지 중앙대점", maxCapacity: 15, recommendCapacity: 14, pricePerHour: 20000, subway: { station: "흑석역", timeToWalk: "도보 2분" } },
  { id: "9", name: "A룸", branch: "사운딕트합주실", maxCapacity: 8, recommendCapacity: 7, pricePerHour: 15000, subway: { station: "이수역", timeToWalk: "도보 4분" } },
  { id: "10", name: "라운지룸", branch: "에이타입사운드 라운지점", maxCapacity: 12, recommendCapacity: 10, pricePerHour: 18000, subway: { station: "이수역", timeToWalk: "도보 2분" } },
];

export const TIME_SLOTS = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
