'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { ArtworkImage } from '@/types/artwork'
import variants from '@/data/image-variants.json'
import { assetPath } from '@/lib/utils'

const renditions: Record<string, {width:number;url:string}[]> = variants

// The SVG viewport selects a region of the real photograph without changing any
// artwork pixels. Full-photo mode marks that exact region in its original context.
export function ArtworkProductImage({image,reference,fullPhoto=false,detail=false,thumbnail=false,priority=false,className=''}:{
  image: ArtworkImage; reference?: string; fullPhoto?: boolean; detail?: boolean;
  priority?: boolean; thumbnail?: boolean; className?: string
}) {
  const element = useRef<SVGSVGElement>(null)
  const [visible,setVisible] = useState(priority)
  const titleId=useId()
  useEffect(()=>{
    if(visible) return
    if(!('IntersectionObserver' in window)){setVisible(true);return}
    const observer=new IntersectionObserver(entries=>{
      if(entries.some(entry=>entry.isIntersecting)){setVisible(true);observer.disconnect()}
    },{rootMargin:'240px'})
    if(element.current) observer.observe(element.current)
    return()=>observer.disconnect()
  },[visible])
  const f=image.focus || {x:0,y:0,width:1,height:1}
  const candidates=renditions[image.url] || []
  const desired=thumbnail ? Math.ceil(56/Math.max(f.width,.2)) : detail ? 1280 : Math.min(1280,Math.ceil(400/Math.max(f.width,.2)))
  const source=candidates.find(candidate=>candidate.width>=desired) || candidates.at(-1)
  const crop=[f.x*image.width,f.y*image.height,f.width*image.width,f.height*image.height]
  const viewBox=fullPhoto?`0 0 ${image.width} ${image.height}`:crop.join(' ')
  const clipId=`artwork-clip-${titleId.replace(/[^a-zA-Z0-9_-]/g,'')}`
  const clip=fullPhoto?[0,0,image.width,image.height]:crop
  const stroke=Math.max(image.width,image.height)*.004
  return (
    <svg ref={element} role="img" aria-labelledby={titleId} viewBox={viewBox} preserveAspectRatio="xMidYMid meet" className={`h-full w-full ${className}`} data-product-reference={reference} data-photo={image.id}>
      <title id={titleId}>{image.alt}</title>
      <defs><clipPath id={clipId}><rect x={clip[0]} y={clip[1]} width={clip[2]} height={clip[3]}/></clipPath></defs>
      {visible && <image clipPath={`url(#${clipId})`} href={assetPath(source?.url || image.url)} x="0" y="0" width={image.width} height={image.height} />}
      {fullPhoto && <>
        <rect x={crop[0]} y={crop[1]} width={crop[2]} height={crop[3]} fill="none" stroke="#172033" strokeWidth={stroke*2.2} />
        <rect x={crop[0]} y={crop[1]} width={crop[2]} height={crop[3]} fill="none" stroke="#f5d17b" strokeWidth={stroke} />
      </>}
    </svg>
  )
}
