# Backlog

Every idea, fix and request, in one place.

**How an idea moves:** Idea (problem written down) → Researched (options, evidence, a recommendation) → your decision → Decided. Nothing comes to you for a decision until it's researched.

**Last updated:** September 25, 2026

<details>
<summary><b>Decided</b>: will build (3)</summary>

| Item | Why | From | Added |
|---|---|---|---|
| Settings toggle to turn the IEP layer on or off | Product is now for all students | Sharon | Sep 25, 2026 |
| Saving works across devices without erasing answers | One device can overwrite another | Business evaluation | Sep 25, 2026 |
| Personal content loads only after sign-in | It was readable in the public page | Business evaluation | Sep 25, 2026 |

</details>

<details>
<summary><b>Ideas</b>: problems worth solving, not yet decided (15)</summary>

Every idea starts with the problem. For competitor features we asked: what problem does it solve, and is there a better or more current way to solve it? If not, copy it. If yes, use the better way.

| # | Problem | Recommendation | Status |
|---|---|---|---|
| 1 | Families miss deadlines because the timeline only helps when they open it | Better idea: calendar feed, then text nudges | Needs evidence from families |
| 2 | Aid offer letters hide the real cost | Better idea: compare in the standard federal format | Needs evidence from families |
| 3 | Student and parent plan separately and can erase each other's work | Copy: one shared plan | Needs evidence from families |
| 4 | Finding scholarships takes hours | Better idea: link the free federal finder | Needs evidence from families |
| 5 | Students don't know which careers fit them | Better idea: free federal interest quiz | Needs evidence from families |
| 6 | Students have questions when no counselor is free | Skip for now: open-ended AI chat | Needs evidence from families |
| 7 | Keeping teens engaged for about 20 months | Partly copy: progress yes, leaderboards no | Needs evidence from families |
| 8 | Trade-path students need real hands-on openings | Better idea: link the federal apprenticeship finder | Needs evidence from families |
| 9 | Families start the FAFSA and stall | Copy: checklist, from the official source | Needs evidence from families |
| 10 | Cost and earnings data goes stale | Better idea: pull from College Scorecard | Needs evidence from families |
| 11 | Picking a rank that's already taken is confusing | Swap the two schools, show names, add Undo | ✅ Researched: ready for you |
| 12 | The same kind of thing looks different in different places | Fix it once in the design tokens during the rebuild | ✅ Researched: ready for you |
| 13 | The big title pushes the content down | Title size that adjusts to the screen | ✅ Researched: ready for you |
| 14 | Hiring managers have little time to see the work | A short case study with a short video, after the usability round | ✅ Researched: ready for you |
| 15 | Students thinking of skipping school can't see what it means for their pay | Show a few jobs that need only a diploma, with pay, next to their other paths | Needs research. Not for the first release. |

**Next step:** ideas 1 to 10 get tested in the usability sessions ([Research Plan](Research-Plan)). Ideas 11 to 14 are ready for your decision.

Open an idea below for the full reasoning and sources.

<details>
<summary>💡 <b>1. Problem: families miss deadlines because the timeline only helps when they open it</b></summary>

- **What competitors do:** CollegeCountdown sends alerts two weeks before each deadline ([CollegeCountdown](https://collegecountdown.app/)). SchooLinks sends automated nudges ([SchooLinks](https://www.schoolinks.com/competitors/schoolinks-vs-naviance), vendor's own comparison).
- **Is there a better way?** Yes. Put the dates where families already look, then nudge by text.
  - A calendar feed families subscribe to once in Google or Apple Calendar, with no account and no personal data ([Google Calendar help](https://support.google.com/calendar/answer/37100), [Apple Calendar help](https://support.apple.com/en-in/guide/calendar/icl1022/mac))
  - Text nudges have research behind them: summer texts raised college enrollment from 64.9% to 68.0% ([Castleman and Page, via GSA Office of Evaluation Sciences](https://oes.gsa.gov/assets/abstracts/1515-Summer-Melt.pdf)), and FAFSA texts raised completion by 6 points ([Page, Castleman and Meyer, 2020](https://files.eric.ed.gov/fulltext/EJ1244835.pdf))
- **Verdict:** better idea. Calendar feed first (cheap, private). Texts later, only with parent consent.

</details>

<details>
<summary>💡 <b>2. Problem: aid offer letters hide the real cost</b></summary>

- **Why it matters:** 91% of colleges' aid offers leave out or understate the net price ([GAO-23-104708, Dec 2022](https://www.gao.gov/assets/gao-23-104708-highlights.pdf)).
- **What competitors do:** CollegeCountdown compares aid offers ([CollegeCountdown](https://collegecountdown.app/)). College Raptor estimates net price ([College Raptor](https://www.collegeraptor.com/Home/FAQ)).
- **Is there a better way?** Yes. Line every offer up in the federal **College Financing Plan** layout ([U.S. Dept. of Education](https://www.ed.gov/higher-education/paying-college/college-financing-plan)), which many colleges already use, and flag what's missing using the College Cost Transparency Initiative standards ([NASFAA](https://www.nasfaa.org/ccti)).
- **Verdict:** better idea. Families type in the totals; we never ask them to upload their letters.

</details>

<details>
<summary>💡 <b>3. Problem: student and parent plan separately and can erase each other's work</b></summary>

- **What competitors do:** CollegeCountdown's family plan covers up to 4 children ([App Store](https://apps.apple.com/us/app/college-countdown/id6763329640)). SchooLinks gives counselors a view of each student ([SchooLinks](https://www.schoolinks.com/competitors/schoolinks-vs-naviance)).
- **Is there a better way?** No. One shared plan with a role for each person is the standard.
- **Verdict:** copy, with parent consent built in. It also fixes the saving problem already under Decided.

</details>

<details>
<summary>💡 <b>4. Problem: finding scholarships takes hours</b></summary>

- **What competitors do:** Going Merry ([site](https://goingmerry.com/)), Kollegio ([site](https://www.kollegio.ai/)) and CollegeCountdown (700+ disability scholarships, [site](https://collegecountdown.app/)) each run their own scholarship databases.
- **Is there a better way?** Yes. The Department of Labor's CareerOneStop Scholarship Finder is free and lists 7,500+ awards ([CareerOneStop](https://blog.careeronestop.org/scholarship-finder-tap-free-money-college/)). Link to it with the right filters, instead of building and updating our own database.
- **Verdict:** better idea. Keep the few state and disability awards we already cover; link out for the rest.

</details>

<details>
<summary>💡 <b>5. Problem: students don't know which careers fit them</b></summary>

- **What competitors do:** YouScience sells an aptitude test ($49, or free through a school license, [YouScience](https://www.youscience.com/buy-now/)). Xello uses interest inventories.
- **Is there a better way?** Yes. The O*NET Interest Profiler is free, public, and has an API we can plug in ([O*NET Resource Center](https://www.onetcenter.org/IP.html)).
- **Verdict:** better idea. Connect results to both trade and college paths, which is our edge.

</details>

<details>
<summary>💡 <b>6. Problem: students have questions when no counselor is free</b></summary>

- **Why it matters:** public school counselors spend about 22% of their time on college advising, with 405 students each ([NACAC](https://www.nacacnet.org/school-counseling/)).
- **What competitors do:** Kollegio ([site](https://www.kollegio.ai/)) and CollegeVine Sage ([site](https://www.collegevine.com/sage)) offer open-ended AI counselors.
- **Is there a better way?** Partly. The strongest evidence is for a narrow bot that answers set questions and sends nudges: Georgia State's "Pounce" cut summer melt by 21% ([Page and Gehlbach, 2017](https://files.eric.ed.gov/fulltext/EJ1194134.pdf)).
- **Verdict:** skip open-ended AI chat for now.
  - It would handle minors' data before accounts and privacy are built
  - A wrong answer about aid or a deadline can cost a family money
  - Free versions already exist everywhere
  - Revisit later as a narrow helper that only answers from our verified content

</details>

<details>
<summary>💡 <b>7. Problem: keeping teens engaged for about 20 months</b></summary>

- **What competitors do:** CollegeCountdown uses XP, streaks and leaderboards ([CollegeCountdown](https://collegecountdown.app/)).
- **Is there a better way?** Yes, for leaderboards. A 16-week study found badges plus leaderboards lowered motivation and exam scores ([Hanus and Fox, 2015](https://www.sciencedirect.com/science/article/abs/pii/S0360131514002000)). Ranking students against each other also fits badly with money and disability topics.
- **Verdict:** partly copy. Keep progress and celebration (already part of the story style). Skip leaderboards.

</details>

<details>
<summary>💡 <b>8. Problem: trade-path students need real hands-on openings, not just school names</b></summary>

- **What competitors do:** SchooLinks ([site](https://www.schoolinks.com/competitors/schoolinks-vs-naviance)) and Pathful ([site](https://pathful.com/products)) include work-based learning, but only schools can buy them.
- **Is there a better way?** Yes. Link the Department of Labor's free Apprenticeship Job Finder into each trade path ([Apprenticeship.gov](https://www.apprenticeship.gov/apprenticeship-job-finder)).
- **Verdict:** better idea.

</details>

<details>
<summary>💡 <b>9. Problem: families start the FAFSA and stall</b></summary>

- **Why it matters:** only 59.1% of the class of 2026 finished the FAFSA ([The College Investor, reporting NCAN](https://thecollegeinvestor.com/83916/class-of-2026-sets-fafsa-completion-record-at-59-1-ncan-reports/), secondary source).
- **What competitors do:** CollegeCountdown has a FAFSA checklist ([CollegeCountdown](https://collegecountdown.app/)).
- **Is there a better way?** No. A checklist works. Use the official list of what you need ([Federal Student Aid](https://studentaid.gov/articles/things-you-need-for-fafsa/)) and link to it.
- **Verdict:** copy. The app never asks for Social Security numbers or tax details; it only lists what to gather.

</details>

<details>
<summary>💡 <b>10. Problem: cost and earnings data goes stale</b></summary>

- **What competitors do:** College Raptor estimates cost ([site](https://www.collegeraptor.com/Home/FAQ)). The prototype has hand-entered costs and salaries.
- **Is there a better way?** Yes. The College Scorecard API has cost and earnings by program, straight from the Department of Education ([College Scorecard API](https://collegescorecard.ed.gov/data/api-documentation/)).
- **Verdict:** better idea, for the rebuild's content layer. Hand-entered data stays only where Scorecard has gaps, like some trade programs.

</details>

<details>
<summary>💡 <b>11. Problem: picking a rank that's already taken is confusing</b></summary>

- **What happens today:** a student picks 2nd place for a school, but another school already holds 2nd. It isn't clear what will happen, or which school is there.
- **Options:**
  - A. Gray out places that are taken
  - B. Show an "Are you sure?" popup
  - C. Swap the two schools, show each school's name on its place, and add an Undo button
- **Evidence:** grayed-out options confuse people because they don't say why ([Nielsen Norman Group](https://www.nngroup.com/videos/why-disabled-buttons-hurt-ux-and-how-to-fix-them/)). "Are you sure?" popups don't reliably prevent mistakes, and an easy undo is better ([Nielsen Norman Group](https://www.nngroup.com/articles/confirmation-dialog/)).
- **Recommendation:** C.
- **Caveat:** no source found on ranking lists specifically. This is based on general guidance.

</details>

<details>
<summary>💡 <b>12. Problem: the same kind of thing looks different in different places</b></summary>

- **What happens today:** a design review found 7 small differences: body text size and color, link sizes, the Compare button's weight, an extra gray, corner roundness, heading spacing, and a dark date label.
- **Why it matters:** people shouldn't have to wonder whether different looks mean different things ([Nielsen Norman Group](https://www.nngroup.com/articles/consistency-and-standards/)). Body text also needs enough contrast to read, at least 4.5 to 1 ([W3C, WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)).
- **Options:**
  - A. Fix all 7 in the prototype now
  - B. Fix them once in the design tokens during the rebuild, so they can't drift again
  - C. Fix only contrast problems now, the rest in the rebuild
- **Evidence:** design tokens define each color, size and spacing once and share it everywhere ([Design Tokens Community Group](https://www.designtokens.org/)).
- **Recommendation:** B. The personal version is frozen, so fixing the prototype is wasted work.
- **Caveat:** I'll check the contrast of each color while setting up the tokens.

</details>

<details>
<summary>💡 <b>13. Problem: the big title pushes the content down</b></summary>

- **Why it matters:** people spend 57% of their viewing time on the first screen, before they scroll ([Nielsen Norman Group, 2018](https://www.nngroup.com/articles/scrolling-and-attention/)). A tall title uses up that space.
- **Options:**
  - A. Keep it as is
  - B. Shrink it to a fixed 44px
  - C. A title size that adjusts to the screen: bigger on a laptop, smaller on a phone
- **Evidence:** CSS can scale text smoothly between a minimum and maximum size ([web.dev](https://web.dev/articles/min-max-clamp)).
- **Recommendation:** C, in the rebuild.
- **Caveat:** the maximum size can't block people who zoom text to 200% for accessibility (same web.dev source).

</details>

<details>
<summary>💡 <b>14. Problem: hiring managers have little time to see the work</b></summary>

- **Why it matters:** hiring managers have little time per candidate, so a portfolio should be easy to scan and show problem, role, research, solution and impact ([Nielsen Norman Group](https://www.nngroup.com/articles/ux-design-portfolios/)).
- **Options:**
  - A. A walkthrough video only
  - B. A written case study only
  - C. A short written case study with a short video inside it
- **Recommendation:** C. Use the sample-data version only, never the personal one. Make it after the usability round, so there's real impact to show.
- **Caveat:** I didn't find a trustworthy source saying videos specifically help, or official LinkedIn guidance. This is my judgment.

</details>

<details>
<summary>💡 <b>15. Problem: students thinking of skipping school can't see what it means for their pay</b></summary>

- **Idea from:** Sharon (Sep 25, 2026). Not for the first release.
- **What it could be:** a few jobs that need only a high school diploma, with typical pay, next to the college and trade school paths. It could also help parents show why more school might be worth it.
- **Starting evidence:** in 2025, median weekly pay was $966 with a high school diploma, $1,135 with an associate degree, and $1,578 with a bachelor's degree ([U.S. Bureau of Labor Statistics](https://www.bls.gov/emp/tables/unemployment-earnings-education.htm)).
- **Research still needed:** who already shows this well, and where to get pay for specific jobs.

</details>


</details>

**Tasks** live in [GitHub Issues](https://github.com/sharonlafleur1984/after-graduation/issues). Each one says the problem it solves and when it's done.
