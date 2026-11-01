'use client'
import { useEffect,useState } from 'react'
import { mockArtworks,findArtwork } from '@/data/artworks'
import { contextOnlyReferences } from '@/data/artwork-products'
import { ArtworkCard } from '@/components/ui/ArtworkCard'
import { ArtworkModal } from '@/components/ui/ArtworkModal'
import { Artwork } from '@/types/artwork'
import { useTranslation } from '@/lib/TranslationContext'
import { productCopy } from '@/lib/product-copy'

export default function Gallery(){
  const {language}=useTranslation(),c=productCopy[language]
  const [selected,setSelected]=useState<Artwork|null>(null),[search,setSearch]=useState(''),[category,setCategory]=useState(''),[notice,setNotice]=useState<'old'|'missing'|null>(null)
  useEffect(()=>{
    const reference=new URLSearchParams(window.location.search).get('artwork')
    if(reference){const artwork=findArtwork(reference);setSelected(artwork||null);if(!artwork)setNotice(contextOnlyReferences.includes(reference)?'old':'missing')}
  },[])
  const query=search.toLocaleLowerCase().trim()
  const results=mockArtworks.filter(a=>(!category||a.category===category)&&`${a.reference} ${a.id} ${a.title} ${a.titleSl} ${a.target} ${a.targetSl}`.toLocaleLowerCase().includes(query))
  function select(artwork:Artwork){setSelected(artwork);window.history.replaceState(null,'',`${window.location.pathname}?artwork=${encodeURIComponent(artwork.reference||artwork.id)}`)}
  function close(){setSelected(null);window.history.replaceState(null,'',window.location.pathname)}
  return <div className="min-h-screen bg-[#f6f3ed] dark:bg-navy-900">
    <section className="mx-auto max-w-7xl px-5 py-10 sm:py-14">
      <h1 className="font-serif text-3xl text-stone-900 sm:text-5xl dark:text-white">{c.gallery}</h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base dark:text-navy-200">{c.intro}</p>
      {notice&&<p role="status" className="mt-6 max-w-2xl rounded-md border border-amber-700 p-4 text-sm text-stone-900 dark:text-white">{c[notice]}</p>}
      <label htmlFor="artwork-search" className="mt-7 block text-sm font-medium text-stone-900 dark:text-white">{c.search}</label>
      <input id="artwork-search" type="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="GO-S002" className="mt-2 min-h-12 w-full max-w-xl rounded-lg border border-stone-400 bg-white px-4 text-stone-900 dark:bg-navy-800 dark:text-white"/>
      <div className="mt-5 flex flex-wrap gap-2">
        {[['',c.all],['painting',c.paintings],['sculpture',c.sculptures]].map(([value,label])=><button key={value} type="button" aria-pressed={category===value} onClick={()=>setCategory(value)} className={`min-h-11 rounded-full border px-5 py-2 text-sm ${category===value?'border-navy-900 bg-navy-900 text-white dark:border-gold-400 dark:bg-gold-400 dark:text-navy-900':'border-stone-400 text-stone-900 dark:text-white'}`}>{label}</button>)}
      </div>
      <p role="status" className="mt-5 text-sm text-stone-600 dark:text-navy-200">{results.length} {c.results}</p>
      {results.length?<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{results.map(artwork=><ArtworkCard key={artwork.id} artwork={artwork} onClick={()=>select(artwork)}/>)}</div>:<div className="py-16 text-center text-stone-900 dark:text-white"><h2 className="font-serif text-2xl">{c.empty}</h2><button type="button" onClick={()=>{setSearch('');setCategory('')}} className="mt-5 min-h-11 rounded-md border border-stone-400 px-5 py-2">{c.clear}</button></div>}
    </section>
    <ArtworkModal artwork={selected} isOpen={!!selected} onClose={close}/>
  </div>
}
