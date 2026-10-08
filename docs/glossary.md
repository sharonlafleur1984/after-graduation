# Glossary

Plain-language meanings for the technical words in this repo.

| Word | What it means |
|---|---|
| **React** | The library the product is written in. A page is built from small reusable pieces called components. |
| **TypeScript** | JavaScript with labels on every piece of data, so mistakes show up before the app runs. |
| **Vite** | The tool that runs the app on your computer (`npm run dev`) and packages it for the web (`npm run build`). |
| **localhost** | An address that only works on your own computer. `localhost:5173` is the app; `localhost:6007` is Storybook. |
| **Storybook** | A workshop for UI. Each component or page is shown on its own, in every state, with accessibility checks. |
| **Design system** | The shared components, colors, type and spacing used by all of Sharon's products. It lives in its own repo and this repo installs it. |
| **Pinned version** | `package.json` names one exact version of the design system, so it only changes when a pull request updates it on purpose. |
| **React Aria** | Adobe's library for interactive parts (buttons, tabs, date pickers). It handles keyboard, focus and screen readers. |
| **Vitest** | Runs the automated tests (`npm test`). |
| **CI** | Checks that run on GitHub for every pull request: types, tests, and that the app and Storybook build. |
