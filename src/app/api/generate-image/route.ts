import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

    const enhancementPrompt = `Take this artwork description and create an enhanced, more detailed prompt for AI image generation. Make it more vivid, artistic, and specific to create a better image. Focus on visual elements, style, colors, composition, and mood.

Original description: "${prompt}"

Create an enhanced prompt that would produce a high-quality, artistic image.`

    const result = await model.generateContent(enhancementPrompt)
    const response = await result.response
    const enhancedPrompt = response.text()

    // For demonstration, we'll return the enhanced prompt
    // In a real implementation, you would use this prompt with an image generation API like DALL-E, Midjourney, or Google's Imagen

    return NextResponse.json({
      success: true,
      enhancedPrompt: enhancedPrompt.trim(),
      // Placeholder image URL - in production, use the enhanced prompt with an image generation service
      imageUrl: `https://via.placeholder.com/512x512?text=${encodeURIComponent('Enhanced AI Image')}`
    })

  } catch (error) {
    console.error('Error enhancing prompt:', error)
    return NextResponse.json({ error: 'Failed to enhance prompt' }, { status: 500 })
  }
}