---
id: eafp-vs-lbyl
category: programming
subcategory: errors-and-exceptions
level: intermediate
related: [exception, conditional-statement, pythonic]
tags: [python]
aliases: ["eafp", "lbyl"]
term: "EAFP vs LBYL"
pronunciation: "EE-ap vee-ess EL-bul"
keywords: ["try first handle errors", "check before acting", "easier to ask forgiveness", "look before you leap", "python style try except", "if key in dict vs try", "جرّب أولاً ثم عالج الأخطاء", "تحقق قبل التنفيذ", "أسهل أن تطلب المسامحة", "انظر قبل أن تقفز", "أسلوب بايثون مع try except", "if key in dict مقابل try"]
---

## Definition

EAFP ("easier to ask forgiveness than permission") means trying the action and handling the error if it fails. LBYL ("look before you leap") means checking first, then acting.

## Where you hear it

In Python style discussions, code reviews about `try / except` versus `if`, and interviews about Pythonic code.

## Examples

- EAFP: try to open the file and catch `FileNotFoundError`.
- LBYL: check that the file exists before opening it.

## Common mistake

Using try/except for everything, or wrapping a huge block. Keep the `try` small and catch only the error you expect.

## Don't confuse with

A race condition, which is a reason EAFP can be safer: the file might vanish between your check and your action.

## Say it at work

- Python prefers EAFP, so just try it and handle the exception.
- Here LBYL is clearer because the check is cheap.
