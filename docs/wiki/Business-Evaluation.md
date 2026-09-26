# Business Evaluation

**Bottom line:** it's a good design aimed at a real need, but it isn't a business yet. Don't build more product. Run three cheap tests first, then decide around **February 2027**.

- **Prepared for:** Sharon LaFleur, September 25, 2026
- **Original:** a 39-page PDF with three parts (market research, viability verdict, business plan)
- **This page:** the same findings in plain language, with every source linked

<details>
<summary><b>What changed from the original PDF</b></summary>

- **Name fixed:** the PDF called the builder "Sara" throughout. It's **Sharon**.
- **Date fixed:** one date read 2026-09-26. The correct date is **2026-09-25**.
- **Sources linked:** the PDF cited internal codes like "AG9" or "CT5" that pointed to files nobody could open. Every source now has its full name and a link. See [Sources](Sources).
- **Each source was re-checked:** tagged ✅ verified, 🟡 found but the exact figure wasn't seen, or ❌ not found.
- **Personal details removed:** this wiki is public, so nothing about the original student appears here.
- **Figures that didn't check out are flagged ⚠️.**

</details>

## Legend

| Mark | Meaning |
|---|---|
| ✅ | We opened the source and saw the figure |
| 🟡 | Source found, but the exact figure wasn't on the page we opened |
| ❌ | Source not found. Don't quote it yet. |
| ⚠️ | The figure disagrees with its source |

---

## 1. Is anyone else doing this?

**Nobody does the whole thing. Two products each do about half.**

<details>
<summary>Open for the competitors</summary>

| Product | Who pays | What it covers | What it's missing | Source |
|---|---|---|---|---|
| **CollegeCountdown** | Families: free tier, Plus plan $49.99/yr for up to 4 kids | IEP/504 hub, disability-aware college search, 700+ disability scholarships, FAFSA checklist, deadline tracker | Vocational Rehabilitation (VR), trade school paths, IEP meeting dates | ✅ [Vendor site](https://collegecountdown.app/), ✅ [App Store](https://apps.apple.com/us/app/college-countdown/id6763329640) |
| **Trinity** (University Startups) | School districts, price not published | AI-written IEP transition plans, 30K+ colleges, 5,000+ training programs | Financial aid, VR, a dated timeline | ✅ [AWS blog, Sep 2026](https://aws.amazon.com/blogs/machine-learning/trinity-agentic-ai-powered-transition-planning-for-students-with-disabilities/), 🟡 [Vendor site](https://www.university-startups.com/) |
| **Xello, Naviance, SchooLinks, Scoir, YouScience, MajorClarity, Kuder** | Districts and states, about $3 to $6 per student | College and career planning | No IEP transition module | ✅ [Xello special ed page](https://help.xello.world/en-us/content/Get-Started/Educator/Teaching-Resources/Xello-Special-Education.htm) (others: see [Sources](Sources)) |
| **iTransition, WiTransition, Transition Elevated** | Free, publicly funded | A short survey that becomes a draft transition plan | School comparison, aid, deadlines | 🟡 [iTransition](https://www.drckansas.org/resource-center/special-education/itransition-app), 🟡 [WiTransition](https://apps.apple.com/us/app/witransition/id1198986600), 🟡 [Transition Elevated](https://apps.apple.com/us/app/transition-elevated/id1530220801) |

**What only After Graduation has:** one timeline dated around the student's own IEP milestones. It combines VR, financial aid, and trade and certificate schools alongside college.

**Caveat:** competitors were judged from their marketing pages only. Nobody has seen a demo.

</details>

## 2. Is the need real?

**Yes. This part is well documented.**

<details>
<summary>Open for the evidence</summary>

- **Most graduates don't go straight to a 4-year college.** 62.8% of 2024 graduates were in college that October, and about a third of those were at 2-year schools. ✅ [BLS, Apr 2025](https://www.bls.gov/news.release/hsgec.nr0.htm)
- **Students with IEPs are about twice as likely to plan on a path shorter than a 4-year degree** (25% vs 14%). 🟡 [NLTS 2012, IES](https://ies.ed.gov/sites/default/files/migrated/nces_pubs/ncee/pubs/20174016/pdf/20174017.pdf). We found the report, but not this exact table.
- **Families lack information about accommodations after high school.** ✅ [GAO-24-105614](https://www.gao.gov/products/gao-24-105614)
- **Pre-Employment Transition Services (Pre-ETS) reach only a small share of eligible students.** ⚠️ The PDF says 6 to 10%. The NCLD 2026 report we found says about 183,000 students, or **4.4%**. The Hechinger Report gives 295,000 of 3.1 million (about 10%). Use a range until this is settled. [NCLD 2026](https://ncld.org/wp-content/uploads/2026/03/VR-and-Pre-ETS-White-Paper.pdf), ✅ [Hechinger, Feb 2025](https://hechingerreport.org/hundreds-of-thousands-of-students-are-entitled-to-training-and-help-finding-jobs-they-dont-get-it/)
- **Schools make most VR referrals** (71 to 87%). ✅ [NCLD 2026, p.15](https://ncld.org/wp-content/uploads/2026/03/VR-and-Pre-ETS-White-Paper.pdf)

**Caveat:** nobody has found parents or coordinators saying "I wish this tool existed." The need is proven. Demand for a tool is not.

</details>

## 3. Is it worth building?

**It depends on the goal.**

| If the goal is... | Verdict | Confidence |
|---|---|---|
| A big venture-scale company | ❌ Don't build | Medium-high |
| A modest paid tool (families or districts) | 🟡 Needs more evidence | Moderate |
| A done-for-you planning service | 🟡 Needs more evidence (cheapest to test) | Moderate |
| A free, grant-funded tool | 🟡 Needs more evidence | Low-moderate |

<details>
<summary>Open for why</summary>

**What's strong**
- The need, and the design itself: thoughtful, accessible, plain language
- Accessibility work is real (93 ARIA attributes, reduced-motion support)
- The front end is mostly done. A product is mainly back-end and content work.

**What's missing**
- Proof anyone pays: families, schools or the state
- All content today was written for one student, so each new student or state is real work
- Keeping aid rules and deadlines accurate every year is the ongoing cost

**Why not a venture-scale company**
- Even with every IEP student in the US, district prices (about $3 to $6 per student) add up to roughly $1.5M to $4M a year
- Edtech investment has dropped sharply. ⚠️ The PDF says $16.7B (2021) to $2.6B (2025) from Tracxn. The article we found credits the 2025 figure to HolonIQ and says "less than $3 billion." 🟡 [Rest of World, 2026](https://restofworld.org/2026/edtech-funding-collapse-k12-startups-ai-workforce/)
- Utah already buys a statewide planning platform (✅ [YouScience](https://www.youscience.com/resources/press/utah-selects-youscience-as-statewide-platform/)) and lists a free transition tool (✅ [Utah SSIP 2025](https://schools.utah.gov/specialeducation/_specialeducation/_datareporting/_apr-spp-ssip/_ssipevaluationplan/Data2025SSIP2025Update.pdf))

**Ads or data-selling is off the table** for disability data. Examples of the risk: ✅ [Naviance $17.25M settlement](https://www.k12dive.com/news/what-the-1725m-naviance-settlement-means-for-school-districts/816496/), ✅ [PowerSchool breach](https://www.security.org/identity-theft/breach/powerschool/)

</details>

## 4. The plan: test before building

**Don't build anything yet. Run three small tests side by side (Oct 2026 to Jan 2027). None of them needs new software.**

| Test | What you do | It passes if... |
|---|---|---|
| **1. Families** | Offer a done-for-you plan to 10 IEP families at $79 to $99 a year | 3 or more pay, and each plan takes about 30 minutes of review after an AI draft |
| **2. Schools** | Ask 3 to 5 transition coordinators what budget they'd pay from | At least one names a real budget at **$15+ per student** (or $3K+ per district) |
| **3. Grant path** | Find one funder and one group to keep each state's content up to date | Both exist, at about $11K to $21K per state per year for every 1,000 students |

**Decision point (about Feb 2027):** build **at most one** route, in one state, only if its test passes. If none pass, stop. The tool stays a personal planner.

<details>
<summary>Open for Stage 0: do these first</summary>

- ✅ Lock down the personal site (done Sep 25, 2026)
- ⏳ Check Google for old copies of the personal site
- ⏳ Record roughly how many hours the planner took to build, split into (a) school and state research and (b) the student's personal story. This number decides whether each new student costs minutes or days.
- ⏳ Rewrite any outside pitch so it avoids the claims in "Don't say this" below

</details>

<details>
<summary>Open for the money math</summary>

- **Family plan:** only breaks even if review time plus selling time stays under about **1 hour per family**. Selling by hand, one family at a time, costs more than the $99 price. It needs referrals from parent groups or consultants.
- **District license:** needs **$15+ per student** across 5 to 10 districts per state. Nothing in the market proves that price yet.
- **Free grant-funded version:** costs a funder about **$11K to $21K per state per year** per 1,000 students, or **$25K to $45K** in year one if the build is paid up front. No funder has been found yet.
- **Test cost:** about 60 to 150 hours of Sharon's time plus under $1,000.
- All of these use an assumed $50/hour rate. They're estimates, not forecasts.

**Price points referenced**
- Xello: $4.45 per high school student (list $5.45), 3-year term. ✅ [Park Hill SD quote, 2025](https://boe.parkhill.k12.mo.us/attachments/31a77d78-bb41-47aa-a5bd-5d3b8813bf31.pdf)
- TAGG transition assessment: $5 per set. ✅ [Zarrow Institute](https://tagg.ou.edu/tagg/manual/overview)
- IEP Compass parent app: $79.99/yr. ✅ [App Store](https://apps.apple.com/us/app/iep-compass-parent-advocate/id6761731246)
- Private educational consultants: "just under $140/hour." 🟡 [IECA](https://www.iecaonline.com/student-parent-information/what-is-an-independent-educational-consultant/how-to-choose-the-right-independent-educational-consultant/). The page we found doesn't show a dollar figure.

</details>

<details>
<summary>Open for "Don't say this" (claims the evidence doesn't support)</summary>

- "A student is using it today"
- "Plugs the Pre-ETS leak"
- "Competitors don't compare schools or cost" (Trinity does)
- "Counselors are overloaded (372:1)". High school ratios now meet the recommended 250:1. ✅ [ASCA, Feb 2026](https://www.schoolcounselor.org/getmedia/62807f33-a020-4c4f-ac6f-bf284803fd97/pr_ratios-24-25.pdf)
- Pre-ETS money described as sitting unused ✅ [RSA reallotment](https://rsa.ed.gov/about/programs/vocational-rehabilitation-state-grants/reallotment-information)
- "Free tools cap the price"
- Utah's ~$9.33 per student described as a contract price. It's derived from a budget request. 🟡 [Utah Legislature, 2025](https://le.utah.gov/interim/2025/pdf/00001679.pdf)
- 4.1M students aged 14 to 21. Use ~2.4M, with its caveat.

</details>

<details>
<summary>Open for the risks still open</summary>

| Risk | What would close it |
|---|---|
| Nobody has shown they'd pay | The three tests |
| Build hours unknown | Record hours (Stage 0) |
| Utah already has a free tool and a statewide platform | Try the free tool hands-on; talk to coordinators outside Utah |
| Easy for competitors to copy | The long-term asset is the verified state fact base and trade school accommodations data |
| Student disability data needs a privacy rebuild | Accounts and permissions come first in the rebuild |
| Content may differ a lot by disability type | Build the sample student with a different disability category |

</details>

---

**Every source, with its verification status:** [Sources](Sources)
