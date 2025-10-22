# ⚠️ BEFORE PRODUCTION DEPLOYMENT

## Critical: Change Script Source

The resources page is currently configured for **local testing**. Before deploying to production, you MUST change this:

### Current (Local Testing):
```html
<!-- Load Windshield Advisor quiz embed script -->
<!-- For production: https://windshieldadvisor.info/quiz-embed-seo.js -->
<!-- For local testing: -->
<script src="../quiz-embed-seo.js"></script>
```

### Change To (Production):
```html
<!-- Load Windshield Advisor quiz embed script -->
<script src="https://windshieldadvisor.info/quiz-embed-seo.js"></script>
```

## File Location

**File:** `/resources/index.html`
**Line:** ~371

## Why This Matters

- **Local version** loads from `/quiz-embed-seo.js` (won't work in production)
- **Production version** loads from `https://windshieldadvisor.info/quiz-embed-seo.js` (correct)

If you deploy with the local version, quizzes won't load!

## Checklist Before Deploy

- [ ] Changed script src to `https://windshieldadvisor.info/quiz-embed-seo.js`
- [ ] Removed local `/quiz-embed-seo.js` file (optional, but cleaner)
- [ ] Tested CTA says "Talk to a Human" ✓ (already done)
- [ ] Verified all 5 quiz divs are present ✓
- [ ] Checked Vero branding colors ✓
- [ ] Confirmed attribution footers exist ✓

## Quick Command

To make the change:

```bash
# Edit the file
nano /home/sam/Documents/github-repos/vero/vero/resources/index.html

# Find line ~371 and change:
# FROM: <script src="../quiz-embed-seo.js"></script>
# TO:   <script src="https://windshieldadvisor.info/quiz-embed-seo.js"></script>
```

## What Happens After This Change

✅ **On production:**
- Quizzes will load from windshieldadvisor.info
- Full functionality works
- Attribution links correct
- SEO backlinks tracked

❌ **On local (after change):**
- Quizzes won't work locally anymore
- But that's fine - local testing of quizzes isn't needed
- Page structure/design can still be tested

## Summary

**Current state:** Configured for local testing
**Required for production:** Must point to live windshieldadvisor.info
**Action needed:** Change 1 line in `/resources/index.html`
