---
id: code-smell
category: programming
subcategory: code-quality
level: intermediate
related: [refactoring, boilerplate, tech-debt]
term: "Code Smell"
pronunciation: "kohd smel"
keywords: ["sign of a design problem", "long function is a smell", "duplicated code smell", "code that looks wrong", "refactor a code smell", "علامة على مشكلة في التصميم", "دالة طويلة رائحة سيئة", "تكرار الشيفرة", "شيفرة تبدو خاطئة"]
---

## Definition

A sign in the code that something may be wrong with its design, such as a very long function or the same logic copied in many places. It is not a bug, but it makes change harder.

## Where you hear it

In code reviews, when a reviewer says "this smells", and in refactoring discussions.

## Examples

- This function has 200 lines, which is a code smell.
- The same validation appears in five places, a clear code smell.

## Common mistake

Treating every code smell as a bug to fix right away. A smell is a hint to look closer, not an order to rewrite.

## Don't confuse with

A code smell is a hint that the design may be weak. A bug is behaviour that is wrong today.
