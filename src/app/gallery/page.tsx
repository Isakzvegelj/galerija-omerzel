'use client'

import { useState } from 'react'
import { Search, Filter, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { mockArtworks } from '@/data/artworks'
import { ArtworkCard } from '@/components/ui/ArtworkCard'
import { ArtworkModal } from '@/components/ui/ArtworkModal'
import { Artwork } from '@/types/artwork'

export default function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    priceRange: [0, 10000],
    availability: ''
  })
  const [showFilters, setShowFilters] = useState(false)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const filteredArtworks = mockArtworks.filter(artwork => {
    const matchesSearch = artwork.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      artwork.artist.toLowerCase().includes(filters.search.toLowerCase()) ||
      artwork.description.toLowerCase().includes(filters.search.toLowerCase())
    
    const matchesCategory = !filters.category || artwork.category === filters.category
    
    const matchesPrice = artwork.price ? artwork.price >= filters.priceRange[0] && artwork.price <= filters.priceRange[1] : true;
    
    const matchesAvailability = !filters.availability || 
      (filters.availability === 'available' && artwork.isAvailable) ||
      (filters.availability === 'sold' && !artwork.isAvailable)
    
    return matchesSearch && matchesCategory && matchesPrice && matchesAvailability
  })

  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
  }

  const clearFilters = () => {
    setFilters({
      search: '',
      category: '',
      priceRange: [0, 10000],
      availability: ''
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our curated collection of contemporary and traditional artworks. Each piece tells a unique story and brings beauty to your space.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                {Object.values(filters).some(value => value !== '') && (
                  <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    Active
                  </span>
                )}
              </button>
              <button
                onClick={clearFilters}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                disabled={Object.values(filters).every(value => value === '')}
              >
                <X className="h-4 w-4 mr-2" />
                Clear All
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2">
                <Search className="h-4 w-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search artworks..."
                  value={filters.search}
                  onChange={(e) => handleFiltersChange({...filters, search: e.target.value})}
                  className="outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
              <div className="text-sm text-gray-700">
                Showing {filteredArtworks.length} of {mockArtworks.length} artwork{mockArtworks.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={filters.category}
                    onChange={(e) => handleFiltersChange({...filters, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Categories</option>
                    <option value="painting">Painting</option>
                    <option value="sculpture">Sculpture</option>
                    <option value="digital">Digital Art</option>
                    <option value="photography">Photography</option>
                    <option value="drawing">Drawing</option>
                    <option value="printmaking">Printmaking</option>
                    <option value="mixed-media">Mixed Media</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.priceRange[0]}
                      onChange={(e) => handleFiltersChange({
                        ...filters, 
                        priceRange: [parseInt(e.target.value) || 0, filters.priceRange[1]]
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="self-center text-gray-500">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.priceRange[1]}
                      onChange={(e) => handleFiltersChange({
                        ...filters, 
                        priceRange: [filters.priceRange[0], parseInt(e.target.value) || 10000]
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">EUR</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <select
                    value={filters.availability}
                    onChange={(e) => handleFiltersChange({...filters, availability: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Items</option>
                    <option value="available">Available</option>
                    <option value="sold">Sold</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Artworks Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white dark:bg-navy-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArtworks.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredArtworks.map((artwork) => (
                <motion.div
                  key={artwork.id}
                  variants={itemVariants}
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
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 2, repeat: Infinity }
                }}
                className="text-6xl mb-4"
              >
                🎨
              </motion.div>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-gold-400 mb-2">No Artworks Found</h3>
              <p className="text-navy-700 dark:text-navy-200 mb-8 max-w-md mx-auto">
                Try adjusting your search criteria or browse our full collection.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearFilters}
                className="px-6 py-2 border border-navy-300 dark:border-gold-400 text-navy-700 dark:text-navy-200 bg-white dark:bg-navy-800 rounded-md hover:bg-navy-50 dark:hover:bg-navy-700 transition-colors"
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Artwork Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        isOpen={!!selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </div>
  )
}
