---
id: traceback
category: testing
subcategory: tools-and-quality
level: beginner
related: [call-stack, debugging, bug, panic, custom-exception]
tags: [python]
aliases: ["stack trace", "stacktrace", "error trace"]
term: "Traceback"
pronunciation: "TRAYS-bak"
keywords: ["python error report", "read it from the bottom", "stack trace", "where the error happened", "exception details", "file and line numbers", "تقرير خطأ بايثون", "اقرأه من الأسفل", "أثر المكدس", "أين حدث الخطأ", "تفاصيل الاستثناء", "أسماء الملفات وأرقام الأسطر"]
---

## Definition

A traceback (or stack trace) is the report printed when an error stops a program. It lists the chain of calls that led to the error; in Python the last line holds the error itself, so read from the bottom up.

## Where you hear it

When debugging, in bug reports ("paste the full traceback"), error monitoring tools and logs.

## Examples

- Paste the full traceback, not just the last line.
- The traceback points at line 42 in `payments.py`.
- The traceback shows the function that called the failing one, so you can work back up the chain.

## Common mistake

Reading only the top. The cause is usually near the bottom, where your own code meets the failing call.

## Don't confuse with

The call stack, which is the live structure of active calls. A traceback is a printed snapshot of it at the moment of the error.

## Say it at work

- Start with the last line of the traceback.
- Which frame in the traceback is in our code?
