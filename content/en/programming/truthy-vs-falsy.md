---
id: truthy-vs-falsy
category: programming
level: beginner
related: [variable]
term: "Truthy vs Falsy"
pronunciation: "TROO-thee vs FAL-see"
---

## Definition

In many programming languages, values that are not strictly booleans are evaluated as `true` or `false` in conditional statements. A "truthy" value is one that evaluates to true, while a "falsy" value evaluates to false.

## Where you hear it

During code reviews, while debugging logic errors in `if` statements, or when learning how a language handles type coercion.

## Examples

- An empty string is considered falsy, so the code inside the block will not execute.
- A non-zero number is considered truthy, allowing it to pass a conditional check.

## Common mistake

Assuming that only `true` and `false` can be used in conditions; beginners often forget that values like `0`, `null`, or empty arrays are treated as falsy in many languages.
