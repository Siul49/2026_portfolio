"use client";

import BackLink from "../../components/ui/BackLink";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import ProjectMeta from "../../components/ui/ProjectMeta";
import BrowserFrame from "../../components/ui/BrowserFrame";
import ProjectNav from "../../components/ui/ProjectNav";
import { withBasePath } from "../../lib/site";

export default function TwoPlusDetail() {
  const demoUrl = withBasePath("/demo/twoplus/index.html");

  return (
    <article className="min-h-screen pt-32 pb-20 px-8 max-w-5xl mx-auto font-sans text-deep-navy">
      {/* Header */}
      <header className="mb-20 border-b border-grid-line pb-10">
        <BackLink />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <SectionHeading className="mb-6">
              TwoPlus
            </SectionHeading>
            <p className="text-xl text-neutral-500 font-light max-w-2xl leading-relaxed">
              사용자와 웹의 상호작용에 대한 실험: <br />
              움직임과 반응성(Responsiveness)을 탐구한 초기 포트폴리오
            </p>
            <p className="mt-4 font-mono text-xs tracking-[0.22em] text-neutral-500 uppercase">
              Archive / Frontend Study / TWOSEA-TECHNOLOGY
            </p>
          </div>
          <div className="md:col-span-4">
            <ProjectMeta items={[
              { label: "ROLE", value: "Frontend Developer" },
              { label: "STACK", value: "React, Interaction" },
              { label: "YEAR", value: "2024" },
            ]} />
          </div>
        </div>

        <div className="mt-8">
          <Button href="/projects/twoplus/demo" variant="secondary" size="md">
            TRY LIVE DEMO ↗
          </Button>
        </div>
      </header>

      {/* Content - Design Philosophy */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 text-deep-navy">
        <div className="md:col-span-4">
          <h3 className="text-lg font-bold mb-4 font-serif">A Study of Motion</h3>
          <p className="text-sm text-neutral-500 leading-relaxed font-light text-justify">
            단순한 정보 전달을 넘어, 웹사이트가 생동감 있게 살아 숨쉬는 경험을 제공하고자 했습니다. 마우스의 좌표(Cursor Position)와 스크롤 깊이(Scroll Depth)를 실시간으로 계산하여 시각적 피드백으로 변환하는 인터랙션 로직을 집중적으로 연구했습니다.
          </p>
        </div>
        <div className="md:col-span-8">
          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="aspect-square bg-neutral-50 rounded-lg flex flex-col items-center justify-center border border-grid-line p-4 text-center">
              <span className="font-mono text-xs text-neutral-300 mb-2 uppercase">Interaction 01</span>
              <p className="text-xs text-neutral-400 font-light leading-snug">마우스 궤적에 따른<br />동적 파티클 시스템</p>
            </div>
            <div className="aspect-square bg-neutral-50 rounded-lg flex flex-col items-center justify-center border border-grid-line p-4 text-center">
              <span className="font-mono text-xs text-neutral-300 mb-2 uppercase">Interaction 02</span>
              <p className="text-xs text-neutral-400 font-light leading-snug">패럴랙스(Parallax) 스크롤과<br />비정형 그리드 레이아웃</p>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold mb-6">Atomic Architecture</h3>
          <p className="text-neutral-500 mb-6 font-light leading-relaxed">
            복잡한 인터랙션을 효율적으로 관리하기 위해 <strong>Atomic Design Pattern</strong>을 도입했습니다. 버튼과 같은 최소 단위(Atom)부터 시작하여 유기적으로 결합되는 컴포넌트(Organism) 구조를 설계함으로써, 코드의 재사용성을 높이고 유지보수가 용이한 프론트엔드 아키텍처를 경험했습니다.
          </p>
        </div>
      </section>

      {/* Live Experience Section */}
      <section className="mt-20 pt-12 border-t border-grid-line">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-serif font-bold text-deep-navy">Live Experience</h2>
            <p className="mt-3 text-neutral-500 font-light leading-relaxed">
              Twosea Technology 웹사이트의 인터랙티브 데모를 직접 경험해보세요.
              첫 화면이 눌려 보이지 않도록 히어로 여백과 뷰포트 높이도 함께 정리했습니다.
            </p>
          </div>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-serene-blue transition-colors duration-300 hover:text-deep-navy hover:underline"
          >
            OPEN IN NEW TAB ↗
          </a>
        </div>

        <BrowserFrame title="demo/twoplus" openInNewTabUrl={demoUrl}>
          <iframe
            src={demoUrl}
            className="h-[68vh] min-h-[420px] w-full max-h-[760px] bg-white"
            title="TwoPlus Demo"
          />
        </BrowserFrame>
      </section>

      <ProjectNav currentSlug="twoplus" />
    </article>
  );
}
