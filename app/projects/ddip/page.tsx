"use client";

import BackLink from "../../components/ui/BackLink";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import ProjectMeta from "../../components/ui/ProjectMeta";
import ProjectNav from "../../components/ui/ProjectNav";

export default function DdipDetail() {
  return (
    <article className="min-h-screen pt-32 pb-20 px-8 max-w-5xl mx-auto font-sans text-deep-navy">
      {/* Header */}
      <header className="mb-20 border-b border-grid-line pb-10">
        <BackLink />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <SectionHeading className="mb-6">
              DDIP
            </SectionHeading>
            <p className="text-xl text-neutral-500 font-light max-w-2xl">
              이웃과 함께하는 식재료 공동구매 및 나눔 플랫폼
            </p>
            <div className="mt-8">
              <Button href="/projects/ddip/demo">
                TRY LIVE DEMO ↗
              </Button>
            </div>
          </div>
          <div className="md:col-span-4">
            <ProjectMeta items={[
              { label: "ROLE", value: "Frontend Developer" },
              { label: "STACK", value: "Next.js, React, Tailwind" },
              { label: "YEAR", value: "2024" },
            ]} />
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 text-deep-navy">
        <div className="md:col-span-4">
          <h3 className="text-lg font-bold mb-4 font-serif">Community Focused</h3>
          <p className="text-sm text-neutral-500 leading-relaxed font-light text-justify">
            1인 가구의 증가와 물가 상승이라는 사회적 문제를 해결하기 위해, 근거리 이웃들과 소량의 식재료를 함께 사고 나누는 '딥(DDIP)' 서비스를 기획하고 개발했습니다.
          </p>
        </div>
        <div className="md:col-span-8">
          <h3 className="text-2xl font-serif font-bold mb-6">State-driven Navigation</h3>
          <p className="text-neutral-500 mb-6 font-light leading-relaxed">
            복잡한 라우팅 대신 <strong>상태 기반 UI 전환 로직</strong>을 사용하여 싱글 페이지 내에서도 끊김 없는 사용자 경험을 제공합니다. <code>home</code>, <code>category</code>, <code>product</code>로 이어지는 흐름을 유기적으로 연결했습니다.
          </p>
          {/* DDIP brand warm theme colors preserved */}
          <div className="p-6 bg-[#FFFCED] border border-[#F3E5AB] rounded-lg">
            <p className="text-sm text-[#B8860B] font-medium italic">
              "따뜻하고 친근한 종이 질감의 디자인 테마를 통해 커뮤니티의 온기를 시각적으로 표현했습니다."
            </p>
          </div>
        </div>
      </section>

      <ProjectNav currentSlug="ddip" />
    </article>
  );
}
