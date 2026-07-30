import Link from 'next/link'
import { Palette, MapPin, Phone, Mail } from 'lucide-react'
import { galleryInfo } from '@/data/gallery'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Gallery Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Palette className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold">{galleryInfo.name}</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {galleryInfo.description}
            </p>
            <p className="text-gray-400 text-sm">
              Owner: {galleryInfo.owner.name}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{galleryInfo.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{galleryInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`mailto:${galleryInfo.email}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {galleryInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            {galleryInfo.hours ? (
              <div className="space-y-1 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span>{galleryInfo.hours.monday}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuesday</span>
                  <span>{galleryInfo.hours.tuesday}</span>
                </div>
                <div className="flex justify-between">
                  <span>Wednesday</span>
                  <span>{galleryInfo.hours.wednesday}</span>
                </div>
                <div className="flex justify-between">
                  <span>Thursday</span>
                  <span>{galleryInfo.hours.thursday}</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>{galleryInfo.hours.friday}</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>{galleryInfo.hours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>{galleryInfo.hours.sunday}</span>
                </div>
              </div>
            ) : (
              <p className="text-gray-400 text-sm">Hours to be announced</p>
            )}

            {/* Quick Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-2">Quick Links</h4>
              <div className="flex flex-col space-y-1">
                <Link href="/gallery" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                  Gallery
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {galleryInfo.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
