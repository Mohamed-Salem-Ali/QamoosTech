---
id: dynamic-typing
category: programming
subcategory: language-basics
level: beginner
related: [data-type, variable, type-narrowing]
tags: [python, javascript]
term: "Dynamic Typing"
pronunciation: "dy-NAM-ik TY-ping"
keywords: ["variable has no fixed type", "types checked at runtime", "python vs java types", "assign string then number to same variable", "typeerror at runtime", "static vs dynamic typing difference", "duck typing language", "why python has no type declarations", "المتغير ليس له نوع ثابت", "فحص الأنواع أثناء التشغيل", "الفرق بين التنميط الثابت والديناميكي", "تغيير نوع المتغير في بايثون", "لماذا لا يحتاج بايثون لتحديد النوع", "أخطاء الأنواع وقت التشغيل", "التنميط الديناميكي في جافاسكريبت", "داينامك تايبنج"]
---

## Definition

Dynamic typing means a variable has no fixed type: the type belongs to the value it holds right now, and it is checked while the program runs.

## Where you hear it

In Python and JavaScript discussions, when comparing languages, and in code reviews about type errors.

## Examples

- In a dynamically typed language you can store a number in a variable and a string in it later.
- Dynamic typing makes prototypes quick to write, but some mistakes only appear at runtime.
- In Python, the same variable can hold a number first and a list later.

## Common mistake

Confusing dynamic typing with weak typing. Python is dynamically typed but strongly typed: it will not silently add a string and a number.

## Don't confuse with

Static typing, where types are checked before the program runs, as in Java or TypeScript.

## Say it at work

- Python is dynamically typed, so add type hints and a checker if you want these errors caught earlier.
- This bug only shows up at runtime because of dynamic typing, so let's add a unit test for it.
