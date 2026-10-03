---
id: null-vs-undefined
category: programming
level: beginner
related: [variable]
term: "Null vs Undefined"
pronunciation: "NUL versos UN-de-fined"
---

## Definition

`null` represents an intentional absence of any object value, while `undefined` means a variable has been declared but not yet assigned a value.

## Where you hear it

During code reviews, debugging missing data, or checking API response payloads in JavaScript and TypeScript.

## Examples

- Declaring a variable without a value automatically sets its state to `undefined`.
- Developers explicitly assign `null` to clear a variable or indicate a missing resource.

## Common mistake

Treating them as completely interchangeable, leading to unexpected type errors when checking optional properties.

## Say it at work

- Let's check if the user profile is null or undefined before we render the avatar.
- Please ensure the function handles both null and undefined parameters correctly to prevent runtime errors.
