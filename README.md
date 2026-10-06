# After Graduation

An anime-inspired planning tool that helps high school students with learning differences explore life after graduation: compare schools, plan how to pay for them, and track every deadline through graduation.

> **Status:** Rebuild started. The working planner is still the single-file prototype in `prototype/`, with sample data. It is being rebuilt in React, one page at a time, from the [design system](https://github.com/sharonlafleur1984/design-system-skeleton).

## What's inside

| Episode | What the student does |
|---|---|
| **Explore Schools** | Drag school cars onto a race track to rank favorites, open each school for details, and compare all schools side by side. |
| **Financial Planning** | Track GPA, flip through scholarship and aid cards, and check off money deadlines. |
| **Important Dates** | Follow the Road to Graduation timeline, filter by type, and keep going with Victory Laps. |

## Run it

**The prototype:** open `prototype/index.html` in a browser. Progress saves on your device.

**The rebuild:**

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
