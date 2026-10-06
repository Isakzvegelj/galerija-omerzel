import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { HeaderWrapper } from '@/components/layout/HeaderWrapper'
import { Footer } from '@/components/layout/Footer'
import { BackgroundMusic } from '@/components/ui/BackgroundMusic'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { TranslationProvider } from '@/lib/TranslationContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Galerija Omerzel | Art Gallery in Bled, Slovenia',
    template: '%s | Galerija Omerzel',
  },
  description: 'Visit Galerija Omerzel, an art gallery in Bled, Slovenia. Explore paintings and sculptures, view the collection, and contact the gallery about works or a visit.',
  keywords: ['Galerija Omerzel', 'art gallery', 'Bled', 'Slovenia', 'contemporary art'],
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Galerija Omerzel | Art Gallery in Bled, Slovenia',
    description: 'Visit Galerija Omerzel, an art gallery in Bled, Slovenia. Explore paintings and sculptures, view the collection, and contact the gallery about works or a visit.',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: '/galerija-omerzel/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TranslationProvider>
          <ThemeProvider>
            <HeaderWrapper />
            <main>{children}</main>
            <Footer />
            <BackgroundMusic />
          </ThemeProvider>
        </TranslationProvider>

      </body>
    </html>
  )
}