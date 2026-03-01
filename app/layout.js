import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
})

export const metadata = {
  title: 'Jahswill — Product Builder, PM & Designer',
  description: 'Product Builder, Product Manager, and UI/UX Designer. I turn real business problems into structured, usable solutions — from the first research interview to the live URL.',
  openGraph: {
    title: 'Jahswill — Product Builder',
    description: 'Thinking like a PM, designing like a designer, building like a founder.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
