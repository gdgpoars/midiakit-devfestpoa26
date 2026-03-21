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
  description: 'O principal ponto de encontro estrategico da comunidade tech do Sul do Brasil. Midia Kit DevFest Porto Alegre 2026.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },

}

export const viewport: Viewport = {
  return (
    <html lang="pt-BR" className="font-sans antialiased">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased ${googleSans.variable} ${googleSansDisplay.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
