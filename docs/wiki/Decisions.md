# Decisions

Every big choice, newest first. Open one to see why.

<details>
<summary><b>Sep 25, 2026:</b> Build for all students, with the IEP layer optional</summary>

- **Decision:** the planner works for every high school student. Accommodations, IEP and VR dates, and disability aid are an optional layer turned on in settings.
- **Why:** the planning itself (schools, costs, aid, deadlines, trade paths) helps every student, not just students with IEPs.
- **Trade-off:** a bigger audience, but more free competitors. The IEP layer becomes what sets it apart.
- **Details:** [Business Evaluation, update](Business-Evaluation#update-all-students-iep-optional)

</details>

<details>
<summary><b>Sep 25, 2026:</b> Publish the business evaluation on this public wiki, cleaned</summary>

- **Decision:** a cleaned version goes here. Personal details are removed; findings and sources stay.
- **Why:** GitHub's free plan only has wikis on public repos, and a public repo helps the portfolio.
- **Other options considered:** a private repo with GitHub Pro; a private doc linked from here.

</details>

<details>
<summary><b>Sep 25, 2026:</b> Lock down the personal version</summary>

- **Decision:** Netlify password protection, plus a "don't show in search" tag and robots.txt.
- **Why:** the evaluation found the personal site was readable by anyone.
- **Still to do:** check Google for old copies.

</details>

<details>
<summary><b>Sep 25, 2026:</b> Build with React + TypeScript + Storybook</summary>

- **Decision:** React for the UI, TypeScript for safety, Storybook for the component library, plain CSS with design tokens.
- **Why:** it's the most common setup at product companies, so it matches the goal of working with developers.
- **Other options considered:** plain HTML with web components; Astro.

</details>

<details>
<summary><b>Sep 25, 2026:</b> Build the product separately from the personal version</summary>

- **Decision:** freeze the personal site as "v1." Build the product in this repo with sample data only.
- **Why:** the product can grow without risking one student's private information.
- **Later:** the personal version moves in as the first user once accounts exist.

</details>

**For developers:** technical decisions will also be recorded in the repo's `docs/decisions` folder once the rebuild starts.
