---
id: off-by-one-error
category: programming
subcategory: errors-and-exceptions
level: beginner
related: [exception, edge-case, unit-test]
aliases: ["off-by-one bug"]
term: "Off-by-One Error"
pronunciation: "awf-bye-WUN ER-or"
keywords: ["index is one too high", "loop runs one time too many", "list index out of range", "fence post error", "boundary mistake in loop", "الفهرس أكبر بواحد", "الحلقة تدور مرة زائدة", "الفهرس خارج النطاق", "خطأ في الحدود"]
---

## Definition

A mistake where a loop, index, or count is one more or one less than it should be, such as looping up to the length of a list instead of length minus one.

## Where you hear it

In loop code, pagination logic, and bug reports such as "the last item is always missing".

## Examples

- The loop went to len(items) and crashed on the last index.
- Test the first and last element to catch an off-by-one error.
- The page shows items 1 to 10 but skips item 11 because of an off-by-one error.

## Common mistake

Fixing an off-by-one error by adding or removing one until the test passes. Think through the boundary instead.

## Don't confuse with

An off-by-one error is a boundary mistake of exactly one. An edge case is an unusual input that the code must still handle.
