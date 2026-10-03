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

## Don't confuse with

Hydration is often confused with client-side rendering (CSR); while CSR builds the entire page in the browser from scratch, hydration attaches event listeners to pre-rendered HTML sent by the server.

## Say it at work

- I think we are seeing a hydration mismatch because the component is using local storage before the page finishes loading.
- Please check if the initial state is consistent across the server and client to prevent hydration issues in this module.
