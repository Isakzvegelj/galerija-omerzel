#!/usr/bin/env python3
"""
Script to set up Mallorca trip images for the photo album.
This script copies images from ~/Downloads/Mallorca/ to the public/images/mallorca/ directory.
"""

import os
import shutil
from pathlib import Path

def setup_mallorca_images():
    # Source directory (where user exports images from Photos app)
    source_dir = Path.home() / "Downloads" / "Mallorca"

    # Destination directory (where the gallery expects images)
    gallery_dir = Path(__file__).parent / "public" / "images" / "mallorca"

    # Ensure destination directory exists
    gallery_dir.mkdir(parents=True, exist_ok=True)

    if not source_dir.exists():
        print(f"Source directory {source_dir} does not exist.")
        print("Please export your Mallorca images from Photos app to ~/Downloads/Mallorca/")
        return

    # Get all image files
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.tiff'}
    image_files = [f for f in source_dir.iterdir() if f.is_file() and f.suffix.lower() in image_extensions]

    if not image_files:
        print(f"No image files found in {source_dir}")
        return

    print(f"Found {len(image_files)} image files. Copying to gallery...")

    # Copy images with standardized names
    copied_count = 0
    for i, img_file in enumerate(sorted(image_files), 1):
        # Create a standardized filename
        ext = img_file.suffix.lower()
        new_name = f"image-{i:02d}{ext}"

        dest_file = gallery_dir / new_name

        try:
            shutil.copy2(img_file, dest_file)
            print(f"Copied: {img_file.name} -> {new_name}")
            copied_count += 1
        except Exception as e:
            print(f"Error copying {img_file.name}: {e}")

    print(f"\nSuccessfully copied {copied_count} images to {gallery_dir}")
    print("You can now view your Mallorca album at: http://localhost:3000/mallorca")

if __name__ == "__main__":
    setup_mallorca_images()