# After Graduation

An anime-inspired planning tool that helps every high school student explore life after graduation: compare schools, plan how to pay for them, and track every deadline through graduation.

It leans heavily toward students with IEP and 504 accommodations, because most planning software drops that ball. That makes it a passion project.

**[Try the prototype](https://afterhighschool.netlify.app/)**: one click, nothing to install. Sample data only.

> **This is a work in progress.** In this day of AI design, things are moving fast, and I'm moving a million miles a minute to get relevant design experience for this new age as I look for my next career opportunity. I'd love to share what I'm learning with whoever I end up with next. You can see the whole thing in all its messy glory, but don't expect it to be polished.

> **Status:** building the product has started. The working planner is still the single-file prototype in `prototype/`, with sample data. The product is being built in React, one page at a time, from the [design system](https://github.com/sharonlafleur1984/design-system-skeleton).

## What's inside

| Episode | What the student does |
|---|---|
| **Explore Schools** | Drag school cars onto a race track to rank favorites, open each school for details, and compare all schools side by side. |
| **Financial Planning** | Track GPA, flip through scholarship and aid cards, and check off money deadlines. |
| **Important Dates** | Follow the Road to Graduation timeline, filter by type, and keep going with Victory Laps. |

## Run it

**The prototype:** [open it here](https://afterhighschool.netlify.app/). Progress saves on your device.

**The product:**

```bash
npm install
npm run dev         # the app, at http://localhost:5173
npm run storybook   # its pages, at http://localhost:6007
npm test            # tests
```

After updating the design system version, stop and restart `npm run dev` and `npm run storybook`. A running app keeps the version it started with.

Every component comes from the design system and is documented in [its Storybook](https://designsystemskeleton.netlify.app/). This repo only puts components together into pages.

## Sample data

All student details are sample data (student "Alex", GPA 3.20). School, program, cost, and scholarship details are real Utah examples and may change.
