import BackLink from "../../components/ui/BackLink";
import Button from "../../components/ui/Button";
import SectionHeading from "../../components/ui/SectionHeading";
import ProjectNav from "../../components/ui/ProjectNav";
import ProjectMeta from "../../components/ui/ProjectMeta";
import StepIndicator from "../../components/ui/StepIndicator";

const flowSteps = [
  {
    step: 1,
    variant: "navy" as const,
    title: "기록 정리",
    description:
      "일정과 일기 텍스트를 로컬 상태에 정리하고, 감정 흐름을 읽는 데 필요한 단서를 먼저 정돈합니다.",
  },
  {
    step: 2,
    variant: "blue" as const,
    title: "감정 맥락 해석",
    description:
      "WebLLM이 하루 기록의 맥락, 감정 강도, 반복 키워드를 읽고 다시 보기 좋은 구조로 정리합니다.",
  },
  {
    step: 3,
    variant: "muted" as const,
    title: "캘린더 피드백",
    description:
      "분석 결과를 캘린더와 카드 UI에 다시 연결해, 나중에 기록을 열었을 때도 하루의 분위기를 빠르게 파악할 수 있게 합니다.",
  },
];

export default function PrimeRingDetail() {
  return (
    <article className="mx-auto min-h-screen max-w-6xl px-8 pt-32 pb-20">
      <header className="mb-20 border-b border-grid-line pb-10">
        <BackLink />
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <SectionHeading animated={false} className="mb-6">
              PrimeRing
            </SectionHeading>
            <p className="max-w-3xl text-xl leading-relaxed font-light text-neutral-500">
              다른 캘린더를 쓰며 느낀 아쉬움에서 출발한, 로컬 전용 AI 캘린더 겸 일기장입니다.
              내가 좋아하는 화면과 흐름으로 오래 쓰고 싶어서 만들었고, 기존 캘린더 앱에서
              불편했던 기록 경험을 로컬 LLM 보조 UX로 다시 설계했습니다.
            </p>
            <div className="mt-6">
              <Button href="/projects/prime-ring/demo" size="md">
                TRY LIVE DEMO
              </Button>
            </div>
          </div>
          <div className="md:col-span-4">
            <ProjectMeta
              items={[
                { label: "ROLE", value: "Solo Developer" },
                { label: "STACK", value: "React 19, Electron, Zustand, WebLLM" },
                { label: "FOCUS", value: "로컬 전용 UX, 감정 기록 흐름" },
              ]}
            />
          </div>
        </div>
      </header>

      <section className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h3 className="mb-4 font-serif text-lg font-bold text-deep-navy">왜 만들었는가</h3>
          <p className="text-sm leading-relaxed text-neutral-500">
            원래는 내가 원하는 디자인의 캘린더와 일기장을 직접 만들고 싶었습니다. 일정 관리와
            감정 기록이 따로 노는 기존 앱의 단절감을 줄이고, 완전히 로컬에서만 돌아가는 개인용
            도구를 만드는 것이 PrimeRing의 시작점이었습니다.
          </p>
        </div>
        <div className="md:col-span-8">
          <h3 className="mb-6 font-serif text-2xl font-bold text-deep-navy">
            내가 쓰고 싶어서 만든 캘린더
          </h3>
          <p className="mb-8 leading-relaxed font-light text-neutral-500">
            PrimeRing은 범용 생산성 도구라기보다, 내가 매일 열고 싶은 로컬 캘린더를 만드는
            실험에 가깝습니다. Electron과 React로 데스크톱 사용성을 만들고, Zustand와 preload
            API, 로컬 JSON 저장소를 묶어 로그인이나 서버 없이도 자연스럽게 쓸 수 있게 했습니다.
            WebLLM은 기능 과시보다도 하루 기록을 다시 읽기 쉽게 만드는 UX 보조 장치로 두었습니다.
          </p>

          <div className="rounded-lg border border-grid-line bg-neutral-50 p-8">
            <h4 className="mb-6 font-mono text-xs tracking-widest text-serene-blue uppercase">
              {"/// LOCAL LLM SUPPORT FLOW"}
            </h4>
            <div className="space-y-6">
              {flowSteps.map((step, index) => (
                <div key={step.step}>
                  <div className="flex items-start gap-4">
                    <StepIndicator step={step.step} variant={step.variant} className="mt-1" />
                    <div>
                      <h5 className="text-sm font-bold text-deep-navy">{step.title}</h5>
                      <p className="mt-1 text-sm leading-relaxed font-light text-neutral-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < flowSteps.length - 1 && (
                    <div className="my-4 ml-4 h-6 w-[1px] bg-neutral-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-24 border-t border-grid-line pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 font-serif text-2xl font-bold text-deep-navy">
              로컬 저장과 오프라인 우선
            </h3>
            <p className="mb-6 leading-relaxed font-light text-neutral-500">
              이 앱의 핵심은 네트워크 상태와 무관하게, 내 로컬에서만 돌아가도 충분해야 한다는
              점이었습니다. PrimeRing은 로컬 파일 기반 저장소를 사용해 연결이 없어도 이벤트와
              다이어리 CRUD가 동작하고, 런타임 상태 업데이트로 수정 내용이 바로 반영되도록
              구성했습니다.
            </p>
          </div>
          <div>
            <h3 className="mb-6 font-serif text-2xl font-bold text-deep-navy">
              불편했던 점을 어떻게 바꿨는가
            </h3>
            <p className="mb-6 leading-relaxed font-light text-neutral-500">
              기존 캘린더 앱에서 아쉬웠던 점은 일정, 메모, 감정 기록이 분리돼 있다는 점과 매일
              열고 싶을 만큼 취향에 맞는 화면이 드물다는 점이었습니다. 그래서 PrimeRing에서는
              일정 확인, 일기 작성, 감정 요약, 히트맵 확인이 한 흐름 안에서 이어지도록 설계했고,
              색감과 카드 레이아웃도 개인 도구다운 밀도로 맞췄습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h3 className="mb-6 font-serif text-2xl font-bold text-deep-navy">저장소</h3>
        <a
          href="https://github.com/Siul49/prime-ring"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-serene-blue hover:underline"
        >
          github.com/Siul49/prime-ring ↗
        </a>
      </section>

      <ProjectNav currentSlug="prime-ring" />
    </article>
  );
}
