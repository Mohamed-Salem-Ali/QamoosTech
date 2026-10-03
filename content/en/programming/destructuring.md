---
id: destructuring
category: programming
level: beginner
related: [object, array]
term: "Destructuring"
pronunciation: "dee-STRUK-chur-ing"
---

## Definition

Destructuring is a syntax feature that allows you to unpack values from arrays or properties from objects into distinct variables. It provides a concise way to extract data without needing multiple assignment statements.

## Where you hear it

During code reviews, when discussing modern JavaScript or Python syntax, or when refactoring data-heavy functions.

## Examples

- You can use destructuring to extract specific fields from a user object into local variables.
- Destructuring an array allows you to assign its elements to individual variables in one line.

## Common mistake

Developers often try to destructure values from `null` or `undefined` objects, which causes the program to throw a runtime error.

## Don't confuse with

Destructuring is often confused with spread syntax; while destructuring extracts values out of a collection into variables, the spread operator expands the elements of a collection into a new structure.

## Say it at work

- I'm going to use destructuring here to pull the user ID and email directly from the response object.
- Please consider using destructuring in this component to make the code cleaner and easier to read.
