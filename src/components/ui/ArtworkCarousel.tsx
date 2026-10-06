'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { mockArtworks } from '@/data/artworks'
import { Artwork } from '@/types/artwork'
import { formatPrice, assetPath } from '@/lib/utils'
import Image from 'next/image'

interface ArtworkCarouselProps {
  onArtworkClick?: (artwork: Artwork) => void
}

export function ArtworkCarousel({ onArtworkClick }: ArtworkCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isPaused, setIsExpanded] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Auto-play functionality with smoother transitions
  useEffect(() => {
    if (!isAutoPlaying || isPaused || window.matchMedia('(max-width: 767px)').matches) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockArtworks.length)
    }, 4000) // Slightly longer for smoother experience

    return () => clearInterval(interval)
  }, [isAutoPlaying, isPaused])

  // Pause on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mockArtworks.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mockArtworks.length) % mockArtworks.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentArtwork = mockArtworks[currentIndex]
  const primaryImage = currentArtwork?.images.find(img => img.isPrimary) || currentArtwork?.images[0]

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel */}
      <motion.div
        ref={carouselRef}
        className="relative overflow-hidden rounded-2xl bg-[#24211d] shadow-[0_24px_70px_-30px_rgba(35,28,18,0.55)]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-20 h-20 bg-gold-400 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-4 right-4 w-16 h-16 bg-emerald-400 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-burgundy-400 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative flex min-h-[480px] items-center justify-center px-5 py-14 sm:min-h-[500px] sm:p-8 md:h-[500px] md:min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, rotateY: -45, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, rotateY: 45, filter: "blur(10px)" }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                filter: { duration: 0.4 }
              }}
              className="flex flex-col md:flex-row items-center space-y-4 sm:space-y-6 md:space-y-0 md:space-x-8 w-full max-w-4xl"
            >
              {/* Artwork Image */}
              <motion.div
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-2xl cursor-pointer"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onArtworkClick?.(currentArtwork)}
              >
                {primaryImage && (
                  <Image
                    src={assetPath(primaryImage.url)}
                    alt={primaryImage.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                )}

                {/* Price Overlay */}
                {currentArtwork.isAvailable && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 max-w-[calc(100%-2rem)] bg-gold-600 text-navy-900 px-3 py-1 rounded-full font-bold text-xs sm:text-sm shadow-lg"
                  >
                    {currentArtwork.price ? formatPrice(currentArtwork.price, currentArtwork.currency) : 'Price on request'}
                  </motion.div>
                )}

                {/* Sold Overlay */}
                {!currentArtwork.isAvailable && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="absolute inset-0 bg-black/70 flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-xl bg-red-600 px-4 py-2 rounded-lg shadow-lg">
                      Sold
                    </span>
                  </motion.div>
                )}
              </motion.div>

              {/* Artwork Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center md:text-left max-w-md"
              >
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-gold-400 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentArtwork.title}
                </motion.h3>

                {currentArtwork.artist !== 'Contemporary Slovenian Artist' && (
                  <motion.p
                    className="text-lg text-navy-200 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    by {currentArtwork.artist}
                  </motion.p>
                )}

                <motion.p
                  className="text-sm text-navy-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {currentArtwork.category === 'sculpture' ? 'Sculpture' : 'Painting'}
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onArtworkClick?.(currentArtwork)}
                  className="mt-6 px-6 py-3 bg-gold-600 hover:bg-gold-700 text-navy-900 font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View Details
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          aria-label="Previous artwork"
          className="absolute left-3 top-4 md:left-4 md:top-1/2 md:-translate-y-1/2 p-2 md:p-3 bg-navy-800/90 hover:bg-navy-700 text-gold-400 rounded-full shadow-lg backdrop-blur-sm border border-gold-500/20 z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          aria-label="Next artwork"
          className="absolute right-14 top-4 md:right-4 md:top-1/2 md:-translate-y-1/2 p-2 md:p-3 bg-navy-800/90 hover:bg-navy-700 text-gold-400 rounded-full shadow-lg backdrop-blur-sm border border-gold-500/20 z-10"
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>

        {/* Expand/Collapse Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsExpanded(!isPaused)}
          aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
          className="absolute top-4 right-4 p-2 bg-navy-800/80 hover:bg-navy-700 text-gold-400 rounded-full shadow-lg backdrop-blur-sm border border-gold-500/20 z-10"
        >
          {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
        </motion.button>
      </motion.div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-start sm:justify-center gap-2 mt-5 overflow-x-auto overscroll-x-contain px-3 pb-2 snap-x snap-mandatory">
        {mockArtworks.map((artwork, index) => {
          const thumbImage = artwork.images.find(img => img.isPrimary) || artwork.images[0]
          return (
            <motion.button
              key={artwork.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => goToSlide(index)}
              aria-label={`Show artwork: ${artwork.title}`}
              aria-pressed={index === currentIndex}
              className={`relative w-12 h-12 sm:w-16 sm:h-16 shrink-0 snap-center rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'border-gold-500 shadow-lg shadow-gold-500/25'
                  : 'border-navy-600 hover:border-gold-400'
              }`}
            >
              {thumbImage && (
                <Image
                  src={assetPath(thumbImage.url)}
                  alt={artwork.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              )}
              {index === currentIndex && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-gold-500/20 rounded-lg"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          )
        })}
      </div>

    </div>
  )
}