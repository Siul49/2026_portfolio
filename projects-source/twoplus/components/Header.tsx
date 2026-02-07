'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container">
        <nav className="flex justify-between items-center py-4">
          <div className="logo">
            <h1 className="text-2xl font-bold text-primary">Twosea Technology</h1>
          </div>
          <ul
            className={`md:flex md:static md:flex-row md:bg-transparent md:shadow-none md:opacity-100 md:visible md:translate-y-0 md:gap-8 md:p-0 absolute top-full left-0 right-0 flex-col bg-white shadow-lg opacity-0 invisible -translate-y-full transition-all duration-300 gap-6 p-8 ${
              isMenuOpen ? 'opacity-100 visible translate-y-0' : ''
            }`}
          >
            <li>
              <a
                href="#home"
                className="font-medium transition-colors duration-300 relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                홈
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-medium transition-colors duration-300 relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                회사소개
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="font-medium transition-colors duration-300 relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                서비스
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-medium transition-colors duration-300 relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                연락처
              </a>
            </li>
          </ul>
          <button
            className="md:hidden flex flex-col gap-1.5 p-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 토글"
          >
            <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

