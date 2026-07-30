'use client'

import { useState } from 'react'
import { Plus, Edit, Trash2, LogOut, Save, X } from 'lucide-react'
import { mockArtworks } from '@/data/artworks'
import { Artwork } from '@/types/artwork'

interface AdminDashboardProps {
  onLogout: () => void
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [artworks, setArtworks] = useState<Artwork[]>(mockArtworks)
  const [editingArtwork, setEditingArtwork] = useState<Artwork | null>(null)
  const [isAddingNew, setIsAddingNew] = useState(false)

  const handleSave = (artwork: Artwork) => {
    if (editingArtwork) {
      // Update existing
      setArtworks(prev => prev.map(a => a.id === artwork.id ? artwork : a))
    } else {
      // Add new
      const newArtwork = { ...artwork, id: Date.now().toString() }
      setArtworks(prev => [...prev, newArtwork])
    }
    setEditingArtwork(null)
    setIsAddingNew(false)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this artwork?')) {
      setArtworks(prev => prev.filter(a => a.id !== id))
    }
  }

  const startEdit = (artwork: Artwork) => {
    setEditingArtwork(artwork)
    setIsAddingNew(false)
  }

  const startAdd = () => {
    setEditingArtwork(null)
    setIsAddingNew(true)
  }

  const cancelEdit = () => {
    setEditingArtwork(null)
    setIsAddingNew(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={startAdd}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Artwork
              </button>
              <button
                onClick={onLogout}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Edit/Add Form */}
        {(editingArtwork || isAddingNew) && (
          <div className="mb-8">
            <ArtworkForm
              artwork={editingArtwork}
              onSave={handleSave}
              onCancel={cancelEdit}
            />
          </div>
        )}

        {/* Artworks List */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Manage Artworks</h2>
            <p className="text-sm text-gray-600">Total: {artworks.length} artworks</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Artwork
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Artist
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {artworks.map((artwork) => (
                  <tr key={artwork.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded bg-gray-200 flex items-center justify-center">
                            <span className="text-xs text-gray-500">IMG</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 line-clamp-1">
                            {artwork.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {artwork.year || 'No year'}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {artwork.artist}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                      {artwork.category.replace('-', ' ')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {artwork.price ? `€${artwork.price}` : 'Not set'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        artwork.isAvailable
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {artwork.isAvailable ? 'Available' : 'Sold'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => startEdit(artwork)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(artwork.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

// Artwork Form Component
interface ArtworkFormProps {
  artwork: Artwork | null
  onSave: (artwork: Artwork) => void
  onCancel: () => void
}

function ArtworkForm({ artwork, onSave, onCancel }: ArtworkFormProps) {
  const [formData, setFormData] = useState<Partial<Artwork>>(artwork || {
    title: '',
    artist: '',
    description: '',
    year: undefined,
    price: undefined,
    currency: 'EUR',
    category: 'painting',
    medium: '',
    dimensions: { width: 0, height: 0, unit: 'cm' },
    images: [],
    isAvailable: true,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.title && formData.artist && formData.description) {
      onSave(formData as Artwork)
    }
  }

  const updateFormData = (field: string, value: string | number | boolean | object | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {artwork ? 'Edit Artwork' : 'Add New Artwork'}
        </h2>
        <button
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
            <input
              type="text"
              required
              value={formData.title || ''}
              onChange={(e) => updateFormData('title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Artist *</label>
            <input
              type="text"
              required
              value={formData.artist || ''}
              onChange={(e) => updateFormData('artist', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={formData.category || 'painting'}
              onChange={(e) => updateFormData('category', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="painting">Painting</option>
              <option value="sculpture">Sculpture</option>
              <option value="photography">Photography</option>
              <option value="drawing">Drawing</option>
              <option value="printmaking">Printmaking</option>
              <option value="mixed-media">Mixed Media</option>
              <option value="digital-art">Digital Art</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Medium</label>
            <input
              type="text"
              value={formData.medium || ''}
              onChange={(e) => updateFormData('medium', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Oil on canvas, etc."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
            <input
              type="number"
              value={formData.year || ''}
              onChange={(e) => updateFormData('year', e.target.value ? parseInt(e.target.value) : undefined)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price (€)</label>
            <input
              type="number"
              step="0.01"
              value={formData.price || ''}
              onChange={(e) => updateFormData('price', e.target.value ? parseFloat(e.target.value) : undefined)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
          <textarea
            required
            rows={4}
            value={formData.description || ''}
            onChange={(e) => updateFormData('description', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.isAvailable || false}
              onChange={(e) => updateFormData('isAvailable', e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">Available for sale</span>
          </label>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
          >
            <Save className="h-5 w-5 mr-2" />
            Save Artwork
          </button>
        </div>
      </form>
    </div>
  )
}
