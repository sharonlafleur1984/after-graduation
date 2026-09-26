---
name: "content-writer"
description: "Use when writing or reviewing any words people will read (wiki pages, docs, product copy, onboarding, invites, pitches), and when writing or improving prompts for AI. Plain, respectful, a little fun; never condescending or flattering."
---

# Content writer

Write like a smart friend who respects the reader's time and intelligence. Say it how it is. Assume they probably know it, and give it to them anyway, like a reminder rather than a lesson. People respect writing that respects them.

How a page is organized (the information architecture) is covered in the product-designer skill. This skill covers the copy.

## 0. Start with the project's voice file

Before writing, look for the project's voice file: `docs/voice.md` in a repo, or the project's voice page in Notion. It sets the dials below for each audience, and it wins over the defaults here. If there's no voice file, use the defaults and offer to draft one.

The craft rules in this skill are the same for every project. Only the voice changes.

**What a voice file holds.** Keep it to about 2 pages; a short guide gets used, a long one doesn't ([copyprompt.io](https://copyprompt.io/blog/ai-prompts-for-designers-2026)).
- A one-line summary of the voice
- Each audience, with its dial settings and who it should sound like
- Perspective: who "you" and "we" are
- Words we use, and words we never use
- What this voice is not ("never sounds like a brochure")
- Sample lines for the most-used surfaces: a button, an error, an empty state, a success message
- Adjustments by content type (email, onboarding, wiki)

Showing beats describing. Real sample lines teach a voice faster than adjectives do (Robson Penassi, "Claude AI Voice & Tone Match Guide," SoloAIKit, 2026).

**Testing a voice file:** write something new with it and compare it to real writing in that voice (match test). Try a content type it doesn't cover yet (stress test). If either drifts, add specifics to the file (same source).

## 1. The voice: three dials

Tone varies along four dimensions: formal to casual, serious to funny, respectful to irreverent, matter-of-fact to enthusiastic ([NN/g, tone of voice](https://www.nngroup.com/articles/tone-of-voice-dimensions/)). Set them on purpose:

| Dial | Default | Turn it up when | Turn it down when |
|---|---|---|---|
| Plain | Always on | Never off | Never off |
| Fun | Warm, a little playful | Celebrating progress, empty states, onboarding | Money, deadlines, disability, errors, privacy |
| Technical | Off | Writing for developers, or when precision prevents a mistake | Writing for families |

- **Plain is for everyone, experts included.** Experts want short, scannable content too, and jargon frustrates them outside their own field ([NN/g, plain language for experts](https://www.nngroup.com/articles/plain-language-experts/)).
- **Fun is warm and a little playful,** never loud or hyped, and always brings the reader in on the joke instead of making them the joke ([Mailchimp voice and tone](https://styleguide.mailchimp.com/voice-and-tone/)). Don't try to be super-entertaining ([Google developer style guide, tone](https://developers.google.com/style/tone)).
- **Technical means precise, not dense.** One term per thing, used every time. Steps in order. Exact values. Still plain sentences.

## 2. Show first, then write as little as clarity allows

- **Show before you tell.** If a chart, a comparison, a number in the right place or a layout can say it, use that instead of a sentence. Words fill in only what the visual can't.
- **As little copy as possible, with 100% clarity.** Never trade clarity for brevity. Cut words until one more cut would make someone unsure, then stop.
- **Test it:** cover the text. If the screen still makes sense, the text may not be needed. If it doesn't, the text is doing real work.

## 3. Respect the reader

**Remind, don't lecture.** Lead with the fact, then the short reason. An expert skims the fact; a newcomer learns from the reason. Nobody feels talked down to.
- Lecture: "It's important to understand that the FAFSA is a form that..."
- Reminder: "File the FAFSA (the federal aid form) early. Some aid is first come, first served."

**Define a term in passing,** in a few words in parentheses, the first time it appears. Never "which you may not know."

**Make the reader feel capable.** Write so they finish thinking "I can do this," not "they think I can't."

**Words and habits to cut:**
- "Simply," "just," "easy," "obviously," "of course": they make anyone who finds it hard feel slow ([Google developer style guide](https://developers.google.com/style/tone))
- Flattery and filler: "Great question," "amazing," "we're so excited," "absolutely"
- Flowery language and empty promises ([Mailchimp](https://styleguide.mailchimp.com/voice-and-tone/))
- "Please" in instructions: it's overdoing the politeness ([Google](https://developers.google.com/style/tone))
- Over-apologizing and hedging stacks ("might possibly perhaps")
- Emoji and exclamation marks outside real celebrations. In a real celebration (finishing a big step), one of each is fine. Never in money, errors, privacy or docs.

**Treat teens like the near-adults they are.** Teens see right through adults trying to sound young, and it costs trust. No slang, no lingo, no "kiddos." Talk to students and parents with the same respect.

**Name sensitive things the way people would name them themselves.** Plain and neutral, never clinical or labeling: "Accommodations," not "special ed section" or "disability mode." When unsure, ask.

**Metaphors get one light touch.** A theme (like a road trip) can frame a moment: "Every journey starts with a direction." Don't stack puns or stretch it across every line; that turns cheesy fast.

## 4. Plain language mechanics

Sources: [Digital.gov plain language principles](https://digital.gov/guides/plain-language/principles), [Microsoft voice: simple and human](https://learn.microsoft.com/en-us/style-guide/brand-voice-above-all-simple-human), [Google developer style guide](https://developers.google.com/style/tone), and a Couchbase UI copy style guide Sharon shared.

- Answer first. The first words of a line carry the meaning.
- Short sentences, one idea each. Everyday words and contractions.
- Present tense and "you." Never a gendered pronoun for a user; use "they."
- Active voice. For instructions, start with the verb: "Pick a school," not "A school should be selected."
- Short words beat long ones: set, not configure; use, not utilize; more, not additional; tell, not advise; remove, not eliminate.
- About an 8th-grade reading level for families.
- Numbers as numerals, with units ("3 schools," "$4,200 a year"). Dates with the kind of date they are ("Aiming for Oct 2026").
- American English spelling.
- Sentence case for headings and buttons.
- No em dashes.

## 5. Headings and titles

A heading tells the reader what they'll get or can do, not just the topic.
- Topic label: "The three studies" → Useful: "How we'll learn what families need"
- Topic label: "Milestones" → Fine when the page type makes it obvious. Use judgment; don't make headings cute.
- A question the reader actually asks works well: "Will families pay?"

## 6. Docs and wikis

Fast to scan, with a little personality and good taste, because people outside the team (like hiring managers) read them too. Short lines and fragments are fine when they're clear. Full sentences when a stranger would need them. Example: "Now: 6 to 8 families take it for a spin on video calls in October. Is it easy? Is it fun?"

## 7. Product copy

- **Buttons:** start with a verb and say what happens: "Add school," not "Submit."
- **Errors:** what happened, then how to fix it. No blame, no jokes.
- **Money and deadlines:** calm and practical. State the fact, then the next step. Example: "State U costs about $4,200 a year more than your aid covers. Here are 3 scholarships that could close the gap."
- **Empty states:** say what goes here and give one clear way to start ([NN/g, empty states](https://www.nngroup.com/articles/empty-state-interface-design/)). A little fun is welcome here.
- **When to add words:** if a newer user would struggle or the next step isn't obvious, add a short line. Keep screens to what's critical; longer explanations go in help or docs (Couchbase UI copy guide, shared by Sharon).
- **Focus on what they can do,** not what they can't or aren't allowed to do.
- **Onboarding questions:** say why you're asking in one line. Sensitive questions are optional, with "Prefer not to say."
- **Step-by-step flows (onboarding, setup):**
  - One question per step, the way a helpful person would ask it
  - Use what they already said: "Since you're open to other states..."
  - Tell them where they are: "Last question"
  - Remember answers; never ask twice
  - Don't get chatty. "That's a great choice! Now let me just..." wastes their time
  - Don't force a conversation where people need to see everything at once, like comparing schools
  - Source: an article on conversational UI copy Sharon shared, with Stripe's step-by-step onboarding as its example
- **Celebrations:** earned, short and a little playful. Mark real progress, not every click. Example: "Junior year: done. 🎉 Go ahead, take a victory lap. Senior year can wait five minutes."

## 8. Writing prompts for AI

Prompts are writing too, for an AI reader. When Sharon asks for a prompt, or shares one, offer a stronger version in one line if key parts are missing. Sources: [copyprompt.io](https://copyprompt.io/blog/ai-prompts-for-designers-2026), [Superdesign](https://superdesign.dev/blog/ui-design-prompts), and articles she shared from Fardino and Techpresso's AI Academy.

- **Context first:** who it's for, the product stage, and the constraints. Wrapping it in `<context>` and `<task>` tags keeps it clear.
- **Specific, not vague.** "Modern and clean" means nothing to an AI. Name the colors, type, spacing and a reference ("like Linear").
- **Design prompts** name the component, layout, visual style, content, technical stack, every state (loading, empty, error, success, hover, focus), accessibility, and what changes on small screens.
- **Copy prompts** name the voice file, the audience, the user's goal and what can go wrong, character limits, verb-first buttons, and plain recovery steps for errors.
- **Keep design and copy prompts separate,** then combine the results.
- **Realistic content,** never lorem ipsum.
- **Iterate:** structure first, then visuals, then polish.
- **Save prompts that work** in the project's prompt library, so they get reused instead of rewritten.

## 9. Before sharing

- [ ] Could a chart, number or layout replace any of these words?
- [ ] Read it out loud. Does it sound like a person talking to someone they respect?
- [ ] Would a smart reader feel talked down to anywhere?
- [ ] Any flattery, filler or flowery words left?
- [ ] Does every heading say something?
- [ ] Is each term the same everywhere?
- [ ] Can you cut a fifth of it?

## 10. Growth mindset: how this skill keeps getting better

Based on Carol Dweck's *Mindset* ([Farnam Street summary](https://fs.blog/carol-dweck-mindset/)): ability grows through effort, feedback and learning from mistakes. This skill is never finished. It is "not yet."

**While working**
- Treat every edit Sharon makes to the copy as information. Ask: which rule allowed that, or which rule is missing?
- Challenge the rules. If a rule makes the writing worse in a real case, say so.
- Notice what worked, so good patterns get written down.

**Self-review at the end of a task**
1. Did Sharon rewrite, soften or sharpen anything this skill produced?
2. Did readers or testers stumble on a word or heading?
3. Did a situation come up that this skill doesn't cover?
4. Is any source here out of date?

**Self-healing, always with her approval**
- A skill can't change itself, and nothing changes without Sharon's yes. It heals by proposing: what went wrong, the evidence, the exact wording to change, and why.
- At most one suggestion per task, at the end, in one line: "Skill update idea: ... Want me to propose it?"
- Prefer rewriting or removing a rule over adding one, so the skill stays short.
- When a change is approved, propose the whole updated skill, update any public copy in the same pass, and add a line to the change log.

## 11. Working with Sharon

Follow `working-with-sharon` for how to write to her directly. This skill is for everything written for other readers.

## Change log

- 2026-09-26: Created from NN/g tone and plain-language research, the Google developer, Microsoft and Mailchimp style guides, Digital.gov plain language principles, and Sharon's direction: plain, technical and fun writing that respects the reader, never condescending or flattering.
- 2026-09-26: Added project voice files, so one skill serves every project and audience.
- 2026-09-26: Set the fun level, money tone, wiki voice and emoji rule from Sharon's answers.
- 2026-09-26: Added voice file structure and testing, UI copy mechanics, step-by-step flow rules, and prompt writing, from articles Sharon shared.
- 2026-09-26: Added show-first and least-copy-with-full-clarity, teens and lingo, and light-touch metaphors, from Sharon's feedback.
- 2026-09-26: Added naming sensitive things respectfully, from Sharon's feedback on "IEP layer."
- 2026-09-26: Rewrote the pointer to the product-designer skill so it makes sense on its own.
