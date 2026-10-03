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

## Don't confuse with

Type narrowing refines a broad type into a specific one based on runtime checks, while type casting uses 'as' to force the compiler to treat a value as a certain type without any checks.

## Say it at work

- Can we use a custom type guard here to help TypeScript with type narrowing?
- Please add a type check before accessing that property to enable proper type narrowing.
