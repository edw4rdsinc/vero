# Remaining Schema Improvements (Require Content)

This document lists all schema markup improvements that **require new content to be created or gathered** before implementation. The schemas marked as "DONE" in Phase 1 have been implemented and are now live.

---

## ✅ PHASE 1 COMPLETED (No Content Required)

These have been implemented and pushed to production:

1. **Organization Schema** - Added to all 9 main pages ✅
2. **WebPage Schema** - Added to privacy.html, terms.html ✅
3. **ContactPage with Actions** - Added to contact.html ✅
4. **ConfirmAction** - Added to thank-you.html ✅
5. **BreadcrumbList** - Added to privacy.html, terms.html, thank-you.html ✅

**Current Schema Coverage:** 9/13 pages (69%) - up from 6/13 (46%)

---

## 🔴 PHASE 2: REQUIRES CONTENT

### 1. Review Schema (AggregateRating + Individual Reviews)

**Location:** Homepage (index.html)
**Priority:** HIGH - Strong local SEO signal
**Content Needed:**
- 10-20 authentic customer reviews with:
  - Full reviewer name (first + last)
  - Review date (ISO format: YYYY-MM-DD)
  - Star rating (1-5)
  - Review text (2-3 sentences minimum)
  - Optional: reviewer location (city, state)
- Calculate aggregate metrics:
  - Average rating (e.g., 4.8)
  - Total review count

**Why it matters:** Google uses reviews as a top-3 local ranking factor. Review schema increases click-through rates by 15-35%.

**Example Implementation:**
```json
{
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "47",
  "bestRating": "5",
  "worstRating": "1"
}
```

**Action Items:**
- [ ] Collect reviews from past customers (email campaign?)
- [ ] Get written permission to use names and testimonials
- [ ] Verify all reviews are authentic (no fake reviews)
- [ ] Calculate aggregate rating from real data

---

### 2. Video Schema (Instructional/Educational Content)

**Location:** Homepage, Services page, Resources section
**Priority:** MEDIUM - Growing importance for voice/visual search
**Content Needed:**
- Create 3-5 short videos (2-5 minutes each):
  - "How to Tell if Your Windshield Needs Replacement"
  - "What is ADAS Calibration and Why It Matters"
  - "Mobile vs In-Shop Windshield Service"
  - "Understanding Your Auto Glass Warranty"
- For each video:
  - Upload to YouTube or Vimeo
  - Create thumbnail image (1280x720px minimum)
  - Write video description (150-200 words)
  - Get embed URL and video duration

**Why it matters:** Video schema increases visibility in Google Video Search and can appear as rich results. Voice assistants prioritize video content.

**Example Implementation:**
```json
{
  "@type": "VideoObject",
  "name": "ADAS Calibration Explained",
  "description": "Learn why ADAS recalibration is mandatory after windshield replacement...",
  "thumbnailUrl": "https://veroautoglass.com/videos/adas-thumb.jpg",
  "uploadDate": "2025-01-15",
  "duration": "PT3M47S",
  "contentUrl": "https://youtube.com/watch?v=...",
  "embedUrl": "https://youtube.com/embed/..."
}
```

**Action Items:**
- [ ] Script 3-5 educational videos
- [ ] Record videos (smartphone quality is fine)
- [ ] Upload to YouTube/Vimeo
- [ ] Create custom thumbnails
- [ ] Get embed codes and URLs

---

### 3. Enhanced LocalBusiness Schema (Pricing + Additional Details)

**Location:** Homepage (index.html)
**Priority:** MEDIUM - Helps with "how much does X cost" queries
**Content Needed:**
- **Pricing information** (can be ranges):
  - Windshield repair: $X - $Y
  - Windshield replacement: $X - $Y (OEM vs aftermarket)
  - ADAS calibration: $X - $Y
  - Side window replacement: $X - $Y
- **Operating hours:**
  - Monday-Friday: X AM - Y PM
  - Saturday: X AM - Y PM
  - Sunday: Closed (or hours)
- **Founder/Owner name** (for "founder" field)
- **Year founded** (optional but recommended)
- **Payment methods accepted:**
  - Cash, Credit Cards, Insurance Direct Billing, etc.

**Why it matters:** Price information answers common user queries and can appear in Google's local pack. Operating hours help Google show "Open Now" badges.

**Example Addition:**
```json
{
  "@type": "AutoRepair",
  "priceRange": "$$",
  "founder": {
    "@type": "Person",
    "name": "John Doe"
  },
  "foundingDate": "2020",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "paymentAccepted": "Cash, Credit Card, Insurance"
}
```

**Action Items:**
- [ ] Get approved pricing ranges (min-max for each service)
- [ ] Confirm business hours for schema
- [ ] Get founder/owner name and founding year
- [ ] List accepted payment methods

---

### 4. HowTo Schema (Step-by-Step Guides)

**Location:** Resources section, Services page
**Priority:** MEDIUM-LOW - Good for featured snippets
**Content Needed:**
- Create 2-3 detailed "How To" guides:
  - "How to Schedule a Windshield Replacement with Vero"
  - "How to File an Insurance Claim for Auto Glass"
  - "How to Check if Your ADAS Needs Calibration"
- Each guide needs:
  - Clear step-by-step instructions (4-8 steps)
  - Brief description for each step (1-2 sentences)
  - Optional: images for each step
  - Total time estimate
  - Any tools/materials needed

**Why it matters:** HowTo schema can appear as rich results with step-by-step visual guides in search results. High engagement format.

**Example Implementation:**
```json
{
  "@type": "HowTo",
  "name": "How to Schedule a Windshield Replacement",
  "totalTime": "PT10M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Call or Fill Out Online Form",
      "text": "Contact Vero by phone at 971-317-8376 or submit the online quote form with your vehicle details.",
      "url": "https://veroautoglass.com/contact.html"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Get Your Quote",
      "text": "Receive an accurate quote within minutes, including glass type, labor, and ADAS calibration if needed."
    }
    // ... more steps
  ]
}
```

**Action Items:**
- [ ] Write step-by-step guides for 2-3 common processes
- [ ] Review guides for accuracy and completeness
- [ ] Get approval from owner/manager
- [ ] Optional: Create step images

---

### 5. Service Schema Enhancements (Specific Service Pages)

**Location:** Services page (expand existing Service schema)
**Priority:** MEDIUM - Helps with service-specific queries
**Content Needed:**
- For each service type, add:
  - Detailed description (100-150 words)
  - Average service duration (e.g., "1 hour" or "2-3 hours")
  - Service area covered (zip codes or cities)
  - Any warranties or guarantees (e.g., "Lifetime warranty")
- Service types to enhance:
  - Windshield Repair
  - Windshield Replacement
  - ADAS Calibration
  - Side Window Replacement
  - Back Glass Replacement
  - Sunroof Repair

**Why it matters:** Enhanced service schema helps Google understand exactly what services you offer and match them to user queries like "windshield repair near me".

**Example Enhancement:**
```json
{
  "@type": "Service",
  "serviceType": "Windshield Replacement",
  "description": "Professional windshield replacement using OEM or premium aftermarket glass...",
  "provider": {
    "@type": "AutoRepair",
    "name": "Vero Autoglass"
  },
  "areaServed": ["Portland", "Tigard", "Beaverton", "Lake Oswego"],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "200-600",
    "warranty": {
      "@type": "WarrantyPromise",
      "durationOfWarranty": "P999Y"
    }
  }
}
```

**Action Items:**
- [ ] Write detailed descriptions for each service
- [ ] Get accurate time estimates for each service
- [ ] Define warranty terms clearly
- [ ] Get approved pricing ranges per service

---

### 6. FAQ Schema Expansion

**Location:** Homepage, Services, Insurance pages
**Priority:** LOW - Already have FAQ on homepage, but can expand
**Content Needed:**
- Create additional FAQs for specific pages:
  - Services page: Technical questions about process
  - Insurance page: Coverage and claims questions
  - Warranty page: Warranty terms and conditions
- Need 3-5 new Q&A pairs per page
- Each answer should be 2-3 sentences minimum

**Why it matters:** FAQ schema can appear as rich results and helps answer common questions directly in search results. Can increase CTR by 10-20%.

**Example Implementation:**
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you accept insurance for windshield replacement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we work directly with all major insurance companies and can bill them directly. In many cases, windshield replacement is covered with zero out-of-pocket cost."
      }
    }
  ]
}
```

**Action Items:**
- [ ] Identify most common customer questions per page
- [ ] Write clear, concise answers
- [ ] Review for accuracy
- [ ] Get approval from owner

---

### 7. WebSite Schema with SiteNavigationElement

**Location:** Homepage (sitewide)
**Priority:** LOW - Nice to have for breadcrumb trails
**Content Needed:**
- Define main navigation structure
- List primary pages and their URLs
- Organize by importance/hierarchy

**Why it matters:** Helps search engines understand site structure and can improve sitelinks in search results.

**Example Implementation:**
```json
{
  "@type": "WebSite",
  "name": "Vero Autoglass",
  "url": "https://www.veroautoglass.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.veroautoglass.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

**Action Items:**
- [ ] Decide if site search is needed (probably not)
- [ ] Can implement without search functionality using basic WebSite schema

---

## 📊 SUMMARY

### Total Schema Types Available: 15
- **Implemented (Phase 1):** 5 ✅
- **Requires Content (Phase 2):** 7 🔴
- **Optional/Low Priority:** 3 ⚪

### Implementation Priority:

**HIGH PRIORITY (Implement Next):**
1. Review Schema - Major local SEO factor
2. Enhanced LocalBusiness - Pricing + hours = better local visibility

**MEDIUM PRIORITY (Implement Within 1-2 Months):**
3. Video Schema - Growing importance
4. HowTo Schema - Good for featured snippets
5. Service Schema Enhancements - Better service matching

**LOW PRIORITY (Implement When Resources Allow):**
6. FAQ Expansion - Already have basic FAQ
7. WebSite Schema - Minor improvement

---

## 🎯 RECOMMENDED NEXT STEPS

1. **Start collecting customer reviews** (easiest to implement, highest ROI)
   - Email past customers
   - Set up Google Business Profile review collection
   - Offer small incentive (e.g., "$5 off next service")

2. **Document pricing and hours** (business owner can provide this quickly)
   - Get approved price ranges
   - Confirm operating hours
   - Get founder name and founding year

3. **Create video content** (requires more effort but very valuable)
   - Start with 1-2 simple videos
   - Can record on smartphone
   - Focus on most-asked questions

4. **Expand FAQ and Service descriptions** (copywriting task)
   - Can be done incrementally
   - Doesn't require special resources

---

## 📈 EXPECTED IMPACT

Implementing all Phase 2 schemas could result in:
- **15-25% increase in organic traffic** (from better rich result visibility)
- **20-35% increase in click-through rates** (review stars + rich snippets)
- **10-15% increase in conversion rate** (from better-qualified traffic)
- **Improved local pack rankings** (reviews + pricing + hours)

**Estimated Time to Implement All:**
- Phase 1 (DONE): 2-3 hours ✅
- Phase 2 (Content creation): 15-20 hours (spread over 2-3 weeks)
  - Reviews: 3-5 hours
  - Pricing/hours: 1 hour
  - Videos: 8-10 hours
  - Copywriting: 3-4 hours

---

*Last Updated: 2025-10-30*
*Generated by Claude Code during Vero SEO schema optimization project*
