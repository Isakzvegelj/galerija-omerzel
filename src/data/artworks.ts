import { Artwork } from '@/types/artwork';

export const mockArtworks: Artwork[] = [
  // GALERIJAO Collection - Sculptures
  {
    id: 'galerijao-sculpture-1',
    title: 'Abstract Form Study I',
    artist: 'Contemporary Slovenian Artist',
    description: 'A powerful abstract sculpture from our GALERIJAO collection, showcasing bold geometric forms that challenge traditional sculptural conventions.',
    year: 2024,
    price: 3200,
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
    price: 2800,
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
    price: 2900,
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
    price: 3100,
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
    price: 2700,
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
    price: 1200,
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
    price: 950,
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
    price: 1100,
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
    price: 1300,
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
    price: 1050,
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
    price: 1150,
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
    price: 1250,
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
    price: 980,
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
    price: 1180,
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
    price: 1350,
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
    price: 1280,
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
    price: 1150,
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
    price: 1450,
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
    price: 1180,
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
    price: 3200,
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
    price: 2800,
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
    price: 3500,
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
    price: 2900,
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

  // More Contemporary Works
  {
    id: 'galerijao-contemporary-1',
    title: 'Abstract Digital Composition',
    artist: 'Contemporary Slovenian Artist',
    description: 'A cutting-edge digital artwork that explores abstract forms through modern digital techniques and algorithmic art generation.',
    year: 2024,
    price: 850,
    currency: 'EUR',
    category: 'contemporary',
    medium: 'Digital print on canvas',
    dimensions: {
      width: 40,
      height: 50,
      unit: 'cm'
    },
    images: [
      {
        id: 'galerijao-contemporary-1-1',
        url: '/images/artworks/cropped/contemporary_IMG_8468.jpeg',
        alt: 'Abstract Digital Composition - Contemporary Slovenian Art',
        isPrimary: true,
        width: 800,
        height: 1200
      }
    ],
    isAvailable: true,
    createdAt: new Date('2024-09-19'),
    updatedAt: new Date('2024-09-19')
  },
];