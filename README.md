<div align="center">
  <img src="assets/logo.svg" alt="QamoosTech logo" width="120" />
  <h1>QamoosTech · قاموس تك</h1>
  <p>A bilingual dictionary of the English words software engineers meet every day.<br/>
  قاموس ثنائي اللغة لكلمات الإنجليزية التي يقابلها المبرمجون كل يوم.</p>
  <p>
    <a href="https://qamoostech.mohamedyounes.dev/en/">Live site</a> ·
    <a href="https://qamoostech.mohamedyounes.dev/ar/">النسخة العربية</a> ·
    <a href="CONTRIBUTING.md">Contribute</a>
  </p>
</div>

## What is this?

QamoosTech explains the English vocabulary of software work: code and architecture, daily team talk, emails with clients, and the words you meet in courses and documentation. Each term has a clear definition, where you hear it, real examples, a common mistake, and pronunciation.

- **Arabic first** (simple Modern Standard Arabic), English second. More languages are welcome.
- **728 terms** in 14 categories and 38 subcategories, from beginner to intermediate.
- **Natural pronunciation audio**: 317 of 728 terms so far (about 40 more added each day), with the browser's built-in voice as a fallback for the rest.
- A fast static website with RTL support, light and dark themes, and instant search in both languages.

## Categories

Programming Fundamentals · Web & APIs · Frontend · Databases · Architecture & Design · DevOps & Cloud · Git & Collaboration · Security · Testing & Quality · AI & Data · Agile & Teamwork · Clients & Freelancing · Emails & Meetings · Idioms & Slang.

## Repository layout

```text
content/
  categories.json        categories and their subcategories, with names per language
  tags.json              technology tags (python, django, react...)
  ar/<category>/<subcategory>/<id>.md   Arabic entries (default language)
  en/<category>/<subcategory>/<id>.md   English entries
  LICENSE.md             content license (CC BY-SA 4.0)
web/                     Next.js site (static export, i18n: ar, en)
assets/                  logo
CONTRIBUTING.md          how to add terms and languages
```

## Run the website

Requires Node.js 20+.

```bash
cd web
npm install
npm run dev        # http://localhost:3000
npm run validate   # checks all content
npm run build      # static export to web/out
```

The site needs no API keys. Keys are only used by the optional maintainer scripts described in [web/README.md](web/README.md).

## Contributing

Corrections, new terms and new languages are all welcome. See [CONTRIBUTING.md](CONTRIBUTING.md), or open an issue with the **Suggest a term** or **Report a mistake** template.

## Built by

[Mohamed Salem Younes](https://www.mohamedyounes.dev), a backend-focused software engineer in Cairo, Egypt.

## License

Code: [MIT](LICENSE). Content: [CC BY-SA 4.0](content/LICENSE.md).
