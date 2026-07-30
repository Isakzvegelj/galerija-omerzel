'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

interface VideoEmbedProps {
  videoId: string
  title: string
  description?: string
  platform?: 'youtube' | 'vimeo'
  className?: string
  autoplay?: boolean
  muted?: boolean
}

export function VideoEmbed({ 
  videoId, 
  title, 
  description, 
  platform = 'youtube',
  className = '',
  autoplay = false,
  muted = false
}: VideoEmbedProps) {

  const getEmbedUrl = () => {
    if (platform === 'youtube') {
      const params = new URLSearchParams({
        autoplay: autoplay ? '1' : '0',
        mute: muted ? '1' : '0',
        controls: '1',
        rel: '0',
        modestbranding: '1',
        iv_load_policy: '3'
      })
      return `https://www.youtube.com/embed/${videoId}?${params.toString()}`
    } else if (platform === 'vimeo') {
      const params = new URLSearchParams({
        autoplay: autoplay ? '1' : '0',
        muted: muted ? '1' : '0',
        controls: '1',
        title: '0',
        byline: '0',
        portrait: '0'
      })
      return `https://player.vimeo.com/video/${videoId}?${params.toString()}`
    }
    return ''
  }

  return (
    <div className={`relative group ${className}`}>
      <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
        <iframe
          src={getEmbedUrl()}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        
        {/* Overlay with video info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
            {description && (
              <p className="text-white/80 text-sm">{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// YouTube video component with custom styling
export function YouTubeVideo({ 
  videoId, 
  title, 
  description, 
  className = '',
  autoplay = false 
}: VideoEmbedProps) {
  return (
    <VideoEmbed
      videoId={videoId}
      title={title}
      description={description}
      platform="youtube"
      className={className}
      autoplay={autoplay}
    />
  )
}

// Vimeo video component
export function VimeoVideo({ 
  videoId, 
  title, 
  description, 
  className = '',
  autoplay = false 
}: VideoEmbedProps) {
  return (
    <VideoEmbed
      videoId={videoId}
      title={title}
      description={description}
      platform="vimeo"
      className={className}
      autoplay={autoplay}
    />
  )
}

// Video gallery component for multiple videos
interface VideoGalleryProps {
  videos: Array<{
    id: string
    title: string
    description?: string
    platform?: 'youtube' | 'vimeo'
    thumbnail?: string
  }>
  className?: string
}

export function VideoGallery({ videos, className = '' }: VideoGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="group cursor-pointer">
            <div 
              className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden"
              onClick={() => setSelectedVideo(video.id)}
            >
              {/* Thumbnail or video preview */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="h-12 w-12 mx-auto mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-semibold text-lg">{video.title}</h3>
                  {video.description && (
                    <p className="text-sm opacity-80 mt-1">{video.description}</p>
                  )}
                </div>
              </div>
              
              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-gray-900 ml-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <VideoEmbed
                videoId={selectedVideo}
                title={videos.find(v => v.id === selectedVideo)?.title || ''}
                description={videos.find(v => v.id === selectedVideo)?.description}
                platform={videos.find(v => v.id === selectedVideo)?.platform || 'youtube'}
                autoplay={true}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Bled-specific video component
export function BledVideo({ className = '' }: { className?: string }) {
  // Popular Bled videos (you can replace these with actual video IDs)
  const bledVideos = [
    {
      id: 'dQw4w9WgXcQ', // Replace with actual Bled video ID
      title: 'Beautiful Bled, Slovenia',
      description: 'Discover the stunning beauty of Bled and its surroundings',
      platform: 'youtube' as const
    },
    {
      id: 'jNQXAC9IVRw', // Replace with actual Bled video ID
      title: 'Lake Bled - A Hidden Gem',
      description: 'Explore the crystal-clear waters and medieval castle',
      platform: 'youtube' as const
    },
    {
      id: 'M7lc1UVf-VE', // Replace with actual Bled video ID
      title: 'Bled Island and Castle',
      description: 'Aerial views of the iconic Bled Island and castle',
      platform: 'youtube' as const
    }
  ]

  return (
    <div className={className}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Discover Beautiful Bled</h2>
        <p className="text-gray-600">
          Experience the stunning natural beauty of Bled, Slovenia, where Galerija Omerzel is located.
        </p>
      </div>
      
      <VideoGallery videos={bledVideos} />
    </div>
  )
}
