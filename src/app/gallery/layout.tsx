import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Art Collection",
  description: "Browse the Galerija Omerzel art collection in Bled. View artwork photographs and contact the gallery for details.",
  alternates: { canonical: 'https://gallerybled.com/gallery/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
