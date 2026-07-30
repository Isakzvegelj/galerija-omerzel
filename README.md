# Galerija Omerzel - Art Gallery Website

A modern, responsive website for Galerija Omerzel, an art gallery located in Bled, Slovenia.

## Features

### Frontend
- **Modern Design**: Clean, responsive design built with Next.js and Tailwind CSS
- **Gallery**: Interactive gallery with filtering, search, and lightbox modal
- **Pages**: Homepage, Gallery, About, Contact pages
- **SEO Optimized**: Meta tags, structured data, and social sharing
- **Performance**: Lazy loading, image optimization, and compression

### Admin Panel
- **Artwork Management**: Add, edit, and delete artworks
- **Secure Access**: Password-protected admin dashboard
- **Real-time Updates**: Changes reflect immediately on the frontend

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd omerzel-gallery
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard
│   ├── gallery/           # Gallery page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/
│   ├── admin/             # Admin components
│   ├── layout/            # Header and Footer
│   └── ui/                # Reusable UI components
├── data/                  # Mock data and gallery info
├── lib/                   # Utility functions
└── types/                 # TypeScript type definitions
```

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Admin password (change in production)
ADMIN_PASSWORD=omerzel2024
```

### Gallery Information

Edit `src/data/gallery.ts` to update:
- Gallery name and contact information
- Opening hours
- Owner details

### Adding Artworks

#### Via Admin Panel
1. Navigate to `/admin`
2. Login with the admin password
3. Use the "Add Artwork" button to add new pieces

#### Via Code (Development)
Edit `src/data/artworks.ts` to add sample artworks with:
- Title, artist, description
- Images (add to `public/images/artworks/`)
- Price, dimensions, category
- Availability status

## Image Management

### Adding Artwork Images

1. Place images in `public/images/artworks/`
2. Update the artwork data in `src/data/artworks.ts` with correct paths
3. Images will be automatically optimized by Next.js

### Image Requirements

- **Formats**: JPEG, PNG, WebP (AVIF recommended for better compression)
- **Sizes**: Various sizes will be generated automatically
- **Naming**: Use descriptive names (e.g., `lake-bled-serenity.jpg`)

## Customization

### Styling

The design uses Tailwind CSS. Key color variables are defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... blue color palette
  }
}
```

### Content

- **Gallery Info**: `src/data/gallery.ts`
- **Artworks**: `src/data/artworks.ts`
- **SEO Meta**: Update in each page component or `src/app/layout.tsx`

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy

### Other Platforms

The app is compatible with any Node.js hosting platform.

## Admin Access

- **URL**: `/admin`
- **Default Password**: `omerzel2024` (change in production)
- **Features**:
  - Add new artworks
  - Edit existing artworks
  - Delete artworks
  - Real-time gallery updates

## Performance Features

- **Image Optimization**: Automatic WebP/AVIF conversion
- **Lazy Loading**: Images load as needed
- **Code Splitting**: Automatic route-based splitting
- **Compression**: Gzip compression enabled
- **Caching**: Optimized caching headers

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Galerija Omerzel.

## Support

For technical support or questions about the website:
- Email: galerija.omerzel@gmail.com
- Phone: +386 40 855 755

---

Built with ❤️ for Galerija Omerzel, Bled, Slovenia