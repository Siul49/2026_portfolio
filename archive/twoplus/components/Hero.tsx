export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white pt-20 text-center"
    >
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-4xl font-bold mb-6 leading-tight">
            혁신적인 솔루션으로<br />
            미래를 만들어갑니다
          </h1>
          <p className="text-xl md:text-lg mb-10 opacity-95 leading-relaxed">
            Twosea Technology는 자동차 부품 측정장치, LED 콘트롤러, 시스템 시험장치를<br />
            전문적으로 제조하는 회사입니다. 정밀 측정 기술로 고객의 성공을 함께 만들어갑니다.
          </p>
          <div className="flex gap-4 justify-center flex-wrap md:flex-col md:items-center">
            <a href="#contact" className="btn btn-primary">
              문의하기
            </a>
            <a
              href="#about"
              className="btn border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary"
            >
              더 알아보기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

