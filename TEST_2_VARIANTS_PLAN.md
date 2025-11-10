# Test 2: Next A/B Variant Strategy
## Sir Glass Welcome Campaign - Iteration Plan

---

## TEST 1 RECAP (Currently Running)

**Version A (Control):** Trust/Continuity
- Headline: "Your Trusted Sir Glass Portland Team Starts a New Chapter"
- Angle: Reassurance, same team, better service

**Version B (Treatment):** Scarcity/Urgency
- Headline: "Only 500 Spots: Former Sir Glass Customers Get VIP Treatment"
- Angle: Limited availability, FOMO

**Hypothesis:** Scarcity will outperform trust by 20-35%

---

## DECISION TREE: WHICH TEST TO RUN NEXT?

### Scenario 1: Version B (Scarcity) WINS Test 1

**New Control:** Version B becomes the baseline

**Test 2 Options:**

#### **Option A: Test Social Proof + Precision (Version C)**
**Rationale:** If scarcity worked, combine it with social proof for compounding effect

**Version C Headline:**
"247 Sir Glass Customers Already Switched—Join Them for VIP Treatment"

**Changes from Version B:**
- Lead with specific number (precision = 45% CTR increase per manual)
- Social proof: "247 already switched" creates bandwagon effect
- Still maintains urgency: "limited spots remaining"

**Psychological Triggers:**
1. **Precision** (45% CTR increase, 10% credibility boost)
2. **Social Proof** (when credible + >100 people)
3. **Scarcity** (maintained from Version B)

**Expected Lift:** +15-30% over Version B

---

#### **Option B: Test Loss Aversion (Version D)**
**Rationale:** If scarcity worked, test even stronger loss aversion framing

**Version D Headline:**
"After December 31, This VIP Offer Disappears Forever"

**Changes from Version B:**
- Lead with deadline, not spots
- Frame as permanent loss ("disappears forever")
- Emphasize what they'll MISS, not what they'll GET

**Psychological Triggers:**
1. **Loss Aversion** (20-35% lift per manual)
2. **Deadline Urgency** (specific date = credible)
3. **Permanence** ("forever" = high stakes)

**Expected Lift:** +10-25% over Version B

---

#### **Option C: Test Curiosity Gap + Value (Version E)**
**Rationale:** If scarcity worked but felt too "salesy," test intrigue-based approach

**Version E Headline:**
"The Real Reason We Left Sir Glass (Hint: You Benefit)"

**Changes from Version B:**
- Remove scarcity framing
- Lead with curiosity: "the real reason"
- Hint at benefit to create intrigue
- Body copy reveals the "why" (ownership, better pricing, freedom)

**Psychological Triggers:**
1. **Curiosity Gap** (85% recall rate)
2. **Benefit-Focused** (direct value prop)
3. **Storytelling** (emotional connection)

**Expected Lift:** +10-20% over Version B (lower confidence)

---

### Scenario 2: Version A (Trust) WINS Test 1

**New Control:** Version A becomes the baseline

**Test 2 Options:**

#### **Option F: Test Value + Clarity (Version F)**
**Rationale:** If trust worked, double down on value proposition

**Version F Headline:**
"Save 10% + Get VIP Treatment from Your Sir Glass Team"

**Changes from Version A:**
- Lead with discount (immediate value)
- Remove narrative framing
- Clearest possible value proposition
- Still mentions "your Sir Glass team" (trust)

**Psychological Triggers:**
1. **Value** (free/discount = +10% opens)
2. **Clarity** (lowest cognitive load)
3. **Trust** (maintained from Version A)

**Expected Lift:** +10-20% over Version A

---

#### **Option G: Test Benefit-Focused (Version G)**
**Rationale:** If trust worked, emphasize outcomes over features

**Version G Headline:**
"Same Portland Team, Better Warranty, Lower Prices"

**Changes from Version A:**
- Lead with 3 concrete benefits
- Remove "new chapter" framing (less narrative)
- Direct, benefit-stacked headline
- Still maintains trust anchor

**Psychological Triggers:**
1. **Benefit-Focused** (outcomes > features)
2. **Rule of Three** (3 benefits = memorable)
3. **Trust** (maintained from Version A)

**Expected Lift:** +15-25% over Version A

---

## RECOMMENDED TEST SEQUENCE

### If Version B Wins Test 1:
```
Test 1: Version A vs Version B → Version B wins
         ↓
Test 2: Version B vs Version C (Social Proof + Precision)
         ↓
         If C wins → Test 3: Version C vs refined variant
         If B still wins → Declare winner, optimize other elements
```

### If Version A Wins Test 1:
```
Test 1: Version A vs Version B → Version A wins
         ↓
Test 2: Version A vs Version F (Value + Clarity)
         ↓
         If F wins → Test 3: Version F vs Version G (Benefit-Focused)
         If A still wins → Declare winner, optimize other elements
```

---

## TEST 2 DETAILED SPECS: VERSION C (Most Likely Next Test)

### Full Copy (if Version B wins and we test Version C):

**Headline:**
"247 Sir Glass Customers Already Switched—Join Them for VIP Treatment"

**Subheadline:**
"Your Portland team went independent. Limited VIP spots remaining for former Sir Glass customers. Get 10% off + lifetime benefits."

**Key Changes:**

1. **Hero Section:**
   - Add counter graphic: "247 customers switched" with upward arrow
   - Visual element showing social proof
   - Maintain urgency: "Limited spots remaining"

2. **Social Proof Section (Enhanced):**
   - Move earlier in page (above offer section)
   - Add specific numbers: "247 customers"
   - Testimonials with full names, cities, verified badges
   - "Join 247 satisfied customers" CTA

3. **Offer Section:**
   - Same VIP benefits as Version B
   - Add: "247 customers already secured their spot"
   - Maintain scarcity: "Only 253 spots remaining" (500 - 247 = 253)

4. **CTA Copy:**
   - "Join 247 Sir Glass Customers →"
   - OR "Claim My Spot (253 Remaining) →"

**Tracking:**
- `landing_page_visited` = `/sir-glass-welcome-c.html`
- All same tracking as Version A/B
- Compare conversion rates

---

## A/B TESTING BEST PRACTICES (Reminder)

### Statistical Requirements:
- **Minimum sample:** 1,000 visitors per variant
- **Confidence level:** 95%
- **Test duration:** 1-2 weeks minimum
- **Winner criteria:** >10% lift over control

### What NOT to Change:
- Keep same VIP offer (10% off, benefits)
- Keep same tracking setup
- Keep same phone number, contact info
- Keep same hero image
- Keep mobile responsiveness

### What TO Change:
- Only the headline + subheadline
- Adjust urgency framing
- Reorder sections (if testing information architecture)
- CTA button copy (if testing action-oriented vs specific)

---

## TEST 2 LAUNCH CHECKLIST

When Test 1 winner is declared:

### Before Building Version C/D/E/F/G:
- [ ] Analyze Test 1 results
- [ ] Identify winning variant
- [ ] Review hypothesis: Why did it win?
- [ ] Choose Test 2 variant based on learnings
- [ ] Get user approval on Test 2 strategy

### Building New Variant:
- [ ] Copy winning variant HTML as base
- [ ] Update headline + subheadline only
- [ ] Update `landing_page_visited` value (e.g., `-c.html`)
- [ ] Update page title and meta description
- [ ] Keep all tracking code identical
- [ ] Test locally with dummy tracking ID

### Before Launch:
- [ ] Deploy to server
- [ ] Verify tracking works
- [ ] Test on mobile (iPhone + Android)
- [ ] Split email list 50/50
- [ ] Create tracking IDs for new variant
- [ ] Monitor first 24 hours closely

---

## LONG-TERM TESTING ROADMAP

### Phase 1: Headline/Angle Testing (Test 1-3)
**Goal:** Find winning headline psychological trigger

- Test 1: Trust vs Scarcity ← **YOU ARE HERE**
- Test 2: Winner vs Social Proof/Value ← **NEXT**
- Test 3: Winner vs refined variant

**Expected Timeline:** 6-8 weeks (2-3 weeks per test)

### Phase 2: CTA Testing (Test 4-5)
**Goal:** Optimize conversion action

- Test 4: "Claim My VIP Spot" vs "Get My 10% Discount"
- Test 5: Winner vs "Reserve My VIP Status"

**Expected Timeline:** 4-6 weeks

### Phase 3: Layout Testing (Test 6-7)
**Goal:** Optimize information architecture

- Test 6: Benefits-first vs Social proof-first
- Test 7: Short page (scroll depth 2x) vs Long page (current)

**Expected Timeline:** 4-6 weeks

### Phase 4: Element Testing (Test 8-10)
**Goal:** Optimize individual components

- Test 8: Hero image A vs Hero image B (with team)
- Test 9: Testimonial placement (top vs bottom)
- Test 10: FAQ inclusion vs exclusion

**Expected Timeline:** 6-8 weeks

---

## SUCCESS METRICS BY PHASE

### Phase 1 Target:
- **Conversion rate:** 5-10% (warm audience)
- **Phone click rate:** 10-15%
- **CTA click rate:** 15-25%

### Phase 2 Target:
- **Conversion rate:** 8-12% (optimized headline + CTA)
- **Phone click rate:** 12-18%
- **CTA click rate:** 20-30%

### Phase 3 Target:
- **Conversion rate:** 10-15% (optimized layout)
- **Time on page:** 2-3 minutes average
- **Scroll depth:** 75%+ reach bottom

### Phase 4 Target:
- **Conversion rate:** 12-18% (fully optimized)
- **Industry leading:** >3x industry average (2.35%)

---

## WHEN TO STOP TESTING

### Stop Testing When:
1. **Winner declared + no further lift:** 3 consecutive tests show <5% improvement
2. **Diminishing returns:** Cost of testing > value of incremental gains
3. **Sample exhaustion:** Running out of Sir Glass customer list
4. **Campaign ended:** Offer expires December 31, 2025

### Then:
1. Document all learnings
2. Create "best practices" playbook for future campaigns
3. Apply learnings to other customer segments (general audience, Las Vegas, etc.)
4. Scale winning variant to full email list

---

## ESTIMATED CAMPAIGN ROI

### Assumptions:
- 28,000 Sir Glass customers
- 15% email open rate = 4,200 opens
- 10% landing page visit rate = 420 visitors
- 5% conversion rate (conservative) = 21 conversions
- Average job value: $400
- Your commission: 10%

### Without Testing (baseline):
- Conversions: 21
- Revenue: 21 × $400 = $8,400
- Your commission: $840

### With Testing (82% improvement per manual):
- Conversions: 38 (21 × 1.82)
- Revenue: 38 × $400 = $15,200
- Your commission: $1,520

**Testing ROI: +$680 additional commission** (80% increase)

### With Full Optimization (Phase 4 complete, 12% conversion):
- Conversions: 50 (420 × 12%)
- Revenue: 50 × $400 = $20,000
- Your commission: $2,000

**Full Optimization ROI: +$1,160 additional commission** (138% increase)

---

## NEXT STEPS

1. **Monitor Test 1** (Version A vs B) for 2 weeks
2. **Analyze results** (CTOR, conversion rate, statistical significance)
3. **Declare winner**
4. **Choose Test 2 variant** based on winner and learnings
5. **Build Test 2 pages** (should take <1 hour since it's mostly copy changes)
6. **Launch Test 2**
7. **Repeat until diminishing returns**

---

## QUESTIONS TO ANSWER AFTER TEST 1

When analyzing results, ask:

1. **Which variant won?** (A or B)
2. **By how much?** (% lift)
3. **Was it statistically significant?** (95% confidence)
4. **Why did it win?**
   - Did scarcity create urgency?
   - Did trust resonate more?
5. **What surprised us?**
   - Higher/lower conversion than expected?
   - Different behavior on mobile vs desktop?
6. **What should we test next?**
   - Double down on winning trigger?
   - Test complementary trigger?
   - Test different element (CTA, layout)?

---

**Status:** Test 1 in progress, Test 2 planned and ready to implement
**Last Updated:** 2025-11-09
**Next Review:** After Test 1 results (2 weeks)
