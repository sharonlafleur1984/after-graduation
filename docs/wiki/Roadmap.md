# Roadmap

Everything left to do, in order. Open a section for detail.

**Last updated:** September 25, 2026

## Next steps

| # | Step | Who | Waiting on |
|---|---|---|---|
| 1 | Check Google for old copies of the personal site: search `site:afterhighschool.netlify.app` | Sharon | Nothing |
| 2 | Write down roughly how many hours the planner took to build (school research vs. the student's personal story) | Sharon | Nothing |
| 3 | Set up React + TypeScript + Storybook with tests | Claude | Nothing |
| 4 | Recruit 6 to 8 people for usability sessions ([Research Plan](Research-Plan)) | Sharon | Nothing |
| 5 | Start the priced family offer (Oct 2026 to Jan 2027) | Sharon | Step 2 |

## Phases

<details>
<summary>✅ <b>Phase 1:</b> Protect the personal version</summary>

- ✅ Password protection on (Sep 25, 2026)
- ✅ "Don't show in search" tag and robots.txt added (Sep 25, 2026)
- ⏳ Check Google for old copies

</details>

<details>
<summary>✅ <b>Phase 2:</b> Put the prototype in GitHub with sample data</summary>

- ✅ Personal details swapped for sample data
- ✅ Wiki set up, published automatically from `docs/wiki`
- ✅ Prototype merged (Sep 25, 2026)

</details>

<details>
<summary>⏳ <b>Phase 3:</b> Design system and tokens</summary>

- Three layers of tokens: raw values, meanings (like "alert red"), component-specific
- A rules page for spacing, color meaning and button hierarchy
- Figma variables synced with the tokens

</details>

<details>
<summary>⏳ <b>Phase 4:</b> Rebuild in React with tests</summary>

- Screenshot every prototype screen first, so the rebuild can match it
- Build components from the smallest up: components, then composites, then patterns, then pages
- Every component gets a Storybook page
- Content (schools, dates, aid) moves into data files

</details>

<details>
<summary>⏳ <b>Phase 5:</b> Accounts and saving</summary>

- Sign in, with each person's data private
- Personal content stays behind the login, never in the public page
- Saving that works across devices without erasing anything

</details>

<details>
<summary>⏳ <b>Phase 6 to 8:</b> Content for any student, automated QA, move the first user in</summary>

- Phase 6: content that works for any student and state
- Phase 7: automated checks on every change
- Phase 8: move the personal version in as the first user

</details>

## Product updates waiting for the coded version

The personal site is locked, so these changes wait for the React rebuild. Add new ideas here.

<details>
<summary><b>Decided</b> (build these)</summary>

| Update | Why | Added |
|---|---|---|
| Settings toggle to turn the IEP layer on or off (accommodations, IEP and VR dates, disability aid) | The product is now for all students | Sep 25, 2026 |
| Saving works across devices without erasing the other device's answers | The evaluation found one device can overwrite another | Sep 25, 2026 |
| Personal content only loads after sign-in | The evaluation found it was readable in the public page | Sep 25, 2026 |

</details>

<details>
<summary><b>Waiting on Sharon's decision</b></summary>

| Idea | Question |
|---|---|
| Rank picker: if a place is taken, swap the two schools, show which school holds each place, and add an Undo button | Go with swap + names + Undo? |
| Seven style consistency fixes (body text size and color, link sizes, Compare button weight, an extra gray, corner radius, heading spacing, a dark date label) | Apply all seven? |
| Shrink the header title to about 44px | Yes or no? |
| A walkthrough video for LinkedIn | When? |

</details>
