# Google Ads Conversion Tracking Setup

## Overview
The Vero Autoglass website is now configured to track quote form submissions as conversions in Google Ads. When someone fills out the Omega quote form on `/contact.html`, they are automatically redirected to `/thank-you.html`, which fires the conversion tracking.

## Current Setup

### 1. Form Flow
```
User visits → /contact.html
↓
Fills out Omega quote form (iframe)
↓
Omega redirects to → /thank-you.html
↓
Google conversion tracking fires automatically
```

### 2. Redirect Configuration
The Omega iframe on `/contact.html` already includes the redirect:
```html
src="https://app.omegaedi.com/quoter/?folder=veroautoglass&redirect_url=https://veroautoglass.com/thank-you.html..."
```

### 3. Conversion Tracking Code
Added to `/thank-you.html`:
- Google Global Site Tag (gtag.js)
- Conversion event that fires on page load
- Optional GA4 lead tracking event

## ⚠️ REQUIRED CONFIGURATION

Before going live, you need to replace these placeholders in `/thank-you.html`:

1. **Google Ads Conversion ID**: Replace all instances of `AW-XXXXXXXXX` with your actual Google Ads Conversion ID
   - You can find this in Google Ads > Tools & Settings > Conversions
   - It will look something like: `AW-1234567890`

2. **Conversion Label**: Replace `CONVERSION_LABEL` with your actual conversion label
   - This is provided when you create a conversion action in Google Ads
   - It will look something like: `abc123XYZ`

## Setting Up in Google Ads

1. **Create a Conversion Action:**
   - Go to Google Ads > Tools & Settings > Conversions
   - Click the `+` button
   - Choose "Website"
   - Select "Lead" as the category
   - Name it something like "Quote Form Submission"
   - Set value to "Use the same value for each conversion" = $1.00 (or your preference)
   - Count: "One conversion per click"
   - Click "Create and Continue"

2. **Get Your Tracking Codes:**
   - Google will provide you with:
     - Conversion ID (starts with AW-)
     - Conversion Label
   - Copy these values

3. **Update the Website:**
   - Open `/thank-you.html`
   - Replace `AW-XXXXXXXXX` with your Conversion ID (3 places)
   - Replace `CONVERSION_LABEL` with your Conversion Label (1 place)
   - Save and deploy

## Testing the Setup

1. **Install Google Tag Assistant Chrome Extension**
   - Visit: https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/

2. **Test the Flow:**
   - Open Tag Assistant
   - Navigate to `/contact.html`
   - Fill out and submit the quote form
   - Verify you're redirected to `/thank-you.html`
   - Check Tag Assistant shows the conversion firing

3. **Check in Google Ads:**
   - Conversions typically appear within 3 hours
   - Check Tools & Settings > Conversions to see if data is coming through

## Optional Enhancements

### Enhanced Conversions
To improve conversion tracking accuracy, consider enabling Enhanced Conversions:
```javascript
// Add user data when available (email/phone from form)
gtag('set', 'user_data', {
  'email': '[hashed_email]',
  'phone_number': '[hashed_phone]'
});
```

### Dynamic Conversion Value
If you want to track different values based on service type:
```javascript
// Example: Higher value for windshield replacement vs repair
const conversionValue = isReplacement ? 500 : 100;
gtag('event', 'conversion', {
  'send_to': 'AW-XXXXXXXXX/CONVERSION_LABEL',
  'value': conversionValue,
  'currency': 'USD'
});
```

### Multiple Conversion Actions
Track different conversion points:
- Quote form submission (current)
- Phone calls (using Google call tracking)
- Chat widget interactions
- Appointment bookings

## Troubleshooting

**Conversion not firing:**
- Check browser console for JavaScript errors
- Verify the redirect is actually happening
- Check that placeholders were replaced with real IDs
- Ensure the thank-you page loads completely

**Double counting:**
- Make sure users can't access `/thank-you.html` directly
- The `transaction_id` parameter helps prevent duplicates

**No data in Google Ads:**
- Wait 3-24 hours for data to appear
- Check conversion action status is "Active"
- Verify the Conversion ID and Label are correct
- Use Tag Assistant to debug

## Support

For Omega form issues: Contact Omega EDI support
For Google Ads setup: Google Ads support or your account manager
For website updates: Your web developer