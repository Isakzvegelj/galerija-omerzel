'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX, Play, Pause } from 'lucide-react'

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    // Create audio element with a luxurious classical piece
    const audio = new Audio()
    audio.src = 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav' // Placeholder - in real app, use proper classical music
    audio.loop = true
    audio.volume = volume
    audio.preload = 'none'

    audioRef.current = audio

    // Auto-play on scroll (with user interaction requirement)
    const handleScroll = () => {
      if (!hasInteracted && window.scrollY > 100) {
        // Only start after user interaction
        setHasInteracted(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasInteracted, volume])

  const togglePlay = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
        setHasInteracted(true)
      }
    } catch (error) {
      console.log('Audio play failed:', error)
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return

    if (isMuted) {
      audioRef.current.volume = volume
      setIsMuted(false)
    } else {
      audioRef.current.volume = 0
      setIsMuted(true)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current && !isMuted) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 max-w-[calc(100vw-1.5rem)] bg-navy-900/90 dark:bg-navy-800/90 backdrop-blur-md rounded-full p-2 sm:p-3 shadow-2xl border border-gold-500/20">
      <div className="flex items-center space-x-3">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="p-2 rounded-full bg-gold-600 hover:bg-gold-700 text-navy-900 transition-all duration-300 hover:scale-110"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>

        {/* Volume Control */}
        <div className="hidden sm:flex items-center space-x-2">
          <button
            onClick={toggleMute}
            className="p-1 rounded-full text-navy-200 hover:text-gold-400 transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 h-1 bg-navy-600 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #eab308;
          cursor: pointer;
          border: 2px solid #0f172a;
        }

        .slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #eab308;
          cursor: pointer;
          border: 2px solid #0f172a;
        }
      `}</style>
    </div>
  )
}