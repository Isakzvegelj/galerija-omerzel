'use client'

import { useState, useEffect } from 'react'
import { Search, Filter, X } from 'lucide-react'
import { ArtworkCategory } from '@/types/artwork'
import { getCategoryLabel } from '@/lib/utils'

interface GalleryFiltersProps {
  onFiltersChange?: (filters: {
    search: string
    category: string
    priceRange: [number, number]
    availability: string
  }) => void
  selectedCategory?: ArtworkCategory | "all"
  onCategoryChange?: (category: ArtworkCategory | "all") => void
}

const categories: ArtworkCategory[] = [
  'painting',
  'sculpture',
  'photography',
  'drawing',
  'printmaking',
  'mixed-media',
  'digital-art',
  'contemporary',
  'other'
]

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under €500', min: 0, max: 500 },
  { label: '€500 - €1000', min: 500, max: 1000 },
  { label: '€1000 - €2000', min: 1000, max: 2000 },
  { label: 'Over €2000', min: 2000, max: Infinity }
]

export function GalleryFilters({ onFiltersChange, selectedCategory, onCategoryChange }: GalleryFiltersProps) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, Infinity])
  const [availability, setAvailability] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    if (onFiltersChange) {
      onFiltersChange({
        search,
        category,
        priceRange,
        availability
      })
    }
  }, [search, category, priceRange, availability, onFiltersChange])

  const clearFilters = () => {
    setSearch('')
    setCategory('')
    setPriceRange([0, Infinity])
    setAvailability('')
  }

  const activeFiltersCount = [search, category, availability, priceRange[0] > 0 || priceRange[1] < Infinity].filter(Boolean).length

  // Simple category selector for main page
  if (selectedCategory !== undefined && onCategoryChange) {
    return (
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {(['all', ...categories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? 'bg-gold-600 text-navy-900'
                : 'bg-navy-100 text-navy-700 hover:bg-navy-200'
            }`}
          >
            {cat === 'all' ? 'All Categories' : getCategoryLabel(cat)}
          </button>
        ))}
      </div>
    )
  }

  // Complex filters for gallery page
  return (
    <div className="bg-navy-50 border-b border-gold-300 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Search Bar */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-400" />
            <input
              type="text"
              placeholder="Search artworks, artists, or descriptions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-navy-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-gold-500 bg-white"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border border-navy-300 rounded-md hover:bg-navy-100 transition-colors bg-white"
          >
            <Filter className="h-5 w-5" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="bg-gold-600 text-navy-900 text-xs px-2 py-1 rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="border-t border-gold-300 pt-4 pb-2">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-navy-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 bg-white"
                >
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {getCategoryLabel(cat)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">
                  Price Range
                </label>
                <select
                  value={`${priceRange[0]}-${priceRange[1]}`}
                  onChange={(e) => {
                    const [min, max] = e.target.value.split('-').map(v => v === 'Infinity' ? Infinity : parseInt(v))
                    setPriceRange([min, max])
                  }}
                  className="w-full border border-navy-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 bg-white"
                >
                  {priceRanges.map((range) => (
                    <option key={range.label} value={`${range.min}-${range.max}`}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Availability Filter */}
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">
                  Availability
                </label>
                <select
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="w-full border border-navy-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 bg-white"
                >
                  <option value="">All Artworks</option>
                  <option value="available">Available Only</option>
                  <option value="sold">Sold Only</option>
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-navy-600 hover:text-navy-800 transition-colors"
                  disabled={activeFiltersCount === 0}
                >
                  <X className="h-4 w-4" />
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


