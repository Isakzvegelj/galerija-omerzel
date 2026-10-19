'use client'
import { useState } from 'react'
import { ArrowUpRight, Copy, Check } from 'lucide-react'
import { galleryInfo } from '@/data/gallery'
import { useTranslation } from '@/lib/TranslationContext'
import { contactCopy, emailDraftUrl } from '@/lib/contact'

export function ContactForm() {
  const { language } = useTranslation()
  const c = contactCopy[language]
  const [data, setData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [draftReady, setDraftReady] = useState(false)
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle')
  const subject = data.subject === '' ? c.subjectDefault : c.subjects[Number(data.subject)]
  const body = [`${c.name}: ${data.name.trim()}`, `${c.emailLabel}: ${data.email.trim()}`, ...(data.phone.trim() ? [`${c.phone}: ${data.phone.trim()}`] : []), '', data.message.trim()].join('\n')
  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setData(previous => ({ ...previous, [event.target.name]: event.target.value }))
    setCopyState('idle')
    setDraftReady(false)
  }
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const name = form.elements.namedItem('name') as HTMLInputElement
    const message = form.elements.namedItem('message') as HTMLTextAreaElement
    name.setCustomValidity(data.name.trim() ? '' : c.nameError)
    message.setCustomValidity(data.message.trim() ? '' : c.messageError)
    if (!form.reportValidity()) return
    setDraftReady(true)
    window.location.href = emailDraftUrl(subject, body)
  }
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${galleryInfo.email}\n${subject}\n\n${body}`)
      setCopyState('copied')
    } catch { setCopyState('error') }
  }
  const input = 'w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-navy-900 outline-none transition focus:border-amber-800 focus:ring-2 focus:ring-amber-800/20 dark:border-navy-500 dark:bg-navy-800 dark:text-white'
  const label = 'mb-2 block text-sm font-medium text-navy-800 dark:text-stone-100'
  return (
    <form onSubmit={submit} className="space-y-5">
      <p className="text-xs text-stone-500 dark:text-stone-300">* {c.required}</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="contact-name" className={label}>{c.name} *</label>
          <input id="contact-name" name="name" autoComplete="name" required maxLength={120} value={data.name} onChange={update} onInput={event => event.currentTarget.setCustomValidity('')} className={input} /></div>
        <div><label htmlFor="contact-email" className={label}>{c.emailLabel} *</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} value={data.email} onChange={update} className={input} /></div>
      </div>
      <div><label htmlFor="contact-subject" className={label}>{c.subject}</label>
        <select id="contact-subject" name="subject" value={data.subject} onChange={update} className={input}>
          <option value="">{c.subjectDefault}</option>
          {c.subjects.map((item, index) => <option key={index} value={index}>{item}</option>)}
        </select></div>
      <div><label htmlFor="contact-phone" className={label}>{c.phone}</label>
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={60} value={data.phone} onChange={update} className={input} /></div>
      <div><label htmlFor="contact-message" className={label}>{c.message} *</label>
        <textarea id="contact-message" name="message" rows={5} required maxLength={3000} value={data.message} onChange={update} onInput={event => event.currentTarget.setCustomValidity('')} placeholder={c.placeholder} className={input} /></div>
      <button type="submit" className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-navy-900 px-5 py-3 font-medium text-white transition hover:bg-navy-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-800 dark:bg-gold-400 dark:text-navy-900 dark:hover:bg-gold-300">
        {c.prepare}<ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </button>
      <p className="text-sm text-stone-600 dark:text-stone-300">{c.hint}</p>
      {draftReady && <div role="status" className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-navy-900 dark:border-gold-700 dark:bg-navy-800 dark:text-stone-100"><p className="mb-1 font-semibold">{c.ready}</p><p>{c.readyNote}</p></div>}
      <div className="border-t border-stone-200 pt-5 dark:border-navy-600">
        <p className="mb-3 text-sm text-stone-600 dark:text-stone-300">{c.fallback} <a className="break-all font-medium underline underline-offset-4" href={`mailto:${galleryInfo.email}`}>{galleryInfo.email}</a>.</p>
        <button type="button" onClick={copy} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-navy-900 underline underline-offset-4 dark:text-gold-300">{copyState === 'copied' ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}{copyState === 'copied' ? c.copied : c.copy}</button>
        <span role="status" className="block text-sm text-stone-600 dark:text-stone-300">{copyState === 'error' ? c.copyFailed : copyState === 'copied' ? c.copied : ''}</span>
      </div>
    </form>
  )
}
