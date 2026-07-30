#!/usr/bin/env python3
"""
Script to generate the mallorca-photos.ts data file with all images.
"""

import os
from pathlib import Path

def generate_mallorca_data():
    # Path to the images directory
    images_dir = Path(__file__).parent / "public" / "images" / "mallorca"

    if not images_dir.exists():
        print(f"Images directory {images_dir} does not exist.")
        return

    # Get all image files
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.tiff'}
    image_files = sorted([f for f in images_dir.iterdir() if f.is_file() and f.suffix.lower() in image_extensions])

    if not image_files:
        print("No image files found.")
        return

    # Generate the TypeScript data
    data_lines = [
        'import { Artwork } from \'@/types/artwork\';',
        '',
        'export const mallorcaPhotos: Artwork[] = ['
    ]

    # Sample locations and descriptions for variety
    locations = [
        'Cala d\'Or, Mallorca', 'Cap de Formentor, Mallorca', 'Alcúdia, Mallorca',
        'Valldemossa, Mallorca', 'Cala Sant Vicenç, Mallorca', 'Palma, Mallorca',
        'Cala Millor, Mallorca', 'Cala Ratjada, Mallorca', 'Port de Sóller, Mallorca',
        'Deià, Mallorca', 'Llucmajor, Mallorca', 'Campos, Mallorca',
        'Santanyí, Mallorca', 'Ses Salines, Mallorca', 'Felanitx, Mallorca'
    ]

    descriptions = [
        'Beautiful sunset view capturing the golden hour light',
        'Stunning landscape showcasing Mallorca\'s natural beauty',
        'Charming street scene in a traditional Mallorcan town',
        'Peaceful monastery surrounded by mountains',
        'Crystal clear waters and pine-fringed beaches',
        'Historic architecture and vibrant city life',
        'Secluded cove with turquoise Mediterranean waters',
        'Dramatic cliffs overlooking the sea',
        'Traditional Mallorcan village with whitewashed houses',
        'Mountain vista with olive groves and vineyards',
        'Coastal promenade with colorful boats',
        'Ancient stone walls and narrow alleys',
        'Sunset over the Mediterranean Sea',
        'Local market with fresh produce and flowers',
        'Rugged coastline and hidden coves'
    ]

    for i, img_file in enumerate(image_files, 1):
        ext = img_file.suffix.lower()
        filename = img_file.name

        # Cycle through locations and descriptions
        location = locations[(i-1) % len(locations)]
        description = descriptions[(i-1) % len(descriptions)]

        # Create title based on location
        title_parts = location.split(',')[0].strip()
        title = f"{title_parts} - Photo {i}"

        # Escape apostrophes in strings
        title_escaped = title.replace("'", "\\'")
        location_escaped = location.replace("'", "\\'")
        description_escaped = description.replace("'", "\\'")

        data_lines.append('  {')
        data_lines.append(f'    id: \'mallorca-{i}\',')
        data_lines.append(f'    title: \'{title_escaped}\',')
        data_lines.append('    artist: \'Mallorca Trip 2025\',')
        data_lines.append(f'    description: \'{description_escaped} in {location_escaped}.\',')
        data_lines.append('    year: 2025,')
        data_lines.append('    currency: \'EUR\',')
        data_lines.append('    category: \'photography\',')
        data_lines.append('    medium: \'Digital Photograph\',')
        data_lines.append('    dimensions: {')
        data_lines.append('      width: 4000,')
        data_lines.append('      height: 3000,')
        data_lines.append('      unit: \'px\'')
        data_lines.append('    },')
        data_lines.append('    images: [')
        data_lines.append('      {')
        data_lines.append(f'        id: \'mallorca-{i}-1\',')
        data_lines.append(f'        url: \'/images/mallorca/{filename}\',')
        data_lines.append(f'        alt: \'{title_escaped} - Mallorca Trip 2025\',')
        data_lines.append('        isPrimary: true,')
        data_lines.append('        width: 1200,')
        data_lines.append('        height: 900')
        data_lines.append('      }')
        data_lines.append('    ],')
        data_lines.append('    isAvailable: true,')
        data_lines.append('    createdAt: new Date(\'2025-10-08\'),')
        data_lines.append('    updatedAt: new Date(\'2025-10-08\')')
        data_lines.append('  },')

    # Remove the last comma and close the array
    if data_lines[-1].endswith(','):
        data_lines[-1] = data_lines[-1][:-1]

    data_lines.append('];')

    # Write to file
    output_file = Path(__file__).parent / "src" / "data" / "mallorca-photos.ts"
    with open(output_file, 'w') as f:
        f.write('\n'.join(data_lines))

    print(f"Generated data file with {len(image_files)} photos: {output_file}")

if __name__ == "__main__":
    generate_mallorca_data()