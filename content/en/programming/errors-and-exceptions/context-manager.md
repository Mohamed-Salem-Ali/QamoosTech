---
id: context-manager
category: programming
subcategory: errors-and-exceptions
level: intermediate
related: [exception, function, decorator]
tags: [python]
aliases: ["with statement", "context managers"]
term: "Context Manager"
pronunciation: "KON-tekst MAN-ij-er"
keywords: ["with statement", "open file and close automatically", "cleanup even on error", "__enter__ and __exit__", "contextlib", "manage resources safely", "جملة with", "فتح الملف وإغلاقه تلقائياً", "التنظيف حتى عند الخطأ", "‏__enter__ و __exit__", "وحدة contextlib", "إدارة الموارد بأمان"]
---

## Definition

A context manager sets something up when a `with` block starts and always cleans it up when the block ends, even if an error happens.

## Where you hear it

In Python code that opens files, database connections or locks, and in explanations of the `with` statement.

## Examples

- `with open(path) as f:` closes the file automatically.
- We wrote a context manager that restores the setting after the test.

## Common mistake

Opening a resource without `with` and forgetting to close it when an error occurs.

## Don't confuse with

A `try / finally` block, which does a similar cleanup by hand. A context manager packages it so it can be reused.

## Say it at work

- Wrap that in a `with` block so it always closes.
- Make it a context manager so the cleanup can't be forgotten.
