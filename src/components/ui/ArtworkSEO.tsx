import { Metadata } from 'next'
import { Artwork } from '@/types/artwork'

// Visual descriptions and photo references are known. Artist, date, dimensions,
// materials, provenance and offers require a verified gallery catalogue.
export function generateArtworkMetadata(artwork:Artwork):Metadata{
  const image=artwork.images.find(image=>image.isPrimary)||artwork.images[0]
  const title=`${artwork.title} · ${artwork.reference||artwork.id}`
  return {title:`${title} | Galerija Omerzel`,description:artwork.target||artwork.description,
    openGraph:{title,description:artwork.target||artwork.description,type:'article',images:image?[{url:image.url,width:image.width,height:image.height,alt:image.alt}]:[]},
    twitter:{card:'summary_large_image',title,description:artwork.target||artwork.description,images:image?[image.url]:[]}}
}
export function ArtworkStructuredData({artwork}:{artwork:Artwork}){
  const image=artwork.images.find(image=>image.isPrimary)||artwork.images[0]
  const data={'@context':'https://schema.org','@type':'VisualArtwork',name:artwork.title,identifier:artwork.reference||artwork.id,description:artwork.target||artwork.description,artform:artwork.category,url:`https://gallerybled.com/gallery/?artwork=${encodeURIComponent(artwork.reference||artwork.id)}`,image:image?{'@type':'ImageObject',url:image.url,width:image.width,height:image.height}:undefined}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/>
}
