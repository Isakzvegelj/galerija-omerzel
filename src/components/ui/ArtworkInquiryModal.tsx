'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { X } from 'lucide-react'
import { galleryInfo } from '@/data/gallery'
import { emailDraftUrl } from '@/lib/contact'
import { salesCopy } from '@/lib/sales-copy'
import { useTranslation } from '@/lib/TranslationContext'
import { productCopy, productTitle, productTarget } from '@/lib/product-copy'
import { ArtworkProductImage } from './ArtworkProductImage'
import { Artwork, ArtworkImage } from '@/types/artwork'

export function ArtworkInquiryModal({ artwork, image, isOpen, onClose }: {
  artwork: Artwork | null; image?: ArtworkImage; isOpen: boolean; onClose: () => void
}) {
  const { language } = useTranslation()
  const c = salesCopy[language]
  const [name, setName] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [copyStatus, setCopyStatus] = useState('')
  if (!artwork) return null
  const p = productCopy[language]
  const reference = artwork.reference || artwork.id
  const photo = image || artwork.images[0]
  const artworkUrl = `https://gallerybled.com/gallery/?artwork=${encodeURIComponent(reference)}`
  const body = [p.reference + ': ' + reference, productTitle(artwork,language), productTarget(artwork,language), artworkUrl, `${p.photo}: https://gallerybled.com${photo.url}`, '', message ?? c.defaultMessage, '', name].join('\n')
  const subject = `Artwork enquiry: ${reference} — ${artwork.title}`
  const copyText = `${galleryInfo.email}\n${subject}\n\n${body}`
  async function copy() {
    try { await navigator.clipboard.writeText(copyText); setCopyStatus(c.copied) }
    catch { setCopyStatus(c.copyFailed) }
  }
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-[70]">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 overflow-y-auto p-4">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel className="relative w-full max-w-lg rounded-xl bg-white p-6 text-stone-900 shadow-2xl dark:bg-navy-800 dark:text-white">
            <button type="button" onClick={onClose} aria-label={c.close} className="absolute right-3 top-3 rounded-full p-3 hover:bg-stone-100 dark:hover:bg-navy-700"><X className="h-5 w-5" /></button>
            <DialogTitle className="pr-10 font-serif text-2xl">{c.enquiry}</DialogTitle>
            <p className="mt-2 break-words text-xs text-stone-600 dark:text-navy-200">{p.reference}: {reference}</p>
            <div className="mt-4 flex items-center gap-4 rounded-md border border-stone-300 p-3 dark:border-navy-600">
              <div className="h-24 w-24 shrink-0"><ArtworkProductImage image={photo} reference={reference} priority/></div>
              <div><p className="font-semibold">{productTitle(artwork,language)}</p><p className="mt-1 text-xs leading-5">{productTarget(artwork,language)}</p></div>
            </div>
            <label className="mt-5 block text-sm" htmlFor="artwork-enquiry-name">{c.name}</label>
            <input id="artwork-enquiry-name" autoComplete="name" value={name} onChange={e => setName(e.target.value)} className="mt-1 w-full rounded-md border border-stone-400 bg-transparent p-3" />
            <label className="mt-4 block text-sm" htmlFor="artwork-enquiry-message">{c.message}</label>
            <textarea id="artwork-enquiry-message" rows={4} value={message ?? c.defaultMessage} onChange={e => setMessage(e.target.value)} className="mt-1 w-full rounded-md border border-stone-400 bg-transparent p-3 text-sm" />
            <a href={emailDraftUrl(subject, body)} className="mt-5 flex min-h-12 items-center justify-center rounded-md bg-navy-900 px-4 py-3 text-center font-semibold text-white dark:bg-gold-400 dark:text-navy-900">{c.draft}</a>
            <p className="mt-2 text-xs leading-5 text-stone-600 dark:text-navy-200">{c.hint}</p>
            <div className="mt-5 border-t border-stone-300 pt-4">
              <p className="text-sm">{c.fallback} <a className="break-all underline" href={`mailto:${galleryInfo.email}`}>{galleryInfo.email}</a>.</p>
              <button type="button" onClick={copy} className="my-3 min-h-11 rounded-md border border-stone-400 px-4 py-2 text-sm">{c.copy}</button>
              <p role="status" className="text-sm">{copyStatus}</p>
              {copyStatus === c.copyFailed && <textarea aria-label={c.copy} readOnly value={copyText} rows={6} className="mt-2 w-full border bg-transparent p-2 text-sm" />}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
