---
id: memoization
category: frontend
level: intermediate
related: [state, component]
term: "Memoization"
pronunciation: "mem-oh-uy-ZAY-shun"
---

## Definition

An optimization technique that caches the return value of a function based on its inputs, so it doesn't need to recalculate when the same inputs occur again.

## Where you hear it

In code reviews, performance tuning discussions, and when optimizing React components.

## Examples

- We used memoization to prevent the heavy calculation function from running on every render.
- Applying memoization to the filtered list component significantly improved the UI responsiveness.

## Common mistake

Applying memoization to every single function by default, which adds unnecessary memory overhead and complexity without any performance gain.

## Don't confuse with

Memoization caches the result of a function call based on inputs, while caching usually refers to storing broader data like API responses or database queries for later use.

## Say it at work

- Let's add memoization to this expensive calculation so it doesn't re-run on every state change.
- We should consider applying memoization here to resolve the noticeable UI lag during filtering.
