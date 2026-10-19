# Gallery contact preview — 19 October 2026

Not published. Owner requested improvements and a preview. Explicit owner approval is required before merging or publishing visual changes.

Preview: https://vmp.tail8cd004.ts.net:8467/contact/ (tailnet only).
Full website: https://vmp.tail8cd004.ts.net:8467/

Changes: shared info@gallerybled.com contact address throughout visitor inquiry flows; redesigned responsive contact page with phone/directions links and English/Slovenian contact copy; a single reusable contact form with browser validation, email-draft wording, retained fields and clipboard fallback; inquiry dialog focus trap and Escape support; correct document language and localized floating call label. Existing catalogue claims are not verified or changed.

Validation: production static build, TypeScript, ESLint (two pre-existing warnings), 12 combinations of 320/390/1440 px × EN/SL × light/dark. Additional checks cover contact recipient, encoded message contents, native required validation, language switching, clipboard, draft retention, artwork reference/photo URL, keyboard focus and Escape, and all five routes. Axe WCAG A/AA checks on the contact main content have no violations in light/dark. No emails sent and no live website deployment.

Artifacts: evidence/ contains screenshots, checks.json, axe reports, build/type/lint logs. check.mjs uses the existing local Playwright tooling. server.mjs serves out/ on loopback port 9150 with noindex headers; systemd user unit gallery-contact-preview.service; tailnet HTTPS port 8467.

Original project: VMA /home/isak/website-optimization/repos/galerija-omerzel. This isolated worktree uses Git for any transfer back, and must not overwrite unrelated work. A newer upstream analytics-only commit e2943b3 appeared during review; it is preserved in the preview branch. Local source branch: preview/gallery-contact-20261019. Never push main without explicit approval.

Email infrastructure is already configured; Toni still needs to verify galerija.omerzel@gmail.com. The site uses mailto drafts and cannot confirm delivery.

## Follow-up: persistent dark mode

Owner requested persistence across pages. Reused installed next-themes with the existing theme storage key, pre-paint initialization, cross-tab synchronization and system default. Explicit light/dark choices persist across every page and reload. Theme icons use CSS to avoid server/client hydration differences. About, Gallery, Videos and artwork dialogs now render dark surfaces/text, and document background/native controls use the active scheme.

Production build, TypeScript and ESLint pass (same two existing warnings). review/evidence/theme-checks.json records five-page mobile/desktop navigation, reload and initialization before main markup, saved preference, second-tab synchronization, light preference persistence and system changes. No React page errors observed. The full contact/inquiry regression suite was rerun. Changes remain preview-only pending owner approval.

## Follow-up: remove video gallery

Owner requested removal of the video gallery. Removed the Videos route and metadata, desktop/mobile navigation entry, unused navigation translations and sitemap entry. Preview now has Home, Gallery, About and Contact. Direct /videos/ requests return 404; static export contains no videos page. Production build, TypeScript and ESLint pass (same two pre-existing warnings). Browser checks cover all four pages × EN/SL × mobile/desktop, no video links, preserved dark mode and four sitemap URLs. Evidence: evidence/remove-videos-checks.json. Live website remains unchanged pending publication approval.

## Follow-up: mouse hover animation

Owner requested hover animations. Preview now has gold navigation underlines, subtle button lift/arrow movement, contact-direction arrow feedback, and restrained artwork-card lift/image zoom with a small arrow reveal. Replaced the old large card lift and colored drop-shadow handlers with CSS feedback. Card lazy responsive images and click behavior are preserved. Hover movement runs only for fine pointers supporting hover and with no reduced-motion preference. Focus outlines remain available for keyboard users; reduced-motion and touch do not get hover movement. Production build, TypeScript and ESLint pass (same existing warnings); browser checks pass in light/dark, confirm keyboard focus and artwork opening, and verify no transform movement on touch/reduced-motion. Evidence: evidence/hover-checks.json and artwork-hover-*.png. Live unchanged.
