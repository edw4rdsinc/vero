# Thank You Page Setup Guide

## Overview
We've created a branded Vero Autoglass thank you page that displays after customers complete the contact form.

**Thank You Page:** `https://veroautoglass.com/thank-you.html`

---

## What's Been Implemented

### 1. Branded Thank You Page Created (`thank-you.html`)

**Features:**
- ✅ Animated checkmark success indicator
- ✅ Vero branding (logo, colors, fonts)
- ✅ "What Happens Next?" section explaining the process
- ✅ Urgent call-to-action for immediate assistance
- ✅ Links to resources and insurance information
- ✅ Plausible analytics tracking (form submission event)
- ✅ Mobile responsive design
- ✅ SEO optimized (noindex/nofollow for thank you pages)

### 2. Contact Form Updated

**Change Made:**
Updated the Omega EDI iframe URL to include redirect parameter:
```html
<!-- BEFORE -->
src="https://app.omegaedi.com/quoter/?folder=veroautoglass"

<!-- AFTER -->
src="https://app.omegaedi.com/quoter/?folder=veroautoglass&redirect_url=https://veroautoglass.com/thank-you.html"
```

---

## Testing the Redirect

### Option A: URL Parameter Method (Already Implemented)
The iframe URL now includes `&redirect_url=https://veroautoglass.com/thank-you.html`

**To Test:**
1. Visit https://veroautoglass.com/contact.html
2. Fill out the quote form completely
3. Submit the form
4. Verify you're redirected to the thank you page

**If this works:** ✅ You're all set! No further action needed.

**If this doesn't work:** Try Option B below.

---

## Option B: Configure in Omega EDI Admin Panel

If the URL parameter doesn't work, you'll need to configure the redirect in your Omega EDI dashboard:

### Steps:

1. **Log into Omega EDI**
   - Go to: https://app.omegaedi.com/
   - Use your admin credentials

2. **Navigate to Quoter Settings**
   - Find your "veroautoglass" folder/quoter
   - Look for settings like:
     - "Form Settings"
     - "Success Settings"
     - "Redirect Configuration"
     - "After Submission"

3. **Set Custom Redirect URL**
   - Look for fields named:
     - "Success URL"
     - "Redirect URL"
     - "Thank You Page URL"
     - "Completion URL"
   - Enter: `https://veroautoglass.com/thank-you.html`

4. **Save Changes**
   - Save the settings
   - Test the form again

5. **Contact Omega Support** (if needed)
   - Email: support@omegaedi.com
   - Request: "Please configure custom success redirect URL for veroautoglass quoter"
   - Provide: `https://veroautoglass.com/thank-you.html`

---

## Option C: JavaScript PostMessage Listener (Advanced)

If neither Option A nor B work, we can use JavaScript to detect form completion:

**Implementation:**
Add this code to `contact.html` before the closing `</body>` tag:

```javascript
<script>
// Listen for form submission messages from Omega EDI iframe
window.addEventListener('message', function(event) {
    // Check if message is from Omega EDI
    if (event.origin !== 'https://app.omegaedi.com') return;

    // Check for submission success
    if (event.data && event.data.type === 'formSubmitted') {
        // Redirect to thank you page
        window.location.href = 'thank-you.html';
    }
}, false);
</script>
```

**Note:** This requires Omega EDI to send postMessage events, which may need to be enabled by their support team.

---

## Analytics Tracking

The thank you page automatically tracks form submissions in Plausible:

**Event Tracked:**
- Event Name: `Form Submitted`
- Property: `form: Contact Quote`

**To View:**
1. Go to Plausible dashboard for veroautoglass.com
2. Navigate to "Goal Conversions" or "Custom Events"
3. Look for "Form Submitted" events

---

## Customization Options

### Change Thank You Message
Edit `thank-you.html` lines 50-55:
```html
<h1 class="text-4xl md:text-5xl font-extrabold text-[#2b2b2b] mb-4">
    Thank You!
</h1>

<p class="text-xl text-[#595959] mb-8">
    We've received your request and will be in touch shortly.
</p>
```

### Update "What Happens Next" Steps
Edit `thank-you.html` lines 62-92 to modify the 3-step process.

### Change Phone Number
Current: (971) 317-8376
Update in line 110 of `thank-you.html`

### Modify Resources Links
Lines 119-130 contain the resource cards linking to:
- `/resources/` (Knowledge Center)
- `/insurance.html` (Insurance Info)

---

## Troubleshooting

### Redirect Not Working?

**Check:**
1. Is the form actually submitting successfully in Omega EDI?
2. Check browser console for JavaScript errors
3. Try the form in an incognito/private window
4. Test with different browsers (Chrome, Safari, Firefox)

### Thank You Page Not Loading?

**Verify:**
1. File exists at `/thank-you.html` on server
2. File permissions are correct (644)
3. Web server is serving HTML files correctly
4. No .htaccess rules blocking the page

### Analytics Not Tracking?

**Confirm:**
1. Plausible script is loading on thank you page
2. Domain `veroautoglass.com` is configured in Plausible
3. Ad blockers aren't preventing tracking
4. Check Plausible dashboard after 5-10 minutes (not real-time)

---

## Testing Checklist

- [ ] Form submits successfully
- [ ] Redirects to thank you page after submission
- [ ] Thank you page loads correctly on desktop
- [ ] Thank you page loads correctly on mobile
- [ ] Animated checkmark displays
- [ ] Vero logo displays
- [ ] Phone number click-to-call works on mobile
- [ ] Resource links work correctly
- [ ] "Return to Homepage" link works
- [ ] Analytics event fires in Plausible
- [ ] Page looks good in Chrome
- [ ] Page looks good in Safari
- [ ] Page looks good in Firefox

---

## Files Modified

**New Files:**
- ✅ `/thank-you.html` - Branded thank you page
- ✅ `/THANK_YOU_PAGE_SETUP.md` - This documentation

**Modified Files:**
- ✅ `/contact.html` - Updated iframe URL with redirect parameter

---

## Support

**If You Need Help:**

1. **Omega EDI Support**
   - Website: https://www.omegaedi.com/
   - Email: support@omegaedi.com
   - Topic: Custom redirect URL configuration

2. **Check Omega Documentation**
   - Look for "Custom Success Page" or "Redirect Settings"
   - May be in their knowledge base or help center

3. **Alternative Approaches**
   - Some form systems require redirect configuration in admin panel
   - Others use webhook callbacks
   - Omega support can advise on their specific implementation

---

## Next Steps

1. ✅ Files deployed to server
2. ⏳ Test form submission → should redirect to thank you page
3. ⏳ If redirect doesn't work, try Option B (Omega admin panel)
4. ⏳ If still not working, contact Omega support
5. ⏳ Monitor analytics to confirm tracking works

**Deployment Date:** 2025-10-23

---

## Success Metrics to Track

Once live, monitor these metrics in Plausible:

- **Form Submission Rate:** Track "Form Submitted" events
- **Thank You Page Views:** Compare to form submissions (should be ~equal)
- **Time on Thank You Page:** Indicates engagement with "What's Next" content
- **Click-through from Thank You:** Track clicks to Resources, Insurance pages
- **Phone Calls from Thank You:** Track "Call" link clicks

**Goal:** Thank you page views ≈ Form submissions (1:1 ratio)

If the ratio is off, the redirect may not be working properly.
