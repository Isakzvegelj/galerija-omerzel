import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image';
import { galleryInfo } from '@/data/gallery';
import { assetPath } from '@/lib/utils';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Galerija Omerzel
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Celebrating art and connecting artists with art lovers since our founding
            </p>
            <div className="flex justify-center">
              <Link 
                href="/gallery"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Explore Our Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Galerija Omerzel was founded with a simple yet powerful vision: to create a space where art lovers can discover exceptional works from both emerging and established artists. Located in the picturesque town of Bled, Slovenia, our gallery serves as a bridge between artistic creation and appreciation.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                What started as a passion for collecting and showcasing Slovenian art has grown into a respected destination for contemporary and traditional artworks. We believe that art has the power to transform spaces, evoke emotions, and tell stories that transcend time and culture.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our carefully curated collection reflects the diverse artistic landscape of Slovenia and beyond, featuring works that range from classical paintings and sculptures to contemporary installations and digital art.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-4">25+</div>
                  <p className="text-gray-600">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Anton Omerzel
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Founder & Curator
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={assetPath("/images/owner-portrait.jpg")}
                  alt="Anton Omerzel, Founder of Galerija Omerzel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As the founder and curator of Galerija Omerzel, Anton brings decades of experience in the art world. His journey began with a deep appreciation for Slovenian cultural heritage and has evolved into a
                lifelong commitment to supporting artists and fostering artistic communities.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Anton&apos;s expertise spans various artistic mediums and styles, allowing him to provide insightful
                guidance to collectors and meaningful opportunities for artists. His passion for art is matched only
                by his dedication to creating welcoming spaces where art can be experienced and appreciated by all.
              </p>
              <div className="flex space-x-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Contact Anton
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are committed to fostering artistic excellence, supporting local artists, and creating meaningful connections between creators and collectors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Passion for Art</h3>
              <p className="text-gray-600">
                Every piece in our gallery is selected with care and passion, ensuring it resonates with both artists and collectors.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality & Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in curation, presentation, and customer service to provide exceptional experiences.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600">
                We actively support local artists and contribute to the cultural enrichment of our community in Bled and beyond.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Artistic Diversity</h3>
              <p className="text-gray-600">
                Our collection celebrates artistic diversity, showcasing various styles, mediums, and cultural perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Visit Us in Bled
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Bled, Slovenia, our gallery offers a serene environment perfect for experiencing art. The stunning natural surroundings of Lake Bled provide an inspiring backdrop for our exhibitions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">{galleryInfo.address}</p>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">{galleryInfo.phone}</p>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">{galleryInfo.email}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.074845102959!2d14.1095!3d46.3695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764d5f3b3b3b3b3%3A0x1a1a1a1a1a1a1a1a!2sBled%2C%20Slovenia!5e0!3m2!1sen!2sus!4v1630000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Discover Art?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Visit our gallery or contact us to learn more about our collection and upcoming exhibitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/gallery"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Browse Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
