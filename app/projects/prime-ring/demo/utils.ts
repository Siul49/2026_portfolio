// PrimeRing 감정 분석 유틸리티
// 실제 WebLLM 호출 대신, 키워드 매칭으로 감정을 동적 분석합니다.
// 이렇게 하면 데모에서 입력 내용에 따라 다른 결과가 나와서 훨씬 현실적입니다.

import { DiaryEntry } from "./data";

const positiveKeywords = ["좋았", "행복", "즐거", "신나", "기뻤", "감사", "뿌듯", "성취", "재밌", "사랑", "최고", "웃었", "설레", "희망", "자신감", "성공", "칭찬", "맛있", "편안", "따뜻", "기분 좋", "잘 했", "잘했", "완성", "보람"];
const negativeKeywords = ["힘들", "지쳤", "피곤", "슬펐", "우울", "짜증", "화났", "스트레스", "불안", "걱정", "실망", "후회", "외로", "아팠", "두려", "무기력", "답답", "속상", "눈물", "힘든", "못 했", "못했", "실패", "싫", "최악"];
const neutralKeywords = ["평범", "보통", "그냥", "무난", "일상", "별일", "특별히"];

export interface AnalysisResult {
    emotion: string;
    emotionEmoji: string;
    emotionScore: number;
    keywords: string[];
    insight: string;
}

export function analyzeSentiment(text: string): AnalysisResult {
    if (!text.trim()) {
        return { emotion: "중립", emotionEmoji: "😐", emotionScore: 50, keywords: [], insight: "" };
    }

    let posScore = 0;
    let negScore = 0;
    const foundKeywords: string[] = [];

    positiveKeywords.forEach(keyword => {
        if (text.includes(keyword)) {
            posScore += 10;
            const matchWord = keyword.length > 2 ? keyword : keyword + "다";
            if (!foundKeywords.includes(matchWord) && foundKeywords.length < 5) {
                foundKeywords.push(matchWord);
            }
        }
    });

    negativeKeywords.forEach(keyword => {
        if (text.includes(keyword)) {
            negScore += 10;
            const matchWord = keyword.length > 2 ? keyword : keyword + "다";
            if (!foundKeywords.includes(matchWord) && foundKeywords.length < 5) {
                foundKeywords.push(matchWord);
            }
        }
    });

    neutralKeywords.forEach(keyword => {
        if (text.includes(keyword)) {
            const matchWord = keyword.length > 2 ? keyword : keyword + "다";
            if (!foundKeywords.includes(matchWord) && foundKeywords.length < 5) {
                foundKeywords.push(matchWord);
            }
        }
    });

    // 텍스트 길이에 따른 보정 (길수록 더 풍부한 감정 표현으로 봄)
    const lengthBonus = Math.min(text.length / 50, 3);

    // 총 감정 점수 계산
    const netScore = posScore - negScore;
    let emotionScore: number;
    let emotion: string;
    let emotionEmoji: string;
    let insight: string;

    if (netScore > 15) {
        emotionScore = Math.min(95, 75 + netScore + lengthBonus);
        emotion = "매우 긍정적";
        emotionEmoji = "😄";
        insight = "오늘 하루가 정말 빛나는 날이었군요! 이런 긍정적인 에너지를 기록해두면, 힘든 날에 큰 힘이 됩니다. 주변 사람들에게도 좋은 영향을 주고 있을 거예요.";
    } else if (netScore > 5) {
        emotionScore = Math.min(89, 65 + netScore + lengthBonus);
        emotion = "긍정적";
        emotionEmoji = "😊";
        insight = "전반적으로 좋은 하루를 보내셨네요. 작은 즐거움들이 모여 큰 행복이 됩니다. 오늘의 좋았던 순간을 내일도 이어가보세요!";
    } else if (netScore > -5) {
        emotionScore = Math.round(45 + netScore + lengthBonus);
        emotion = "평온";
        emotionEmoji = "😌";
        insight = "차분하고 안정적인 하루였네요. 때로는 평범한 하루가 가장 소중합니다. 내일은 작은 새로운 시도를 해보는 건 어떨까요?";
    } else if (netScore > -15) {
        emotionScore = Math.max(20, 40 + netScore - lengthBonus);
        emotion = "다소 부정적";
        emotionEmoji = "😔";
        insight = "조금 힘든 하루였나 봐요. 괜찮습니다, 이렇게 감정을 기록하는 것 자체가 큰 용기입니다. 충분히 쉬고, 내일의 자신에게 응원을 보내보세요.";
    } else {
        emotionScore = Math.max(10, 25 + netScore - lengthBonus);
        emotion = "부정적";
        emotionEmoji = "😢";
        insight = "많이 지치셨군요. 감정을 솔직하게 표현하는 것은 매우 건강한 방법입니다. 좋아하는 음악을 듣거나, 짧은 산책을 추천합니다. 당신은 충분히 잘하고 있어요.";
    }

    // 키워드가 없으면 텍스트에서 직접 추출 시도
    if (foundKeywords.length === 0) {
        const words = text.replace(/[.,!?~]/g, ' ').split(/\s+/).filter(w => w.length >= 2 && w.length <= 6);
        const uniqueWords = [...new Set(words)];
        foundKeywords.push(...uniqueWords.slice(0, 3));
    }

    return { emotion, emotionEmoji, emotionScore, keywords: foundKeywords, insight };
}

export function createDiaryEntry(id: string, date: string, content: string, analysisResult: AnalysisResult): DiaryEntry {
    return {
        id,
        date,
        title: "오늘의 일기",
        content,
        ...analysisResult,
    };
}
