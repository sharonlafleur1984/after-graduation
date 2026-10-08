# CLAUDE.md

Start here. This file tells Claude (and any developer) where everything lives, so only the needed file gets opened.

## What this is

After Graduation: a planner that helps every high school student map out life after graduation, with an optional Accommodations section for students with an IEP or 504 plan. The current code is a single-file prototype (`prototype/index.html`) with sample data. The product is being built in React + TypeScript + Storybook.

## Rules

- **How Sharon works:** the process, skills and templates live in [how-i-work](https://github.com/sharonlafleur1984/how-i-work). This file only covers what's specific to After Graduation.
- **Public repo.** Never commit real personal data. Sample data only. Nothing about the original student.
- **No em dashes** in anything written for Sharon.
- **Every fact needs a source link,** or a label saying it's an estimate.
- **Ask before changing or deleting anything.** A recommendation is not approval.
- **Wiki pages are edited in `docs/wiki/`,** never in the GitHub Wiki tab. They publish automatically on merge to main.
- **Sidebar groups show five links at most.** Past five, the rest go inside `<details><summary>Show more</summary>` … `</details>` at the bottom of the group. GitHub wikis allow no scripts, so the label can't switch to "Show less"; clicking it again closes the list.
- **Every component comes from the design system.** Never write UI here. Use what's in the [design system's Storybook](https://designsystemskeleton.netlify.app/). If a component is missing, build it in [design-system-skeleton](https://github.com/sharonlafleur1984/design-system-skeleton) first, on React Aria, with a Storybook page. This repo only arranges components on a page, with layout tokens, and owns the data. `tests/design-system-only.test.ts` fails on any made-up color, size or inline style.
- **Design system work lives in its own repo.** Components, tokens, and their issues, milestones and decisions belong in [design-system-skeleton](https://github.com/sharonlafleur1984/design-system-skeleton). Here, only link to them, for example as "Waiting on" in an issue that needs one.
- **The design system is pinned to a version** in `package.json`. Updating it is its own pull request.

## Where everything is

Start with [`docs/wiki/Documents.md`](docs/wiki/Documents.md): every document in this repo and when to open it. Open only what matches the task. PDFs are expensive to read, and the evaluation PDF is version 1, a historic record only.

When you add or remove a document, update its row in `docs/wiki/Documents.md` in the same pull request, and in Sharon's private Notion index (Project Documents, Project = After Graduation) in the same pass.

## Skills to use

- `product-engineer` for any code work
- `product-manager` for roadmap, backlog and status
- `product-designer` for design, page structure and Storybook work
- `ux-writer` for any words people will read, with `docs/voice.md` for this project's voice
- `working-with-sharon` for how to write to Sharon

## Outside the repo (private)

- Project files: Google Drive, "After Graduation" folder (private originals, never copied here)
- Project entry: Notion, Life Hub Projects, "After Graduation"
