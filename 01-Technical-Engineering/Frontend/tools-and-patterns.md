# Frontend Tools & Patterns

---

### Next.js
- **Pronunciation**: /nɛkst dʒeɪ ɛs/
- **Arabic**: إطار عمل Next.js
- **Definition**: A React meta-framework that adds server-side rendering (SSR), static site generation (SSG), API routes, file-based routing, and built-in optimizations. It lets you build full-stack web applications with React without configuring everything from scratch.
- **Context**: Frontend architecture decisions, full-stack web apps, SEO-critical projects.
- **Usage Examples**:
  - *Formal*: "We built the platform on Next.js 16 with the App Router, leveraging server components to reduce the client bundle by 40%."
  - *Casual*: "Just use Next — it handles routing, SSR, and API routes out of the box."
- **Common Mistake**: Using client components (`'use client'`) everywhere out of habit. The App Router defaults to server components, which are faster and don't ship JavaScript to the browser. Only add `'use client'` when you actually need interactivity (hooks, event handlers).
- **Related Terms**: SSR, SSG, React, App Router, Server Components, Turbopack

---

### Spaced Repetition (SM-2 Algorithm)
- **Pronunciation**: /speɪst ˌrɛpɪˈtɪʃən/
- **Arabic**: التكرار المتباعد
- **Definition**: A learning technique based on reviewing material at increasing intervals. The SM-2 algorithm tracks three values per item: ease factor (how easy you find it), interval (days until next review), and repetitions (consecutive correct recalls). Items you struggle with are shown more frequently.
- **Context**: EdTech products, flashcard systems, quiz platforms.
- **Usage Examples**:
  - *Formal*: "I implemented a real SM-2 spaced-repetition engine that computes ease factor, interval, and repetitions from attempts — the server controls the schedule, not the client."
  - *Casual*: "The flashcard system uses spaced repetition — it'll show you the ones you keep getting wrong more often."
- **Common Mistake**: Implementing spaced repetition on the client side. If a user switches devices, their progress is lost. Store the SM-2 state (ease factor, interval, next review date) server-side and sync it.
- **Related Terms**: Flashcards, Cognitive Science, Anki, Leitner System

---

### MDX
- **Pronunciation**: /ˌɛm diː ˈɛks/
- **Arabic**: ماركداون مع مكونات React
- **Definition**: A format that lets you write JSX (React components) directly inside Markdown files. This enables rich, interactive content — embedding code playgrounds, diagrams, quizzes, or custom components within what would otherwise be static text.
- **Context**: Documentation sites, educational platforms, blog engines, content-heavy apps.
- **Usage Examples**:
  - *Formal*: "Each lesson is an MDX file with frontmatter metadata, rendered via `next-mdx-remote` to support custom components like interactive code blocks and Mermaid diagrams."
  - *Casual*: "Just write the lesson in MDX — you can drop React components right into the markdown."
- **Common Mistake**: Over-using interactive components in MDX. Most content should be plain Markdown for readability and maintainability. Only use JSX when the content genuinely benefits from interactivity (diagrams, quizzes, interactive examples).
- **Related Terms**: Markdown, JSX, next-mdx-remote, Frontmatter, CMS
