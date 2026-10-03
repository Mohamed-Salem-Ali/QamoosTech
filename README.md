<div align="center">
  <img src="assets/logo.svg" alt="QamoosTech logo" width="120" />
  <h1>QamoosTech · قاموس تك</h1>
  <p>A bilingual dictionary of the English words software engineers meet every day.<br/>
  قاموس ثنائي اللغة لكلمات الإنجليزية التي يقابلها المبرمجون كل يوم.</p>
</div>

## What is this?

QamoosTech explains the English vocabulary of software work: code and architecture,
daily team talk, emails with clients, and the words you meet in courses and
documentation. Each term has a clear definition, where you hear it, real examples,
a common mistake, and pronunciation.

- **Arabic first** (simple Modern Standard Arabic), English second, more languages welcome.
- **~180 terms** in 14 categories, beginner to intermediate.
- A fast static website with RTL support and instant search in both languages.

## Repository layout

```
content/
  categories.json        category names and descriptions per language
  ar/<category>/<id>.md  Arabic entries (default language)
  en/<category>/<id>.md  English entries
  LICENSE.md             content license (CC BY-SA 4.0)
web/                     Next.js site (static export, i18n: ar, en)
assets/                  logo
CONTRIBUTING.md          how to add terms and languages
```

## Run the website

```bash
cd web
npm install
npm run dev        # http://localhost:3000
npm run validate   # checks all content
npm run build      # static export to web/out
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Adding a language means adding a folder under
`content/` and a few UI strings, nothing else.

## License

Code: [MIT](LICENSE). Content: [CC BY-SA 4.0](content/LICENSE.md).
