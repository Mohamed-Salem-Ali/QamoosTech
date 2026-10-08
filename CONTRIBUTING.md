# Contributing to QamoosTech

Thank you for helping Arabic-speaking engineers understand the English they meet at work.

## Add or fix a term

Every term has **one file per language** with the same file name:

```
content/en/<category>/<subcategory>/<id>.md
content/ar/<category>/<subcategory>/<id>.md
```

Small categories have no subcategories yet and keep files directly in the category folder.

1. **Check it is not already there.** Put your candidate in a text file and run
   `npm run dedupe -- candidates.txt` from `web/`. It matches ids, titles, acronyms and aliases, so
   "dict" finds "Dictionary". One concept = one entry: if the idea exists under another name, add an
   `aliases` entry to the existing term instead.
2. Pick a category and subcategory from `content/categories.json` and a lowercase `id` (`rate-limiting`).
3. Copy an existing term in the same subcategory and edit both language files.
4. Run the checks from `web/`:
   ```bash
   npm install
   npm run validate   # same terms in every language, valid taxonomy, no duplicate names or aliases
   npm run build
   ```
5. Open a pull request into `dev` (see "Branches and pull requests" below).

### File format

```markdown
---
id: rate-limiting            # = file name
category: web-apis           # = folder name
subcategory: api-design      # = folder name inside the category (required when the category has subcategories)
level: intermediate          # beginner | intermediate
related: [status-code]       # ids that exist
tags: [python]               # optional: technologies from content/tags.json (the same in every language)
aliases: ["throttling"]      # optional: other names for the same concept (can differ per language)
term: "Rate Limiting"        # the English term, in every language file
translation: "تحديد معدل الطلبات"   # required in every language except English (the reference)
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
  English file. The one exception is the `keywords:` line: its search phrases are in both
  languages in every file, so Arabic phrases are allowed there even in the English file.
- One idea per entry, no marketing language.

## Add a language

1. Add the language to `web/src/lib/i18n.ts`: an entry in `languages` and a complete `ui` block
   (TypeScript fails until every string is there).
2. Add its writing system to `web/src/lib/writing-systems.mjs` (`arabic` or `latin`). The validator
   rejects letters from any other script in that language's files.
3. Add its names to `content/categories.json` and `content/tags.json`.
4. Create `content/<code>/` with a translation of every term, each with a `translation:` line.
   `npm run validate` lists what is still missing.
5. Run `npm run validate`, `npm test`, and `npm run build` from `web/`.

The language switch and the root redirect read the `languages` list, so they need no changes. A language in a script the site does not load yet (not Latin or Arabic) also needs its font added in `web/src/components/Shell.tsx`.

## Code changes

Keep changes small and run `npm run lint` and `npm run build` before opening a PR.
