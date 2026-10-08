---
id: method-chaining
category: programming
subcategory: code-quality
level: beginner
related: [queryset, pure-function, comprehension]
aliases: ["fluent interface", "chained calls", "chaining"]
term: "Method Chaining"
pronunciation: "METH-ud CHAYN-ing"
keywords: ["call methods one after another", "dot after dot", "each returns an object", "pandas pipelines", "orm filter chains", "fluent api", "استدعاء الدوال تباعاً", "نقطة بعد نقطة", "كل دالة تُرجع كائناً", "خطوط pandas", "سلاسل تصفية الـ ORM", "واجهة سلسة"]
---

## Definition

Method chaining is calling several methods one after another on the result of the previous call, like `qs.filter(...).order_by(...).first()`. It works because each method returns an object you can call the next one on.

## Where you hear it

In ORM queries, pandas and JavaScript array code (`.map().filter()`), and builder APIs.

## Examples

- `items.filter(isActive).map(toName).join(', ')` is a chain.
- Break a long chain over several lines for readability.
- The query chains filter, sort and limit, so each step reads from left to right.

## Common mistake

Writing very long chains that are hard to debug. Split them or name the intermediate results.

## Don't confuse with

Nesting calls like `f(g(h(x)))`, which reads inside-out. Chaining reads left to right.

## Say it at work

- Chain the filters instead of looping.
- Put each call on its own line.
