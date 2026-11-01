'use client'
import { ArrowUpRight } from 'lucide-react'
import { Artwork } from '@/types/artwork'
import { useTranslation } from '@/lib/TranslationContext'
import { productCopy, productTitle } from '@/lib/product-copy'
import { salesCopy } from '@/lib/sales-copy'
import { ArtworkProductImage } from './ArtworkProductImage'

export function ArtworkCard({artwork,onClick}:{artwork:Artwork;onClick?:()=>void}) {
  const {language}=useTranslation()
  const p=productCopy[language]
  const image=artwork.images.find(image=>image.isPrimary)||artwork.images[0]
  return (
    <button type="button" onClick={onClick} data-artwork-id={artwork.id} data-product-reference={artwork.reference} className="artwork-card relative w-full overflow-hidden rounded-xl bg-white text-left shadow-md dark:bg-navy-800">
      <div className="relative aspect-square bg-[#eeeae3] p-4 dark:bg-navy-700">
        {image && <ArtworkProductImage image={image} reference={artwork.reference} />}
        <span aria-hidden="true" className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-gold-300"><ArrowUpRight className="h-4 w-4" /></span>
      </div>
      <div className="p-4">
        <p className="mb-2 text-xs font-semibold tracking-wider text-amber-800 dark:text-gold-300">{artwork.reference}</p>
        <h3 className="font-serif text-lg text-navy-900 dark:text-white">{productTitle(artwork,language)}</h3>
        <p className="mt-2 text-xs text-navy-600 dark:text-navy-200">{artwork.category==='painting'?p.painting:p.sculpture}</p>
        <p className="mt-3 text-sm font-semibold text-navy-900 dark:text-gold-400">{salesCopy[language].detailsLink} →</p>
      </div>
    </button>
  )
}
