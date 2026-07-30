'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Artwork } from '@/types/artwork'
import { formatPrice, formatDimensions, getCategoryLabel } from '@/lib/utils'
import { ArtworkInquiryModal } from './ArtworkInquiryModal'
import { AIImageEnhancer } from './AIImageEnhancer'

interface ArtworkModalProps {
  artwork: Artwork | null
  isOpen: boolean
  onClose: () => void
}

export function ArtworkModal({ artwork, isOpen, onClose }: ArtworkModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setCurrentImageIndex(0)
      setImageLoaded(false)
      setImageError(false)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const nextImage = useCallback(() => {
    if (!artwork) return
    setCurrentImageIndex((prev) =>
      prev === artwork.images.length - 1 ? 0 : prev + 1
    )
    setImageLoaded(false)
    setImageError(false)
  }, [artwork])

  const prevImage = useCallback(() => {
    if (!artwork) return
    setCurrentImageIndex((prev) =>
      prev === 0 ? artwork.images.length - 1 : prev - 1
    )
    setImageLoaded(false)
    setImageError(false)
  }, [artwork])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft' && artwork && artwork.images.length > 1) prevImage()
    if (e.key === 'ArrowRight' && artwork && artwork.images.length > 1) nextImage()
  }, [artwork, nextImage, prevImage, onClose])

  useEffect(() => {
    if (isOpen && artwork) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, artwork, handleKeyDown])

  if (!artwork || !isOpen) return null

  const currentImage = artwork.images[currentImageIndex]
  const hasMultipleImages = artwork.images.length > 1

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      {/* Backdrop */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="relative lg:w-2/3 bg-gray-100">
            <div className="relative aspect-square lg:aspect-auto lg:h-[70vh]">
              {imageError ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="text-center">
                    <span className="text-6xl mb-4 block">🎨</span>
                    <span className="text-lg text-gray-500">{artwork.title}</span>
                  </div>
                </div>
              ) : (
                <Image
                  src={currentImage.url}
                  alt={currentImage.alt}
                  fill
                  className={`object-contain transition-all duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                  quality={90}
                />
              )}

              {/* Navigation Arrows */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {hasMultipleImages && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {artwork.images.length}
                </div>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:w-1/3 p-6 lg:p-8 overflow-y-auto max-h-[50vh] lg:max-h-[70vh]">
            <div className="space-y-6">
              {/* Title and Artist */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {artwork.title}
                </h2>
                <p className="text-lg text-gray-600">
                  by {artwork.artist}
                </p>
              </div>

              {/* Price */}
              {artwork.price && (
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(artwork.price, artwork.currency)}
                  </span>
                  {!artwork.isAvailable && (
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                      Sold
                    </span>
                  )}
                </div>
              )}

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {artwork.description}
                </p>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Category</h4>
                  <p className="text-gray-600 capitalize">
                    {getCategoryLabel(artwork.category)}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Medium</h4>
                  <p className="text-gray-600">{artwork.medium}</p>
                </div>
                {artwork.year && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Year</h4>
                    <p className="text-gray-600">{artwork.year}</p>
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Dimensions</h4>
                  <p className="text-gray-600">
                    {formatDimensions(artwork.dimensions)}
                  </p>
                </div>
              </div>

              {/* Contact Button */}
              {artwork.isAvailable && (
                <div className="pt-4">
                  <button
                    onClick={() => setIsInquiryModalOpen(true)}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    Inquire About This Artwork
                  </button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Contact us for pricing and availability
                  </p>
                </div>
              )}

              {/* AI Image Enhancer */}
              <AIImageEnhancer artwork={artwork} />
            </div>
          </div>
        </div>
      </div>

      {/* Artwork Inquiry Modal */}
      <ArtworkInquiryModal
        artwork={artwork}
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />
    </div>
  )
}
