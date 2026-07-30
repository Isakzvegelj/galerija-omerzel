'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
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
  const [isExpanded, setIsExpanded] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Auto-play functionality with smoother transitions
  useEffect(() => {
    if (!isAutoPlaying || isExpanded) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockArtworks.length)
    }, 4000) // Slightly longer for smoother experience

    return () => clearInterval(interval)
  }, [isAutoPlaying, isExpanded])

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
        className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 dark:from-navy-800 dark:via-navy-700 dark:to-navy-800"
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

        <div className="relative h-80 sm:h-96 md:h-[500px] flex items-center justify-center p-4 sm:p-6 md:p-8">
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
                {currentArtwork.price && currentArtwork.isAvailable && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-4 right-4 bg-gold-600 text-navy-900 px-3 py-1 rounded-full font-bold text-sm shadow-lg"
                  >
                    {formatPrice(currentArtwork.price, currentArtwork.currency)}
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

                <motion.p
                  className="text-lg text-navy-200 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  by {currentArtwork.artist}
                </motion.p>

                <motion.div
                  className="space-y-2 text-navy-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <p><span className="text-gold-400 font-semibold">Category:</span> {currentArtwork.category}</p>
                  <p><span className="text-gold-400 font-semibold">Year:</span> {currentArtwork.year}</p>
                  <p><span className="text-gold-400 font-semibold">Dimensions:</span> {currentArtwork.dimensions.width} × {currentArtwork.dimensions.height} cm</p>
                </motion.div>

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
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-navy-800/80 hover:bg-navy-700 text-gold-400 rounded-full shadow-lg backdrop-blur-sm border border-gold-500/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-navy-800/80 hover:bg-navy-700 text-gold-400 rounded-full shadow-lg backdrop-blur-sm border border-gold-500/20"
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>

        {/* Expand/Collapse Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-4 right-4 p-2 bg-navy-800/80 hover:bg-navy-700 text-gold-400 rounded-full shadow-lg backdrop-blur-sm border border-gold-500/20"
        >
          {isExpanded ? <X className="h-5 w-5" /> : <ChevronRight className="h-5 w-5 rotate-90" />}
        </motion.button>
      </motion.div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center space-x-2 mt-6 overflow-x-auto pb-2">
        {mockArtworks.map((artwork, index) => {
          const thumbImage = artwork.images.find(img => img.isPrimary) || artwork.images[0]
          return (
            <motion.button
              key={artwork.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => goToSlide(index)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
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

      {/* Progress Indicator */}
      <div className="flex justify-center mt-4">
        <div className="flex space-x-2">
          {mockArtworks.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gold-500 scale-125'
                  : 'bg-navy-600 hover:bg-gold-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}