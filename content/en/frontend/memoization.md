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
