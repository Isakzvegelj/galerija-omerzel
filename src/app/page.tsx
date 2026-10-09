'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, MapPin, Clock, Images } from 'lucide-react'
import { mockArtworks } from '@/data/artworks'
import { galleryInfo, galleryGoogleMapsEmbedUrl, galleryGoogleMapsUrl } from '@/data/gallery'
import { ArtworkCard } from '@/components/ui/ArtworkCard'
import { ArtworkModal } from '@/components/ui/ArtworkModal'
import { ArtworkCarousel } from '@/components/ui/ArtworkCarousel'
import { Artwork } from '@/types/artwork'
import { useTranslation } from '@/lib/TranslationContext'

export default function Home() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  const [featuredArtworks, setFeaturedArtworks] = useState<Artwork[]>([])
  const { t } = useTranslation()

  useEffect(() => {
    // Get 6 featured artworks (mix of categories)
    const paintings = mockArtworks.filter(a => a.category === 'painting').slice(0, 3)
    const sculptures = mockArtworks.filter(a => a.category === 'sculpture').slice(0, 2)
    const digital = mockArtworks.filter(a => a.category === 'digital').slice(0, 1)

    setFeaturedArtworks([...paintings, ...sculptures, ...digital])
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 transition-colors">
      {/* Gallery introduction and featured artwork */}
      <section className="bg-[#f6f3ed] px-4 py-12 sm:px-6 md:py-16 dark:bg-navy-900">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-amber-800 dark:text-gold-400">Bled · Slovenia</p>
            <h1 className="font-serif text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl md:text-6xl dark:text-white">
              {t('heroTitle')}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-stone-600 sm:text-lg dark:text-navy-200">
              {t('heroSubtitle')}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/gallery" className="inline-flex items-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-amber-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800">
                {t('exploreGallery')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-500 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 dark:border-navy-500 dark:text-white">
                Plan your visit
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
            <div><h2 className="text-sm font-semibold text-stone-900 dark:text-white">Find us</h2><a href={galleryGoogleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-600 underline decoration-stone-400 underline-offset-2 hover:text-amber-800 dark:text-navy-200">{galleryInfo.address}</a></div>
          </div>
          <div className="flex items-center gap-4 sm:justify-center">
            <Clock className="h-5 w-5 shrink-0 text-amber-800" aria-hidden="true" />
            <div><h2 className="text-sm font-semibold text-stone-900 dark:text-white">Opening hours</h2><p className="text-sm text-stone-600 dark:text-navy-200">Tue–Fri 10:00–18:00 · Sat 10:00–16:00</p></div>
          </div>
          <div className="flex items-center gap-4 sm:justify-center">
            <Images className="h-5 w-5 shrink-0 text-amber-800" aria-hidden="true" />
            <div><h2 className="text-sm font-semibold text-stone-900 dark:text-white">Explore the collection</h2><p className="text-sm text-stone-600 dark:text-navy-200">{mockArtworks.length} works to discover</p></div>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="bg-[#f6f3ed] py-16 dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-medium text-stone-900 dark:text-white mb-4">
              Selected works
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-stone-600 dark:text-navy-200">
              Take a closer look at works from the Galerija Omerzel collection.
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
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-navy-600 hover:bg-navy-700 dark:bg-gold-600 dark:hover:bg-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>


      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-medium text-stone-900 mb-6">
                About Galerija Omerzel
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Located in the picturesque town of Bled, Galerija Omerzel is dedicated to 
                showcasing contemporary Slovenian art and supporting emerging artists. 
                Our gallery features a diverse collection of paintings, sculptures, and digital art.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe art has the power to inspire, challenge, and transform. 
                Each piece in our collection is carefully curated to represent the best 
                of contemporary artistic expression.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-[#f6f3ed] p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {mockArtworks.filter(a => a.category === 'painting').length}
                  </div>
                  <div className="text-gray-600">Paintings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {mockArtworks.filter(a => a.category === 'sculpture').length}
                  </div>
                  <div className="text-gray-600">Sculptures</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {mockArtworks.filter(a => a.category === 'digital').length}
                  </div>
                  <div className="text-gray-600">Digital Art</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {mockArtworks.filter(a => a.isAvailable).length}
                  </div>
                  <div className="text-gray-600">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#342c25] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in a Piece?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-stone-200">
            Contact us for pricing, availability, or to schedule a private viewing. 
            We&apos;re here to help you find the perfect artwork for your space.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
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
                className="inline-flex items-center rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-amber-900"
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