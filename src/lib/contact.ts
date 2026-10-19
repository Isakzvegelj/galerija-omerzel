import { galleryInfo } from '@/data/gallery'
export function emailDraftUrl(subject: string, body: string) {
  return `mailto:${galleryInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
export const contactCopy = {
  en: {
    eyebrow: 'GALERIJA OMERZEL · BLED', title: 'Let’s talk about art.',
    intro: 'Seen a work you love? Ask about availability, details or a visit to the gallery.',
    email: 'Email the gallery', call: 'Call us', directions: 'Get directions',
    visit: 'Find us in Bled', visitNote: 'Please call ahead to confirm opening hours before travelling.',
    formTitle: 'Start a conversation', formIntro: 'Tell us what caught your eye, or how we can help.',
    name: 'Your name', emailLabel: 'Your email', phone: 'Phone (optional)', subject: 'What would you like to ask?',
    subjects: ['Artwork availability & price', 'Plan a gallery visit', 'Shipping & collection', 'Other question'],
    message: 'Your message', placeholder: 'If you are asking about an artwork, include its reference or a link to the photograph.',
    prepare: 'Open email draft', hint: 'This opens your email app. Review the draft and press Send there to send your enquiry.',
    ready: 'Your draft is ready to send', readyNote: 'Your email app should open. Nothing has been sent by this website. Your message is still here if you need it.',
    copy: 'Copy enquiry', copied: 'Enquiry copied', copyFailed: 'Could not copy automatically. You can select and copy your message below.',
    fallback: 'No email app? Copy your enquiry, open your webmail and send it to', required: 'Required fields',
    subjectDefault: 'Gallery website enquiry', nameError: 'Please enter your name.', messageError: 'Please enter a message.',
    mapTitle: 'Map showing Galerija Omerzel in Bled', mapLink: 'Open in Google Maps',
  },
  sl: {
    eyebrow: 'GALERIJA OMERZEL · BLED', title: 'Pogovorimo se o umetnosti.',
    intro: 'Vam je katero delo še posebej všeč? Pišite nam za informacije o razpoložljivosti, podrobnostih ali obisku galerije.',
    email: 'Pišite galeriji', call: 'Pokličite nas', directions: 'Navodila za pot',
    visit: 'Obiščite nas na Bledu', visitNote: 'Pred prihodom nas pokličite in preverite odpiralni čas.',
    formTitle: 'Stopite v stik z nami', formIntro: 'Povejte nam, kaj vas je pritegnilo ali kako vam lahko pomagamo.',
    name: 'Vaše ime', emailLabel: 'Vaš e-naslov', phone: 'Telefon (neobvezno)', subject: 'Kaj vas zanima?',
    subjects: ['Razpoložljivost in cena dela', 'Obisk galerije', 'Dostava in prevzem', 'Drugo vprašanje'],
    message: 'Vaše sporočilo', placeholder: 'Če sprašujete o umetniškem delu, dodajte njegovo referenco ali povezavo do fotografije.',
    prepare: 'Odpri osnutek e-pošte', hint: 'Odpre se vaša e-poštna aplikacija. Preverite osnutek in v njej pritisnite Pošlji.',
    ready: 'Vaš osnutek je pripravljen', readyNote: 'Odpreti bi se morala vaša e-poštna aplikacija. Spletna stran sporočila ni poslala. Vaše besedilo ostane tukaj, če ga potrebujete.',
    copy: 'Kopiraj povpraševanje', copied: 'Povpraševanje je kopirano', copyFailed: 'Samodejno kopiranje ni uspelo. Spodaj lahko označite in kopirate svoje sporočilo.',
    fallback: 'Se e-poštna aplikacija ne odpre? Kopirajte povpraševanje, odprite svoj e-poštni predal in ga pošljite na', required: 'Obvezna polja',
    subjectDefault: 'Povpraševanje prek spletne strani galerije', nameError: 'Vnesite svoje ime.', messageError: 'Vnesite sporočilo.',
    mapTitle: 'Zemljevid z lokacijo Galerije Omerzel na Bledu', mapLink: 'Odpri v Google Zemljevidih',
  },
}
