---
id: greedy-algorithm
category: programming
subcategory: data-structures
level: intermediate
related: [recursion, priority-queue, topological-sort]
tags: [python]
aliases: ["greedy approach", "greedy"]
term: "Greedy Algorithm"
pronunciation: "GREE-dee AL-guh-rith-um"
keywords: ["best choice at each step", "local optimum", "coin change", "interval scheduling", "fast simple solution", "not always optimal", "أفضل خيار في كل خطوة", "الأمثل المحلي", "فكّ العملة", "جدولة الفترات", "حل بسيط وسريع", "ليست مثلى دائماً"]
---

## Definition

A greedy algorithm builds a solution by always taking the best-looking choice at the current step, without reconsidering. It's fast and simple, and optimal only for some problems.

## Where you hear it

In algorithm courses and interviews (interval scheduling, coin change, Huffman coding) and planning problems.

## Examples

- Greedy works for interval scheduling: always pick the meeting that ends earliest.
- For odd coin systems greedy gives the wrong count.
- The greedy approach gives change by taking the largest coin first, which works for these coins.

## Common mistake

Assuming greedy is always right. Prove it works, or compare against dynamic programming on small cases.

## Don't confuse with

Dynamic programming, which considers all sub-choices and finds the true optimum, at higher cost.

## Say it at work

- Try a greedy approach first.
- Does a greedy choice stay safe here?
