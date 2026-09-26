# Research Plan

**Last updated:** September 26, 2026

**Goal:** learn whether students and parents understand the planner, value it, and would pay for it, before building more.

## The three studies

| # | Study | Answers | When | Needs accounts? |
|---|---|---|---|---|
| 1 | Usability sessions | Is it easy to use? Is it fun? Would they look for it on their own? | Oct 2026 | No |
| 2 | Paid extras | Will families pay for extras? Which group? | Oct 2026 to Jan 2027 | No |
| 3 | Beta with accounts | Do they come back? Do they stay engaged over months? | After accounts are built | Yes |

Each study decides whether the next one is worth doing. Results feed the decision gate on the [Roadmap](Roadmap#milestones).

---

## Study 1: Usability sessions

<details>
<summary><b>The setup</b>: 6 to 8 thirty-minute video calls using the sample-data prototype</summary>

- **Format:** video call, participant shares their screen and thinks out loud
- **What they use:** the sample-data version only. Never a real student's plan.
- **Who runs it:** Sharon moderates. A second person takes notes if possible.
- **How many:** 6 to 8. Small rounds find most of the big problems; run another round after fixes. ([Nielsen Norman Group](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/))
- **Who joins:** a parent and student together, from Sharon's networking circle
- **Thank-you:** Sharon's undying appreciation and an IOU

</details>

<details>
<summary><b>Session guide</b>: what to say and ask</summary>

**Warm-up (3 min)**
1. What grade are you in? (Parents: what grade is your student in?)
2. What have you done so far to plan for after high school?
3. What's been the most confusing part?

**Tasks (15 min).** Say: "There are no wrong answers. We're testing the site, not you."
1. "Find a school you might want to go to and tell me what it would cost."
2. "Rank your top three schools."
3. "Find out what money you might get to help pay for school."
4. "What's the next thing you need to do, and when is it due?"
5. "Find what a word you don't know means." (Important Terms)

For each task, note: did they finish, where did they get stuck, what did they say.

**Wrap-up (12 min)**
1. What was the most useful part? The most fun? The least?
2. What would make you come back to this next month?
3. If a friend were planning for after high school, would you tell them about this? Why or why not?
4. **IEP layer:** "Some students have an IEP or 504 plan. We could add a section for accommodations and extra deadlines that you turn on in settings." Would that be useful, confusing, or not relevant to you?
5. The planner will be free. Which of these extras would you pay for, and what would feel fair? (Show 3 or 4 ideas, like text reminders for deadlines or a person reviewing your plan. Just listen. Don't pitch.)
6. **Problem check:** show the list of problems 1 to 10 from the [Backlog](Backlog). "Which of these have you actually run into? Pick up to three." This tells us which ideas are worth building.

</details>

<details>
<summary><b>What to measure</b></summary>

| Measure | How |
|---|---|
| Task success | Finished / finished with help / didn't finish, per task |
| Where people got stuck | Notes with timestamps |
| Fun and appeal | Most fun and least favorite parts, and whether they'd tell a friend |
| IEP layer reaction | Useful / confusing / not relevant, split by IEP and non-IEP families |
| Price reaction | What felt fair, in their words |
| Problems families have hit | Count of picks for each Backlog problem, across all sessions |

</details>

---

## Study 2: Paid extras

<details>
<summary><b>The setup</b>: offer the extra families wanted most to 10 families, as a pre-order</summary>

- **What:** the planner stays free. The extra and its price come from what families said in Study 1.
- **Who:** 5 families with an IEP or 504 plan, 5 without
- **Pass mark:** 3 or more of 10 place a refundable deposit
- **Track:** how each family heard about it
- **Promise in writing:** if the extra never ships, a full refund
- The pass mark and money math: [Business Evaluation](Business-Evaluation#the-plan-three-cheap-tests-then-decide)

</details>

---

## Study 3: Beta with accounts

<details>
<summary><b>The setup</b>: 10 to 20 families use it for real, after accounts are built</summary>

- **Feedback button** on every screen: "What's confusing or missing?"
- **Usage tracking with [PostHog](https://posthog.com/pricing)** (free up to 1 million events and 5,000 recordings a month). It shows:
  - How often each person logs in, and whether they come back week to week
  - How often they click Share, and how many visits come from shared links
  - Which sections get opened, and where people stop
  - Session recordings, with every typed answer hidden
- **Tracking rules:** turned on only after the privacy policy mentions it. Counts and clicks only, never answers or personal details.
- **Monthly 15-minute check-in** with a few families
- **Success looks like:** families come back at least monthly, and at least one says they'd recommend it

</details>

---

## Who to recruit

<details>
<summary><b>The mix</b></summary>

| Group | Study 1 | Study 2 |
|---|---|---|
| Parent and student pairs (juniors and seniors) | 6 to 8 | n/a |
| Parents | n/a | 10 |
| With an IEP or 504 plan | About half | 5 |
| Leaning toward trade or certificate school | At least 2 | At least 2 |

**Where to find people:** parent groups, school parent newsletters, special education parent networks, friends of friends. Not through the original student's school or personal network.

</details>

<details>
<summary><b>Recruiting checklist</b></summary>

- [ ] Write a short invite: what it is, how long, the thank-you, that it's the sample version
- [ ] Short screener: grade, IEP or 504 (yes / no / prefer not to say), college vs. trade leaning
- [ ] Parent consent form for every student under 18
- [ ] Schedule sessions (30 minutes, video)
- [ ] Send the sample-data link right before the call
- [ ] Send the thank-you within a day
- [ ] Log results in one private spreadsheet (no names, use P1, P2...)

</details>

---

## Privacy and consent

<details>
<summary><b>Rules for every study</b></summary>

- **Parent consent** for every student under 18, plus the student's own agreement to take part
- **Never collect:** diagnoses, IEP details, grades, addresses, or school names in notes
- **Label people P1, P2, P3,** not by name, in all notes and files
- **Recordings:** only with permission, stored in one private place you control, deleted when the study ends
- **Sample data only** in Studies 1 and 2
- **Study 3** needs accounts with parent consent built in from day one

**Caveat:** this isn't legal advice. Before Study 2 takes money or Study 3 stores real data, have a privacy policy and terms reviewed.

</details>

---

## How results feed decisions

| If... | Then... |
|---|---|
| Study 1 finds big usability problems | Fix them in the React rebuild before Study 3 |
| Study 1 shows non-IEP families find the IEP layer confusing | Keep it off by default, turned on in settings |
| Study 2: 3 or more of 10 place a deposit | That route passes the decision gate |
| Study 2: 2 of 10 place a deposit | Run one more round of 10 |
| Study 2: 0 or 1 pay | Keep it free for families, and look to schools or funders |
| Study 3: families come back monthly | The product is worth growing |
