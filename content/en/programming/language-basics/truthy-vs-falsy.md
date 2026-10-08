---
id: truthy-vs-falsy
category: programming
subcategory: language-basics
level: beginner
related: [variable, identity-vs-equality, short-circuit-evaluation]
aliases: ["truthiness"]
term: "Truthy vs Falsy"
pronunciation: "TROO-thee vs FAL-see"
keywords: ["values evaluated as boolean","how if statements check variables","truthy and falsy concepts","boolean evaluation of non-boolean","check if value is empty","javascript implicit boolean conversion","is zero true or false","truthy vs falsy meaning","programming conditional logic basics","values treated as false","قيم تُعامل معاملة المنطق","كيف تعمل الشروط البرمجية","متى يعتبر المتغير صحيحا","تحويل القيم إلى منطقية","قيم تعتبر خاطئة برمجيا","الفرق بين تروثي وفالسي","سلوك القيم في جمل الشرط","تقييم المتغيرات في البرمجة","مفهوم القيم المنطقية الضمنية","فهم القيم التي تساوي خطأ"]
---

## Definition

In many programming languages, values that are not strictly booleans are evaluated as `true` or `false` in conditional statements. A "truthy" value is one that evaluates to true, while a "falsy" value evaluates to false.

## Where you hear it

During code reviews, while debugging logic errors in `if` statements, or when learning how a language handles type coercion.

## Examples

- An empty string is considered falsy, so the code inside the block will not execute.
- A non-zero number is considered truthy, allowing it to pass a conditional check.
- An empty list is falsy, so if not items runs the branch that handles no items.

## Common mistake

Assuming that only `true` and `false` can be used in conditions; beginners often forget that values like `0`, `null`, or empty arrays are treated as falsy in many languages.

## Don't confuse with

Falsy is not the same as false. Values such as 0, an empty string and null are falsy in a condition, but only the boolean false is false itself.

## Say it at work

- Be careful with that variable, it might be falsy if the API returns an empty list.
- I suggest adding an explicit check for null to avoid issues with other falsy values.
