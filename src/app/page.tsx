'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, MapPin, Clock, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { mockArtworks } from '@/data/artworks'
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 transition-colors">
      {/* Artwork Carousel - Moved to Top */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative bg-gradient-to-br from-navy-50 via-platinum-50 to-emerald-50 dark:from-navy-800 dark:via-platinum-800 dark:to-emerald-900 py-8 md:py-12 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-gold-400 mb-4">
              {t('heroTitle')}
            </h1>
            <p className="text-lg text-navy-700 dark:text-navy-200 max-w-2xl mx-auto">
              {t('heroSubtitle')}
            </p>
          </motion.div>

          <ArtworkCarousel onArtworkClick={setSelectedArtwork} />
        </div>
      </motion.section>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative bg-gradient-to-br from-navy-50 via-platinum-50 to-emerald-50 dark:from-navy-800 dark:via-platinum-800 dark:to-emerald-900 py-12 md:py-20 overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 opacity-10"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 left-4 md:left-10 w-24 h-24 md:w-32 md:h-32 bg-gold-400 rounded-full blur-xl"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-10 right-4 md:right-10 w-20 h-20 md:w-24 md:h-24 bg-emerald-400 rounded-full blur-xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-burgundy-400 rounded-full blur-2xl"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute top-1/4 right-1/4 w-16 h-16 md:w-20 md:h-20 bg-platinum-400 rounded-full blur-lg"
          ></motion.div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl font-bold text-navy-900 dark:text-gold-400 mb-6"
            >
              Galerija Omerzel
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-navy-700 dark:text-navy-200 mb-8 max-w-3xl mx-auto"
            >
              Discover contemporary Slovenian art in the heart of Bled.
              Our curated collection features exceptional works by local and international artists.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/gallery"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-navy-600 hover:bg-navy-700 dark:bg-gold-600 dark:hover:bg-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t('exploreGallery')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border border-navy-300 dark:border-gold-400 text-base font-medium rounded-md text-navy-700 dark:text-navy-900 bg-white dark:bg-navy-100 hover:bg-navy-50 dark:hover:bg-navy-200 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t('learnMore')}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Bled, Slovenia</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600">Mon-Sat: 10AM-6PM</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collection</h3>
              <p className="text-gray-600">{mockArtworks.length}+ Artworks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-navy-50 dark:bg-navy-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-900 dark:text-gold-400 mb-4">
              Featured Artworks
            </h2>
            <p className="text-lg text-navy-700 dark:text-navy-200 max-w-2xl mx-auto">
              Discover a selection of our most captivating pieces, each telling a unique story
              and bringing beauty to your space.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
          >
            {featuredArtworks.map((artwork) => (
              <motion.div
                key={artwork.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ArtworkCard
                  artwork={artwork}
                  onClick={() => setSelectedArtwork(artwork)}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/gallery"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-navy-600 hover:bg-navy-700 dark:bg-gold-600 dark:hover:bg-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Full Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>


      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
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
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg p-8">
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
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in a Piece?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
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

      {/* Artwork Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        isOpen={!!selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </div>
  )
}