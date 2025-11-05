# Multi-Location Implementation TODO

## Status: READY TO COMMIT (Pending Vegas Quote Form)

---

## ✅ COMPLETED

### Phase 1: Portland Site Mirror
- [x] Created `/portland/` directory with complete site mirror
- [x] Updated all canonical URLs to `https://veroautoglass.com/portland/`
- [x] Updated all Open Graph URLs for proper social sharing
- [x] Copied all images and resources
- [x] All Portland contact info intact (971-317-8376, Tigard address)

### Phase 2: Las Vegas Site
- [x] Created `/las-vegas/` directory with complete site
- [x] Updated all canonical URLs to `https://veroautoglass.com/las-vegas/`
- [x] Updated all Open Graph URLs
- [x] Updated phone number throughout: **(702) 276-6749**
- [x] Updated address: **2300 W Sahara Ave #800, Las Vegas, NV 89102**
- [x] Updated schema markup (both AutoRepair and Organization)
- [x] Updated service areas: Las Vegas, Henderson, Paradise, Summerlin, North Las Vegas, Enterprise, Spring Valley
- [x] Updated all visible text (hero, footer, contact page, etc.)
- [x] Fixed all tel: links to proper format (+17022766749)

### Phase 3: Location Selector
- [x] Created `/locations.html` with both locations active
- [x] Portland card links to `/portland/`
- [x] Las Vegas card links to `/las-vegas/` (activated, no longer "Coming Soon")
- [x] Professional design with proper branding

---

## 🚨 BLOCKING ISSUE - CANNOT COMMIT YET

### Vegas Quote Form Iframe Missing

**Location**: `/las-vegas/contact.html` line 297-305

**Current Problem**:
The Las Vegas site currently uses the **Portland quote form**:
```html
<iframe
    id="quoter-iframe"
    src="https://app.omegaedi.com/quoter/?folder=veroautoglass&redirect_url=https%3A%2F%2Fveroautoglass.com%2Fthank-you.html&primary_color=ff4d00&font_family=Inter&text_color=2b2b2b&accent_color=cc3d00"
    ...
</iframe>
```

**What's Needed**:
1. **Devin** needs to create/get a new Omega EDI quote form for Las Vegas
2. New iframe should have:
   - Different `folder` parameter (e.g., `folder=veroautoglass-vegas`)
   - Vegas-specific redirect: `redirect_url=https%3A%2F%2Fveroautoglass.com%2Flas-vegas%2Fthank-you.html`
   - Same styling parameters (colors, font)

**Action Required**:
- [ ] Devin provides new Vegas iframe code
- [ ] Update `/las-vegas/contact.html` line 297-305 with new iframe src
- [ ] Test form submission and redirect

---

## 📋 OPTIONAL ENHANCEMENTS (Not Blocking)

### Google My Business Setup
- [ ] Update Portland GMB profile to link to `https://veroautoglass.com/portland/`
- [ ] Create/update Las Vegas GMB profile to link to `https://veroautoglass.com/las-vegas/`
- [ ] Verify both phone numbers through Google Leads

### Sitemaps
- [ ] Create `sitemap-portland.xml`
- [ ] Create `sitemap-las-vegas.xml`
- [ ] Update main `sitemap.xml` to reference both

### Analytics
- [ ] Verify Plausible tracking works for both subfolders
- [ ] Set up goals for each location separately

### Content Review
- [ ] Review Vegas-specific content for any remaining Portland references
- [ ] Check all links work correctly in Vegas site
- [ ] Test quote form submissions (after Vegas form is added)

### Root Domain Decision
- [ ] Decide: Keep root domain as Portland site, or make it redirect to `/locations.html`?
- [ ] Current setup: Root stays as Portland (preserves SEO)
- [ ] Alternative: Make root a pure location selector

---

## 🎯 IMMEDIATE NEXT STEPS

1. **Wait for Devin** to provide Vegas quote form iframe code
2. **When received**, update `/las-vegas/contact.html` line 297-305
3. **Test locally** that both forms work
4. **Commit all changes** with message:
   ```
   feat: Add multi-location architecture (Portland + Las Vegas)

   - Created /portland/ subfolder mirroring current site
   - Created /las-vegas/ subfolder with Vegas contact info
   - Added /locations.html selector page
   - Updated all canonical URLs and schema markup
   - No breaking changes - root domain remains Portland site

   Fixes Google Leads verification issue by using URL-based routing
   instead of IP detection.
   ```

---

## 📂 File Structure Created

```
/vero/
├── index.html              (unchanged - Portland site)
├── locations.html          (NEW - location selector)
├── portland/               (NEW - complete Portland mirror)
│   ├── index.html
│   ├── services.html
│   ├── contact.html
│   ├── insurance.html
│   ├── warranty.html
│   ├── about.html
│   ├── thank-you.html
│   ├── privacy.html
│   ├── terms.html
│   ├── images/
│   └── resources/
└── las-vegas/              (NEW - complete Vegas site)
    ├── index.html
    ├── services.html
    ├── contact.html        ⚠️ NEEDS VEGAS IFRAME
    ├── insurance.html
    ├── warranty.html
    ├── about.html
    ├── thank-you.html
    ├── privacy.html
    ├── terms.html
    ├── images/
    └── resources/
```

---

## 💡 Key Design Decisions Made

### Why This Approach?
- **No IP detection** - Solves Google verification problem
- **URL-based routing** - Consistent content per URL
- **Non-breaking** - Root domain unchanged, all existing links work
- **SEO-friendly** - Proper canonical tags, schema markup per location
- **Scalable** - Easy to add more cities later

### Google Verification Solution
**Problem**: IP-based routing showed Vegas content to Google's Portland verification
**Solution**: Explicit URL structure means Google always sees correct info:
- Portland GMB → `/portland/` → sees Portland phone/address
- Vegas GMB → `/las-vegas/` → sees Vegas phone/address

---

## 📞 Contact Information Reference

### Portland
- **Phone**: 971-317-8376 (tel:+19713178376)
- **Address**: 12114 SW Garden Pl, Tigard, OR 97223
- **Areas**: Portland, Tigard, Beaverton, Lake Oswego, Tualatin, Milwaukie, Oregon City, Hillsboro

### Las Vegas
- **Phone**: (702) 276-6749 (tel:+17022766749)
- **Address**: 2300 W Sahara Ave #800, Las Vegas, NV 89102
- **Areas**: Las Vegas, Henderson, Paradise, Summerlin, North Las Vegas, Enterprise, Spring Valley

---

## 🔗 Links for Reference

- Email sent to Devin: "Website Recommendations" explaining the architecture
- Original requirement: Merge thebestautoglass.com into Vero multi-location site
- Strategy discussion: Multi-location approaches considered

---

**Last Updated**: 2025-11-01
**Status**: Waiting on Vegas quote form from Devin
**Created By**: Claude Code session with Sam
