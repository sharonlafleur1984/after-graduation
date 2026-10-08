# Settings research

**Last updated:** October 7, 2026

What After Graduation's settings should include, and why: sections, every setting's control and default, the research behind each accessibility setting, and the legal questions to settle before Notifications and Privacy launch. The settings dialog itself is built in the design system ([Patterns, Settings](https://designsystemskeleton.netlify.app/)).

**The short answer:** After Graduation's settings should have eight sections in this order: **Account, Appearance, Accessibility, Plan, Family, Notifications, Privacy and data, Help and legal**. Every setting that has a matching device setting should default to **"Match device"** and let people override it. Changes apply the moment someone picks them, with no Save button except on text fields. Delete account sits at the bottom of Privacy and data and needs a typed confirmation. This is the shape Claude, Notion, GitHub and Linear share ([Claude help](https://support.claude.com/en/articles/8887527-customizing-your-appearance-settings); [Notion help](https://www.notion.com/help/account-settings); [GitHub Docs](https://docs.github.com/en/account-and-profile/how-tos/account-management/deleting-your-personal-account); [Linear docs](https://linear.app/docs/account-preferences)). Accessibility gets its own section, not a corner of Appearance, because the audience includes students with IEPs, 504s, ADHD, dyslexia and low vision. The riskiest part is not the design. Minors, parent links, texts and disability data make this a legal mix: **COPPA, TCPA texting consent and possibly Utah law each need a lawyer's sign-off before launch** (see the last section).

## Claude's settings show the standard pattern: routed sections, instant changes

Claude opens Settings from the name menu in the lower left ([Claude help](https://support.claude.com/en/articles/8887527-customizing-your-appearance-settings)). Each section has its own web address, such as `claude.ai/settings/general` and `claude.ai/settings/account`, so help articles can link straight into the right section ([claude.ai/settings/general](https://claude.ai/settings/general); [Anthropic Privacy Center](https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings)). Confirmed sections are General, Account, Appearance, Privacy, Capabilities, Billing, Time and focus, and Reflect. Connectors live in a separate "Customize" area ([Claude help: connectors](https://support.claude.com/en/articles/11176164-use-connectors)). Claude's Appearance offers **Color mode: Light, Match System, Dark** and **Chat font: Default, Match System, Dyslexic Friendly** ([Claude help](https://support.claude.com/en/articles/8887527-customizing-your-appearance-settings)). "Time and focus" holds break reminders and quiet hours with day chips and start and end times, and no help article mentions a Save button ([Claude help: quiet hours](https://support.claude.com/en/articles/15672868-set-break-reminders-and-quiet-hours)).

Not confirmed: whether Claude shows settings as a modal or a full page on desktop, and its exact sidebar order. The help pages don't show either, and the settings pages need a login.

The interaction rules to copy:

| Pattern | What to do | Source |
|---|---|---|
| Layout | Left sidebar on desktop. On phones, the section list is the first screen, and tapping a section opens it with a Back button | [Claude mobile paths](https://support.claude.com/en/articles/9028421-delete-your-claude-account) (phone layout is inferred) |
| Deep links | Give each section its own address, like `/settings/notifications`, so emails and help can link to it | [claude.ai/settings/account](https://claude.ai/settings/account) |
| Saving | Switches and segmented controls apply right away. Use an explicit Save only for text fields or multi-field edits | [NN/g toggle guidelines](https://www.nngroup.com/articles/toggle-switch-guidelines/); [Slack help](https://slack.com/help/articles/205166337-Change-your-Slack-theme) |
| Closing | With instant changes, closing never needs a "Discard changes?" prompt. Only a section with a Save button needs one | Inference from NN/g above |
| Danger zone | Put Delete at the bottom of its section, behind a dialog where the person types their email | [GitHub Docs](https://docs.github.com/en/account-and-profile/how-tos/account-management/deleting-your-personal-account) |
| Labels | Short, sentence case, naming the on state. Never a question. Test it by adding "on/off" to the end | [NN/g](https://www.nngroup.com/articles/toggle-switch-guidelines/) |
| Dialog accessibility | `role="dialog"`, `aria-modal="true"`, a visible title. Tab stays inside the dialog, Escape closes it, and focus goes back to the button that opened it. For long, structured content, focus the title first | [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) |
| Build | React Aria `Modal` + `Dialog` with `<Heading slot="title">`. Clicking outside doesn't close it by default; Escape does | [React Aria Modal](https://react-aria.adobe.com/Modal) |

## Accessibility: device settings first, in-app settings to fill the gaps

Five device settings reach a web app through CSS media queries: **color scheme, reduced motion, contrast, forced colors and reduced transparency** ([MDN prefers-contrast](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast); [MDN forced-colors](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors)). Reduced transparency only works in Chrome, Edge and Samsung Internet. **Safari and Firefox don't support it** ([caniuse](https://caniuse.com/wf-prefers-reduced-transparency)), so iPhone students need an in-app switch. Text size, spacing, fonts, link underlines and target size have no device signal at all, which is why the app has to offer them itself.

Use one pattern for anything with a media query: **Match device / On / Off**, defaulting to Match device. GitHub does exactly this for motion ([GitHub Docs](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/managing-accessibility-settings)). A two-way light/dark switch is "broken" because once someone picks, it overrides the device for good. Store "system" as a real value ([Kilian Valkhof](https://kilianvalkhof.com/2020/design/your-dark-mode-toggle-is-broken/)). For motion, follow Khan Academy's stricter rule: **if the device asks for reduced motion, animations stay off no matter what the app setting says** ([Khan Academy help](https://support.khanacademy.org/hc/en-us/articles/360015623271-Khan-Academy-s-accessibility-settings)). This matters for After Graduation because the anime animation style puts a lot of motion on screen.

On dyslexia, the research is clear and runs against what most people expect. **Dyslexia fonts don't help.** OpenDyslexic didn't improve reading speed or accuracy for children with dyslexia, and no student in the study preferred it ([Wery & Diliberto 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5629233/)). Dyslexie showed no benefit either ([Edutopia](https://www.edutopia.org/article/do-dyslexia-fonts-actually-work/)). **Spacing does help.** Extra letter spacing made dyslexic children read more than 20% faster and doubled their accuracy ([Zorzi et al., PNAS 2012](https://pmc.ncbi.nlm.nih.gov/articles/PMC3396504)). So put "Text spacing" first, and offer the font as a comfort choice called "Font", not "Dyslexia font". Claude's "Dyslexic Friendly" label over-promises in the same way.

One caution: **a setting is not the same as being compliant.** WCAG 2.2.2 (Pause, Stop, Hide) is Level A. Its guidance asks for a pause control that works on the moving content itself, and it never says a preference buried in settings is enough ([Understanding 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)). The defaults have to pass on their own. The settings are an extra layer on top.

No study was found on ADHD-specific settings like focus mode. Focus mode rests on W3C's cognitive accessibility guidance (limit interruptions, avoid too much content), not on trial data ([W3C COGA](https://www.w3.org/TR/coga-usable/)).

## Product settings copy proven patterns from Scoir, Google Classroom and College Board

**Family.** Scoir's flow is the model: invite by name and email, resend, edit before the parent accepts, and unlink with a confirm step. **Unlinking never deletes the other person's account** ([Scoir](https://help.scoir.com/article/gbggus55fk-inviting-parents); [Xello](https://help.xello.world/en-US/Content/Knowledge-Base/Accounts/Family-Accounts/Deactivate-Parent-Account.htm)). Scoir parents can view the list and *suggest* colleges, but they can't edit it ([Scoir](https://help.scoir.com/article/gbggus55fk-inviting-parents)). Under FERPA, rights pass from parent to student at 18 ([studentprivacy.ed.gov](https://studentprivacy.ed.gov/faq/what-ferpa)). That suggests a hand-off: at 18, the student decides who stays on the plan. No source covered two parents in separate households sharing one plan, so that's still a product decision.

**Notifications.** Google Classroom's guardian emails come daily or weekly, are **off by default**, and parents can unsubscribe anytime ([Google Classroom](https://helpdesk.csdnb.org/help/article/319637)). Texts are stricter. Automated texts need **prior express consent** ([FCC DA-26-12](https://docs.fcc.gov/public/attachments/DA-26-12A1.txt)). An opt-out sent in any reasonable form has to be honored **within 10 business days**, and the app can send **one** confirmation text with no marketing in it ([FCC 24-24](http://docs.fcc.gov/public/attachments/FCC-24-24A1.pdf)). Keep a consent record for every phone number: the time, the wording shown, and the number.

**Privacy and data.** Since April 22, 2026, COPPA has required **separate parental consent before sharing a child's data with third parties**, plus a written retention policy, and keeping data forever is banned ([FTC](https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-changes-childrens-privacy-rule-limiting-companies-ability-monetize-kids-data); [Finnegan](https://www.finnegan.com/en/insights/articles/coppas-amended-rule-is-now-in-full-effect-what-operators-need-to-know.html); [Alston & Bird](https://www.jdsupra.com/legalnews/ftc-publishes-amendments-to-coppa-rule-2185332)). That's why every data-sharing switch defaults to off and each third party gets its own switch. College Board's Student Search Service shows the model: an opt-in that can be turned off anytime ([College Board](https://privacy.collegeboard.org/program-specific-privacy-policies/bigfuture/student-search-service)). Common App warns about pending items before someone deletes their account ([Common App](https://appsupport.commonapp.org/s/article/How-can-I-delete-my-application)). Utah's student data law counts **health and disability data** as student data ([Utah 53E-9](https://le.utah.gov/xcode/Title53E/Chapter9/C53E-9_2018012420180124.pdf)), so treat Accommodations as sensitive even outside a school pilot.

## Recommended section list

"Launch" means build it first. "Later" means it's worth offering once the core works. The fourth control type, button, covers actions and links. Text fields are noted where a setting needs typing.

### 1. Account

| Setting | Control | Default | Relates to |
|---|---|---|---|
| Name | Text field + Save | From sign-up | [Notion](https://www.notion.com/help/account-settings) |
| Email | Text field + Save (verify new email) | From sign-up | [Notion](https://www.notion.com/help/account-settings) |
| Sign-in method / password | Button | n/a | [Notion](https://www.notion.com/help/account-settings) |

Sign out goes in the name menu, not in settings. That's how Claude, Slack and GitHub appear to do it (inferred, not confirmed by a source).

### 2. Appearance

| Setting | Control | Default | Relates to |
|---|---|---|---|
| Theme: Light, Dark, Match device | Segmented control | Match device | `prefers-color-scheme`; [Claude](https://support.claude.com/en/articles/8887527-customizing-your-appearance-settings) |

Keep this section tiny. If it ever needs a second setting, merge it into the top of Accessibility instead.

### 3. Accessibility

| Setting | Control | Default | Relates to | When |
|---|---|---|---|---|
| Increase contrast: Match device, On, Off | Segmented control | Match device | `prefers-contrast: more`; don't fight `forced-colors`; WCAG 1.4.6, 1.4.11 ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast)) | Launch |
| Reduce motion: Match device, On, Off | Segmented control | Match device (device "reduce" always wins) | `prefers-reduced-motion`; WCAG 2.3.3 ([W3C](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)) | Launch |
| Celebrations and animated images: Match device, On, Off | Segmented control | Match device | `prefers-reduced-motion`; WCAG 2.2.2 ([GitHub](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/managing-accessibility-settings)) | Launch |
| Reduce transparency: Match device, On, Off | Segmented control | Match device | `prefers-reduced-transparency` (Chromium only) ([caniuse](https://caniuse.com/wf-prefers-reduced-transparency)) | Launch if the design uses blur or glass |
| Text size: 100% to 200% | Select | 100% (follows browser font size) | WCAG 1.4.4 ([WCAG 2.2](https://www.w3.org/TR/WCAG22/)) | Launch |
| Text spacing: Normal, Wide, Extra wide | Segmented control | Normal | WCAG 1.4.12; [Zorzi 2012](https://pmc.ncbi.nlm.nih.gov/articles/PMC3396504) | Launch |
| Underline links | Switch | On | [GitHub](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/managing-accessibility-settings); [BDA](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide) | Launch |
| Larger buttons and spacing: Comfortable, Compact | Segmented control | Comfortable (44px targets) | WCAG 2.5.8 (24px, AA), 2.5.5 (44px, AAA) ([WCAG 2.2](https://www.w3.org/TR/WCAG22/)) | Launch |
| Font: Default, Atkinson Hyperlegible, OpenDyslexic | Select | Default | Comfort only; evidence against dyslexia fonts ([Edutopia](https://www.edutopia.org/article/do-dyslexia-fonts-actually-work/)) | Later |
| Limit line length | Switch | On | WCAG 1.4.8; BDA 60 to 70 characters ([BDA](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide)) | Later |
| Stronger focus outline | Switch | Off (the default outline already meets 2.4.7) | WCAG 2.4.7, 2.4.13; draw it with `outline` so it survives `forced-colors` ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors)) | Later |
| Focus mode (hide extra panels, badges, celebrations) | Switch | Off | [W3C COGA](https://www.w3.org/TR/coga-usable/) 4.6.1, 4.6.3 | Later |
| Read aloud | Switch | Off | [W3C COGA](https://www.w3.org/TR/coga-usable/) user story 3.7.2 | Later |
| Single-key shortcuts | Switch | On | WCAG 2.1.4, only if those shortcuts exist ([GitHub](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/managing-accessibility-settings)) | Only if needed |
| Show previews on hover | Switch | On | WCAG 1.4.13 ([GitHub](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/managing-accessibility-settings)) | Only if needed |
| Show captions | Switch | On | Only if the app has video ([Khan Academy](https://support.khanacademy.org/hc/en-us/articles/360015623271-Khan-Academy-s-accessibility-settings)) | Only if needed |

These aren't settings because they should always be true: no time limits, autosave, and no automatic jumps to a new page or tab (WCAG 2.2.1, 2.2.6 ([WCAG 2.2](https://www.w3.org/TR/WCAG22/))).

Save Appearance and Accessibility to the account so they follow a student from a school Chromebook to a phone. Also cache them on the device and apply them before the page draws, so the wrong theme doesn't flash. Let signed-out visitors change them too, as GitHub does ([GitHub Docs](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/managing-accessibility-settings)). Syncing settings across devices is inferred from how other apps behave. No standard covers it.

### 4. Plan

| Setting | Control | Default | Relates to |
|---|---|---|---|
| Current school year (sets the season) | Select | From onboarding | Product decision |
| Graduation year | Select | From onboarding | Standard profile field ([College Board](https://privacy.collegeboard.org/program-specific-privacy-policies/bigfuture/student-search-service)) |
| Home state | Select | From onboarding | Sets state aid deadlines and which state privacy laws apply |
| Paths: College, Trade school, Both | Segmented control | Both | Product decision |
| School search: Only my state, Open to other states | Segmented control | Open to other states | Product decision |
| Accommodations (IEP/504) | Switch | Off | Disability data ([Utah 53E-9](https://le.utah.gov/xcode/Title53E/Chapter9/C53E-9_2018012420180124.pdf)) |
| Who sees Accommodations: Only me, Everyone on this plan | Segmented control (shows only when Accommodations is on) | Only me | Disability data; never shared with third parties |
| Start week on Monday | Switch | Off | [Notion](https://www.notion.com/help/account-settings) (later) |

No sources cover the Plan defaults, so they're product decisions. Confirm them with the After Graduation wiki.

### 5. Family

| Setting | Control | Default | Relates to |
|---|---|---|---|
| People on this plan (name, role: Student or Parent/guardian, status) | List | Just the owner | [Scoir](https://help.scoir.com/article/gbggus55fk-inviting-parents) |
| Invite someone | Button (name + email) | n/a | [Scoir](https://help.scoir.com/article/gbggus55fk-inviting-parents) |
| Resend invite / edit before accepted | Button | n/a | [Scoir](https://help.scoir.com/article/gbggus55fk-inviting-parents) |
| Remove from plan | Button + confirm ("Their account stays") | n/a | [Xello](https://help.xello.world/en-US/Content/Knowledge-Base/Accounts/Family-Accounts/Deactivate-Parent-Account.htm) |
| Parent access: Can edit, Can suggest | Segmented control | Can suggest | [Scoir](https://help.scoir.com/article/gbggus55fk-inviting-parents) |

### 6. Notifications (each person sets their own)

| Setting | Control | Default | Relates to |
|---|---|---|---|
| Email reminders | Switch | On (it's the core reminder) | [Scoir](https://help.scoir.com/article/5uzq1915q3-for-parents-guardians-managing-your-email-notifications) |
| Email summary: As it happens, Daily, Weekly | Select | Weekly | [Google Classroom](https://helpdesk.csdnb.org/help/article/319637) |
| Text reminders (with phone number and consent wording) | Switch + text field | Off; turning it on means opting in | TCPA consent ([FCC](https://docs.fcc.gov/public/attachments/DA-26-12A1.txt)); opt-out honored within 10 business days ([FCC 24-24](http://docs.fcc.gov/public/attachments/FCC-24-24A1.pdf)) |
| Text categories: Deadlines, Reminders | Switch each | On once texts are on | [Kelley Drye](https://www.jdsupra.com/legalnews/fcc-adopts-changes-to-tcpa-consent-6079580) |
| Push notifications | Switch | Off | Product decision |
| Remind me: 2 weeks, 1 week, 1 day before | Select | 1 week | Product decision |
| Quiet hours (days + start and end times) | Switch + time selects | Off | [Claude](https://support.claude.com/en/articles/15672868-set-break-reminders-and-quiet-hours) |
| Calendar feed | Button: Copy link, Reset link | No link until asked | Anyone with the link can see deadlines, so it has to be resettable |

### 7. Privacy and data

| Setting | Control | Default | Relates to |
|---|---|---|---|
| Share with [partner name], one switch per partner | Switch | Off | COPPA separate consent ([Skadden](https://www.skadden.com/insights/publications/2025/01/ftc-finalizes-long-awaited-child-online-privacy)). Leave it out until a partner exists |
| Consent records (who agreed to texts and sharing, and when) | Button: View | n/a | FCC 24-24 proof of consent |
| Download my data | Button | n/a | Model from [Utah 13-71](https://le.utah.gov/xcode/Title13/Chapter71/C13-71_2024100120240501.pdf); good practice |
| Delete account | Button, at the bottom, typed email confirmation, warns about linked family and upcoming deadlines | n/a | COPPA parent deletion right ([FTC](https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-changes-childrens-privacy-rule-limiting-companies-ability-monetize-kids-data)); [GitHub](https://docs.github.com/en/account-and-profile/how-tos/account-management/deleting-your-personal-account); [Common App](https://appsupport.commonapp.org/s/article/How-can-I-delete-my-application) |

### 8. Help and legal

| Setting | Control | Default | Relates to |
|---|---|---|---|
| Help and contact | Button | n/a | Support |
| Privacy policy | Button (link) | n/a | COPPA notice must name third parties ([Skadden](https://www.skadden.com/insights/publications/2025/01/ftc-finalizes-long-awaited-child-online-privacy)) |
| Data retention policy | Button (link) | n/a | COPPA written retention policy ([Alston & Bird](https://www.jdsupra.com/legalnews/ftc-publishes-amendments-to-coppa-rule-2185332)) |
| Terms of use | Button (link) | n/a | Standard |
| Text messaging terms | Button (link), only if texts exist | n/a | [CTIA](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf) |
| App version | Plain text | n/a | Helps support; no legal requirement |

## What a lawyer should confirm

| Question | Why it matters |
|---|---|
| Under-13 users: block them, or run full COPPA consent? Is asking for the school year enough of an age check? | Preseason covers middle school, so under-13 users are likely ([FTC](https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-changes-childrens-privacy-rule-limiting-companies-ability-monetize-kids-data)) |
| Can a parent consent to texts for a minor's phone, or for a phone they don't own? | TCPA consent belongs to the phone owner ([FCC](https://docs.fcc.gov/public/attachments/DA-26-12A1.txt)) |
| Do the 8am to 9pm calling hours apply to informational reminders? Do any state texting-hour laws apply? | Not confirmed by any source |
| If a Utah school pilots it: does 53E-9 (K-12) or 53H-14 apply? | Contract rules on use, sale and deletion ([53H-14-505](https://le.utah.gov/xcode/Title53H/Chapter14/C53H-14-S505_2025101420251206.pdf)) |
| Does Utah's App Store Accountability Act apply if it ships as a mobile app? Would a data-sharing change trigger new parental consent? | Private right of action from Dec 31, 2026 ([Stoel Rives](https://www.stoel.com/insights/publications/utahs-app-store-accountability-act-goes-into-effect)) |
| Do the Utah Consumer Privacy Act or Digital Choice Act thresholds reach a small free app? | Not researched |
| Is the hand-off of control at 18 required, or just good practice? | FERPA only covers schools ([studentprivacy.ed.gov](https://studentprivacy.ed.gov/faq/what-ferpa)) |

## Conclusion

The biggest call isn't how many sections to have. It's which defaults the app owns. "Match device" covers about a third of the accessibility list for free. The rest, especially text spacing and Safari's missing reduced-transparency signal, is where After Graduation can beat the big apps for students with IEPs. Two findings should change the build plan. First, the anime animation style needs reduced motion and a celebrations switch from day one, not later. Second, the legal questions sit in Notifications and Privacy, not Accessibility, so those two sections should wait for a lawyer's review while Appearance, Accessibility and Plan go ahead now.

Not confirmed: Claude's exact sidebar order and whether it uses a modal or a page; Apple and Material settings guidance (their pages need JavaScript and couldn't be read); search inside settings; and any controlled study of ADHD-specific settings.
