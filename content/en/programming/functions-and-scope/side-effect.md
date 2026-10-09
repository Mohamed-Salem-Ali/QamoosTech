---
id: side-effect
category: programming
subcategory: functions-and-scope
level: intermediate
related: [pure-function, function, reference]
aliases: ["side effects"]
term: "Side Effect"
pronunciation: "SYDE ih-FEKT"
keywords: ["function changes something outside", "modifies global variable", "writes to file or database", "mutating an argument", "unexpected change in code", "hidden behavior", "دالة تغيّر شيئاً خارجها", "تعديل متغير عام", "الكتابة في ملف أو قاعدة بيانات", "تعديل الوسيط", "تغيير غير متوقع في الكود", "سلوك خفي"]
---

## Definition

A side effect is anything a function does besides returning a value: changing a variable outside it, writing a file, calling the network or printing.

## Where you hear it

In code reviews, testing discussions, and explanations of why some functions are hard to reason about.

## Examples

- The function has a side effect: it modifies the list that was passed in.
- Sending the email is a side effect, so we mock it in tests.
- The log call is a side effect, so the function is no longer pure.

## Common mistake

Assuming side effects are always bad. Programs need them (saving data, sending messages); the goal is to keep them in a few clear places.

## Don't confuse with

A return value, which is the visible result of a function. A side effect is something that happens on the way.

## Say it at work

- That helper has a hidden side effect; let's make it return the new value instead.
- Isolate the side effects at the edges of the system.
