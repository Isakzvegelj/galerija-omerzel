#!/bin/bash

# Script to crop artwork images to focus on single artworks
# This creates centered crops without overwriting originals

echo "Starting image cropping process..."

# Create cropped versions of sculpture images
echo "Cropping sculpture images..."
for img in /Users/isakzvegelj/omerzel-gallery/public/images/artworks/sculptures/*.jpeg; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        output="/Users/isakzvegelj/omerzel-gallery/public/images/artworks/cropped/sculpture_${filename}"

        # Get image dimensions
        dimensions=$(ffprobe -v quiet -print_format json -show_format -show_streams "$img" | grep -E '"width"|"height"' | head -2 | awk -F': ' '{print $2}' | tr -d ',' | tr '\n' ' ')

        read width height <<< "$dimensions"

        if [ ! -z "$width" ] && [ ! -z "$height" ]; then
            # Create a centered crop (80% of original size)
            crop_width=$((width * 8 / 10))
            crop_height=$((height * 8 / 10))
            offset_x=$(( (width - crop_width) / 2 ))
            offset_y=$(( (height - crop_height) / 2 ))

            ffmpeg -i "$img" -vf "crop=${crop_width}:${crop_height}:${offset_x}:${offset_y}" -y "$output" 2>/dev/null
            echo "Cropped: $filename"
        fi
    fi
done

# Create cropped versions of painting images
echo "Cropping painting images..."
for img in /Users/isakzvegelj/omerzel-gallery/public/images/artworks/paintings/*.jpeg; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        output="/Users/isakzvegelj/omerzel-gallery/public/images/artworks/cropped/painting_${filename}"

        # Get image dimensions
        dimensions=$(ffprobe -v quiet -print_format json -show_format -show_streams "$img" | grep -E '"width"|"height"' | head -2 | awk -F': ' '{print $2}' | tr -d ',' | tr '\n' ' ')

        read width height <<< "$dimensions"

        if [ ! -z "$width" ] && [ ! -z "$height" ]; then
            # Create a centered crop (85% of original size for paintings)
            crop_width=$((width * 85 / 100))
            crop_height=$((height * 85 / 100))
            offset_x=$(( (width - crop_width) / 2 ))
            offset_y=$(( (height - crop_height) / 2 ))

            ffmpeg -i "$img" -vf "crop=${crop_width}:${crop_height}:${offset_x}:${offset_y}" -y "$output" 2>/dev/null
            echo "Cropped: $filename"
        fi
    fi
done

# Create cropped versions of contemporary images
echo "Cropping contemporary images..."
for img in /Users/isakzvegelj/omerzel-gallery/public/images/artworks/contemporary/*.jpeg; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        output="/Users/isakzvegelj/omerzel-gallery/public/images/artworks/cropped/contemporary_${filename}"

        # Get image dimensions
        dimensions=$(ffprobe -v quiet -print_format json -show_format -show_streams "$img" | grep -E '"width"|"height"' | head -2 | awk -F': ' '{print $2}' | tr -d ',' | tr '\n' ' ')

        read width height <<< "$dimensions"

        if [ ! -z "$width" ] && [ ! -z "$height" ]; then
            # Create a centered crop (90% of original size for contemporary pieces)
            crop_width=$((width * 9 / 10))
            crop_height=$((height * 9 / 10))
            offset_x=$(( (width - crop_width) / 2 ))
            offset_y=$(( (height - crop_height) / 2 ))

            ffmpeg -i "$img" -vf "crop=${crop_width}:${crop_height}:${offset_x}:${offset_y}" -y "$output" 2>/dev/null
            echo "Cropped: $filename"
        fi
    fi
done

echo "Image cropping completed!"
echo "Cropped images saved to: /Users/isakzvegelj/omerzel-gallery/public/images/artworks/cropped/"
