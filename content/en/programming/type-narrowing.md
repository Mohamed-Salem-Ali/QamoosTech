---
id: type-narrowing
category: programming
level: intermediate
related: [interface]
term: "Type Narrowing"
pronunciation: "TYPE NAR-oh-ing"
---
## Definition

When TypeScript works out a more specific type for a value after you check it, for example with `typeof` or `in`.

## Where you hear it

TypeScript code reviews and type-safety discussions.

## Examples

- After `typeof value === "string"`, TypeScript narrows the type to `string`.
- Use a type guard to narrow the response before reading `data`.

## Common mistake

Using `as` to force a type. It silences the compiler but gives no safety at runtime.
