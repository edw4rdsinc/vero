#!/bin/bash

echo "Adding ContactPage Action schema to contact.html..."

CONTACT_ACTION='    <!-- ContactPage with Actions Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Vero Autoglass",
        "description": "Get a free quote for windshield repair or replacement. Call us or fill out our form for fast service in Portland Metro.",
        "url": "https://www.veroautoglass.com/contact.html",
        "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Vero Autoglass",
            "telephone": "971-317-8376"
        },
        "potentialAction": [
            {
                "@type": "CommunicateAction",
                "name": "Call for Quote",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "tel:971-317-8376",
                    "actionPlatform": [
                        "http://schema.org/DesktopWebPlatform",
                        "http://schema.org/MobileWebPlatform"
                    ]
                }
            },
            {
                "@type": "OrderAction",
                "name": "Request Quote Online",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.veroautoglass.com/contact.html",
                    "actionPlatform": [
                        "http://schema.org/DesktopWebPlatform",
                        "http://schema.org/MobileWebPlatform"
                    ]
                }
            }
        ]
    }
    </script>
'

# Insert after the Breadcrumb schema
awk -v action="$CONTACT_ACTION" '
/<!-- Organization Schema -->/ && !inserted {
    print action
    inserted = 1
}
{ print }
' contact.html > contact.html.tmp && mv contact.html.tmp contact.html

echo "  ✓ Added ContactPage Action schema to contact.html"
echo "Done!"
