---
id: type-assertion
category: programming
subcategory: types-and-typing
level: intermediate
related: [type-narrowing, type-hint, static-typing]
tags: [typescript]
aliases: ["type cast", "as cast", "non-null assertion"]
term: "Type Assertion"
pronunciation: "TYPE uh-SER-shun"
keywords: ["tell the compiler the type", "as keyword in typescript", "cast without checking", "trust me type", "non null assertion", "typing escape hatch", "إخبار المترجم بالنوع", "الكلمة as في TypeScript", "تحويل دون فحص", "ثق بي في النوع", "تأكيد عدم الفراغ", "مخرج طوارئ من الأنواع"]
---

## Definition

A type assertion tells the type checker "treat this value as this type" (for example `value as User` in TypeScript). It changes only what the checker believes, not what the value really is at run time.

## Where you hear it

In TypeScript code reviews (`as` and `!`), API response handling and migration from JavaScript.

## Examples

- `response as User` compiles even if the server sends something else.
- Prefer a type guard over an assertion.

## Common mistake

Using assertions to silence errors. If the value isn't what you claimed, the bug appears later at run time.

## Don't confuse with

Type narrowing, where code checks the value (`typeof x === 'string'`) so the checker can prove the type.

## Say it at work

- Replace this `as` with a runtime check.
- Validate the response, then assert.
