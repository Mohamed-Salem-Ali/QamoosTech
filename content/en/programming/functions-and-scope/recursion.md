---
id: recursion
category: programming
subcategory: functions-and-scope
level: intermediate
related: [loop, function, greedy-algorithm, tail-call]
aliases: ["base case"]
term: "Recursion"
pronunciation: "rih-KUR-zhun"
keywords: ["function calls itself","solve smaller problem with function","function calling itself repeatedly","recursion in programming","stackoverflow from function","base case missing in function","traverse tree with function","rekursion","recursive function definition","دالة تستدعي نفسها","الاستدعاء الذاتي للدالة","حل المشكلة باستدعاء نفسها","دالة تعيد استدعاء نفسها","نسيان حالة التوقف للدالة","المرور على الشجرة بالاستدعاء","ريكيرجن","الاستدعاء التكراري للدالة"]
---
## Definition

When a function calls itself to solve a smaller version of the same problem, until it reaches a simple base case.

## Where you hear it

Algorithm courses, interviews, and tree or folder traversal.

## Examples

- Walking through folders is a classic use of recursion.
- The recursion has no base case, so it crashes with a stack overflow.

## Common mistake

Forgetting the base case. Without it the function never stops.

## Don't confuse with

Recursion calls itself repeatedly until a base case is met, while a loop repeats a block of code using a conditional statement.

## Say it at work

- I think we can solve this tree traversal problem cleanly using recursion instead of a complex stack.
- Please make sure to add a proper base case to this recursion to avoid any stack overflow issues in production.
