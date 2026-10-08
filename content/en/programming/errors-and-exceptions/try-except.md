---
id: try-except
category: programming
subcategory: errors-and-exceptions
level: beginner
related: [exception, eafp-vs-lbyl, context-manager, error-code, custom-exception]
aliases: ["try-catch"]
term: "Try-Except Block"
pronunciation: "try ek-SEPT BLOK"
keywords: ["catch an exception in python", "handle errors with try", "try and except syntax", "catch error and continue", "try catch in other languages", "التقاط الاستثناء في بايثون", "معالجة الأخطاء بـ try", "صيغة try و except", "التقاط الخطأ والاستمرار"]
---

## Definition

A code structure that runs risky code in a try block, and handles a specific error in an except block, so the program can recover instead of crashing.

## Where you hear it

In Python code, in error handling reviews, and in code that talks to files, networks, or user input.

## Examples

- Wrap the file read in try and catch only FileNotFoundError.
- Do not use a bare except, because it hides real bugs.
- The try-except block catches a ValueError when the user types letters into the age field.

## Common mistake

Catching every exception with a bare except and then ignoring it. The program continues with wrong data and nobody sees the error.

## Don't confuse with

A try-except block handles errors that happen at run time. A syntax error is a mistake in the code that stops it from running at all.
