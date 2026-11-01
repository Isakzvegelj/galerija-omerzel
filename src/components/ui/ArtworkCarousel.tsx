'use client'
import { useEffect,useState } from 'react'
import { ChevronLeft,ChevronRight,Play,Pause } from 'lucide-react'
import { mockArtworks } from '@/data/artworks'
import { Artwork } from '@/types/artwork'
import { useTranslation } from '@/lib/TranslationContext'
import { productCopy,productTitle } from '@/lib/product-copy'
import { salesCopy } from '@/lib/sales-copy'
import { ArtworkProductImage } from './ArtworkProductImage'

export function ArtworkCarousel({onArtworkClick}:{onArtworkClick?:(artwork:Artwork)=>void}){
  const {language}=useTranslation(),p=productCopy[language]
  const [index,setIndex]=useState(0),[playing,setPlaying]=useState(false),[paused,setPaused]=useState(false),[focused,setFocused]=useState(false),[reduced,setReduced]=useState(false)
  useEffect(()=>{const media=window.matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setReduced(media.matches);update();media.addEventListener('change',update);return()=>media.removeEventListener('change',update)},[])
  useEffect(()=>{if(!playing||paused||focused||reduced)return;const timer=setInterval(()=>{if(!document.hidden)setIndex(i=>(i+1)%mockArtworks.length)},5000);return()=>clearInterval(timer)},[playing,paused,focused,reduced])
  const artwork=mockArtworks[index],image=artwork.images[0]
  return <div className="mx-auto max-w-6xl" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocusCapture={()=>setFocused(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setFocused(false)}}>
    <div className="overflow-hidden rounded-2xl bg-[#24211d] p-5 text-white shadow-xl sm:p-8">
      <div className="grid items-center gap-6 md:grid-cols-2">
        <button type="button" aria-label={`${salesCopy[language].detailsLink}: ${artwork.reference}`} onClick={()=>onArtworkClick?.(artwork)} className="aspect-[4/3] w-full rounded-xl bg-[#eeeae3] p-3"><ArtworkProductImage key={image.id} image={image} reference={artwork.reference} priority/></button>
        <div className="text-center md:text-left"><p className="text-xs font-semibold tracking-wider text-gold-300">{artwork.reference} · {artwork.category==='painting'?p.painting:p.sculpture}</p><h2 className="mt-3 font-serif text-2xl sm:text-3xl">{productTitle(artwork,language)}</h2><button type="button" onClick={()=>onArtworkClick?.(artwork)} className="mt-6 min-h-12 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-900 hover:bg-gold-400">{salesCopy[language].detailsLink}</button></div>
      </div>
      <div className="mt-5 flex items-center justify-center gap-4"><button type="button" aria-label={language==='sl'?'Prejšnje delo':'Previous artwork'} onClick={()=>setIndex((index+mockArtworks.length-1)%mockArtworks.length)} className="rounded-full border border-stone-400 p-3"><ChevronLeft className="h-5 w-5"/></button><span className="text-xs text-stone-200">{index+1} / {mockArtworks.length}</span><button type="button" aria-label={language==='sl'?'Naslednje delo':'Next artwork'} onClick={()=>setIndex((index+1)%mockArtworks.length)} className="rounded-full border border-stone-400 p-3"><ChevronRight className="h-5 w-5"/></button><button type="button" aria-label={playing?'Pause slideshow':'Play slideshow'} aria-pressed={playing} onClick={()=>setPlaying(!playing)} disabled={reduced} className="rounded-full border border-stone-400 p-3 disabled:opacity-40">{playing?<Pause className="h-4 w-4"/>:<Play className="h-4 w-4"/>}</button></div>
    </div>
    <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
      {mockArtworks.map((artwork,i)=><button key={artwork.id} type="button" aria-label={`${artwork.reference}: ${productTitle(artwork,language)}`} aria-pressed={i===index} onClick={()=>setIndex(i)} className={`h-14 w-14 shrink-0 overflow-hidden rounded-lg border-2 bg-[#eeeae3] p-1 ${i===index?'border-amber-800 dark:border-gold-400':'border-transparent'}`}><ArtworkProductImage image={artwork.images[0]} reference={artwork.reference} thumbnail/></button>)}
    </div>
  </div>
}
