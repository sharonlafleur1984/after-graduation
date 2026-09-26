# Decisions

**Last updated:** September 26, 2026

Every big choice, newest first. Open one to see why.

<details>
<summary><b>Sep 26, 2026:</b> Use PostHog to track use during the beta</summary>

- **Decided by:** Sharon
- **Decision:** PostHog's free plan tracks logins, return visits, shares and session recordings in Study 3, with typed answers hidden.
- **Why:** the same kind of insight as Pendo, without paying for it.
- **Other options considered:** counting logins and shares ourselves in Supabase (most private, but no recordings or charts); Microsoft Clarity (couldn't confirm how Microsoft uses the data).
- **Details:** [Research Plan, Study 3](Research-Plan#study-3-beta-with-accounts)

</details>

<details>
<summary><b>Sep 26, 2026:</b> Storybook gate: checks decide most things, Sharon decides matters of taste</summary>

- **Decided by:** Sharon
- **Decision:** nothing enters the component library until it passes automatic checks (tokens only, every state shown, accessibility, tests) and a design review. Sharon approves only judgment calls: a new component or pattern, a new color meaning, a new animation, or anything that changes how the product feels.
- **Why:** keeps quality high as the library grows, without Sharon reviewing every small change.
- **Details:** [product-designer skill, section 9](https://github.com/sharonlafleur1984/after-graduation/blob/main/docs/skills/product-designer/SKILL.md)

</details>

<details>
<summary><b>Sep 25, 2026:</b> Ideas get researched before they come to Sharon</summary>

- **Decided by:** Sharon
- **Decision:** every idea starts with the problem it solves, then moves Idea → Researched → Sharon's decision → Decided.
- **Why:** no decision gets made without the options and evidence in front of her.
- **Details:** [Backlog](Backlog)

</details>

<details>
<summary><b>Sep 25, 2026:</b> Track tasks in GitHub Issues</summary>

- **Decided by:** Sharon
- **Decision:** tasks live in [GitHub Issues](https://github.com/sharonlafleur1984/after-graduation/issues), each with one owner, the problem it solves, and when it's done.
- **Why:** keeps tasks next to the code, and keeps the Roadmap free of to-dos.

</details>

<details>
<summary><b>Sep 25, 2026:</b> Build for all students, with the IEP layer optional</summary>

- **Decided by:** Sharon
- **Decision:** the planner works for every high school student. Accommodations, IEP and VR dates, and disability aid are an optional layer turned on in settings.
- **Why:** the planning itself (schools, costs, aid, deadlines, trade paths) helps every student, not just students with IEPs.
- **Trade-off:** a bigger audience, but more free competitors. The IEP layer becomes what sets it apart.
- **Details:** [Business Evaluation](Business-Evaluation#who-its-for-every-high-school-student-with-an-optional-iep-layer)

</details>

<details>
<summary><b>Sep 25, 2026:</b> Publish the business evaluation on this public wiki, cleaned</summary>

- **Decided by:** Sharon
- **Decision:** a cleaned version goes here. Personal details are removed; findings and sources stay.
- **Why:** GitHub's free plan only has wikis on public repos, and a public repo helps the portfolio.
- **Other options considered:** a private repo with GitHub Pro; a private doc linked from here.

</details>

<details>
<summary><b>Sep 25, 2026:</b> Lock down the personal version</summary>

- **Decided by:** Sharon
- **Decision:** Netlify password protection, plus a "don't show in search" tag and robots.txt.
- **Why:** the evaluation found the personal site was readable by anyone.
- **Still to do:** check Google for old copies ([Issue #10](https://github.com/sharonlafleur1984/after-graduation/issues/10)).

</details>

<details>
<summary><b>Sep 25, 2026:</b> Build with React + TypeScript + Storybook</summary>

- **Decided by:** Sharon
- **Decision:** React for the UI, TypeScript for safety, Storybook for the component library, plain CSS with design tokens.
- **Why:** it's the most common setup at product companies, so it matches the goal of working with developers.
- **Other options considered:** plain HTML with web components; Astro.

</details>

<details>
<summary><b>Sep 25, 2026:</b> Build the product separately from the personal version</summary>

- **Decided by:** Sharon
- **Decision:** freeze the personal site as "v1." Build the product in this repo with sample data only.
- **Why:** the product can grow without risking one student's private information.
- **Later:** the personal version moves in as the first user once accounts exist.

</details>

**For developers:** technical decisions will also be recorded in the repo's `docs/decisions` folder once the rebuild starts.
