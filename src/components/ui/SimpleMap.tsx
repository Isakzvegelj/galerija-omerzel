'use client'

import { MapPin } from 'lucide-react'

interface SimpleMapProps {
  address: string
  className?: string
}

export function SimpleMap({ address, className = '' }: SimpleMapProps) {
  
  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <div className="h-64 w-full bg-gradient-to-br from-blue-100 to-blue-200 relative">
        {/* Map-like background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-6 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className="border border-blue-300/30"
                style={{
                  backgroundColor: i % 3 === 0 ? 'rgba(59, 130, 246, 0.1)' : 'transparent'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Location marker */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -top-1 -left-1 w-10 h-10 bg-red-500/20 rounded-full animate-ping"></div>
          </div>
        </div>
        
        {/* Location info overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <MapPin className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Galerija Omerzel</h3>
              <p className="text-sm text-gray-600">{address}</p>
            </div>
          </div>
        </div>
        
        {/* Interactive button */}
        <div className="absolute top-4 right-4">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 backdrop-blur-sm hover:bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors shadow-sm"
          >
            View on Maps
          </a>
        </div>
      </div>
    </div>
  )
}
