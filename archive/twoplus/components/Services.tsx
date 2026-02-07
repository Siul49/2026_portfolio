const services = [
  {
    title: '자동차 부품 측정장치',
    description: '정밀한 측정 기술로 자동차 부품의 품질을 검증하는 고정밀 측정장치를 제조합니다.',
    icon: '🚗',
  },
  {
    title: 'LED 콘트롤러',
    description: '다양한 LED 제어 솔루션을 제공하는 전문적인 LED 콘트롤러를 개발 및 제조합니다.',
    icon: '💡',
  },
  {
    title: '시스템 시험장치',
    description: '신뢰성 높은 시스템 테스트를 위한 정밀 시험장치를 설계 및 제조합니다.',
    icon: '⚙️',
  },
]

export default function Services() {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">서비스</h2>
        <p className="section-subtitle">
          정밀 측정 기술과 혁신적인 솔루션으로 고객의 다양한 요구를 충족시킵니다
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-xl text-center transition-all duration-300 shadow-md hover:-translate-y-2.5 hover:shadow-xl"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

