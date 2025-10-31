#!/bin/bash

# Google tracking snippet to add
TRACKING_SNIPPET='    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16463589701"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('"'"'js'"'"', new Date());

      gtag('"'"'config'"'"', '"'"'AW-16463589701'"'"');
    </script>'

# List of HTML files to process
FILES=(
    "contact.html"
    "debug-omega-redirect.html"
    "google-conversion-tracking.html"
    "insurance.html"
    "manual-redirect-button.html"
    "privacy.html"
    "services.html"
    "terms.html"
    "test-conversion-tracking.html"
    "thank-you.html"
    "warranty.html"
)

# Add tracking snippet to each file
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        # Check if the tracking code already exists
        if grep -q "AW-16463589701" "$file"; then
            echo "Tracking already exists in $file, skipping..."
        else
            echo "Adding tracking to $file..."
            # Create a temporary file
            temp_file=$(mktemp)

            # Process the file
            awk -v snippet="$TRACKING_SNIPPET" '
                /<\/head>/ {
                    print ""
                    print snippet
                }
                { print }
            ' "$file" > "$temp_file"

            # Replace the original file
            mv "$temp_file" "$file"
            echo "✓ Added tracking to $file"
        fi
    else
        echo "File $file not found, skipping..."
    fi
done

echo "Done processing all files!"