import { Artwork } from '@/types/artwork';

export const mockArtworks: Artwork[] = [
  // GALERIJAO Collection - Sculptures
  {
    id: 'galerijao-sculpture-1',
    title: 'Abstract Form Study I',
    artist: 'Contemporary Slovenian Artist',
    description: 'A powerful abstract sculpture from our GALERIJAO collection, showcasing bold geometric forms that challenge traditional sculptural conventions.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'sculpture',
    medium: 'Mixed media on bronze base',
    dimensions: {
      width: 45,
      height: 120,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-sculpture-1-1',
        url: '/images/artworks/cropped/sculpture_IMG_8390.jpeg',
        alt: 'Abstract Form Study I - Contemporary Slovenian Sculpture',
        isPrimary: true,
        width: 1200,
        height: 1600
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-sculpture-2',
    title: 'Geometric Harmony',
    artist: 'Contemporary Slovenian Artist',
    description: 'An exquisite example of contemporary Slovenian sculpture demonstrating masterful craftsmanship in metalwork.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'sculpture',
    medium: 'Welded steel with patina finish',
    dimensions: {
      width: 35,
      height: 95,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-sculpture-2-1',
        url: '/images/artworks/cropped/sculpture_IMG_8395.jpeg',
        alt: 'Geometric Harmony - Modern Slovenian Sculpture',
        isPrimary: true,
        width: 1200,
        height: 1600
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-sculpture-4',
    title: 'Bronze Abstract',
    artist: 'Contemporary Slovenian Artist',
    description: 'A striking bronze sculpture that explores the interplay between mass and void in contemporary abstraction.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'sculpture',
    medium: 'Bronze casting',
    dimensions: {
      width: 38,
      height: 85,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-sculpture-4-1',
        url: '/images/artworks/cropped/sculpture_IMG_8406.jpeg',
        alt: 'Bronze Abstract - Contemporary Slovenian Sculpture',
        isPrimary: true,
        width: 1200,
        height: 1600
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-sculpture-5',
    title: 'Metal Fusion',
    artist: 'Contemporary Slovenian Artist',
    description: 'An innovative metal sculpture that combines traditional welding techniques with contemporary design.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'sculpture',
    medium: 'Welded steel and bronze',
    dimensions: {
      width: 42,
      height: 105,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-sculpture-5-1',
        url: '/images/artworks/cropped/sculpture_IMG_8407.jpeg',
        alt: 'Metal Fusion - Contemporary Slovenian Sculpture',
        isPrimary: true,
        width: 1200,
        height: 1600
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-sculpture-6',
    title: 'Stone Harmony',
    artist: 'Contemporary Slovenian Artist',
    description: 'A serene stone sculpture that captures the natural beauty of Slovenian stone materials.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'sculpture',
    medium: 'Carved limestone',
    dimensions: {
      width: 35,
      height: 90,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-sculpture-6-1',
        url: '/images/artworks/cropped/sculpture_IMG_8410.jpeg',
        alt: 'Stone Harmony - Contemporary Slovenian Sculpture',
        isPrimary: true,
        width: 1200,
        height: 1600
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },

  // GALERIJAO Collection - Paintings
  {
    id: 'galerijao-painting-1',
    title: 'Slovenian Landscape Study',
    artist: 'Contemporary Slovenian Artist',
    description: 'A masterful landscape painting that captures the dramatic beauty of Slovenian terrain with contemporary techniques.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'painting',
    medium: 'Oil on canvas',
    dimensions: {
      width: 80,
      height: 60,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-painting-1-1',
        url: '/images/artworks/cropped/painting_IMG_8400.jpeg',
        alt: 'Slovenian Landscape Study - Contemporary Painting',
        isPrimary: true,
        width: 1200,
        height: 900
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-painting-2',
    title: 'Abstract Composition in Blue',
    artist: 'Contemporary Slovenian Artist',
    description: 'A vibrant abstract painting that explores color theory and emotional expression in contemporary Slovenian art.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'painting',
    medium: 'Acrylic on canvas',
    dimensions: {
      width: 70,
      height: 50,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-painting-2-1',
        url: '/images/artworks/cropped/painting_IMG_8420.jpeg',
        alt: 'Abstract Composition in Blue - Contemporary Slovenian Painting',
        isPrimary: true,
        width: 1200,
        height: 857
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-painting-3',
    title: 'Urban Reflections',
    artist: 'Contemporary Slovenian Artist',
    description: 'A compelling urban landscape that captures the modern face of Slovenian cities through contemporary artistic vision.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'painting',
    medium: 'Mixed media on canvas',
    dimensions: {
      width: 75,
      height: 55,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-painting-3-1',
        url: '/images/artworks/cropped/painting_IMG_8450.jpeg',
        alt: 'Urban Reflections - Contemporary Slovenian Painting',
        isPrimary: true,
        width: 1200,
        height: 785
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-painting-4',
    title: 'Mountain Vista',
    artist: 'Contemporary Slovenian Artist',
    description: 'A breathtaking landscape painting capturing the majesty of Slovenian mountains through contemporary artistic expression.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'painting',
    medium: 'Oil on canvas',
    dimensions: {
      width: 90,
      height: 70,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-painting-4-1',
        url: '/images/artworks/cropped/painting_IMG_8393.jpeg',
        alt: 'Mountain Vista - Contemporary Slovenian Painting',
        isPrimary: true,
        width: 1200,
        height: 900
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-painting-5',
    title: 'Color Field Study',
    artist: 'Contemporary Slovenian Artist',
    description: 'An innovative color field painting that explores pure color relationships and emotional resonance.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'painting',
    medium: 'Acrylic on canvas',
    dimensions: {
      width: 65,
      height: 45,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-painting-5-1',
        url: '/images/artworks/cropped/painting_IMG_8392.jpeg',
        alt: 'Color Field Study - Contemporary Slovenian Painting',
        isPrimary: true,
        width: 1200,
        height: 857
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-painting-6',
    title: 'Urban Geometry',
    artist: 'Contemporary Slovenian Artist',
    description: 'A dynamic urban landscape that captures the geometric patterns of modern Slovenian cities.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'painting',
    medium: 'Mixed media on canvas',
    dimensions: {
      width: 80,
      height: 60,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-painting-6-1',
        url: '/images/artworks/cropped/painting_IMG_8393.jpeg',
        alt: 'Urban Geometry - Contemporary Slovenian Painting',
        isPrimary: true,
        width: 1200,
        height: 900
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-painting-7',
    title: 'Light and Shadow',
    artist: 'Contemporary Slovenian Artist',
    description: 'A masterful study of light and shadow demonstrating advanced understanding of tonal relationships.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'painting',
    medium: 'Oil on canvas',
    dimensions: {
      width: 75,
      height: 55,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-painting-7-1',
        url: '/images/artworks/cropped/painting_IMG_8394.jpeg',
        alt: 'Light and Shadow - Contemporary Slovenian Painting',
        isPrimary: true,
        width: 1200,
        height: 785
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-painting-8',
    title: 'Abstract Forms',
    artist: 'Contemporary Slovenian Artist',
    description: 'A bold abstract composition that explores geometric forms and spatial relationships in contemporary art.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'painting',
    medium: 'Acrylic on canvas',
    dimensions: {
      width: 70,
      height: 50,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-painting-8-1',
        url: '/images/artworks/cropped/painting_IMG_8396.jpeg',
        alt: 'Abstract Forms - Contemporary Slovenian Painting',
        isPrimary: true,
        width: 1200,
        height: 857
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-painting-9',
    title: 'Nature\'s Rhythm',
    artist: 'Contemporary Slovenian Artist',
    description: 'An expressive painting that captures the natural rhythms of Slovenian landscapes.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'painting',
    medium: 'Oil on canvas',
    dimensions: {
      width: 85,
      height: 65,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-painting-9-1',
        url: '/images/artworks/cropped/painting_IMG_8399.jpeg',
        alt: 'Nature\'s Rhythm - Contemporary Slovenian Painting',
        isPrimary: true,
        width: 1200,
        height: 900
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-painting-10',
    title: 'Emotional Landscape',
    artist: 'Contemporary Slovenian Artist',
    description: 'A deeply personal interpretation of Slovenian landscapes that explores emotional connection between artist and environment.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'painting',
    medium: 'Mixed media on canvas',
    dimensions: {
      width: 90,
      height: 70,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-painting-10-1',
        url: '/images/artworks/cropped/painting_IMG_8401.jpeg',
        alt: 'Emotional Landscape - Contemporary Slovenian Painting',
        isPrimary: true,
        width: 1200,
        height: 900
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },

  // Additional Paintings
  {
    id: 'galerijao-painting-11',
    title: 'Morning Light',
    artist: 'Contemporary Slovenian Artist',
    description: 'A serene landscape capturing the gentle morning light over Slovenian hills, painted with delicate brushstrokes.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'painting',
    medium: 'Oil on canvas',
    dimensions: {
      width: 85,
      height: 65,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-painting-11-1',
        url: '/images/artworks/cropped/painting_IMG_8402.jpeg',
        alt: 'Morning Light - Contemporary Slovenian Painting',
        isPrimary: true,
        width: 1200,
        height: 900
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-painting-12',
    title: 'Urban Geometry II',
    artist: 'Contemporary Slovenian Artist',
    description: 'A dynamic exploration of urban forms and architectural elements in contemporary Slovenian cities.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'painting',
    medium: 'Mixed media on canvas',
    dimensions: {
      width: 80,
      height: 60,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-painting-12-1',
        url: '/images/artworks/cropped/painting_IMG_8403.jpeg',
        alt: 'Urban Geometry II - Contemporary Slovenian Painting',
        isPrimary: true,
        width: 1200,
        height: 900
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-painting-13',
    title: 'Lake Reflections',
    artist: 'Contemporary Slovenian Artist',
    description: 'A mesmerizing painting of Lake Bled with its iconic church, capturing the perfect reflections on calm waters.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'painting',
    medium: 'Oil on canvas',
    dimensions: {
      width: 100,
      height: 75,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-painting-13-1',
        url: '/images/artworks/cropped/painting_IMG_8404.jpeg',
        alt: 'Lake Reflections - Contemporary Slovenian Painting',
        isPrimary: true,
        width: 1200,
        height: 900
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-painting-14',
    title: 'Autumn Colors',
    artist: 'Contemporary Slovenian Artist',
    description: 'A vibrant celebration of autumn foliage in the Slovenian countryside, painted with rich, warm tones.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'painting',
    medium: 'Acrylic on canvas',
    dimensions: {
      width: 70,
      height: 50,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-painting-14-1',
        url: '/images/artworks/cropped/painting_IMG_8405.jpeg',
        alt: 'Autumn Colors - Contemporary Slovenian Painting',
        isPrimary: true,
        width: 1200,
        height: 857
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },

  // Additional Sculptures
  {
    id: 'galerijao-sculpture-7',
    title: 'Bronze Torso',
    artist: 'Contemporary Slovenian Artist',
    description: 'A powerful bronze sculpture of the human form, showcasing masterful casting and anatomical precision.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'sculpture',
    medium: 'Bronze casting',
    dimensions: {
      width: 40,
      height: 110,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-sculpture-7-1',
        url: '/images/artworks/cropped/sculpture_IMG_8397.jpeg',
        alt: 'Bronze Torso - Contemporary Slovenian Sculpture',
        isPrimary: true,
        width: 1200,
        height: 1600
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-sculpture-8',
    title: 'Abstract Steel Form',
    artist: 'Contemporary Slovenian Artist',
    description: 'An innovative steel sculpture that explores negative space and geometric relationships.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'sculpture',
    medium: 'Welded steel',
    dimensions: {
      width: 50,
      height: 140,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-sculpture-8-1',
        url: '/images/artworks/cropped/sculpture_IMG_8398.jpeg',
        alt: 'Abstract Steel Form - Contemporary Slovenian Sculpture',
        isPrimary: true,
        width: 1200,
        height: 1600
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-sculpture-9',
    title: 'Marble Serenity',
    artist: 'Contemporary Slovenian Artist',
    description: 'A serene marble sculpture that captures the timeless beauty of natural stone materials.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'sculpture',
    medium: 'Carved marble',
    dimensions: {
      width: 45,
      height: 95,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-sculpture-9-1',
        url: '/images/artworks/cropped/sculpture_IMG_8411.jpeg',
        alt: 'Marble Serenity - Contemporary Slovenian Sculpture',
        isPrimary: true,
        width: 1200,
        height: 1600
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
  {
    id: 'galerijao-sculpture-10',
    title: 'Kinetic Movement',
    artist: 'Contemporary Slovenian Artist',
    description: 'A dynamic kinetic sculpture that explores movement and balance in three-dimensional space.',
    year: 2024,
    price: undefined,
    currency: 'EUR',
    category: 'sculpture',
    medium: 'Mixed metals with moving elements',
    dimensions: {
      width: 60,
      height: 120,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-sculpture-10-1',
        url: '/images/artworks/cropped/sculpture_IMG_8413.jpeg',
        alt: 'Kinetic Movement - Contemporary Slovenian Sculpture',
        isPrimary: true,
        width: 1200,
        height: 1600
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },

];

// Descriptive catalogue labels are based on visible image content. These are
// not verified original artwork titles; replace with artist/gallery-supplied
// titles once the inventory is confirmed.
const visualArtworkLabels: Record<string, { title: string; alt: string }> = {
  'galerijao-sculpture-1': {
    title: 'Pink Roses in a Dark Frame',
    alt: 'Gallery photograph of a framed painting of pink, white and yellow roses.',
  },
  'galerijao-sculpture-2': {
    title: 'Lady Justice with Scales',
    alt: 'Gallery photograph of a standing female figure holding scales and a sword.',
  },
  'galerijao-sculpture-4': {
    title: 'Surreal Rotunda with Floating Figures',
    alt: 'Gallery photograph of a framed surreal painting with a domed interior and floating figures.',
  },
  'galerijao-sculpture-5': {
    title: 'Portrait of a White-Haired Man',
    alt: 'Gallery photograph of a framed portrait showing a white-haired man in profile.',
  },
  'galerijao-sculpture-6': {
    title: 'Alpine Lake and Church Landscape',
    alt: 'Gallery photograph of a framed mountain landscape with a lake and church tower.',
  },
  'galerijao-painting-1': {
    title: 'Woman with Fruit and Decorative Bull',
    alt: 'Gallery display of a painted female figure holding fruit above a decorative bull sculpture.',
  },
  'galerijao-painting-2': {
    title: 'Seated Dog Sculpture',
    alt: 'Gallery photograph of a dark seated dog sculpture beside blue-and-white vases.',
  },
  'galerijao-painting-3': {
    title: 'Seaside Town and Boats',
    alt: 'Gallery photograph of a framed painting of a coastal town above blue water and boats.',
  },
  'galerijao-painting-4': {
    title: 'Horse and Rider Sculpture',
    alt: 'Gallery photograph of a bronze-toned horse and rider sculpture.',
  },
  'galerijao-painting-5': {
    title: 'Rhinoceros Sculpture and Winged Figure',
    alt: 'Gallery display with a large rhinoceros sculpture and a smaller winged figure.',
  },
  'galerijao-painting-6': {
    title: 'Horse and Rider Sculpture — Gallery View',
    alt: 'Gallery photograph of a bronze-toned horse and rider sculpture among other works.',
  },
  'galerijao-painting-7': {
    title: 'Classical Figure Sculptures on Display',
    alt: 'Gallery display of several classical-style female and male figure sculptures.',
  },
  'galerijao-painting-8': {
    title: 'Marble Torso amid Gallery Sculptures',
    alt: 'White marble torso sculpture in the foreground of a gallery display.',
  },
  'galerijao-painting-9': {
    title: 'Bearded Man Bust',
    alt: 'Close view of a sculpted bearded man’s head on a small pedestal.',
  },
  'galerijao-painting-10': {
    title: 'Sculpted Hand',
    alt: 'Gallery photograph of a sculpted hand displayed among other objects.',
  },
  'galerijao-painting-11': {
    title: 'Mother and Child Sculpture',
    alt: 'Gallery display featuring a sculpted adult holding a child, with other figures nearby.',
  },
  'galerijao-painting-12': {
    title: 'Horse Figures in a Sculpture Display',
    alt: 'Gallery display of several horse and rider sculptures viewed from above.',
  },
  'galerijao-painting-13': {
    title: 'Horse Sculpture among Decorative Objects',
    alt: 'Gallery display with a large horse sculpture and smaller decorative figures.',
  },
  'galerijao-painting-14': {
    title: 'Standing Male Figure Sculpture',
    alt: 'Gallery photograph of a dark standing male figure sculpture among other artworks.',
  },
  'galerijao-sculpture-7': {
    title: 'Lady Justice with Scales — Gallery View',
    alt: 'Gallery photograph of a female figure sculpture holding scales and a sword, surrounded by framed art.',
  },
  'galerijao-sculpture-8': {
    title: 'White Horse in a Framed Painting',
    alt: 'Gallery photograph of a framed painting of a white horse in a green landscape.',
  },
  'galerijao-sculpture-9': {
    title: 'Alpine Lake and Church Landscape — Framed View',
    alt: 'Front view of a framed mountain landscape with a lake and church tower.',
  },
  'galerijao-sculpture-10': {
    title: 'Yellow Figures in a Dark Painting',
    alt: 'Gallery photograph of a framed painting with yellow animal-like figures against a dark background.',
  },
};

const visualCategories: Record<string, Artwork['category']> = {
  'galerijao-sculpture-1': 'painting',
  'galerijao-sculpture-2': 'sculpture',
  'galerijao-sculpture-4': 'painting',
  'galerijao-sculpture-5': 'painting',
  'galerijao-sculpture-6': 'painting',
  'galerijao-painting-1': 'sculpture',
  'galerijao-painting-2': 'sculpture',
  'galerijao-painting-3': 'painting',
  'galerijao-painting-4': 'sculpture',
  'galerijao-painting-5': 'sculpture',
  'galerijao-painting-6': 'sculpture',
  'galerijao-painting-7': 'sculpture',
  'galerijao-painting-8': 'sculpture',
  'galerijao-painting-9': 'sculpture',
  'galerijao-painting-10': 'sculpture',
  'galerijao-painting-11': 'sculpture',
  'galerijao-painting-12': 'sculpture',
  'galerijao-painting-13': 'sculpture',
  'galerijao-painting-14': 'sculpture',
  'galerijao-sculpture-7': 'sculpture',
  'galerijao-sculpture-8': 'painting',
  'galerijao-sculpture-9': 'painting',
  'galerijao-sculpture-10': 'painting',
};

for (const artwork of mockArtworks) {
  const category = visualCategories[artwork.id];
  if (category) artwork.category = category;
  const labels = visualArtworkLabels[artwork.id];
  if (!labels) continue;
  artwork.title = labels.title;
  const primaryImage = artwork.images.find(image => image.isPrimary) ?? artwork.images[0];
  if (primaryImage) primaryImage.alt = labels.alt;
}
