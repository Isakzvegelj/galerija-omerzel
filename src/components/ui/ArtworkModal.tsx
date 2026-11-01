'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Dialog,DialogPanel,DialogTitle } from '@headlessui/react'
import { X,ChevronLeft,ChevronRight } from 'lucide-react'
import { Artwork } from '@/types/artwork'
import { salesCopy } from '@/lib/sales-copy'
import { productCopy,productTitle,productTarget } from '@/lib/product-copy'
import { useTranslation } from '@/lib/TranslationContext'
import { ArtworkProductImage } from './ArtworkProductImage'
import { ArtworkInquiryModal } from './ArtworkInquiryModal'

export function ArtworkModal({artwork,isOpen,onClose}:{artwork:Artwork|null;isOpen:boolean;onClose:()=>void}) {
  if(!artwork||!isOpen)return null
  return <ArtworkDetail key={artwork.id} artwork={artwork} onClose={onClose}/>
}
function ArtworkDetail({artwork,onClose}:{artwork:Artwork;onClose:()=>void}) {
  const {language}=useTranslation()
  const c=salesCopy[language],p=productCopy[language]
  const [index,setIndex]=useState(0),[enquiry,setEnquiry]=useState(false),[fullPhoto,setFullPhoto]=useState(false),[zoom,setZoom]=useState(1),[copied,setCopied]=useState('')
  const image=artwork.images[index]
  const reference=artwork.reference||artwork.id
  const link=`https://gallerybled.com/gallery/?artwork=${encodeURIComponent(reference)}`
  function changePhoto(next:number){setIndex(next);setZoom(1)}
  async function copyLink(){try{await navigator.clipboard.writeText(link);setCopied(p.copied)}catch{setCopied(p.copyFailed)}}
  return (
    <Dialog open onClose={()=>{if(!enquiry)onClose()}} className="fixed inset-0 z-[60]">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true"/>
      <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-5">
        <DialogPanel className="flex max-h-[94dvh] w-full max-w-6xl flex-col overflow-hidden rounded-xl bg-white text-stone-900 shadow-2xl dark:bg-navy-800 dark:text-white">
          <header className="flex shrink-0 items-start justify-between gap-3 border-b border-stone-300 px-4 py-3 dark:border-navy-600 sm:px-6">
            <div><p className="text-xs font-semibold tracking-wide text-amber-800 dark:text-gold-300">{p.reference}: {reference}</p><DialogTitle className="mt-1 font-serif text-xl sm:text-2xl">{productTitle(artwork,language)}</DialogTitle></div>
            <button type="button" onClick={onClose} aria-label={c.close} className="shrink-0 rounded-full p-3 hover:bg-stone-100 dark:hover:bg-navy-700"><X className="h-5 w-5"/></button>
          </header>
          <div className="overflow-y-auto overscroll-contain">
            <div className="grid lg:grid-cols-[1.3fr_1fr]">
              <div className="bg-[#eeeae3] dark:bg-navy-900">
                <div className="flex flex-wrap gap-2 p-3 text-xs sm:text-sm">
                  <button type="button" aria-pressed={!fullPhoto} onClick={()=>{setFullPhoto(false);setZoom(1)}} className={`min-h-10 rounded-full border px-3 ${!fullPhoto?'border-navy-900 bg-navy-900 text-white dark:border-gold-400 dark:bg-gold-400 dark:text-navy-900':'border-stone-400'}`}>{p.focus}</button>
                  <button type="button" aria-pressed={fullPhoto} onClick={()=>{setFullPhoto(true);setZoom(1)}} className={`min-h-10 rounded-full border px-3 ${fullPhoto?'border-navy-900 bg-navy-900 text-white dark:border-gold-400 dark:bg-gold-400 dark:text-navy-900':'border-stone-400'}`}>{p.full}</button>
                  <button type="button" onClick={()=>setZoom(zoom===1?2:1)} aria-pressed={zoom===2} className="min-h-10 rounded-full border border-stone-400 px-3">{zoom===1?p.zoom:p.reset}</button>
                </div>
                <div data-testid="product-photo" className="h-[39dvh] min-h-48 overflow-auto overscroll-contain p-3 lg:h-[54vh]">
                  <div style={{width:`${zoom*100}%`,height:`${zoom*100}%`}}>
                    {image&&<ArtworkProductImage key={`${image.id}-${fullPhoto}`} image={image} reference={reference} fullPhoto={fullPhoto} detail priority/>}
                  </div>
                </div>
                {artwork.images.length>1&&<div className="flex items-center justify-center gap-5 p-3 text-sm"><button type="button" aria-label={p.previous} onClick={()=>changePhoto((index+artwork.images.length-1)%artwork.images.length)} className="rounded-full border border-stone-400 p-3"><ChevronLeft className="h-4 w-4"/></button><span>{p.photo} {index+1} / {artwork.images.length}</span><button type="button" aria-label={p.next} onClick={()=>changePhoto((index+1)%artwork.images.length)} className="rounded-full border border-stone-400 p-3"><ChevronRight className="h-4 w-4"/></button></div>}
              </div>
              <div className="space-y-4 p-5 sm:p-7">
                <div><h3 className="text-sm font-semibold">{p.target}</h3><p className="mt-2 text-sm leading-6">{productTarget(artwork,language)}</p></div>
                {artwork.partialPhoto&&<p className="rounded-md border border-amber-700/40 p-3 text-sm leading-6 dark:border-gold-400/40">{p.partial}</p>}
                <p className="text-xs leading-5 text-stone-600 dark:text-navy-200">{p.visualLabel}</p>
                <p className="font-semibold">{c.price}</p>
                <p className="text-sm leading-6 text-stone-600 dark:text-navy-200">{c.details}</p>
                <button type="button" onClick={copyLink} className="min-h-11 rounded-md border border-stone-400 px-4 py-2 text-sm">{p.copyLink}</button>
                <p role="status" className="text-sm">{copied}</p>
                <Link className="block break-all text-sm underline underline-offset-4" href={`/gallery/?artwork=${encodeURIComponent(reference)}`}>{copied===p.copyFailed?link:c.link}</Link>
              </div>
            </div>
          </div>
          <footer className="shrink-0 border-t border-stone-300 bg-white p-3 dark:border-navy-600 dark:bg-navy-800 sm:px-6">
            <button type="button" onClick={()=>setEnquiry(true)} className="min-h-12 w-full rounded-md bg-navy-900 px-4 py-3 font-semibold text-white dark:bg-gold-400 dark:text-navy-900">{c.request} · {reference}</button>
            <p className="mt-1 text-center text-xs text-stone-600 dark:text-navy-200">{c.note}</p>
          </footer>
          <ArtworkInquiryModal key={artwork.id} artwork={artwork} image={image} isOpen={enquiry} onClose={()=>setEnquiry(false)}/>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
