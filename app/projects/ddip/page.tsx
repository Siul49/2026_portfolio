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
            <p className="text-xl text-neutral-500 font-light max-w-2xl leading-relaxed">
              이웃과 식재료를 나누는 가장 따뜻한 방법: <br className="hidden md:block" />
              상태 기반 네비게이션으로 구현한 공동구매 플랫폼
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
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        <div className="md:col-span-4">
          <h3 className="text-lg font-bold mb-4 font-serif">Problem & Solution</h3>
          <p className="text-sm text-neutral-500 leading-relaxed font-light text-justify">
            1인 가구의 식재료 낭비와 가격 부담 문제를 해결하기 위해, 소량의 식재료를 이웃과 &lsquo;찜(DDIP)&rsquo;하여 나누는 서비스를 기획했습니다. 중고 거래의 딱딱함을 없애고, 커뮤니티의 온기를 전하는 것이 핵심 목표였습니다.
          </p>
        </div>
        <div className="md:col-span-8">
          <h3 className="text-2xl font-serif font-bold mb-6">UX Engineering: Seamless Flow</h3>
          <p className="text-neutral-500 mb-6 font-light leading-relaxed">
            전통적인 페이지 기반 라우팅은 화면이 깜빡이거나 로딩이 발생하여 사용자의 몰입을 방해할 수 있습니다.
            이를 해결하기 위해 <strong>Funnel Pattern</strong>과 유사한 상태 기반(State-driven) UI 아키텍처를 설계했습니다.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-500 font-light mb-8">
            <li>
              <strong>Instant Transition:</strong> 데이터 프리페칭(Prefetching)과 메모이제이션을 결합하여, 탭 전환 시 지연 없는 화면 전환을 구현했습니다.
            </li>
            <li>
              <strong>Context Preservation:</strong> 사용자가 상품 상세 페이지를 보고 뒤로 돌아왔을 때, 이전 스크롤 위치와 필터 상태가 완벽하게 유지되도록 전역 상태(Context API/Zustand)를 정교하게 관리했습니다.
            </li>
          </ul>

          <h3 className="text-2xl font-serif font-bold mb-6 mt-12">Visual Identity: Warmth in Digital</h3>
          {/* DDIP brand warm theme colors preserved */}
          <div className="p-8 bg-ddip-paper border border-ddip-paper-border rounded-lg shadow-sm">
            <h4 className="text-ddip-gold font-serif font-bold mb-4 italic text-lg">&quot;Making Digital Feel Analog&quot;</h4>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              차가운 디지털 화면에서도 이웃 간의 정을 느낄 수 있도록, 종이 질감이 느껴지는 텍스처와 부드러운 파스텔 톤(Warm Yellow & Green)을 메인 컬러로 사용했습니다.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="h-12 w-12 rounded-full bg-ddip-sun shadow-sm"></div>
              <div className="h-12 w-12 rounded-full bg-ddip-leaf shadow-sm"></div>
              <div className="h-12 w-12 rounded-full bg-ddip-cream border border-ddip-cream-border"></div>
            </div>
          </div>
        </div>
      </section>

      <ProjectNav currentSlug="ddip" />
    </article>
  );
}
