import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Autoescola Kapital',
  description: 'Autoescola Kapital - Sua jornada para tirar a CNH começa aqui.',
  generator: 'Next.js',
  applicationName: 'Autoescola Kapital',
  keywords: ['autoescola', 'CNH', 'carteira de motorista', 'kapital', 'auto escola'],
  authors: [{ name: 'Autoescola Kapital', url: 'https://sua-url.com' }],
  creator: 'Autoescola Kapital',
  metadataBase: new URL('https://sua-url.com'),
  openGraph: {
    title: 'Autoescola Kapital',
    description: 'A melhor autoescola para tirar sua carteira de motorista.',
    url: 'https://sua-url.com',
    siteName: 'Autoescola Kapital',
    images: [
      {
        url: 'https://sua-url.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Autoescola Kapital',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans bg-white text-neutral-900">
        {/* Futuro Header pode ir aqui */}
        <main>{children}</main>
        {/* Futuro Footer pode ir aqui */}
        <Analytics />
      </body>
    </html>
  )
}
