'use client'

import { useState } from 'react'
import { Sparkles, Loader2, Eye, EyeOff } from 'lucide-react'
import { Artwork } from '@/types/artwork'
import Image from 'next/image'

interface AIImageEnhancerProps {
  artwork: Artwork
}

export function AIImageEnhancer({ artwork }: AIImageEnhancerProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [enhancedPrompt, setEnhancedPrompt] = useState<string>('')
  const [generatedImage, setGeneratedImage] = useState<string>('')
  const [showEnhancer, setShowEnhancer] = useState(false)
  const [error, setError] = useState<string>('')

  const generateEnhancedImage = async () => {
    setIsGenerating(true)
    setError('')

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `${artwork.title} by ${artwork.artist}. ${artwork.description}. Style: ${artwork.category}, Medium: ${artwork.medium}`
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate image')
      }

      setEnhancedPrompt(data.enhancedPrompt)
      setGeneratedImage(data.imageUrl)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsGenerating(false)
    }
  }

  if (!showEnhancer) {
    return (
      <button
        onClick={() => setShowEnhancer(true)}
        className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-md hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium flex items-center justify-center gap-2"
      >
        <Sparkles className="h-4 w-4" />
        Enhance with AI
      </button>
    )
  }

  return (
    <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-600" />
          AI Image Enhancement
        </h3>
        <button
          onClick={() => setShowEnhancer(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <EyeOff className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            Original artwork description will be enhanced using AI to create better image generation prompts.
          </p>
          <button
            onClick={generateEnhancedImage}
            disabled={isGenerating}
            className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Generate Enhanced Version
              </>
            )}
          </button>
        </div>

        {error && (
          <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        {enhancedPrompt && (
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Enhanced Prompt:</h4>
              <div className="p-3 bg-white dark:bg-gray-800 rounded-md border text-sm text-gray-700 dark:text-gray-300">
                {enhancedPrompt}
              </div>
            </div>

            {generatedImage && (
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">AI Generated Preview:</h4>
                <div className="relative aspect-square w-full max-w-sm mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={generatedImage}
                    alt="AI Enhanced Artwork"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium">AI Enhanced Version</p>
                    <p className="text-white/80 text-xs">Preview - Connect to image generation API for full quality</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}