# QamoosTech web

Next.js 14 (App Router) static site. Content is read from `../content` at build time.

```bash
npm run dev        # development
npm run validate   # content consistency (also runs before build)
npm run build      # exports to out/
```

- Routes: `/[lang]/`, `/[lang]/c/[category]/`, `/[lang]/t/[id]/`. `/` redirects to the saved or default language.
- Languages and UI strings: `src/lib/i18n.ts`. Term parsing: `src/lib/parse-term.mjs`.
- Styling: `src/styles/globals.css` (CSS variables, light/dark, logical properties for RTL).

## Pronunciation audio (optional)

Terms play the browser's built-in voice by default. For natural recorded voices, generate files once with
Google's Gemini TTS using free [AI Studio](https://aistudio.google.com/) keys. The free TTS quota is only about
10 requests per day per model per account, so the script spreads work over all key × model "slots" and is safe to
re-run every day (it only creates missing files).

```bash
# web/.env.local (never committed; see .env.example)
GEMINI_API_KEY_A=...
GEMINI_API_KEY_B=...        # optional second account

npm run audio -- --status           # progress and today's remaining quota, no API calls
npm run audio -- --only api,jwt     # quick test
npm run audio -- --voices Kore      # one voice = half the work
npm run audio                       # everything missing, until today's quota is used up
```

Quotas change, so check Google's current limits before a big run. Files land in
`public/audio/<Voice>/<id>.mp3` (WAV if `ffmpeg` is missing) and are committed, so the site stays static and keys are never exposed. The page shows a
voice picker automatically when more than one voice exists.

## Scripts

| Command | What it does |
|---|---|
| `npm run validate` | Checks that every term exists in every language, categories are valid and `related` ids exist |
| `npm run audio` | Generates missing pronunciation files (see above) |
| `npm run ai`, `qa`, `qa-fix`, `terms`, `enrich`, `scan` | Optional maintainer tools that use Gemini to draft, review and enrich terms. A human reviews every change; they need API keys and are not required to build the site |
