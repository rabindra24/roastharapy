import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RoasTharapy || Marketing Agency || Web Designing',
  description: 'Elevate your online presence with our top-tier marketing agency. Our experts optimize websites using proven strategies, keywords, and analytics to secure high Google rankings. We also offer web development, Google Ads, Facebook Ads, and social media management services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
