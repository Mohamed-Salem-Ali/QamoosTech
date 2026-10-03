---
id: closure
category: programming
level: intermediate
related: [function, scope, variable]
term: "Closure"
pronunciation: "KLO-zhur"
keywords: ["function remembers outer variables","keep variables private in js","function scope retention","inner function accessing outer scope","javascript closure concept","create private variables with functions","function execution context preservation","closre","clousure","lexical scope closure","دالة تحتفظ بالمتغيرات الخارجية","إنشاء متغيرات خاصة في جافاسكريبت","الوصول لمتغيرات الدالة الخارجية","مفهوم الـ closure في البرمجة","دالة تحتفظ بنطاقها الأصلي","حفظ حالة المتغيرات داخل دالة","الكلوزشر في جافاسكريبت","الدوال المغلقة في البرمجة"]
---

## Definition

A closure is a function that remembers and has access to variables in its outer lexical scope, even after that outer function has finished executing.

## Where you hear it

In JavaScript interviews, functional programming discussions, and when explaining data privacy in code.

## Examples

- The inner function forms a closure over the counter variable to keep track of the state.
- We use a closure to create private variables that cannot be modified directly from the outside.

## Common mistake

Thinking a closure is a special syntax, when it is actually just a natural behavior of functions retaining access to their creation environment.

## Say it at work

- Let's use a closure here to keep the count variable private and secure from outside modification.
- I updated the implementation to use a closure so the callback retains access to the current configuration.
