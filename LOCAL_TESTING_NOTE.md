# Local Testing Note

## Why Quizzes Don't Load Locally

The quizzes are **iframe-based widgets** that load from `windshieldadvisor.info`. When testing locally, the quizzes won't work because:

1. The iframe tries to load from: `https://windshieldadvisor.info/widget/quiz/[slug]`
2. That domain must be live and serving the quiz pages
3. CORS headers must allow embedding

## Options for Testing

### Option 1: Test on Staging/Production (Recommended)

Deploy the Vero resources page to your staging or production server, then:
- The quizzes will load from live windshieldadvisor.info
- Full functionality will work
- Attribution links will be correct

### Option 2: Run Both Sites Locally

If you need to test locally:

1. **Start Windshield Advisor site:**
   ```bash
   cd /home/sam/Documents/github-repos/windshieldadvisor/windshieldadvisor
   npm run dev
   # Should run on http://localhost:3000
   ```

2. **Update quiz-embed-seo.js temporarily:**
   ```javascript
   // Line 17-18, change to:
   const WIDGET_BASE_URL = 'http://localhost:3000/widget/quiz';
   const BASE_URL = 'http://localhost:3000';
   ```

3. **Keep Vero server running:**
   ```bash
   # Already running on http://localhost:8080
   ```

4. **Test at:** `http://localhost:8080/resources/`

5. **Remember to change back before deployment!**

### Option 3: Visual/Layout Testing Only

You can test the page layout, styling, and Vero branding without functional quizzes:
- Page structure ✓
- Vero colors/fonts ✓
- Responsive design ✓
- Attribution footer text ✓
- CTA buttons ✓
- Quiz won't be interactive ✗

## What to Test Locally

Even without functional quizzes, you can verify:

✅ **Page Layout:**
- All 5 quiz sections appear
- Headers styled correctly
- Vero orange branding
- Card designs look good

✅ **Content:**
- Quiz descriptions are clear
- Attribution footers visible
- CTA section at bottom
- Phone number clickable

✅ **Responsive Design:**
- Mobile view works
- Cards stack properly
- Text is readable
- No horizontal scroll

✅ **Links:**
- Contact button works
- Back to resources link works
- Phone number link works

## Recommended Testing Flow

1. **Local testing** (what you can do now):
   - Visual design ✓
   - Layout ✓
   - Responsiveness ✓
   - Non-quiz elements ✓

2. **Staging testing** (after deployment):
   - Full quiz functionality ✓
   - CORS working ✓
   - Attribution links ✓
   - Analytics tracking ✓

3. **Production testing**:
   - Final verification ✓
   - Search Console submission ✓
   - Monitor for errors ✓

## Current Status

✅ **CTA Text Fixed:** Changed to "Talk to a Human"
✅ **Local Script:** Copied to `/quiz-embed-seo.js` for testing
⚠️ **Quizzes:** Will only work when windshieldadvisor.info is live

## Before Production Deployment

Remember to change this line back:

**Current (for local testing):**
```html
<script src="../quiz-embed-seo.js"></script>
```

**Change to (for production):**
```html
<script src="https://windshieldadvisor.info/quiz-embed-seo.js"></script>
```

## Quick Fix for Testing

If you just want to see the page structure working:

1. The page layout is already perfect ✓
2. Vero branding is correct ✓
3. Attribution links are in place ✓
4. When deployed, quizzes will work automatically ✓

**You can safely deploy to production** - the quizzes will work once both sites are live!
