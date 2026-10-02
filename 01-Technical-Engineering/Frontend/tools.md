# Tools

---

### Next.js
- **Pronunciation**: "NEXT jay-ess" · نكست جي إس
- **Arabic**: إطار عمل Next.js
- **Definition**: A React meta-framework that adds server-side rendering (SSR), static site generation (SSG), API routes, file-based routing, and built-in optimizations. It lets you build full-stack web applications with React without configuring everything from scratch.
- **Context**: Frontend architecture decisions, full-stack web apps, SEO-critical projects.
- **Usage Examples**:
  - *Formal*: "We built the platform on Next.js 16 with the App Router, leveraging server components to reduce the client bundle by 40%."
  - *Casual*: "Just use Next — it handles routing, SSR, and API routes out of the box."
- **Common Mistake**: Using client components (`'use client'`) everywhere out of habit. The App Router defaults to server components, which are faster and don't ship JavaScript to the browser. Only add `'use client'` when you actually need interactivity (hooks, event handlers).
- **Related Terms**: SSR, SSG, React, App Router, Server Components, Turbopack

---

### MDX
- **Pronunciation**: "em-dee-EX" · إم دي إكس
- **Arabic**: ماركداون مع مكونات React
- **Definition**: A format that lets you write JSX (React components) directly inside Markdown files. This enables rich, interactive content — embedding code playgrounds, diagrams, quizzes, or custom components within what would otherwise be static text.
- **Context**: Documentation sites, educational platforms, blog engines, content-heavy apps.
- **Usage Examples**:
  - *Formal*: "Each lesson is an MDX file with frontmatter metadata, rendered via `next-mdx-remote` to support custom components like interactive code blocks and Mermaid diagrams."
  - *Casual*: "Just write the lesson in MDX — you can drop React components right into the markdown."
- **Common Mistake**: Over-using interactive components in MDX. Most content should be plain Markdown for readability and maintainability. Only use JSX when the content genuinely benefits from interactivity (diagrams, quizzes, interactive examples).
- **Related Terms**: Markdown, JSX, next-mdx-remote, Frontmatter, CMS

