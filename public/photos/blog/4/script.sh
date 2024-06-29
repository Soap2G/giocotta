#!/bin/bash
# Read each line from the filelist.txt
while IFS= read -r filename
do
  # Run the cwebp command for each filename
  cwebp "IMG_$filename.JPG" -o "IMG_${filename}.webp"
done < 4.txt

