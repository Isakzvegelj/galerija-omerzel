import Link from 'next/link'

export default function Videos() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Video Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch our featured videos showcasing the artists, exhibitions, and behind-the-scenes of Galerija Omerzel.
            </p>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Gallery Tour - Bled Art Exhibition"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Gallery Tour - Spring Exhibition 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  Take a virtual tour of our latest exhibition featuring contemporary Slovenian artists.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>5 min • 2K views</span>
                </div>
              </div>
            </div>

            {/* Add more videos as needed */}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              More Videos Coming Soon
            </h3>
            <p className="text-gray-600 mb-8">
              Subscribe to our channel for the latest videos about our artists, exhibitions, and gallery events.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.youtube.com"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Visit YouTube Channel
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Suggest a Video
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
