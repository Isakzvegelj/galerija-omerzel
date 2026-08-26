'use client'

import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'
import { galleryInfo } from '@/data/gallery'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      '',
      formData.message,
    ].join('\n')
    const subject = formData.subject || 'Website inquiry'

    window.location.href = `mailto:${galleryInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitStatus('success')
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;d love to hear from you. Visit our gallery or get in touch with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">{galleryInfo.email}</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">{galleryInfo.phone}</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">{galleryInfo.address}</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Opening Hours</h3>
              <p className="text-gray-600">Tue-Fri: 10AM-6PM<br />Sat: 10AM-4PM</p>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
            <div className="p-4 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Find Us</h3>
              <p className="text-gray-600">Interactive Map</p>
            </div>
            <div className="relative w-full h-96 bg-gray-100">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.074845102959!2d14.1095!3d46.3695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764d5f3b3b3b3b3%3A0x1a1a1a1a1a1a1a1a!2s${encodeURIComponent(galleryInfo.address)}!5e0!3m2!1sen!2sus!4v1630000000000`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                onError={(e) => {
                  // Hide the iframe and show fallback on error
                  const target = e.target as HTMLIFrameElement;
                  if (target) {
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.map-fallback');
                    if (fallback) {
                      (fallback as HTMLElement).style.display = 'flex';
                    }
                  }
                }}
              ></iframe>
              {/* Fallback content */}
              <div className="map-fallback absolute inset-0 hidden flex-col items-center justify-center bg-gray-100 text-gray-600">
                <MapPin className="h-12 w-12 mb-4 text-gray-400" />
                <h4 className="text-lg font-semibold mb-2">Location</h4>
                <p className="text-center px-4">
                  {galleryInfo.address}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(galleryInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our artwork or exhibitions? We&apos;d love to hear from you.
            </p>
          </div>

          {submitStatus === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700 mb-4">Your email app should now be open with your message ready to send. We&apos;ll get back to you within 24 hours.</p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="px-6 py-2 border border-green-300 text-green-700 bg-white rounded-md hover:bg-green-50 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="artwork">Artwork Information</option>
                    <option value="purchase">Purchase Inquiry</option>
                    <option value="exhibition">Exhibition Information</option>
                    <option value="visit">Plan a Visit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition-colors inline-flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center mt-4">Something went wrong. Please try again.</p>
              )}
              <p className="text-xs text-gray-500 text-center mt-4">
                * Required fields. We&apos;ll respond to your inquiry within 24 hours.
              </p>
            </form>
          )}

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gallery Hours</h3>
              <ul className="space-y-2 text-gray-600">
                {galleryInfo.hours && Object.entries(galleryInfo.hours).map(([day, hours]) => (
                  <li key={day}>
                    <strong className="capitalize">{day}:</strong> {hours}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Private viewings</li>
                <li>• Art consultation</li>
                <li>• Custom framing services</li>
                <li>• Art investment advice</li>
                <li>• Exhibition hosting</li>
                <li>• Artist representation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
