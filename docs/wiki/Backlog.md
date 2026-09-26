# Backlog

Every idea, fix and request, in one place. When something here becomes a goal, it moves to the [Roadmap](Roadmap).

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
<summary><b>Needs a decision</b>: waiting on Sharon (4)</summary>

| Item | Why | From | Added | Question |
|---|---|---|---|---|
| Rank picker: swap schools when a place is taken, show names, add Undo | Picking a taken place is confusing today | Sharon and Claude | Sep 2026 | Go with this? |
| Seven style consistency fixes | Text, links and spacing vary between sections | Claude's style audit | Sep 2026 | Apply all seven? |
| Shrink the header title to about 44px | The title crowds the screen | Claude | Sep 2026 | Yes or no? |
| Walkthrough video for LinkedIn | Shows the work in a portfolio | Claude | Sep 2026 | When? |

</details>

<details>
<summary><b>Ideas</b>: problems worth solving, not yet decided (10)</summary>

Every idea starts with the problem. For each competitor feature we asked: what problem does it solve, and is there a better or more current way to solve it? If not, copy it. If yes, use the better way.

| # | Problem | Verdict |
|---|---|---|
| 1 | Families miss deadlines because the timeline only helps when they open it | Better idea: calendar feed, then text nudges |
| 2 | Aid offer letters hide the real cost | Better idea: compare in the standard federal format |
| 3 | Student and parent plan separately and can erase each other's work | Copy: one shared plan |
| 4 | Finding scholarships takes hours | Better idea: link the free federal finder |
| 5 | Students don't know which careers fit them | Better idea: free federal interest quiz |
| 6 | Students have questions when no counselor is free | Skip for now: open-ended AI chat |
| 7 | Keeping teens engaged for about 20 months | Partly copy: progress yes, leaderboards no |
| 8 | Trade-path students need real hands-on openings | Better idea: link the federal apprenticeship finder |
| 9 | Families start the FAFSA and stall | Copy: checklist, from the official source |
| 10 | Cost and earnings data goes stale | Better idea: pull from College Scorecard |

**Next step:** test the top ideas in the usability sessions before deciding. ([Research Plan](Research-Plan))

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

</details>

<details>
<summary><b>Open tasks</b> (until a task tracker is set up)</summary>

| Task | Who |
|---|---|
| Check Google for old copies of the personal site | Sharon |
| Write down roughly how many hours the planner took to build | Sharon |
| Set up React + TypeScript + Storybook | Claude |
| Recruit 6 to 8 people for usability sessions | Sharon |

</details>
