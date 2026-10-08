---
id: conditional-statement
category: programming
subcategory: language-basics
level: beginner
related: [control-flow, ternary-operator, truthy-vs-falsy]
aliases: ["if statement", "if else", "if else statement"]
term: "Conditional Statement"
pronunciation: "kun-DISH-un-ul STAYT-ment"
keywords: ["if else statement", "run code only if true", "elif chain", "branching logic", "decision in code", "switch alternative", "جملة if else", "نفّذ الكود فقط إذا تحقق الشرط", "سلسلة elif", "منطق التفرع", "قرار في الكود", "بديل switch"]
---

## Definition

A conditional statement runs a block of code only when a condition is true, usually written with `if`, `elif` and `else`.

## Where you hear it

In every programming course, and in code reviews about long chains of conditions.

## Examples

- Add an `else` branch to handle the case where the user is not logged in.
- The conditional checks the role before showing the button.
- If the cart is empty, show a message instead of the checkout button.

## Common mistake

Writing a long `if / elif` chain for every value. A dictionary lookup is often clearer.

## Don't confuse with

A loop, which repeats code, while a conditional decides whether code runs at all.

## Say it at work

- Handle the empty case first with an early return.
- This conditional has too many branches; let's use a lookup table.
