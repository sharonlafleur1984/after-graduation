# Decisions

**Last updated:** October 7, 2026

Every big choice, newest first. Open one to see why. Design decisions (colors, type, motion, components) live on the [design system's Decisions page](https://github.com/sharonlafleur1984/design-system-skeleton/blob/main/docs/wiki/Decisions.md); the ones that shape this product are linked here.

<details>
<summary><b>Oct 7, 2026:</b> Dark mode follows the device</summary>

- **Decided by:** Sharon
- **Decision:** dark mode turns on with the device setting, with no switch in the product. After Graduation's dark mode uses warm charcoal, and the deep red stays on buttons and the header.
- **Why:** following the device is what people expect and needs nothing to build. Neutral dark keeps the red meaningful.
- **Still to do:** the app updates to the design system version that has dark mode.
- **Details:** [design system Decisions](https://github.com/sharonlafleur1984/design-system-skeleton/blob/main/docs/wiki/Decisions.md), [#28](https://github.com/sharonlafleur1984/design-system-skeleton/pull/28), [#29](https://github.com/sharonlafleur1984/design-system-skeleton/pull/29)

</details>

<details>
<summary><b>Oct 6, 2026:</b> Install the design system from GitHub, pinned to a version</summary>

- **Decided by:** Sharon
- **Decision:** this app installs the design system straight from GitHub, pinned to a version. Updating it is its own pull request. Every component is built in the design system first; this repo only arranges components on a page and owns the data.
- **Why:** it builds the same on a laptop, in tests and on Netlify, and the app always knows which version it was built on.
- **Other options considered:** pointing at the folder next door (only works on one laptop); publishing to npm (a release step for every change).
- **Details:** [design system Decisions](https://github.com/sharonlafleur1984/design-system-skeleton/blob/main/docs/wiki/Decisions.md), [#36](https://github.com/sharonlafleur1984/after-graduation/pull/36) (pinned to v0.2.0)

</details>

<details>
<summary><b>Oct 6, 2026:</b> Start the React rebuild before the usability results</summary>

- **Decided by:** Sharon
- **Decision:** set up React, Storybook and tests now, in Claude Code on Sharon's own computer, instead of waiting for the usability sessions.
- **Why:** Storybook needs to run locally, and the setup doesn't depend on what families say.
- **Trade-off:** pages built before the sessions may need changes once the findings are in.
- **Details:** [#13](https://github.com/sharonlafleur1984/after-graduation/issues/13), [#35](https://github.com/sharonlafleur1984/after-graduation/pull/35)

</details>

<details>
<summary><b>Oct 4, 2026:</b> Build interactive parts on React Aria Components</summary>

- **Decided by:** Sharon
- **Decision:** accordion rows, tabs, the bottom navigation, dialogs and date pickers are built on React Aria Components, styled with design tokens. One library everywhere.
- **Why:** the planner is built around dates, and some students have an IEP or 504 plan. React Aria is tested with real screen readers, including its date pickers.
- **Other options considered:** Base UI (no date components, focus left to us). Radix was ruled out because updates slowed.
- **Details:** [#34](https://github.com/sharonlafleur1984/after-graduation/issues/34), [design system Decisions](https://github.com/sharonlafleur1984/design-system-skeleton/blob/main/docs/wiki/Decisions.md)

</details>

<details>
<summary><b>Sep 26, 2026:</b> A free, self-serve planner for families</summary>

- **Decided by:** Sharon
- **Decision:** families use the planner for free, and onboarding sets it up without Sharon's help. Money comes from optional extras, schools (starting with a free one-year pilot) or funders.
- **Why:** Sharon, the planner's first customer, wouldn't pay $79 to $99 a year, and AI makes software easy to copy. Checked, current state and school information is the part that's hard to copy.
- **Other options considered:** a done-for-you plan at $79 to $99 a year; a lower one-time price.
- **Details:** [Business Evaluation](Business-Evaluation#the-plan-three-cheap-tests-then-decide)

</details>

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
- **Details:** [product-designer skill, section 9](https://github.com/sharonlafleur1984/how-i-work/blob/main/skills/product-designer/SKILL.md)

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
<summary><b>Sep 25, 2026:</b> Build for all students, with Accommodations optional</summary>

- **Decided by:** Sharon
- **Decision:** the planner works for every high school student. Accommodations is an optional section turned on in settings, for students with an IEP or 504 plan: accommodations, IEP and VR dates, and disability aid.
- **Why:** the planning itself (schools, costs, aid, deadlines, trade paths) helps every student, not just students with IEPs.
- **Trade-off:** a bigger audience, but more free competitors. Accommodations becomes what sets it apart.
- **Details:** [Business Evaluation](Business-Evaluation#who-its-for-every-high-school-student-with-optional-accommodations)

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
