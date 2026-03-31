import type { Metadata, Viewport } from 'next'
import React from 'react'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { GoogleFont, GoogleFontDisplay } from 'next/font/google'

const googleSans = GoogleFont({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-google-sans',
  display: 'swap',
  family: 'Google Sans',
})

const googleSansDisplay = GoogleFontDisplay({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-google-sans-display',
  display: 'swap',
  family: 'Google Sans Display',
})

export const metadata: Metadata = {
  title: 'DevFest Porto Alegre 2026 | Midia Kit',
  description: 'O principal ponto de encontro estrategico da comunidade tech do Sul do Brasil. Midia Kit DevFest POA 2026.',
  openGraph: {
    title: 'DevFest Porto Alegre 2026 | Midia Kit',
    description: 'O principal ponto de encontro estratégico da comunidade tech do Sul do Brasil.',
    url: 'https://midiakit-devfestpoa26.vercel.app',
    siteName: 'DevFest Porto Alegre 2026',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevFest Porto Alegre 2026 | Midia Kit',
    description: 'O principal ponto de encontro estratégico da comunidade tech do Sul do Brasil.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased ${googleSans.variable} ${googleSansDisplay.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}