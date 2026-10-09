import { GalleryInfo } from '@/types/artwork';

export const galleryInfo: GalleryInfo = {
  name: 'Galerija Omerzel',
  fullName: 'Galerija Omerzel / Galerija Bled d.o.o.',
  address: 'Cesta svobode 19, 4260 Bled, Slovenia',
  phone: '+386 40 855 755',
  email: 'galerija.omerzel@gmail.com',
  description: 'Art gallery located in Bled, Slovenia, showcasing contemporary and traditional artworks from local and international artists.',
  owner: {
    name: 'Anton Omerzel',
    title: 'Owner & Curator'
  },
  hours: {
    monday: 'Closed',
    tuesday: '10:00 - 18:00',
    wednesday: '10:00 - 18:00',
    thursday: '10:00 - 18:00',
    friday: '10:00 - 18:00',
    saturday: '10:00 - 16:00',
    sunday: 'Closed'
  }
};

const mapsQuery = galleryInfo.address;
const mapsEmbedQuery = 'Cesta svobode 19 Bled Slovenia';

export const galleryGoogleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;
export const galleryGoogleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapsEmbedQuery)}&output=embed`;
