---
id: type-narrowing
category: programming
subcategory: types-and-typing
level: intermediate
related: [interface]
term: "Type Narrowing"
pronunciation: "TYPE NAR-oh-ing"
keywords: ["typescript type narrowing","make typescript type more specific","narrow down types with typeof","typescript type guards and narrowing","refine variable types in typescript","typescript deduce specific type","fix typescript unknown type error","handle union types safely typescript","taib narwing","تضييق النوع في تايبسكريبت","تحديد نوع المتغير بدقة","معرفة نوع البيانات في تايبسكريبت","فحص الأنواع قبل الاستخدام","استنتاج النوع في تايبسكريبت","تضييق النوع","تايب ناروينج","حارس الأنواع في تايبسكريبت"]
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
