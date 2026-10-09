---
id: lazy-evaluation
category: programming
subcategory: iteration-and-generators
level: intermediate
related: [generator, iterator, memoization, map-and-filter]
aliases: ["lazily evaluated", "deferred evaluation"]
term: "Lazy Evaluation"
pronunciation: "LAY-zee ih-val-yoo-AY-shun"
keywords: ["compute only when needed", "delay calculation until used", "infinite sequences", "generators are lazy", "avoid loading everything", "eager vs lazy", "الحساب عند الحاجة فقط", "تأجيل الحساب حتى الاستخدام", "تسلسلات لا نهائية", "المولّدات كسولة", "تجنب تحميل كل شيء", "التقييم المتعجل مقابل الكسول"]
---

## Definition

Lazy evaluation means a value is computed only when it is actually needed, instead of up front. It saves memory and work.

## Where you hear it

In discussions of generators, database queries that run only when read, and performance reviews.

## Examples

- The query is lazy: nothing hits the database until we loop over the results.
- A generator is lazy, so it can describe an endless sequence.
- The filter runs only when the results are printed, so unused rows are never processed.

## Common mistake

Forgetting that a lazy value is not computed yet. Errors and slow work appear later, when it is finally used.

## Don't confuse with

Lazy loading in the frontend, which delays loading images or code. The idea is similar, but this is about computing values.

## Say it at work

- Keep it lazy until the last moment.
- Because of lazy evaluation, the error shows up where we read the value, not where we built it.
