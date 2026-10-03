---
id: bundle
category: frontend
level: intermediate
related: [rendering]
term: "Bundle"
pronunciation: "BUN-dul"
---
## Definition

The final JavaScript and CSS files that a build tool creates from your code and sends to the browser.

## Where you hear it

Performance work: "the bundle is too big".

## Examples

- Adding that library increased the bundle size by 300 KB.
- Split the bundle so each page loads only what it needs.

## Common mistake

Installing big libraries for tiny features. Check the bundle size before adding a dependency.

## Don't confuse with

Bundle is often confused with Chunk; a bundle is the complete set of files generated for the application, while a chunk is a smaller piece of that bundle created during code splitting.

## Say it at work

- We should check if we can optimize the main bundle because the initial load time is getting a bit high.
- I have analyzed the current bundle and identified several unused dependencies that we can safely remove to reduce the total size.
