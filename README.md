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
- **Artwork Management**: Local/demo add, edit, and delete interface
- **Demo Access**: Client-side password gate for local review only
- **Local Updates**: Changes are kept in browser state and are not a publishing backend

## Tech Stack

- **Framework**: Next.js 15 with App Router
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

The published site is a static export and does not require environment variables.
Keep local-only secrets in `.env.local`; never commit them.

The former AI image-enhancement endpoint was removed because server routes cannot
be included in the GitHub Pages static export. Artwork inquiries use the contact
form and email links instead.

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

The current configuration uses `output: 'export'` for GitHub Pages. Run:

```bash
npm ci
npm run lint
npm run build
```

Publish the generated `out/` directory. The configured project base path is
`/galerija-omerzel`.

## Admin Access

The public static build does not include an admin route. Add administration
only after implementing server-backed authentication and persistent storage.

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