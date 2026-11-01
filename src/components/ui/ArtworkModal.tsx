'use client'

import { ArtworkImage as Image } from './ArtworkImage'
import Link from 'next/link'
import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Artwork } from '@/types/artwork'
import { assetPath } from '@/lib/utils'
import { salesCopy } from '@/lib/sales-copy'
import { useTranslation } from '@/lib/TranslationContext'
import { ArtworkInquiryModal } from './ArtworkInquiryModal'

export function ArtworkModal({ artwork, isOpen, onClose }: {
  artwork: Artwork | null; isOpen: boolean; onClose: () => void
}) {
  const { language } = useTranslation()
  const c = salesCopy[language]
  if (!artwork || !isOpen) return null
  return <ArtworkDetail key={artwork.id} artwork={artwork} c={c} onClose={onClose} />
}

function ArtworkDetail({ artwork, c, onClose }: {
  artwork: Artwork; c: typeof salesCopy.en; onClose: () => void
}) {
  const [index, setIndex] = useState(0)
  const [enquiry, setEnquiry] = useState(false)
  const image = artwork.images[index]
  return (
    <Dialog open onClose={() => { if (!enquiry) onClose() }} className="fixed inset-0 z-[60]">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 overflow-y-auto p-3 sm:p-6">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel className="relative w-full max-w-5xl overflow-hidden rounded-xl bg-white text-stone-900 shadow-2xl dark:bg-navy-800 dark:text-white">
            <button type="button" onClick={onClose} aria-label={c.close} className="absolute right-3 top-3 z-10 rounded-full bg-black/70 p-3 text-white"><X className="h-5 w-5" /></button>
            <div className="grid lg:grid-cols-2">
              <div className="relative h-[32vh] min-h-44 bg-stone-100 lg:h-[65vh] dark:bg-navy-900">
                {image && <Image src={assetPath(image.url)} alt={image.alt} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 50vw" priority />}
                {artwork.images.length > 1 && <>
                  <button type="button" aria-label="Previous image" onClick={() => setIndex((index + artwork.images.length - 1) % artwork.images.length)} className="absolute left-2 top-1/2 rounded-full bg-black/70 p-3 text-white"><ChevronLeft /></button>
                  <button type="button" aria-label="Next image" onClick={() => setIndex((index + 1) % artwork.images.length)} className="absolute right-2 top-1/2 rounded-full bg-black/70 p-3 text-white"><ChevronRight /></button>
                </>}
              </div>
              <div className="flex flex-col justify-center p-5 sm:p-8">
                <DialogTitle className="font-serif text-2xl sm:text-3xl">{artwork.title}</DialogTitle>
                <p className="mt-2 break-words text-xs text-stone-600 dark:text-navy-200">{c.reference}: {artwork.id}</p>
                <p className="mt-5 font-semibold">{c.price}</p>
                <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-navy-200">{c.details}</p>
                <button type="button" onClick={() => setEnquiry(true)} className="mt-6 min-h-12 rounded-md bg-navy-900 px-5 py-3 font-semibold text-white dark:bg-gold-400 dark:text-navy-900">{c.request}</button>
                <p className="mt-2 text-xs leading-5 text-stone-600 dark:text-navy-200">{c.note}</p>
                <Link className="mt-5 text-sm underline underline-offset-4" href={`/gallery/?artwork=${encodeURIComponent(artwork.id)}`}>{c.link}</Link>
              </div>
            </div>
            <ArtworkInquiryModal key={artwork.id} artwork={artwork} isOpen={enquiry} onClose={() => setEnquiry(false)} />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
