'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, MapPin, Clock, Images } from 'lucide-react'
import { mockArtworks } from '@/data/artworks'
import { galleryInfo, galleryGoogleMapsEmbedUrl, galleryGoogleMapsUrl } from '@/data/gallery'
import { ArtworkCard } from '@/components/ui/ArtworkCard'
import { ArtworkModal } from '@/components/ui/ArtworkModal'
import { ArtworkCarousel } from '@/components/ui/ArtworkCarousel'
import { salesCopy } from '@/lib/sales-copy'
import { Artwork } from '@/types/artwork'
import { useTranslation } from '@/lib/TranslationContext'

export default function Home() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  const { language } = useTranslation()
  const c = salesCopy[language]
  const featuredArtworks = [
    ...mockArtworks.filter(a => a.category === 'painting').slice(0, 3),
    ...mockArtworks.filter(a => a.category === 'sculpture').slice(0, 3),
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 transition-colors">
      {/* Gallery introduction and featured artwork */}
      <section className="bg-[#f6f3ed] px-4 py-12 sm:px-6 md:py-16 dark:bg-navy-900">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-amber-800 dark:text-gold-400">Bled · Slovenia</p>
            <h1 className="font-serif text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl md:text-6xl dark:text-white">
              {c.title}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-stone-600 sm:text-lg dark:text-navy-200">
              {c.intro}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/gallery" className="hover-action inline-flex items-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-amber-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800">
                {c.browse} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className="hover-action inline-flex items-center rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-500 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 dark:border-navy-500 dark:text-white">
                {c.visit}
              </Link>
            </div>
          </div>
          <ArtworkCarousel onArtworkClick={setSelectedArtwork} />
        </div>
      </section>

      {/* Visit information */}
      <section className="border-y border-stone-200 bg-white py-8 dark:border-navy-700 dark:bg-navy-800">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-3 sm:gap-10">
          <div className="flex items-center gap-4 sm:justify-center">
            <MapPin className="h-5 w-5 shrink-0 text-amber-800" aria-hidden="true" />
            <div><h2 className="text-sm font-semibold text-stone-900 dark:text-white">{c.location}</h2><a href={galleryGoogleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-600 underline decoration-stone-400 underline-offset-2 hover:text-amber-800 dark:text-navy-200">{galleryInfo.address}</a></div>
          </div>
          <div className="flex items-center gap-4 sm:justify-center">
            <Clock className="h-5 w-5 shrink-0 text-amber-800" aria-hidden="true" />
            <div><h2 className="text-sm font-semibold text-stone-900 dark:text-white">{c.hours}</h2><p className="text-sm text-stone-600 dark:text-navy-200">{c.hoursNote}</p></div>
          </div>
          <div className="flex items-center gap-4 sm:justify-center">
            <Images className="h-5 w-5 shrink-0 text-amber-800" aria-hidden="true" />
            <div><h2 className="text-sm font-semibold text-stone-900 dark:text-white">{c.collection}</h2><p className="text-sm text-stone-600 dark:text-navy-200">{c.collectionNote}</p></div>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="bg-[#f6f3ed] py-16 dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-medium text-stone-900 dark:text-white mb-4">
              {c.selected}
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-stone-600 dark:text-navy-200">
              {c.selectedIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredArtworks.map((artwork) => (
              <div key={artwork.id}>
                <ArtworkCard
                  artwork={artwork}
                  onClick={() => setSelectedArtwork(artwork)}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="hover-action inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-navy-600 hover:bg-navy-700 dark:bg-gold-600 dark:hover:bg-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {c.browse}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>


      <section className="bg-white py-14 dark:bg-navy-800">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center font-serif text-3xl text-stone-900 dark:text-white">{c.heading}</h2>
          <ol className="mt-9 grid gap-7 md:grid-cols-3">
            {c.steps.map(([title, description], index) => <li key={title} className="rounded-xl border border-stone-300 p-6 dark:border-navy-600">
              <span className="text-sm font-semibold text-amber-800 dark:text-gold-400">0{index + 1}</span>
              <h3 className="mt-3 text-lg font-semibold text-stone-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-navy-200">{description}</p>
            </li>)}
          </ol>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white dark:bg-gold-400 dark:text-navy-900">{c.request}</Link>
            <a href={`tel:${galleryInfo.phone.replace(/[^+\d]/g, '')}`} className="rounded-full border border-stone-400 px-6 py-3 text-sm text-stone-900 dark:text-white">{c.call}</a>
          </div>
        </div>
      </section>

      {/* Gallery location */}
      <section className="bg-stone-50 py-16 dark:bg-navy-900">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-3xl font-medium text-stone-900 dark:text-white">Visit us in Bled</h2>
            <p className="mt-3 text-stone-600 dark:text-navy-200">{galleryInfo.address}</p>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-lg dark:bg-navy-800">
            <iframe
              title={`Map to Galerija Omerzel at ${galleryInfo.address}`}
              src={galleryGoogleMapsEmbedUrl}
              className="h-72 w-full rounded-xl border-0 sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="px-2 pb-2 pt-4 text-center">
              <a
                href={galleryGoogleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-action inline-flex items-center rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-amber-900"
              >
                Open directions in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Artwork Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        isOpen={!!selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </div>
  )
}