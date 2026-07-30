'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

// Dynamically import the map to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

interface InteractiveMapProps {
  address: string
  className?: string
}

export function InteractiveMap({ address, className = '' }: InteractiveMapProps) {
  const [isClient, setIsClient] = useState(false)
  const [mapError, setMapError] = useState(false)

  // Coordinates for Bled, Slovenia (approximate location for Polje 4)
  const coordinates: [number, number] = [46.3619, 14.0947]

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className={`bg-gray-200 rounded-lg h-64 flex items-center justify-center ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-gray-500">Loading map...</p>
        </div>
      </div>
    )
  }

  if (mapError) {
    return (
      <div className={`bg-gray-200 rounded-lg h-64 flex items-center justify-center ${className}`}>
        <div className="text-center">
          <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500">Interactive Map</p>
          <p className="text-sm text-gray-400">{address}</p>
          <button 
            onClick={() => setMapError(false)}
            className="mt-2 text-blue-600 hover:text-blue-800 text-sm"
          >
            Try again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <div className="h-64 w-full">
        <MapContainer
          center={coordinates}
          zoom={15}
          style={{ height: '100%', width: '100%' }}
          className="rounded-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates}>
            <Popup>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-1">Galerija Omerzel</h3>
                <p className="text-sm text-gray-600 mb-2">{address}</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <p>Art Gallery in Bled, Slovenia</p>
                  <p>Contemporary & Traditional Art</p>
                </div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

// Fallback map component using Google Maps embed
export function GoogleMapsEmbed({ address, className = '' }: InteractiveMapProps) {
  const encodedAddress = encodeURIComponent(address)
  
  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <div className="h-64 w-full">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?q=${encodedAddress}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        />
      </div>
    </div>
  )
}

// Simple static map using MapBox
export function StaticMap({ address, className = '' }: InteractiveMapProps) {
  const coordinates = [46.3619, 14.0947] // Bled coordinates
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''
  
  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <div className="h-64 w-full">
        <Image
          src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+ff0000(${coordinates[1]},${coordinates[0]})/${coordinates[1]},${coordinates[0]},15,0/600x300@2x?access_token=${mapboxToken}`}
          alt={`Map showing ${address}`}
          width={600}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-md">
          <p className="text-sm font-medium text-gray-900">Galerija Omerzel</p>
          <p className="text-xs text-gray-600">{address}</p>
        </div>
      </div>
    </div>
  )
}
