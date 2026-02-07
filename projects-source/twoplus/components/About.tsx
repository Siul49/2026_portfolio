export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">회사 소개</h2>
        <p className="section-subtitle">
          Twosea Technology는 정밀 측정 기술과 혁신적인 솔루션을 제공하는 전문 기업입니다
        </p>
        <div className="grid md:grid-cols-2 gap-16 md:gap-12 items-center">
          <div className="about-text">
            <h3 className="text-2xl mb-4 text-primary">우리의 비전</h3>
            <p className="mb-8 text-gray-500 leading-relaxed">
              Twosea Technology는 자동차 부품 측정장치, LED 콘트롤러, 시스템 시험장치 분야에서
              최고 품질의 제품을 제공하며, 정밀 측정 기술과 혁신을 통해 고객의 성공을 함께 만들어갑니다.
            </p>
            <h3 className="text-2xl mb-4 text-primary">우리의 가치</h3>
            <ul className="list-none pl-0">
              <li className="py-3 pl-6 relative text-gray-500 before:content-['✓'] before:absolute before:left-0 before:text-primary before:font-bold">
                고객 중심의 서비스 제공
              </li>
              <li className="py-3 pl-6 relative text-gray-500 before:content-['✓'] before:absolute before:left-0 before:text-primary before:font-bold">
                지속적인 혁신과 개선
              </li>
              <li className="py-3 pl-6 relative text-gray-500 before:content-['✓'] before:absolute before:left-0 before:text-primary before:font-bold">
                투명하고 신뢰할 수 있는 비즈니스
              </li>
              <li className="py-3 pl-6 relative text-gray-500 before:content-['✓'] before:absolute before:left-0 before:text-primary before:font-bold">
                팀워크와 협력을 통한 성장
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl transition-transform duration-300 hover:-translate-y-1">
              <div className="text-5xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-base text-gray-500">만족한 고객</div>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl transition-transform duration-300 hover:-translate-y-1">
              <div className="text-5xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-base text-gray-500">프로젝트</div>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl transition-transform duration-300 hover:-translate-y-1">
              <div className="text-5xl md:text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-base text-gray-500">경력 연수</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

