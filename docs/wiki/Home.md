# After Graduation: Dashboard

A planner that helps high school students with IEPs map out life after graduation. It started as a Claude artifact built for one student and is now becoming a real product.

**Last updated:** September 25, 2026

## Where things stand

| Area | Status | Next step |
|---|---|---|
| Prototype in GitHub | ✅ Done, with sample data | Merge the pull request |
| Personal version privacy | ✅ Password on, hidden from search | Confirm nothing is left in Google |
| Business evaluation | ✅ Corrected and sourced | Run the three tests (Oct 2026 to Jan 2027) |
| React + Storybook rebuild | ⏳ Not started | Set up tests and design tokens |
| Accounts and saving | ⏳ Not started | Comes after the rebuild |

## Quick links

| What | Link |
|---|---|
| Code repository | [sharonlafleur1984/after-graduation](https://github.com/sharonlafleur1984/after-graduation) |
| Open pull request (prototype) | [add-prototype branch](https://github.com/sharonlafleur1984/after-graduation/pull/new/add-prototype) |
| Storybook (component library) | Not built yet. The link goes here once it exists. |
| Business evaluation | [Business Evaluation](Business-Evaluation) |
| Every source, with links | [Sources](Sources) |
| Decisions and why | [Decisions](Decisions) |
| Claude skills we use | [Skills and Tools](Skills-and-Tools) |

## The big decisions (open for detail)

<details>
<summary><b>Should this become a business?</b> Not yet. Test first, decide around Feb 2027.</summary>

- The evaluation's verdict: **Needs more evidence.**
- A big venture-backed app: **don't build.** The market is too small.
- A modest paid tool, or a free grant-funded tool: **maybe.** Three cheap tests decide it.
- Full breakdown: [Business Evaluation](Business-Evaluation)

</details>

<details>
<summary><b>How is the product built?</b> React + TypeScript + Storybook, with design tokens.</summary>

- Chosen because it's what most product companies use, so it matches working with developers.
- Storybook shows every component on its own page, like a living design system.
- Why: [Decisions](Decisions)

</details>

<details>
<summary><b>What happens to the personal version?</b> It stays separate and private.</summary>

- The personal site stays as it is ("v1") behind a password.
- The product is built separately with sample data only.
- The personal version moves in as the first real user once accounts exist.

</details>

## The plan (open a phase for detail)

<details>
<summary>✅ <b>Phase 1:</b> Protect the personal version</summary>

- Password protection turned on (Sep 25, 2026)
- "Don't show in search" tag and robots.txt added (Sep 25, 2026)
- Left to do: check Google for old copies

</details>

<details>
<summary>✅ <b>Phase 2:</b> Put the prototype in GitHub with sample data</summary>

- Personal details swapped for sample data
- Online saving turned off in the product copy
- Waiting on: merge the pull request

</details>

<details>
<summary>⏳ <b>Phase 3:</b> Design system and tokens</summary>

- Three layers of tokens: raw values, then meanings (like "alert red"), then component-specific tokens
- A rules page for spacing, color meaning and button hierarchy
- Optional: sync the tokens to Figma variables

</details>

<details>
<summary>⏳ <b>Phase 4:</b> Rebuild in React with tests</summary>

- Tests and quality checks set up first, so everything after is covered
- One component at a time, each with a Storybook page
- Content (schools, dates, aid) moves into data files

</details>

<details>
<summary>⏳ <b>Phase 5 to 8:</b> Accounts, general content, automated QA, move the first user in</summary>

- Phase 5: sign in, with each person's data kept private
- Phase 6: content that works for any student, not just one
- Phase 7: automated checks on every change
- Phase 8: move the personal version in as the first user

</details>
