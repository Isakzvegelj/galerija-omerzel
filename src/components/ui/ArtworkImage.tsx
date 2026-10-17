import { useEffect, useRef, useState, type ImgHTMLAttributes } from 'react'
import variants from '@/data/image-variants.json'

const imageVariants: Record<string, { width: number; url: string }[]> = variants

type ArtworkImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
  fill?: boolean
  priority?: boolean
  deferUntilVisible?: boolean
}

// These files are generated ahead of time: GitHub Pages has no image optimizer.
export function ArtworkImage({ src, alt, fill, priority, deferUntilVisible = false, style, ...props }: ArtworkImageProps) {
  const imageRef = useRef<HTMLImageElement>(null)
  const [nearViewport, setNearViewport] = useState(!deferUntilVisible)
  useEffect(() => {
    if (!deferUntilVisible || nearViewport) return
    if (!('IntersectionObserver' in window)) {
      setNearViewport(true)
      return
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setNearViewport(true)
        observer.disconnect()
      }
    }, { rootMargin: '240px' })
    if (imageRef.current) observer.observe(imageRef.current)
    return () => observer.disconnect()
  }, [deferUntilVisible, nearViewport])
  const candidates = imageVariants[src]
  const fallback = candidates?.find(image => image.width >= 640) ?? candidates?.at(-1)
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      ref={imageRef}
      alt={alt}
      src={nearViewport ? (fallback?.url ?? src) : undefined}
      srcSet={nearViewport ? candidates?.map(image => `${image.url} ${image.width}w`).join(', ') : undefined}
      loading={priority ? 'eager' : (props.loading ?? 'lazy')}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      style={fill ? { position: 'absolute', inset: 0, width: '100%', height: '100%', ...style } : style}
    />
  )
}
