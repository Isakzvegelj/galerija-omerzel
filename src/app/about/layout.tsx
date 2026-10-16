import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Galerija Omerzel",
  description: "Learn about Galerija Omerzel, an art gallery in Bled, Slovenia, and contact the gallery to plan a visit.",
  alternates: { canonical: 'https://gallerybled.com/about/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
