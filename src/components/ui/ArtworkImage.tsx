import type { ImgHTMLAttributes } from 'react'
import variants from '@/data/image-variants.json'

const imageVariants: Record<string, { width: number; url: string }[]> = variants

type ArtworkImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
  fill?: boolean
  priority?: boolean
}

// These files are generated ahead of time: GitHub Pages has no image optimizer.
export function ArtworkImage({ src, alt, fill, priority, style, ...props }: ArtworkImageProps) {
  const candidates = imageVariants[src]
  const fallback = candidates?.find(image => image.width >= 640) ?? candidates?.at(-1)
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      alt={alt}
      src={fallback?.url ?? src}
      srcSet={candidates?.map(image => `${image.url} ${image.width}w`).join(', ')}
      loading={priority ? 'eager' : (props.loading ?? 'lazy')}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      style={fill ? { position: 'absolute', inset: 0, width: '100%', height: '100%', ...style } : style}
    />
  )
}
