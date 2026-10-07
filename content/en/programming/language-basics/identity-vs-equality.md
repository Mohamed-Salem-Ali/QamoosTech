---
id: identity-vs-equality
category: programming
subcategory: language-basics
level: intermediate
related: [reference, object, truthy-vs-falsy]
tags: [python]
aliases: ["is vs", "is vs equals"]
term: "Identity vs Equality"
pronunciation: "eye-DEN-ti-tee vee-ess ee-KWOL-i-tee"
keywords: ["is vs == in python", "same object or same value", "compare with none", "two lists equal but not the same", "id() function", "triple equals javascript", "الفرق بين is و== في بايثون", "نفس الكائن أم نفس القيمة", "المقارنة مع None", "قائمتان متساويتان لكنهما ليستا الكائن نفسه", "الدالة id()", "ثلاث علامات يساوي في جافاسكريبت"]
---

## Definition

Equality asks whether two values are the same; identity asks whether two names point to the very same object. In Python, `==` checks equality and `is` checks identity.

## Where you hear it

In Python code reviews, in interviews, and when two lists look equal but behave differently.

## Examples

- Two lists with the same items are equal, but they are not the same object.
- Use `is None` rather than `== None` to check for the absence of a value.

## Common mistake

Using `is` to compare numbers or strings. It may seem to work for small values, but only `==` is reliable for values.

## Don't confuse with

A copy, which has equal contents but a different identity.

## Say it at work

- Compare with `is None`, not `== None`.
- They are equal but not identical, so changing one does not change the other.
