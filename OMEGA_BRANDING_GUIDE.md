# Omega EDI Custom Branding Configuration Guide

## Overview
Make the Omega quote form match Vero's brand identity by customizing colors, fonts, and layout.

**Goal:** Professional, branded quote display that matches veroautoglass.com

---

## Current Issue

The quote results display looks generic and unprofessional:
- Default system fonts (not Inter)
- Generic colors (not Vero orange #ff4d00)
- Poor layout spacing
- Doesn't match Vero brand

---

## Solution Options

### Option 1: URL Parameters (Already Implemented)

**What I Did:**
Added branding parameters to the iframe URL:

```html
src="https://app.omegaedi.com/quoter/
  ?folder=veroautoglass
  &redirect_url=https://veroautoglass.com/thank-you.html
  &primary_color=ff4d00
  &font_family=Inter
  &text_color=2b2b2b
  &accent_color=cc3d00"
```

**Branding Parameters:**
- `primary_color=ff4d00` - Vero orange for buttons/CTAs
- `font_family=Inter` - Match Vero website font
- `text_color=2b2b2b` - Vero dark gray for text
- `accent_color=cc3d00` - Darker orange for hover states

**Testing:**
1. Visit https://veroautoglass.com/contact.html
2. Fill out quote form
3. Check if colors/fonts match Vero brand
4. If YES: ✅ You're done!
5. If NO: Continue to Option 2

---

## Option 2: Omega EDI Admin Panel Configuration

If URL parameters don't work, configure branding in your Omega dashboard.

### Step 1: Log Into Omega EDI

1. Go to: https://app.omegaedi.com/
2. Enter your admin credentials
3. Navigate to the "veroautoglass" folder/quoter

### Step 2: Find Branding Settings

Look for menu items like:
- **Settings** → **Branding**
- **Customization** → **Appearance**
- **Theme** → **Colors**
- **Quoter Settings** → **Style**
- **Appearance** → **Custom CSS**

### Step 3: Configure Vero Brand Colors

Enter these exact values:

**Primary Color:**
```
#ff4d00
RGB: 255, 77, 0
```
Use for: Buttons, CTAs, prices, highlights

**Accent Color:**
```
#cc3d00
RGB: 204, 61, 0
```
Use for: Hover states, secondary elements

**Text Color:**
```
#2b2b2b
RGB: 43, 43, 43
```
Use for: Body text, labels, descriptions

**Background:**
```
#ffffff
RGB: 255, 255, 255
```
Use for: Card backgrounds, containers

**Border/Divider:**
```
#e5e7eb
RGB: 229, 231, 235
```
Use for: Borders, separators

### Step 4: Configure Typography

**Primary Font:**
```
Inter
```
Fallbacks: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

**Font Weights:**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

**Font Sizes:**
- Headings: 24px (1.5rem)
- Subheadings: 20px (1.25rem)
- Body: 16px (1rem)
- Small: 14px (0.875rem)

### Step 5: Layout Improvements

**Spacing:**
- Padding: 1.5rem (24px) around cards
- Gap between elements: 1rem (16px)
- Section spacing: 2rem (32px)

**Border Radius:**
- Cards: 0.75rem (12px)
- Buttons: 0.5rem (8px)
- Inputs: 0.5rem (8px)

**Price Display:**
```css
font-size: 48px;
font-weight: 700;
color: #ff4d00;
margin: 1.5rem 0;
```

---

## Option 3: Custom CSS (Advanced)

If Omega supports custom CSS injection, use this:

### Custom CSS File

Create this file and host it on your server:
**File:** `vero-omega-theme.css`

```css
/* Vero Autoglass - Omega EDI Custom Theme */

/* Import Inter font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* Global font */
body, * {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
}

/* Primary color overrides */
.btn-primary,
.button-primary,
button[type="submit"],
.submit-btn {
    background-color: #ff4d00 !important;
    border-color: #ff4d00 !important;
    color: white !important;
    font-weight: 600 !important;
}

.btn-primary:hover,
.button-primary:hover,
button[type="submit"]:hover {
    background-color: #cc3d00 !important;
    border-color: #cc3d00 !important;
}

/* Price display */
.price,
.total-price,
.quote-price,
[class*="price"] {
    font-size: 3rem !important;
    font-weight: 700 !important;
    color: #ff4d00 !important;
    margin: 1.5rem 0 !important;
}

/* Headings */
h1, h2, h3, h4 {
    color: #2b2b2b !important;
    font-weight: 700 !important;
}

/* Body text */
p, span, div, label {
    color: #2b2b2b !important;
    line-height: 1.6 !important;
}

/* Cards/containers */
.card,
.quote-card,
.result-card,
[class*="card"] {
    background: white !important;
    border-radius: 0.75rem !important;
    padding: 1.5rem !important;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1) !important;
}

/* Input fields */
input,
select,
textarea {
    border: 1px solid #e5e7eb !important;
    border-radius: 0.5rem !important;
    padding: 0.75rem !important;
    font-size: 1rem !important;
}

input:focus,
select:focus,
textarea:focus {
    border-color: #ff4d00 !important;
    outline: none !important;
    box-shadow: 0 0 0 3px rgba(255, 77, 0, 0.1) !important;
}

/* Links */
a {
    color: #ff4d00 !important;
    text-decoration: none !important;
}

a:hover {
    color: #cc3d00 !important;
    text-decoration: underline !important;
}

/* Quote result layout */
.quote-result {
    text-align: center !important;
    padding: 2rem !important;
}

/* Vehicle info */
.vehicle-info {
    background: #f9fafb !important;
    border-radius: 0.5rem !important;
    padding: 1rem !important;
    margin-bottom: 1.5rem !important;
}

/* Quote number */
.quote-number,
.order-number {
    font-size: 0.875rem !important;
    color: #6b7280 !important;
    font-weight: 500 !important;
}
```

### Upload Custom CSS

**Option A: Upload to your server**
1. Save CSS file as `vero-omega-theme.css`
2. Upload to: `https://veroautoglass.com/vero-omega-theme.css`
3. In Omega admin panel, add CSS URL:
   ```
   https://veroautoglass.com/vero-omega-theme.css
   ```

**Option B: Inline CSS in Omega**
Copy the CSS above and paste directly into Omega's custom CSS field.

---

## Option 4: Contact Omega Support

If none of the above work, contact Omega EDI directly:

**Email:** support@omegaedi.com

**Subject:** Custom Branding Request for Vero Autoglass

**Template:**
```
Hello Omega Support Team,

We need to apply custom branding to our quote form for veroautoglass.

Account Details:
- Folder: veroautoglass
- URL: https://app.omegaedi.com/quoter/?folder=veroautoglass

Branding Requirements:
- Primary Color: #ff4d00 (Vero Orange)
- Accent Color: #cc3d00 (Dark Orange)
- Text Color: #2b2b2b (Dark Gray)
- Font: Inter (Google Fonts)
- Border Radius: 0.75rem on cards

Please configure our quoter to match our brand identity. We're happy to
provide a CSS file or additional specifications if needed.

Thank you,
[Your Name]
Vero Autoglass
```

---

## Testing Checklist

After implementing branding:

- [ ] Vero orange (#ff4d00) appears on buttons/CTAs
- [ ] Inter font is used throughout
- [ ] Price displays prominently in brand color
- [ ] Text is dark gray (#2b2b2b), not black
- [ ] Cards have rounded corners
- [ ] Hover effects use darker orange (#cc3d00)
- [ ] Mobile responsive layout maintained
- [ ] Form inputs match Vero style
- [ ] Overall appearance is professional and cohesive

---

## Visual Reference

**Desired Look:**
```
┌─────────────────────────────────────┐
│  Online Auto Glass Quote #10093     │  ← Gray text, Inter font
├─────────────────────────────────────┤
│                                     │
│  Your Vehicle                       │  ← Bold, dark gray
│  ┌───────────────────────────────┐ │
│  │ 2023 Honda Civic              │ │  ← Card with rounded corners
│  │ 4 Door Hatchback              │ │
│  │ Windshield (Full spec...)     │ │
│  └───────────────────────────────┘ │
│                                     │
│  Your Price                         │
│                                     │
│       $455.50                       │  ← LARGE, Vero orange, bold
│                                     │
│  ┌───────────────────────────────┐ │
│  │      Continue to Checkout     │ │  ← Vero orange button
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## Files Modified

- `contact.html` - Added branding URL parameters to iframe

---

## Next Steps

1. **Test URL parameters** - Check if they work automatically
2. **If not, log into Omega** - Configure in admin panel
3. **If no admin access** - Contact Omega support
4. **Verify branding** - Test complete quote flow
5. **Document what works** - Update this guide with working method

---

## Support Resources

**Omega EDI:**
- Website: https://www.omegaedi.com/
- Support: support@omegaedi.com
- Documentation: Check admin panel help section

**Vero Colors Reference:**
- Primary: #ff4d00 (Vero Orange)
- Accent: #cc3d00 (Dark Orange)
- Text: #2b2b2b (Dark Gray)
- Background: #ffffff (White)
- Font: Inter

---

**Last Updated:** 2025-10-23
