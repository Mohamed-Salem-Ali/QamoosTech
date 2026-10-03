---
id: code-splitting
category: frontend
level: intermediate
related: [bundle]
term: "Code Splitting"
pronunciation: "KOHD SPLIT-ing"
---

## Definition

Code splitting is the technique of breaking your application's JavaScript bundle into smaller chunks that are loaded on demand, rather than downloading everything upfront. This approach reduces initial load times and improves overall web performance.

## Where you hear it

- During frontend performance optimization reviews
- When configuring modern bundlers like Vite or Webpack
- In framework documentation discussing lazy loading

## Examples

- We implemented code splitting to reduce the initial JavaScript bundle size and improve page load speed.
- The routing configuration uses dynamic imports to enable code splitting for each individual page.

## Common mistake

Splitting the code into too many tiny chunks, which can cause an excessive number of network requests and actually slow down the application instead of speeding it up.

## Don't confuse with

Code splitting is often confused with tree shaking; while code splitting breaks the bundle into smaller files loaded on demand, tree shaking removes unused code from the final bundle during the build process.

## Say it at work

- Let's apply code splitting to the admin dashboard routes so we don't load unnecessary modules for standard users.
- I have enabled code splitting for the heavy components to ensure the main bundle size stays within our performance budget.
