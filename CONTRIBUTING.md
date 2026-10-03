# Contributing to QamoosTech

Thank you for helping Arabic-speaking engineers understand the English they meet at work.

## Add or fix a term

Every term has **one file per language** with the same file name:

```
content/en/<category>/<id>.md
content/ar/<category>/<id>.md
```

1. Pick a category from `content/categories.json` and a lowercase `id` (`rate-limiting`).
2. Copy an existing term in the same category and edit both language files.
3. Run the checks from `web/`:
   ```bash
   npm install
   npm run validate   # same terms in every language, valid categories and related ids
   npm run build
   ```
4. Open a pull request.

### File format

```markdown
---
id: rate-limiting            # = file name
category: web-apis           # = folder name
level: intermediate          # beginner | intermediate
related: [status-code]       # ids that exist
term: "Rate Limiting"        # the English term, in every language file
translation: "تحديد معدل الطلبات"   # optional, Arabic file only
pronunciation: "RAYT LIM-it-ing"    # respelling in the file's own language
---

## Definition
## Where you hear it
## Examples        # "- English sentence" and, in the Arabic file, "  - Arabic translation" nested below
## Common mistake
```

The four `##` sections are required and must stay in this order (their titles are
localized per language).

### Writing rules

- **Arabic:** simple Modern Standard Arabic, no dialect. Keep the English term as it
  is used by engineers; give an Arabic equivalent only if people really use it.
- **Examples:** short, generic, in English. Never use real clients, employers,
  private numbers, or personal data.
- **Pronunciation** is separate for each language; do not mix Arabic letters into the
  English file.
- One idea per entry, no marketing language.

## Add a language

1. Add the language to `web/src/lib/i18n.ts` (`languages` and the `ui` strings).
2. Add its names to `content/categories.json`.
3. Create `content/<code>/` with a translation of every term. `npm run validate`
   lists what is still missing.

## Code changes

Keep changes small and run `npm run lint` and `npm run build` before opening a PR.
