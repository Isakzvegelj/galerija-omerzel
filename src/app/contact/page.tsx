'use client'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { galleryInfo, galleryGoogleMapsEmbedUrl, galleryGoogleMapsUrl } from '@/data/gallery'
import { ContactForm } from '@/components/ui/ContactForm'
import { useTranslation } from '@/lib/TranslationContext'
import { contactCopy } from '@/lib/contact'

export default function Contact() {
  const { language } = useTranslation()
  const c = contactCopy[language]
  const links = [
    { icon: Mail, title: c.email, detail: galleryInfo.email, href: `mailto:${galleryInfo.email}` },
    { icon: Phone, title: c.call, detail: galleryInfo.phone, href: `tel:${galleryInfo.phone.replace(/\s/g, '')}` },
    { icon: MapPin, title: c.directions, detail: galleryInfo.address, href: galleryGoogleMapsUrl },
  ]
  return (
    <div className="min-h-screen bg-[#faf9f6] text-navy-900 dark:bg-navy-900 dark:text-stone-100">
      <section className="border-b border-stone-200 px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20 dark:border-navy-700">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-amber-900 dark:text-gold-300">{c.eyebrow}</p>
          <h1 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">{c.title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">{c.intro}</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:px-8 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <div className="divide-y divide-stone-200 dark:divide-navy-600">
            {links.map(({ icon: Icon, title, detail, href }) => <a key={href} href={href} {...(href.startsWith('https') ? {target: '_blank', rel: 'noopener noreferrer'} : {})} className="hover-contact group flex items-start gap-4 py-6 first:pt-0">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-300 bg-white transition group-hover:border-amber-800 dark:border-navy-600 dark:bg-navy-800"><Icon className="h-5 w-5 text-amber-900 dark:text-gold-300" aria-hidden="true" /></span>
              <span className="min-w-0 flex-1"><span className="block text-sm text-stone-500 dark:text-stone-300">{title}</span><span className="mt-1 block break-words text-base font-medium group-hover:underline sm:text-lg">{detail}</span></span>
              <ArrowUpRight className="mt-3 h-4 w-4 shrink-0 text-stone-500 dark:text-stone-300" aria-hidden="true" />
            </a>)}
          </div>
          <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-5 dark:border-navy-600 dark:bg-navy-800">
            <h2 className="font-medium">{c.visit}</h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">{c.visitNote}</p>
          </div>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-8 dark:border-navy-600 dark:bg-navy-900">
          <h2 className="text-2xl font-medium tracking-tight">{c.formTitle}</h2>
          <p className="mb-7 mt-2 text-sm text-stone-600 dark:text-stone-300">{c.formIntro}</p>
          <ContactForm />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-8 sm:pb-20" aria-label={c.visit}>
        <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-navy-600 dark:bg-navy-900">
          <iframe title={c.mapTitle} src={galleryGoogleMapsEmbedUrl} className="h-64 w-full border-0 sm:h-80" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <p className="text-sm text-stone-600 dark:text-stone-300">{galleryInfo.address}</p>
            <a href={galleryGoogleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium underline underline-offset-4">{c.mapLink}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </div>
  )
}
