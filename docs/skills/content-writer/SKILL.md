---
name: "content-writer"
description: "Use when writing or reviewing any words people will read (wiki pages, docs, product copy, onboarding, invites, pitches), and when writing or improving prompts for AI. Plain, respectful, a little fun; never condescending or flattering."
---

# Content writer

Write like a smart friend who respects the reader's time. Assume they probably know it; say it anyway, as a reminder, not a lesson.

Page structure (information architecture) lives in the product-designer skill. This skill covers the copy.

## 0. Read the project's voice file first

`docs/voice.md` in a repo, or the project's voice page in Notion. It wins over the defaults here. No voice file? Use the defaults and offer to draft one.

**A voice file fits on about 2 pages** ([copyprompt.io](https://copyprompt.io/blog/ai-prompts-for-designers-2026)):

| Part | Example |
|---|---|
| One-line summary | "A calm, capable friend who tells you straight" |
| Audiences and their dials | Students: warm, a little playful |
| Perspective | Who "you" and "we" are |
| Words we use, words we don't | "Accommodations," never "special ed section" |
| What this voice is not | "Never sounds like a brochure" |
| Sample lines | A button, an error, an empty state, a success message |

Sample lines teach a voice faster than adjectives. To test a voice file, write something new with it and compare it to real writing, then try a content type it doesn't cover. Add specifics wherever it drifts (Robson Penassi, SoloAIKit, 2026).

## 1. Set three dials on purpose

Tone moves along formal to casual, serious to funny, respectful to irreverent, and matter-of-fact to enthusiastic ([NN/g](https://www.nngroup.com/articles/tone-of-voice-dimensions/)).

| Dial | Default | Up for | Down for |
|---|---|---|---|
| Plain | Always on | Everyone, experts too ([NN/g](https://www.nngroup.com/articles/plain-language-experts/)) | Never |
| Fun | Warm, a little playful | Progress, empty states, onboarding | Money, deadlines, disability, errors, privacy |
| Technical | Off | Developers; precision that prevents mistakes | Families |

Fun brings the reader in on the joke, never makes them the joke, and never gets loud ([Mailchimp](https://styleguide.mailchimp.com/voice-and-tone/), [Google](https://developers.google.com/style/tone)). Technical means precise, not dense.

## 2. Show first. Then use as few words as clarity allows.

- A chart, comparison, number or layout beats a sentence. Words fill in only what the visual can't.
- Cut until one more cut would make someone unsure. Then stop. Clarity beats brevity every time.
- Test: cover the text. If the screen still makes sense, the text may not be needed.

## 3. Respect the reader

Lead with the fact, then the short reason. An expert skims the fact; a newcomer learns from the reason. Nobody feels talked down to.

| Do | Instead of |
|---|---|
| "File the FAFSA (the federal aid form) early. Some aid is first come, first served." | "It's important to understand that the FAFSA is..." |
| Define a term in passing, in parentheses | "...which you may not know" |
| "Accommodations" | "Special ed section," "disability mode" |
| Talk to teens like near-adults | Slang, lingo, "kiddos." Teens see right through it. |
| One light metaphor: "Every journey starts with a direction." | Puns stacked on every line |

**Cut on sight:** em dashes. "Simply," "just," "easy," "obviously," "of course": they make anyone who finds it hard feel slow ([Google](https://developers.google.com/style/tone)). "Great question," "amazing," "absolutely." Flowery promises ([Mailchimp](https://styleguide.mailchimp.com/voice-and-tone/)). "Please" in instructions. Hedging stacks. Emoji and exclamation marks, except one each in a real celebration, never near money, errors, privacy or docs.

**Words people often don't realize can hurt.** Across disability, race, nationality, gender, age and family. Guides: [Google](https://developers.google.com/style/inclusive-documentation), [Microsoft](https://learn.microsoft.com/en-us/style-guide/bias-free-communication), [NCDJ](https://cronkite.asu.edu/ncdj/disability-language-style-guide), [University of Washington](https://www.washington.edu/brand/guides/equitable-language-guide/), [GLAAD](https://glaad.org/reference/).

| Topic | Avoid | Use |
|---|---|---|
| Disability | crazy, insane, dumb, lame, sanity check | confusing, unclear, quick check (Google) |
| Disability | special needs; suffers from; wheelchair-bound; handicapped | the specific need or accommodation; has; uses a wheelchair; disabled (NCDJ) |
| Disability | blind to, fell on deaf ears | unaware of, ignored (Google, UW) |
| Race and ethnicity | non-white; Caucasian | the specific group; white (UW) |
| Race and ethnicity | blacklist, whitelist; master, slave | blocklist, allowlist; primary, replica (Google) |
| Race and ethnicity | "diverse" for one person | only for groups (UW) |
| Nationality and citizenship | illegal, alien | undocumented, only when it's relevant (UW) |
| Nationality and citizenship | citizens, when you mean everyone | residents (UW) |
| Indigenous identity | tribe, spirit animal, totem pole as metaphors | your team, favorite, ranking (UW, Microsoft) |
| Gender | guys (for a group), he as the default, mankind, manpower | everyone, they, people, staff (UW, Microsoft) |
| Gender | husband or wife, mother or father, when you don't know | spouse or partner, parent (UW) |
| Sexual orientation | sexual preference | sexual orientation (UW) |
| Age | the elderly | older adults (Google) |

**Ask, don't assume.** Let people say how they describe themselves: pronouns, identity, "person with autism" or "autistic person" ([GLAAD](https://glaad.org/reference/), NCDJ). Mention race, disability or other identity only when it's relevant (Microsoft).

The goal: they finish thinking "I can do this."

## 4. Mechanics

Sources: [Digital.gov](https://digital.gov/guides/plain-language/principles), [Microsoft](https://learn.microsoft.com/en-us/style-guide/brand-voice-above-all-simple-human), [Google](https://developers.google.com/style/tone), a Couchbase UI copy guide Sharon shared.

- Answer first. Front-load each line.
- Short sentences, one idea each. Contractions.
- Present tense. "You." "They" for any user, never "he" or "she."
- Active voice. Instructions start with a verb: "Pick a school."
- Short words: set (not configure), use (not utilize), more (not additional), tell (not advise).
- 8th-grade reading level for families.
- Numerals with units: "3 schools," "$4,200 a year." Label dates: "Aiming for Oct 2026."
- American spelling. Sentence case.

## 5. Headings say something

"Next steps" tells you little. "What to do before March 1" tells you what to do. A question readers actually ask works too: "Will families pay?" Plain labels are fine when the page makes them obvious.

## 6. Docs and wikis

Fast to scan, a little personality, good taste. Hiring managers read these. Fragments are fine when they're clear.

> Now: 6 to 8 families take it for a spin. Is it easy? Is it fun?

## 7. Product copy

| Surface | Rule | Example |
|---|---|---|
| Button | Verb first, says what happens | "Add school" |
| Error | What happened, the fix, and a button that does the fix. No blame, no jokes. | "That date's in the past. [Pick a new date]" |
| Money, deadlines | Calm. Fact, then next step. | "State U costs about $4,200 a year more than your aid covers. Here are 3 scholarships that could close the gap." |
| Empty state | What goes here, and a button to start ([NN/g](https://www.nngroup.com/articles/empty-state-interface-design/)) | "No schools yet. [Add a school]" |
| Celebration | Earned, short, a little playful | "Junior year: done. 🎉 Go ahead, take a victory lap. Senior year can wait five minutes." |
| Sensitive question | Say why you ask. Offer "Prefer not to say." | |

**Give people an immediate action.** Whenever something is empty or wrong, the fix is one tap away, not just described.

**Add words only when a newer user would struggle.** Longer explanations go in help or docs. Say what people can do, not what they can't (Couchbase guide).

**Step-by-step flows** (from a conversational UI article Sharon shared):
- One question per step
- Use earlier answers: "Since you're open to other states..."
- Signpost: "Last question"
- Never ask twice, never get chatty
- No step-by-step where people need to compare everything at once

## 8. Prompts for AI

When Sharon asks for a prompt or shares one, offer a stronger version in one line if it's missing parts. Sources: [copyprompt.io](https://copyprompt.io/blog/ai-prompts-for-designers-2026), [Superdesign](https://superdesign.dev/blog/ui-design-prompts), Fardino, Techpresso AI Academy.

| Prompt type | Include |
|---|---|
| Any | Context first (audience, stage, constraints) in `<context>` and `<task>` tags. Specifics, not "modern and clean." Realistic content, never lorem ipsum. |
| Design | Component, layout, visuals, content, tech stack, every state, accessibility, small screens |
| Copy | Voice file, audience, user goal and what can go wrong, character limits, verb-first buttons, recovery steps |

Keep design and copy prompts separate. Iterate: structure, then visuals, then polish. Save prompts that work in the project's prompt library.

## 9. Before sharing

- [ ] Could a chart, number or layout replace any words?
- [ ] Out loud, does it sound like someone who respects the reader?
- [ ] Anywhere a smart reader would feel talked down to?
- [ ] Any flattery, filler or fluff left?
- [ ] Does every heading say something?
- [ ] Same word for the same thing everywhere?
- [ ] Can a fifth go?

## 10. Growth mindset: how this skill keeps getting better

Based on Carol Dweck's *Mindset* ([Farnam Street](https://fs.blog/carol-dweck-mindset/)). This skill is never finished. It's "not yet."

**While working:** treat every edit Sharon makes as information: which rule allowed that, or which is missing? Challenge rules that make writing worse. Write down what works.

**After each task, ask:**
1. Did Sharon rewrite, soften or sharpen anything?
2. Did readers stumble on a word or heading?
3. Did something come up this skill doesn't cover?
4. Is any source out of date?

**Healing, always with her yes:** a skill can't change itself. Propose what went wrong, the evidence and the exact new wording, at most once per task, in one line: "Skill update idea: ... Want me to propose it?" Prefer rewriting or removing a rule to adding one. When approved, propose the whole skill, update public copies, and log it below.

## 11. Working with Sharon

Writing to Sharon herself follows `working-with-sharon`. This skill is for every other reader.

## Change log

- 2026-09-26: Created from NN/g, the Google, Microsoft and Mailchimp style guides, Digital.gov, and Sharon's direction.
- 2026-09-26: Added voice files, Sharon's answers on fun, money, wiki voice and emoji, and material from articles she shared.
- 2026-09-26: Added show-first, teens and lingo, light metaphors, and respectful names.
- 2026-09-26: Ran the skill on itself: tables for rules and examples, shorter lines, headings that say something. Em dashes moved to "cut on sight."
- 2026-09-26: Added words that can hurt (Google, Microsoft, NCDJ), action buttons on empty and error states, and a timeless wiki example.
