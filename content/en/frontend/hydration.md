---
id: hydration
category: frontend
level: intermediate
related: [rendering, nextjs]
term: "Hydration"
pronunciation: "hy-DRAY-shun"
---
## Definition

The step where the browser attaches JavaScript to HTML that the server already sent, so the page becomes interactive.

## Where you hear it

Next.js and React errors like "hydration mismatch".

## Examples

- We got a hydration error because the server and client rendered different text.
- The page is visible quickly, then hydration makes the buttons work.

## Common mistake

Using values like `Date.now()` or random numbers while rendering. The server and browser get different results.
