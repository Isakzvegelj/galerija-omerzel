'use client'

import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { galleryInfo } from '@/data/gallery'

export function CallUsNow() {
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = galleryInfo.phone.replace(/[^+\d]/g, '')

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 180)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <a
      href={`tel:${phoneNumber}`}
      aria-label={`Call Galerija Omerzel at ${galleryInfo.phone}`}
      className="fixed bottom-5 right-4 z-[60] inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-3 font-semibold text-navy-900 shadow-xl transition hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300 sm:bottom-6 sm:right-6"
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
      <span>Call us now</span>
    </a>
  )
}
