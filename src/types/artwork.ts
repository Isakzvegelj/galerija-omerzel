export type ArtworkCategory = 'painting' | 'sculpture' | 'digital' | 'photography' | 'drawing' | 'printmaking' | 'mixed-media' | 'digital-art' | 'contemporary' | 'other';

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  description: string;
  year: number;
  price?: number;
  currency: string;
  category: ArtworkCategory;
  medium: string;
  dimensions: {
    width: number;
    height: number;
    unit: string;
  };
  images: ArtworkImage[];
  reference?: string;
  titleSl?: string;
  target?: string;
  targetSl?: string;
  partialPhoto?: boolean;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ArtworkImage {
  focus?: { x: number; y: number; width: number; height: number };
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
  width: number;
  height: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
  phone?: string;
}

export interface GalleryInfo {
  name: string;
  fullName: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  owner: {
    name: string;
    title: string;
  };
  hours?: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}


