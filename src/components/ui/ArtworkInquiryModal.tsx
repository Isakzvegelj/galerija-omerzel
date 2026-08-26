'use client'

import { useState } from 'react'
import { X, Send, CheckCircle } from 'lucide-react'
import { Artwork } from '@/types/artwork'

interface ArtworkInquiryModalProps {
  artwork: Artwork | null
  isOpen: boolean
  onClose: () => void
}

interface InquiryFormData {
  name: string
  email: string
  phone?: string
  message: string
}

export function ArtworkInquiryModal({ artwork, isOpen, onClose }: ArtworkInquiryModalProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<InquiryFormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<InquiryFormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim() && !defaultMessage.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof InquiryFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      '',
      formData.message || defaultMessage,
    ].join('\n')
    const subject = `Artwork inquiry: ${artwork?.title || 'Artwork'}`

    window.location.href = `mailto:galerija.omerzel@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
    setErrors({})
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  if (!artwork || !isOpen) return null

  const defaultMessage = `Hello,

I'm interested in learning more about "${artwork.title}" by ${artwork.artist}.

Could you please provide more information about:
- Availability
- Pricing details
- Shipping options
- Any additional images or details

Thank you for your time.

Best regards,
${formData.name || '[Your Name]'}`

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div className="relative max-w-md w-full bg-white rounded-lg shadow-2xl p-8">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Inquiry Sent!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in &ldquo;{artwork.title}&rdquo;. We&apos;ll get back to you within 24 hours with more information.
            </p>
            <button
              onClick={handleClose}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      {/* Backdrop */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div className="relative max-w-2xl w-full max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Inquire About Artwork</h2>
              <p className="text-sm text-gray-600 mt-1">
                &ldquo;{artwork.title}&rdquo; by {artwork.artist}
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.name ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="+386 XX XXX XXX"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={8}
                value={formData.message || defaultMessage}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.message ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Tell us about your interest in this artwork..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending Inquiry...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Send Inquiry
                </>
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              * Required fields. We&apos;ll respond to your inquiry within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
