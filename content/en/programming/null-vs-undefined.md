---
id: null-vs-undefined
category: programming
level: beginner
related: [variable]
term: "Null vs Undefined"
pronunciation: "NUL versos UN-de-fined"
keywords: ["difference between null and undefined","variable has no value","check if variable is empty","intentional absence of value","javascript null vs undefined","unassigned variable state","missing data in javascript","null vs undefined comparison","handle empty variables","why is my variable undefined","الفرق بين نال وأنديفايند","متغير بدون قيمة برمجية","الفرق بين null و undefined","معنى غياب القيمة برمجياً","متى نستخدم null","متغير تم تعريفه بدون قيمة","التحقق من القيم الفارغة","الفرق بين القيمتين الفارغتين","مشكلة القيم غير المعرفة","تفريغ المتغيرات في البرمجة"]
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
