export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="footer-section">
            <h3 className="text-2xl mb-4 text-primary">Twosea Technology</h3>
            <p className="text-white/80 leading-relaxed">정밀 측정 기술과 혁신적인 솔루션으로 미래를 만들어갑니다.</p>
          </div>
          <div className="footer-section">
            <h4 className="text-lg mb-4">빠른 링크</h4>
            <ul className="list-none">
              <li className="mb-2 text-white/80">
                <a href="#home" className="transition-colors duration-300 hover:text-primary">
                  홈
                </a>
              </li>
              <li className="mb-2 text-white/80">
                <a href="#about" className="transition-colors duration-300 hover:text-primary">
                  회사소개
                </a>
              </li>
              <li className="mb-2 text-white/80">
                <a href="#services" className="transition-colors duration-300 hover:text-primary">
                  서비스
                </a>
              </li>
              <li className="mb-2 text-white/80">
                <a href="#contact" className="transition-colors duration-300 hover:text-primary">
                  연락처
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="text-lg mb-4">연락처</h4>
            <ul className="list-none">
              <li className="mb-2 text-white/80">이메일: contact@twosea.com</li>
              <li className="mb-2 text-white/80">전화: 02-6166-3936</li>
              <li className="mb-2 text-white/80">팩스: 02-6295-3936</li>
              <li className="mb-2 text-white/80">
                주소: 서울특별시 금천구 시흥대로 97<br />
                14동 304호
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/10 text-white/60">
          <p>&copy; {currentYear} Twosea Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

