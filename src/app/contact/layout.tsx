import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact & Visit",
  description: "Contact Galerija Omerzel in Bled, Slovenia. Find the gallery address, directions and contact details to plan your visit.",
  alternates: { canonical: 'https://gallerybled.com/contact/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
