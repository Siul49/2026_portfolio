'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 폼 제출 로직 추가
    console.log('Form submitted:', formData)
    alert('문의가 접수되었습니다. 감사합니다!')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">연락처</h2>
        <p className="section-subtitle">
          궁금한 사항이 있으시면 언제든지 문의해주세요
        </p>
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 max-w-5xl mx-auto md:gap-12">
          <div className="contact-info">
            <h3 className="text-2xl mb-8 text-primary">연락처 정보</h3>
            <div className="mb-8">
              <strong className="block text-base mb-2 text-gray-800">이메일</strong>
              <p className="text-gray-500">contact@twosea.com</p>
            </div>
            <div className="mb-8">
              <strong className="block text-base mb-2 text-gray-800">전화번호</strong>
              <p className="text-gray-500">02-6166-3936</p>
            </div>
            <div className="mb-8">
              <strong className="block text-base mb-2 text-gray-800">팩스</strong>
              <p className="text-gray-500">02-6295-3936</p>
            </div>
            <div className="mb-8">
              <strong className="block text-base mb-2 text-gray-800">주소</strong>
              <p className="text-gray-500">
                서울특별시 금천구 시흥대로 97<br />
                14동 304호
              </p>
            </div>
          </div>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-medium text-gray-800">
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 border-2 border-gray-200 rounded-lg text-base transition-colors duration-300 focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-gray-800">
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border-2 border-gray-200 rounded-lg text-base transition-colors duration-300 focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-medium text-gray-800">
                메시지
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="p-3 border-2 border-gray-200 rounded-lg text-base font-inherit transition-colors duration-300 focus:outline-none focus:border-primary resize-y min-h-[120px]"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary self-start mt-2">
              보내기
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

