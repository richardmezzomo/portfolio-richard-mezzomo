import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Montserrat, Source_Code_Pro } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-source-code-pro',
})

export const metadata: Metadata = {
  title: 'Richard Mezzomo - Desenvolvedor Web',
  description: 'Desenvolvedor Web',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${sourceCodePro.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
