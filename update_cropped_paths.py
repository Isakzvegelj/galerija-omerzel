#!/usr/bin/env python3
"""
Script to update artwork image paths to use cropped versions
This allows switching between original and cropped images as needed
"""

import re
import os

def update_artwork_paths():
    """Update artwork data to use cropped image paths"""

    artworks_file = "/Users/isakzvegelj/omerzel-gallery/src/data/artworks.ts"

    # Read the current file
    with open(artworks_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern to find image URLs in GALERIJAO artworks
    pattern = r'url:\s*[\'"](/images/artworks/(sculptures|paintings|contemporary)/([^\'"]+\.jpeg))[\'"]'

    def replace_url(match):
        original_url = match.group(1)
        category = match.group(2)
        filename = match.group(3)

        # Create cropped version path
        cropped_url = f"/images/artworks/cropped/{category}_{filename}"
        return f'url: \'{cropped_url}\''

    # Replace URLs
    updated_content = re.sub(pattern, replace_url, content)

    # Write back to file
    with open(artworks_file, 'w', encoding='utf-8') as f:
        f.write(updated_content)

    print("Updated artwork paths to use cropped images")
    print("To revert, you can manually change the paths back to original locations")

if __name__ == "__main__":
    update_artwork_paths()
