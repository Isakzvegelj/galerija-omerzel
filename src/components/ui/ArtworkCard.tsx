import { ArtworkImage as Image } from './ArtworkImage'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Artwork } from '@/types/artwork'
import { formatPrice, getCategoryLabel, assetPath } from '@/lib/utils'

interface ArtworkCardProps {
  artwork: Artwork
  onClick?: () => void
}

export function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const primaryImage = artwork.images.find(img => img.isPrimary) || artwork.images[0]

  return (
    <button type="button" onClick={onClick} className="artwork-card relative w-full overflow-hidden rounded-lg bg-white text-left shadow-md dark:bg-navy-800">
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-navy-700">
        {primaryImage && !imageError ? (
          <Image
            src={assetPath(primaryImage.url)} alt={primaryImage.alt} fill deferUntilVisible
            priority={false} loading="lazy"
            className={`artwork-card-image object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)} onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-navy-700">
            <span className="px-4 text-center text-sm text-gray-500 dark:text-navy-200">{artwork.title}</span>
          </div>
        )}
        {artwork.isAvailable ? (
          <div className="absolute right-2 top-2 rounded-md bg-white/95 px-3 py-1 shadow-lg backdrop-blur-sm dark:bg-navy-900/95">
            <span className="text-sm font-bold text-navy-900 dark:text-gold-400">{artwork.price ? formatPrice(artwork.price, artwork.currency) : 'Price on request'}</span>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70"><span className="rounded-lg bg-red-600 px-4 py-2 text-lg font-bold text-white">Sold</span></div>
        )}
        <span aria-hidden="true" className="artwork-card-arrow absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-gold-300 shadow-lg"><ArrowUpRight className="h-5 w-5" /></span>
      </div>
      <div className="p-4">
        <h3 className="mb-1 line-clamp-1 font-semibold text-navy-900 dark:text-gold-400">{artwork.title}</h3>
        {artwork.artist !== 'Contemporary Slovenian Artist' && <p className="mb-2 text-sm text-navy-600 dark:text-navy-300">by {artwork.artist}</p>}
        <div className="text-xs text-navy-500 dark:text-navy-400">{getCategoryLabel(artwork.category)}</div>
      </div>
    </button>
  )
}
