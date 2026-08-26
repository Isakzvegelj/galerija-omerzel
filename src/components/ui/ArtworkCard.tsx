import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Artwork } from '@/types/artwork'
import { formatPrice, formatDimensions, getCategoryLabel, assetPath } from '@/lib/utils'

interface ArtworkCardProps {
  artwork: Artwork
  onClick?: () => void
}

export function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const primaryImage = artwork.images.find(img => img.isPrimary) || artwork.images[0]

  return (
    <motion.button
      type="button"
      aria-label={`View details for ${artwork.title}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -12,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      className="w-full text-left bg-white dark:bg-navy-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-2xl dark:hover:shadow-3xl transition-all duration-300 relative group"
      onClick={onClick}
      style={{
        filter: "drop-shadow(0 0 0 rgba(59, 130, 246, 0))"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = "drop-shadow(0 20px 40px rgba(59, 130, 246, 0.3)) drop-shadow(0 10px 20px rgba(147, 51, 234, 0.2))"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = "drop-shadow(0 0 0 rgba(59, 130, 246, 0))"
      }}
    >
      {/* Image Container */}
      <motion.div
        className="aspect-square relative overflow-hidden bg-gray-100 dark:bg-navy-700"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {primaryImage && !imageError ? (
          <Image
            src={assetPath(primaryImage.url)}
            alt={primaryImage.alt}
            fill
            priority={false}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            className={`object-cover transition-all duration-500 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-navy-700 dark:to-navy-600">
            <div className="text-center">
              <span className="text-4xl mb-2 block">🎨</span>
              <span className="text-sm text-gray-400 dark:text-navy-400">{artwork.title}</span>
            </div>
          </div>
        )}

        {/* Overlay with price */}
        {artwork.price && artwork.isAvailable && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-2 right-2 bg-white/95 dark:bg-navy-900/95 backdrop-blur-sm px-3 py-1 rounded-md shadow-lg"
          >
            <span className="text-sm font-bold text-navy-900 dark:text-gold-400">
              {formatPrice(artwork.price, artwork.currency)}
            </span>
          </motion.div>
        )}

        {/* Sold overlay */}
        {!artwork.isAvailable && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/70 flex items-center justify-center"
          >
            <motion.span
              animate={{
                scale: [1, 1.1, 1],
                transition: { duration: 2, repeat: Infinity }
              }}
              className="text-white font-bold text-lg bg-red-600 px-4 py-2 rounded-lg shadow-lg"
            >
              Sold
            </motion.span>
          </motion.div>
        )}
      </motion.div>

      {/* Content */}
      <motion.div
        className="p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <motion.h3
          className="font-semibold text-navy-900 dark:text-gold-400 mb-1 line-clamp-1"
          whileHover={{ scale: 1.02 }}
        >
          {artwork.title}
        </motion.h3>
        <p className="text-navy-600 dark:text-navy-300 text-sm mb-2">
          by {artwork.artist}
        </p>
        <div className="flex items-center justify-between text-xs text-navy-500 dark:text-navy-400">
          <span>{getCategoryLabel(artwork.category)}</span>
          {artwork.year && <span>{artwork.year}</span>}
        </div>
        <div className="mt-2 text-xs text-navy-500 dark:text-navy-400">
          {formatDimensions(artwork.dimensions)}
        </div>
      </motion.div>
    </motion.button>
  )
}
