import { Metadata } from 'next'
import { Artwork } from '@/types/artwork'

interface ArtworkSEOProps {
  artwork: Artwork
}

export function generateArtworkMetadata(artwork: Artwork): Metadata {
  const primaryImage = artwork.images.find(img => img.isPrimary) || artwork.images[0]

  return {
    title: `${artwork.title} by ${artwork.artist} - Galerija Omerzel`,
    description: artwork.description.length > 160
      ? artwork.description.substring(0, 157) + '...'
      : artwork.description,
    keywords: [
      artwork.title,
      artwork.artist,
      'artwork',
      'painting',
      'sculpture',
      'Bled',
      'Slovenia',
      'Galerija Omerzel',
      artwork.category.replace('-', ' ')
    ].join(', '),
    openGraph: {
      title: `${artwork.title} by ${artwork.artist}`,
      description: artwork.description,
      type: 'article',
      images: primaryImage ? [{
        url: primaryImage.url,
        width: primaryImage.width,
        height: primaryImage.height,
        alt: primaryImage.alt,
      }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${artwork.title} by ${artwork.artist}`,
      description: artwork.description,
      images: primaryImage ? [primaryImage.url] : [],
    },
  }
}

export function ArtworkStructuredData({ artwork }: ArtworkSEOProps) {
  const primaryImage = artwork.images.find(img => img.isPrimary) || artwork.images[0]
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    name: artwork.title,
    creator: {
      '@type': 'Person',
      name: artwork.artist,
    },
    description: artwork.description,
    dateCreated: artwork.year?.toString(),
    artMedium: artwork.medium,
    artform: artwork.category,
    width: `${artwork.dimensions.width} ${artwork.dimensions.unit}`,
    height: `${artwork.dimensions.height} ${artwork.dimensions.unit}`,
    offers: artwork.price ? {
      '@type': 'Offer',
      price: artwork.price.toString(),
      priceCurrency: artwork.currency,
      availability: artwork.isAvailable
        ? 'https://schema.org/InStock'
        : 'https://schema.org/SoldOut',
    } : undefined,
    image: primaryImage ? {
      '@type': 'ImageObject',
      url: primaryImage.url,
      width: primaryImage.width,
      height: primaryImage.height,
    } : undefined,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}


