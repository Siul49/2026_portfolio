import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Twosea Technology - 회사 홈페이지',
  description: 'Twosea Technology 회사 공식 홈페이지',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}

