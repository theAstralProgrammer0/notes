#!/bin/bash

# Set the destination directory for fonts
destination_dir="./public/fonts"

# Input file containing list of font paths should be the first argument
input_file="$1"

# Check if input file is provided
if [ -z "$input_file" ]; then
  echo "Usage: $0 <input_file_path>"
  exit 1
fi

# Check if input file exists
if [ ! -f "$input_file" ]; then
  echo "Error: Input file not found at '$input_file'"
  exit 1
fi

# Create destination directory if it doesn't exist
mkdir -p "$destination_dir"

# Function to convert filename to PascalCase and remove hyphens
convert_to_pascal_case() {
  local filename="$1"
  local name_without_ext="${filename%.*}" # Remove extension
  local ext="${filename##*.}"           # Get extension
  local pascal_case_name=""

  # Convert to lowercase, replace hyphens and spaces with spaces, and split into words
  IFS=$' \t\n-' read -ra parts <<< "$(echo "$name_without_ext" | tr '[:lower:]' '[:upper:]')"

  # Capitalize each word and concatenate
  for part in "${parts[@]}"; do
    pascal_case_name+="${part^}" # Capitalize first letter
  done

  printf "%s.%s" "$pascal_case_name" "$ext" # Use printf for cleaner output
}

# Read input file line by line
while IFS= read -r source_path; do
  source_path=$(echo "$source_path" | tr -d '[:space:]') # Trim whitespace
  if [ -z "$source_path" ] || [[ "$source_path" != *".ttf" ]]; then # Skip empty lines and non-ttf files
    continue
  fi

  filename=$(basename "$source_path")
  new_filename=$(convert_to_pascal_case "$filename")
  destination_path="$destination_dir/$new_filename"

  if [ -f "$source_path" ]; then
    cp -p "$source_path" "$destination_path" # Copy and preserve metadata
    if [ $? -eq 0 ]; then
      echo "Copied and renamed: '$filename' to '$new_filename' in '$destination_dir'"
    else
      echo "Error copying '$filename'"
    fi
  else
    echo "Warning: Source file not found at '$source_path'"
  fi
done < "$input_file"

echo "Font copying and renaming process completed."
