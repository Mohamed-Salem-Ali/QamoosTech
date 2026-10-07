---
id: short-circuit-evaluation
category: programming
subcategory: language-basics
level: intermediate
related: [truthy-vs-falsy, control-flow, conditional-statement]
tags: [python, javascript]
term: "Short-Circuit Evaluation"
pronunciation: "short-SIR-kit ih-val-yoo-AY-shun"
keywords: ["and or stop early", "second condition not evaluated", "default value with or", "avoid error with and", "lazy boolean operators", "x and x.y pattern", "and و or تتوقفان مبكراً", "الشرط الثاني لا يُقيَّم", "قيمة افتراضية باستخدام or", "تجنب الخطأ باستخدام and", "العوامل المنطقية الكسولة", "نمط x and x.y"]
---

## Definition

Short-circuit evaluation means `and` and `or` stop as soon as the result is known, so the rest of the expression is never evaluated.

## Where you hear it

In code reviews about safe checks such as `user and user.name`, and in explanations of default values written with `or`.

## Examples

- The second check never runs when the first one is false.
- We rely on short-circuiting to avoid reading a missing attribute.

## Common mistake

Putting code with side effects in the second part of `and` / `or` and expecting it to always run.

## Don't confuse with

A bitwise operator such as `&`, which always evaluates both sides.

## Say it at work

- Order the conditions so the cheap check runs first and short-circuits.
- Because of short-circuiting, this never touches the database when the flag is off.
