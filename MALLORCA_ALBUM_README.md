# Mallorca Trip Photo Album

This is a beautiful photo album for your Mallorca trip memories, built using the existing gallery infrastructure.

## How to Use

### Step 1: Export Your Photos
1. Open the Photos app on your Mac
2. Select all the Mallorca trip photos
3. Export them to `~/Downloads/Mallorca/` folder
   - File → Export → Export Unmodified Original
   - Choose the Mallorca folder in Downloads

### Step 2: Set Up Images
Run the setup script to copy images to the gallery:

```bash
python3 setup-mallorca-images.py
```

This will:
- Copy all images from `~/Downloads/Mallorca/` to `public/images/mallorca/`
- Rename them with standardized names (image-01.jpg, image-02.jpg, etc.)
- Update the photo data with correct filenames

### Step 3: View Your Album
1. Make sure the development server is running:
   ```bash
   npm run dev
   ```
2. Open your browser to: `http://localhost:3000/mallorca`
3. Enjoy your photo album!

## Features

- **Beautiful Gallery Layout**: Grid view with hover effects and animations
- **Search & Filter**: Find photos by title, description, or location
- **Modal View**: Click any photo to see it full-size
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Fast Loading**: Optimized images with lazy loading

## Customizing Photo Information

Edit `src/data/mallorca-photos.ts` to customize:
- Photo titles and descriptions
- Locations and dates
- Categories and tags

## Adding More Photos

1. Export additional photos to `~/Downloads/Mallorca/`
2. Run `python3 setup-mallorca-images.py` again
3. Update the data file with new photo entries

## Troubleshooting

- **Images not showing**: Make sure they're copied to `public/images/mallorca/`
- **Server not running**: Run `npm run dev` in the project directory
- **No images found**: Check that images are in `~/Downloads/Mallorca/`

## Technical Details

- Built with Next.js and TypeScript
- Uses Framer Motion for animations
- Tailwind CSS for styling
- Responsive image optimization