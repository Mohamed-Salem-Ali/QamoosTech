---
id: rendering
category: frontend
level: intermediate
related: [hydration, nextjs]
term: "Rendering (SSR / CSR)"
pronunciation: "REN-der-ing"
---
## Definition

Turning code and data into the page the user sees. With SSR the server builds the HTML. With CSR the browser builds it using JavaScript.

## Where you hear it

Next.js, SEO, and performance discussions.

## Examples

- We use server-side rendering so search engines can read the content.
- The page re-renders every time the state changes.

## Common mistake

Choosing SSR or CSR by habit. Choose by need: SEO and first load speed, or heavy interactivity.

## Don't confuse with

Rendering turns data into visible UI, while hydration attaches JavaScript event listeners to that already rendered static HTML to make it interactive.

## Say it at work

- We need to fix this layout shift that happens during the initial rendering phase.
- I am investigating why this component is triggering an unexpected re-rendering loop.
