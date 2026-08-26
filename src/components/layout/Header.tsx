'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Globe } from 'lucide-react'
import { GOLogo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useTranslation } from '@/lib/TranslationContext'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { setLanguage, t } = useTranslation()

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('gallery'), href: '/gallery' },
    { name: t('about'), href: '/about' },
    { name: t('videos'), href: '/videos' },
    { name: t('contact'), href: '/contact' },
  ]

  const switchLanguage = (newLocale: 'en' | 'sl') => {
    setLanguage(newLocale)
    console.log(`Language switched to: ${newLocale}`)
  }

  return (
    <header className="bg-navy-900 shadow-lg border-b border-gold-600 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <GOLogo size="md" />
              <span className="text-xl font-bold text-gold-400">Galerija Omerzel</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-navy-100 hover:text-gold-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Language Switcher & Theme Toggle */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-navy-300" />
                <div className="flex space-x-1">
                  <button
                    onClick={() => switchLanguage('en')}
                    className="px-2 py-1 text-xs font-medium rounded text-navy-200 hover:text-gold-400"
                  >
                    EN
                  </button>
                  <button
                    onClick={() => switchLanguage('sl')}
                    className="px-2 py-1 text-xs font-medium rounded text-navy-200 hover:text-gold-400"
                  >
                    SL
                  </button>
                </div>
              </div>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              className="text-navy-100 hover:text-gold-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-x-0 top-16 bg-navy-800 border-t border-gold-600 shadow-lg z-40"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-navy-100 hover:text-gold-400 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile language switcher */}
            <div className="px-3 py-2 border-t border-gold-600">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-navy-300" />
                <span className="text-sm font-medium text-navy-100">{t('language')}:</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      switchLanguage('en')
                      setMobileMenuOpen(false)
                    }}
                    className="px-2 py-1 text-xs font-medium rounded text-navy-200 hover:text-gold-400"
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      switchLanguage('sl')
                      setMobileMenuOpen(false)
                    }}
                    className="px-2 py-1 text-xs font-medium rounded text-navy-200 hover:text-gold-400"
                  >
                    SL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
