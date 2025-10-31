#!/bin/bash

# Add WebPage and Breadcrumb schemas to privacy.html
echo "Adding schemas to privacy.html..."
PRIVACY_SCHEMAS='    <!-- WebPage Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy | Vero Autoglass",
        "description": "Vero Autoglass privacy policy. Learn how we collect, use, and protect your personal information when you use our auto glass services in Portland, OR.",
        "url": "https://www.veroautoglass.com/privacy.html",
        "inLanguage": "en-US",
        "isPartOf": {
            "@type": "WebSite",
            "name": "Vero Autoglass",
            "url": "https://www.veroautoglass.com"
        }
    }
    </script>

    <!-- Breadcrumb Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.veroautoglass.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Privacy Policy",
                "item": "https://www.veroautoglass.com/privacy.html"
            }
        ]
    }
    </script>'

awk -v schemas="$PRIVACY_SCHEMAS" '
/<!-- Google tag \(gtag.js\) -->/ && !inserted {
    print schemas
    inserted = 1
}
{ print }
' privacy.html > privacy.html.tmp && mv privacy.html.tmp privacy.html

echo "  ✓ Added to privacy.html"

# Add WebPage and Breadcrumb schemas to terms.html
echo "Adding schemas to terms.html..."
TERMS_SCHEMAS='    <!-- WebPage Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms of Service | Vero Autoglass",
        "description": "Vero Autoglass terms of service. Read our terms and conditions for windshield repair and replacement services in Portland, Oregon.",
        "url": "https://www.veroautoglass.com/terms.html",
        "inLanguage": "en-US",
        "isPartOf": {
            "@type": "WebSite",
            "name": "Vero Autoglass",
            "url": "https://www.veroautoglass.com"
        }
    }
    </script>

    <!-- Breadcrumb Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.veroautoglass.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Terms of Service",
                "item": "https://www.veroautoglass.com/terms.html"
            }
        ]
    }
    </script>'

awk -v schemas="$TERMS_SCHEMAS" '
/<!-- Google tag \(gtag.js\) -->/ && !inserted {
    print schemas
    inserted = 1
}
{ print }
' terms.html > terms.html.tmp && mv terms.html.tmp terms.html

echo "  ✓ Added to terms.html"

# Add ConfirmAction (Thank You page) and Breadcrumb schemas to thank-you.html
echo "Adding schemas to thank-you.html..."
THANKYOU_SCHEMAS='    <!-- Thank You Page Schema with ConfirmAction -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Thank You | Vero Autoglass",
        "description": "Thank you for contacting Vero Autoglass. We'\''ll be in touch shortly with your windshield repair or replacement quote.",
        "url": "https://www.veroautoglass.com/thank-you.html",
        "inLanguage": "en-US",
        "isPartOf": {
            "@type": "WebSite",
            "name": "Vero Autoglass",
            "url": "https://www.veroautoglass.com"
        },
        "mainEntity": {
            "@type": "ConfirmAction",
            "actionStatus": "CompletedActionStatus",
            "name": "Contact Form Submission",
            "description": "Customer has successfully submitted a quote request"
        }
    }
    </script>

    <!-- Breadcrumb Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.veroautoglass.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://www.veroautoglass.com/contact.html"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Thank You",
                "item": "https://www.veroautoglass.com/thank-you.html"
            }
        ]
    }
    </script>'

awk -v schemas="$THANKYOU_SCHEMAS" '
/<!-- Google tag \(gtag.js\) -->/ && !inserted {
    print schemas
    inserted = 1
}
{ print }
' thank-you.html > thank-you.html.tmp && mv thank-you.html.tmp thank-you.html

echo "  ✓ Added to thank-you.html"

echo "Done!"
