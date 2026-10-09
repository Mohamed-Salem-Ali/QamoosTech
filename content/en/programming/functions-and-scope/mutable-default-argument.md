---
id: mutable-default-argument
category: programming
subcategory: functions-and-scope
level: intermediate
related: [function, parameter-vs-argument, immutable]
tags: [python]
aliases: ["mutable default", "default argument bug"]
term: "Mutable Default Argument"
pronunciation: "MYOO-tuh-bul dih-FAWLT AR-gyoo-ment"
keywords: ["list as default parameter bug", "default list shared between calls", "python gotcha default argument", "def f(x, items=[])", "use none as default", "function remembers previous call data", "unexpected shared state", "classic python interview question", "خطأ استخدام قائمة كقيمة افتراضية", "القائمة الافتراضية مشتركة بين الاستدعاءات", "فخ بايثون مع القيم الافتراضية", "استخدام None كقيمة افتراضية", "الدالة تتذكر بيانات الاستدعاء السابق", "حالة مشتركة غير متوقعة", "سؤال مقابلات بايثون كلاسيكي"]
---

## Definition

A mutable default argument is a default value such as an empty list or dictionary. Python creates it once, when the function is defined, so every call shares the same object.

## Where you hear it

In Python interviews, code reviews, and bug hunts where data from one call mysteriously appears in the next.

## Examples

- The bug was a mutable default argument: every call kept appending to the same list.
- Use `None` as the default and create the list inside the function.
- The function appended to a default list created once, so old items leaked into new calls.

## Common mistake

Writing `def add(item, bucket=[])` and expecting a fresh list each time. Use `bucket=None` and create the list in the body.

## Don't confuse with

An immutable default such as a number or a string, which is safe because it cannot be changed in place.

## Say it at work

- That's the mutable default argument trap; switch the default to None.
- Our linter flags mutable defaults, so please fix it.
