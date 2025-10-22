# Vero Quiz Integration - Deployment Checklist

## ✅ Step 1: File Deployed

**Status:** COMPLETE ✓

- Original resources page backed up to: `resources/index.html.backup`
- New quiz integration page deployed at: `resources/index.html`
- All 5 quizzes embedded with Vero branding

---

## 🧪 Step 2: Test Quiz Loading

Before going live, test locally or on staging:

### A. Local Testing

1. **Start a local server** in the `/vero` directory:
   ```bash
   cd /home/sam/Documents/github-repos/vero/vero
   python3 -m http.server 8080
   ```

2. **Open in browser:**
   ```
   http://localhost:8080/resources/
   ```

3. **Check for:**
   - ✅ Page loads without errors
   - ✅ All 5 quiz widgets appear
   - ✅ Quiz embed script loads from windshieldadvisor.info
   - ✅ Orange Vero branding shows in quizzes
   - ✅ Attribution footer visible under each quiz
   - ✅ Quizzes are interactive (can click through questions)

### B. Test Checklist

Open browser console (F12) and verify:

```javascript
// Should see these messages in console:
✓ No CORS errors
✓ Quiz iframe loads successfully
✓ WindshieldAdvisorQuiz object is defined
✓ Quizzes auto-resize properly
```

**Test each quiz:**
- [ ] ADAS Calibration - loads and functions
- [ ] Insurance Coverage - loads and functions
- [ ] Repair vs Replace - loads and functions
- [ ] Installer Qualifications - loads and functions
- [ ] Windshield Safety - loads and functions

### C. Mobile Testing

Test on mobile device or Chrome DevTools mobile emulator:
- [ ] Quizzes are responsive
- [ ] Touch interactions work
- [ ] Phone number CTA is tappable
- [ ] No horizontal scrolling

---

## 🔗 Step 3: Verify Backlinks in Google Search Console

**Timeline:** Allow 1-2 weeks after deployment for Google to crawl

### How to Check:

1. **Login to Google Search Console**
   - Go to: https://search.google.com/search-console
   - Select property: `veroautoglass.com`

2. **Check Links Report**
   - Navigate to: **Links** (in left sidebar)
   - Click: **Top linking sites**
   - Look for: `windshieldadvisor.info`

3. **Expected Results:**

   You should see:
   ```
   windshieldadvisor.info
   ├─ Links to: veroautoglass.com/resources/
   ├─ Number of links: 10-15
   └─ Status: Follow (passes PageRank)
   ```

4. **Detailed Link Analysis**
   - Click on `windshieldadvisor.info` to see specific links
   - Should show links from:
     - `/quizzes/adas-calibration`
     - `/quizzes/insurance-coverage`
     - `/quizzes/repair-replace`
     - `/quizzes/installer-qualified`
     - `/quizzes/windshield-safety`
     - `/white-papers`
     - Main domain

### Alternative: Check with Third-Party Tools

**Ahrefs:**
```
1. Go to: https://ahrefs.com/backlink-checker
2. Enter: veroautoglass.com/resources/
3. Look for backlinks from windshieldadvisor.info
```

**Moz Link Explorer:**
```
1. Go to: https://moz.com/link-explorer
2. Enter: veroautoglass.com
3. Filter by referring domain: windshieldadvisor.info
```

---

## 🔍 Step 4: Verify Structured Data

### Test Schema Markup:

1. **Google Rich Results Test**
   - Go to: https://search.google.com/test/rich-results
   - Enter URL: `https://veroautoglass.com/resources/`
   - Check for valid schema

2. **Expected Schema:**
   ```json
   {
     "@type": "WebPage",
     "provider": "Vero Autoglass",
     "citation": "windshieldadvisor.info",
     "mentions": {
       "@type": "Organization",
       "name": "Windshield Advisor"
     }
   }
   ```

3. **Schema Validation:**
   - [ ] No errors in structured data
   - [ ] All 5 quiz citations appear
   - [ ] Windshield Advisor properly mentioned

---

## 📊 Monitoring & Analytics

### Track Quiz Performance in Plausible

The page includes event tracking. Monitor:

```javascript
// Events being tracked:
- Quiz Started
- Quiz Completed
- Quiz Completed (with quiz name)
```

### Check in Plausible Dashboard:

1. Go to: https://plausible.io/veroautoglass.com
2. Look for custom events:
   - `Quiz Completed`
   - Props should show which quiz

### Expected Metrics (After 1 Month):

- Page views on `/resources/`
- Quiz completion rate (20-40% typical)
- Time on page (should increase with interactive content)
- Bounce rate (should decrease)

---

## 🚨 Troubleshooting

### Quiz Not Loading?

**Check 1: Script Source**
```html
<!-- Should be loading from: -->
<script src="https://windshieldadvisor.info/quiz-embed-seo.js"></script>
```

**Check 2: CORS Headers**
- Windshield Advisor server must allow embedding
- Check browser console for CORS errors

**Check 3: Partner ID**
```html
<!-- Verify this is set: -->
data-partner-id="vero-autoglass"
```

### Attribution Links Not Visible?

**Check CSS:**
```css
.quiz-attribution {
    font-size: 0.75rem;
    color: #6b7280;
    /* Should be visible, not display:none */
}
```

### Backlinks Not Showing in Search Console?

**Common Reasons:**
1. **Too soon** - Wait 2-4 weeks for Google to recrawl
2. **Not indexed** - Check if page is indexed: `site:veroautoglass.com/resources/`
3. **Noindex tag** - Verify no noindex in page meta
4. **Robots.txt blocking** - Check robots.txt allows crawling

**Force Recrawl:**
1. Go to Google Search Console
2. Click "URL Inspection"
3. Enter: `https://veroautoglass.com/resources/`
4. Click "Request Indexing"

---

## 📈 Success Metrics

After 30 days, you should see:

### SEO Metrics:
- ✅ 10-15 new backlinks from windshieldadvisor.info
- ✅ Domain Authority increase (slight, 1-2 points)
- ✅ Rankings improve for "windshield safety" related terms
- ✅ Increased organic traffic to resources page

### User Engagement:
- ✅ Higher time on page (3-5+ minutes)
- ✅ Lower bounce rate (10-20% improvement)
- ✅ Quiz completion leads to phone calls/contacts

### Business Impact:
- ✅ More qualified leads (users know their needs)
- ✅ Better customer education
- ✅ Competitive differentiation

---

## 🎯 Next Steps (Optional Enhancements)

1. **Add CTA after quiz completion:**
   ```javascript
   document.addEventListener('windshieldAdvisorQuiz:completed', (e) => {
       if (e.detail.result.severity === 'critical') {
           showBookingModal(); // Encourage immediate booking
       }
   });
   ```

2. **Track conversions:**
   - Set up goals in Plausible/GA
   - Track "Quiz → Phone Call" conversions
   - Track "Quiz → Contact Form" conversions

3. **A/B Testing:**
   - Test different quiz order
   - Test with/without quiz descriptions
   - Test CTA variations

4. **Add more quizzes as they're developed**

---

## 📞 Support

If issues arise:
- **Windshield Advisor support:** integrations@windshieldadvisor.info
- **Technical issues:** Check browser console for errors
- **SEO questions:** Monitor Search Console reports

---

## ✅ Final Checklist

Before considering deployment complete:

- [ ] Page loads without errors (local testing)
- [ ] All 5 quizzes appear and function
- [ ] Vero branding (orange) appears in quizzes
- [ ] Attribution links visible and clickable
- [ ] Mobile responsive
- [ ] Schema markup validates
- [ ] Plausible analytics tracking works
- [ ] Requested indexing in Search Console
- [ ] Added to monitoring/analytics dashboard

**Deployment Date:** _________________

**Verified By:** _________________

**Notes:**
