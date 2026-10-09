---
id: reference
category: programming
subcategory: language-basics
level: intermediate
related: [variable, object, immutable]
tags: [python]
term: "Reference"
pronunciation: "REF-er-ens"
keywords: ["variable points to object", "assignment copies reference not value", "two variables same object", "why list changes in function", "python names and objects", "pass by reference or value", "pointer to object in memory", "variable is a label", "المتغير يشير إلى كائن", "النسخ بالمرجع وليس بالقيمة", "متغيران لنفس الكائن", "لماذا تتغير القائمة داخل الدالة", "الأسماء والكائنات في بايثون", "تمرير بالمرجع أم بالقيمة", "مؤشر إلى الكائن في الذاكرة", "المتغير مجرد اسم"]
---

## Definition

A reference is a name that points to an object in memory. Assigning one variable to another copies the reference, so both names point to the same object.

## Where you hear it

In Python and JavaScript courses, when a list or object changes unexpectedly, and in interviews about pass-by-value versus pass-by-reference.

## Examples

- Both names hold a reference to the same list, so changing one changes the other.
- The function received a reference to the object, so it modified the caller's data.
- A reference to the cart is passed around, so every function sees the same cart.

## Common mistake

Thinking `b = a` makes a copy. It only copies the reference; use a real copy when you need an independent object.

## Don't confuse with

Copying a value. A copy is a new object; a reference is just another name for the existing one.

## Say it at work

- Careful, that variable is a reference, so mutating it here also changes it in the caller.
- I made a copy instead of passing the reference to avoid the side effect.
