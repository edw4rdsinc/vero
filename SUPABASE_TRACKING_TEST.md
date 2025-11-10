# Supabase Tracking Test Guide
## Sir Glass Welcome Campaign Landing Pages

---

## SETUP (DO THIS FIRST)

### 1. Get Your Supabase Credentials

Go to your Supabase dashboard:
1. Navigate to Project Settings → API
2. Copy these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **Anon/Public Key** (looks like: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

### 2. Update Both Landing Pages

**File 1:** `/sir-glass-welcome-a.html`
**File 2:** `/sir-glass-welcome-b.html`

Find this section (around line 370):
```javascript
// Initialize Supabase
// REPLACE WITH YOUR ACTUAL CREDENTIALS
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

Replace with:
```javascript
// Initialize Supabase
const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...YOUR_KEY_HERE';
```

### 3. Deploy Pages to Server

Upload both files to your web server:
- `https://veroautoglass.com/sir-glass-welcome-a.html`
- `https://veroautoglass.com/sir-glass-welcome-b.html`

---

## TEST 1: CREATE TEST TRACKING RECORD

Before testing the pages, create a test record in Supabase:

### SQL to Run in Supabase SQL Editor:

```sql
-- Insert a test tracking record
INSERT INTO email_campaign_tracking (
    tracking_id,
    customer_id,
    campaign_id,
    email_sent_at,
    link_clicked_at,
    visit_timestamp,
    landing_page_visited,
    phone_button_clicked,
    phone_click_timestamp,
    cta_clicked,
    cta_click_timestamp,
    converted,
    conversion_timestamp
) VALUES (
    'test-123-abc',  -- tracking_id (this is what you'll use in URL)
    1,  -- Replace with real customer_id from vero_customers table
    1,  -- Replace with real campaign_id from email_campaigns table
    NOW(),
    NULL,  -- Will be updated by page visit
    NULL,  -- Will be updated by page visit
    NULL,  -- Will be updated by page visit
    false,  -- Will be updated by phone click
    NULL,  -- Will be updated by phone click
    false,  -- Will be updated by CTA click
    NULL,  -- Will be updated by CTA click
    false,  -- Will be updated by conversion match
    NULL   -- Will be updated by conversion match
);
```

**Verify it was created:**
```sql
SELECT * FROM email_campaign_tracking WHERE tracking_id = 'test-123-abc';
```

You should see 1 row with all NULL timestamps except `email_sent_at`.

---

## TEST 2: PAGE VISIT TRACKING

### Step 1: Visit the Page with Tracking ID

Open your browser and visit:
```
https://veroautoglass.com/sir-glass-welcome-a.html?tid=test-123-abc&campaign=test_campaign
```

### Step 2: Open Browser Developer Tools

- Chrome/Firefox: Press `F12` or `Right-click` → `Inspect` → `Console` tab
- Look for console messages:
  - ✅ `"Page visit tracked successfully"` (success)
  - ❌ `"No tracking ID found in URL"` (error - check URL)
  - ❌ `"Supabase tracking error"` (error - check credentials)

### Step 3: Check Supabase Was Updated

Run this query in Supabase:
```sql
SELECT
    tracking_id,
    link_clicked_at,
    visit_timestamp,
    landing_page_visited
FROM email_campaign_tracking
WHERE tracking_id = 'test-123-abc';
```

**Expected Result:**
- ✅ `link_clicked_at` = current timestamp
- ✅ `visit_timestamp` = current timestamp
- ✅ `landing_page_visited` = `/sir-glass-welcome-a.html`

### Step 4: Check localStorage

In browser console, run:
```javascript
localStorage.getItem('vero_tracking_id')  // Should return: "test-123-abc"
localStorage.getItem('vero_campaign')      // Should return: "test_campaign"
```

---

## TEST 3: PHONE CLICK TRACKING

### Step 1: Click a Phone Number Link

While still on the page with `?tid=test-123-abc`, click any of these:
- Header phone button: `(971) 317-8376`
- Footer phone button
- Mobile menu phone button

### Step 2: Check Console

You should see:
- ✅ `"Phone click tracked"` in console
- Plausible event: `"Phone Click"` with location data

### Step 3: Check Supabase

```sql
SELECT
    tracking_id,
    phone_button_clicked,
    phone_click_timestamp
FROM email_campaign_tracking
WHERE tracking_id = 'test-123-abc';
```

**Expected Result:**
- ✅ `phone_button_clicked` = `true`
- ✅ `phone_click_timestamp` = current timestamp

---

## TEST 4: CTA CLICK TRACKING

### Step 1: Click a CTA Button

Click any CTA button on the page:
- "Claim My VIP Welcome Offer →" (hero section)
- "Claim My VIP Welcome Offer →" (middle section)
- "Get My 10% VIP Discount →" (footer section)

### Step 2: Check Console

You should see:
- ✅ `"CTA click tracked"` in console
- Page should redirect to `contact.html` after ~300ms

### Step 3: Check Supabase

```sql
SELECT
    tracking_id,
    cta_clicked,
    cta_click_timestamp
FROM email_campaign_tracking
WHERE tracking_id = 'test-123-abc';
```

**Expected Result:**
- ✅ `cta_clicked` = `true`
- ✅ `cta_click_timestamp` = current timestamp

---

## TEST 5: FULL FLOW TEST

Test the complete user journey:

### Step 1: Reset Test Record
```sql
UPDATE email_campaign_tracking
SET
    link_clicked_at = NULL,
    visit_timestamp = NULL,
    landing_page_visited = NULL,
    phone_button_clicked = false,
    phone_click_timestamp = NULL,
    cta_clicked = false,
    cta_click_timestamp = NULL
WHERE tracking_id = 'test-123-abc';
```

### Step 2: Simulate Email Click
1. Visit: `https://veroautoglass.com/sir-glass-welcome-a.html?tid=test-123-abc&campaign=sir_glass_nov_2024`
2. Scroll through page
3. Click phone number → verify tracking
4. Click CTA button → verify tracking
5. Should redirect to `contact.html`

### Step 3: Verify All Tracking Points
```sql
SELECT
    tracking_id,
    link_clicked_at IS NOT NULL as page_visited,
    phone_button_clicked,
    cta_clicked,
    landing_page_visited
FROM email_campaign_tracking
WHERE tracking_id = 'test-123-abc';
```

**Expected Result:**
```
tracking_id     | page_visited | phone_button_clicked | cta_clicked | landing_page_visited
test-123-abc    | true         | true                 | true        | /sir-glass-welcome-a.html
```

---

## TEST 6: A/B TEST VARIANT TRACKING

Test that both versions track to different landing page paths:

### Version A Test:
```
Visit: https://veroautoglass.com/sir-glass-welcome-a.html?tid=test-456-def
```
Check: `landing_page_visited` = `/sir-glass-welcome-a.html`

### Version B Test:
```
Visit: https://veroautoglass.com/sir-glass-welcome-b.html?tid=test-789-ghi
```
Check: `landing_page_visited` = `/sir-glass-welcome-b.html`

---

## TEST 7: MOBILE RESPONSIVENESS

### Test on Real Devices:

#### iPhone (Safari):
1. Visit page with tracking ID
2. Verify:
   - ✅ CTA buttons are easy to tap (72px height minimum)
   - ✅ Text is readable without zooming
   - ✅ Phone click works (opens phone dialer)
   - ✅ CTA click works (redirects to contact)
   - ✅ Single column layout
   - ✅ No horizontal scrolling

#### Android (Chrome):
1. Visit page with tracking ID
2. Verify same items as iPhone
3. Check tracking in Supabase works

### Test on Browser DevTools:

**Chrome DevTools:**
1. Press `F12` → Toggle device toolbar (or `Ctrl+Shift+M`)
2. Select device: iPhone 12 Pro, Samsung Galaxy S21
3. Test all tracking functionality
4. Check responsive breakpoints:
   - Mobile: <640px
   - Tablet: 640-1024px
   - Desktop: >1024px

**Expected Mobile Layout:**
- Single column
- Hero image full-width
- CTA buttons full-width on mobile
- Text size: 16px minimum (no zoom needed)
- Tap targets: 48x48px minimum

---

## TEST 8: ERROR HANDLING

### Test Without Tracking ID:
```
Visit: https://veroautoglass.com/sir-glass-welcome-a.html
(No ?tid= parameter)
```

**Expected:**
- Console warning: `"No tracking ID found in URL"`
- Page still works (doesn't break)
- No Supabase updates attempted

### Test With Invalid Tracking ID:
```
Visit: https://veroautoglass.com/sir-glass-welcome-a.html?tid=invalid-doesnt-exist
```

**Expected:**
- Console error from Supabase (no matching record)
- Page still works
- localStorage still stores the ID

---

## TEST 9: CROSS-BROWSER COMPATIBILITY

Test on all major browsers:

### Chrome (Desktop + Mobile)
- ✅ Page loads
- ✅ Tracking works
- ✅ CTA redirects work
- ✅ Phone clicks work

### Safari (Desktop + Mobile)
- ✅ Page loads
- ✅ Tracking works
- ✅ localStorage works
- ✅ Phone clicks open dialer

### Firefox
- ✅ Page loads
- ✅ Tracking works
- ✅ All features functional

### Edge
- ✅ Page loads
- ✅ Tracking works

---

## TEST 10: PERFORMANCE

### Page Load Speed:

Use Chrome DevTools → Network tab:
1. Disable cache: Check "Disable cache"
2. Throttle to "Slow 3G"
3. Reload page
4. Check load time

**Targets:**
- ✅ DOMContentLoaded: <2 seconds
- ✅ Full page load: <3 seconds
- ✅ Largest Contentful Paint (LCP): <2.5 seconds

**If slow, optimize:**
- Compress images
- Minify JavaScript
- Enable gzip compression on server

---

## TROUBLESHOOTING GUIDE

### Problem: "No tracking ID found in URL"

**Solution:**
- Check URL has `?tid=xxxxx` parameter
- Verify parameter name is `tid` or `t` (case sensitive)

### Problem: "Supabase tracking error" in console

**Check:**
1. Supabase credentials are correct
2. Table `email_campaign_tracking` exists
3. Row with `tracking_id` exists
4. Supabase RLS policies allow updates (or use service role key)

**SQL to check RLS policies:**
```sql
SELECT * FROM pg_policies
WHERE tablename = 'email_campaign_tracking';
```

**If needed, add RLS policy:**
```sql
-- Allow anonymous updates to tracking table (for landing page)
CREATE POLICY "Allow anonymous tracking updates"
ON email_campaign_tracking
FOR UPDATE
USING (true)
WITH CHECK (true);
```

### Problem: Phone clicks not tracking

**Check:**
- `data-phone` attribute is on `<a>` tag
- `href` starts with `tel:`
- Console shows "Phone click tracked"
- Supabase credentials are correct

### Problem: CTA clicks redirect immediately (no tracking)

**Check:**
- `e.preventDefault()` is called in click handler
- 300ms delay before redirect
- Console shows "CTA click tracked"

### Problem: Mobile layout broken

**Check:**
- Viewport meta tag is present: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Tailwind CSS loaded: Check for `cdn.tailwindcss.com` in network tab
- Test different screen sizes in DevTools

---

## PRODUCTION READINESS CHECKLIST

Before launching campaign:

### Technical Setup:
- [ ] Supabase credentials added to both files
- [ ] Both pages deployed to https://veroautoglass.com/
- [ ] SSL certificate active (HTTPS)
- [ ] 404 page doesn't show for landing pages

### Tracking Setup:
- [ ] Test tracking ID created and verified
- [ ] Page visit tracking works
- [ ] Phone click tracking works
- [ ] CTA click tracking works
- [ ] localStorage persists tracking_id

### Content:
- [ ] All copy proofread
- [ ] Phone number correct: (971) 317-8376
- [ ] Links to contact.html work
- [ ] Images load correctly
- [ ] No placeholder text remains

### Mobile:
- [ ] Tested on iPhone Safari
- [ ] Tested on Android Chrome
- [ ] CTA buttons 72px height minimum
- [ ] No horizontal scroll
- [ ] Text readable without zoom

### Performance:
- [ ] Page loads <3 seconds
- [ ] Images optimized
- [ ] No console errors
- [ ] Works without JavaScript (graceful degradation)

### A/B Test Setup:
- [ ] Version A: Trust angle (/sir-glass-welcome-a.html)
- [ ] Version B: Scarcity angle (/sir-glass-welcome-b.html)
- [ ] Both versions track to correct `landing_page_visited` value
- [ ] Email list split 50/50 between versions

---

## MONITORING DURING CAMPAIGN

### Daily Checks (First Week):

```sql
-- Check tracking is working
SELECT
    landing_page_visited,
    COUNT(*) as visits,
    SUM(CASE WHEN phone_button_clicked THEN 1 ELSE 0 END) as phone_clicks,
    SUM(CASE WHEN cta_clicked THEN 1 ELSE 0 END) as cta_clicks,
    ROUND(AVG(CASE WHEN phone_button_clicked THEN 1.0 ELSE 0 END) * 100, 2) as phone_rate,
    ROUND(AVG(CASE WHEN cta_clicked THEN 1.0 ELSE 0 END) * 100, 2) as cta_rate
FROM email_campaign_tracking
WHERE
    campaign_id = YOUR_CAMPAIGN_ID
    AND visit_timestamp >= NOW() - INTERVAL '24 hours'
GROUP BY landing_page_visited;
```

**Expected Results (after 24 hours):**
- Visits: >10% of emails sent
- Phone rate: 5-15%
- CTA rate: 10-20%

**Red Flags:**
- Zero visits = Check tracking
- Zero phone clicks = Check phone tracking
- Zero CTA clicks = Check CTA tracking
- All visits to Version A or B only = Check email split

---

## SUPPORT CONTACTS

If you encounter issues:

1. **Supabase Issues:** Check Supabase dashboard → Logs
2. **JavaScript Errors:** Check browser console
3. **Mobile Issues:** Use remote debugging (Chrome DevTools → Remote Devices)
4. **Performance Issues:** Use Lighthouse audit (Chrome DevTools → Lighthouse)

---

**Test Status Log:**

| Test | Status | Date | Notes |
|------|--------|------|-------|
| Supabase credentials added | ⬜ Pending | - | - |
| Test record created | ⬜ Pending | - | - |
| Page visit tracking | ⬜ Pending | - | - |
| Phone click tracking | ⬜ Pending | - | - |
| CTA click tracking | ⬜ Pending | - | - |
| Full flow test | ⬜ Pending | - | - |
| Mobile responsive | ⬜ Pending | - | - |
| Cross-browser | ⬜ Pending | - | - |
| Performance check | ⬜ Pending | - | - |
| Production ready | ⬜ Pending | - | - |

---

**Update this checklist as you complete each test!**
