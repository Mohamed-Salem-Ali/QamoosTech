---
id: error-code
category: programming
subcategory: errors-and-exceptions
level: beginner
related: [exception, eafp-vs-lbyl, try-except]
aliases: ["error return value", "status return"]
term: "Error Code"
pronunciation: "ERR-or kohd"
keywords: ["return a number on failure", "check the return value", "c style error handling", "no exception thrown", "status flag from function", "error number from function", "رمز الخطأ المُعاد", "التحقق من قيمة الإرجاع", "معالجة الأخطاء بأسلوب C", "دالة ترجع رقم الخطأ", "بدون رفع استثناء", "علم حالة من الدالة"]
---

## Definition

A number or value that a function returns to say whether it worked, and what went wrong, instead of raising an exception. The caller must check it after every call.

## Where you hear it

In C and Go code, in system calls and older libraries, and in arguments about exceptions versus return values.

## Examples

- The function returns error code -1 when the file cannot be opened.
- Check the error code before you use the result.
- A Unix command exits with a non-zero code to report a failure.

## Common mistake

Ignoring the code and using the result anyway. The program carries on with bad data, and the failure shows up far from where it started.

## Don't confuse with

An exception stops the normal flow until something catches it. An error code is only a value, so the code keeps running unless the caller checks it and stops.

## Say it at work

- Did we check the return code from the upload call?
- Let's return an error code from this helper, so the caller decides what to do.
