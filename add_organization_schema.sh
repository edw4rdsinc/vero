#!/bin/bash

# Organization Schema to add to all pages
SCHEMA='    <!-- Organization Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Vero Autoglass",
        "url": "https://www.veroautoglass.com",
        "logo": "https://www.veroautoglass.com/images/vero-logo.png",
        "description": "Professional auto glass repair and replacement serving Portland Metro. ADAS certified, lifetime warranty, insurance billing.",
        "telephone": "971-317-8376",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "12114 SW Garden Pl",
            "addressLocality": "Tigard",
            "addressRegion": "OR",
            "postalCode": "97223",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "45.4215",
                "longitude": "-122.7698"
            },
            "geoRadius": "50000"
        },
        "sameAs": [],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "971-317-8376",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": "en"
        }
    }
    </script>'

# List of HTML files to update (excluding test/debug files)
FILES=(
    "index.html"
    "about.html"
    "contact.html"
    "insurance.html"
    "services.html"
    "warranty.html"
    "privacy.html"
    "terms.html"
    "thank-you.html"
)

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "Adding Organization schema to $file..."

        # Check if Organization schema already exists
        if grep -q '"@type": "Organization"' "$file"; then
            echo "  → Organization schema already exists in $file, skipping"
            continue
        fi

        # Use awk to insert before the Google tag script or </head>
        awk -v schema="$SCHEMA" '
        /<!-- Google tag \(gtag.js\) -->/ && !inserted {
            print schema
            inserted = 1
        }
        { print }
        ' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"

        echo "  ✓ Added to $file"
    else
        echo "  ✗ $file not found"
    fi
done

echo "Done!"
