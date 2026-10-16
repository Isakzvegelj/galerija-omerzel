import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Gallery Videos",
  description: "Explore videos from Galerija Omerzel in Bled, Slovenia, and get in touch with the gallery to learn more.",
  alternates: { canonical: 'https://gallerybled.com/videos/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
