---
id: custom-exception
category: programming
subcategory: errors-and-exceptions
level: intermediate
related: [exception, try-except, traceback]
aliases: ["custom error class", "application error"]
term: "Custom Exception"
pronunciation: "KUS-tum ik-SEP-shun"
keywords: ["own exception class", "define my own error type", "domain specific error", "subclass the exception class", "raise a specific error", "error that maps to http status", "استثناء مخصص", "تعريف نوع خطأ خاص بالتطبيق", "خطأ خاص بمجال العمل", "الوراثة من فئة الاستثناء", "رفع خطأ محدد", "خطأ يُترجم إلى رمز استجابة"]
---

## Definition

An exception class you write yourself for a failure that matters in your domain, such as an order that does not exist or an account with too little money. Callers can catch exactly that failure and read fields that describe it.

## Where you hear it

In service code, in API layers that turn errors into responses, and in reviews of exception hierarchies.

## Examples

- Raise OrderNotFound instead of a generic error, so the API can return 404.
- The billing code catches InsufficientFunds and asks the customer to top up.
- Give all app errors one base class, then subclass it for each case.

## Common mistake

Creating a new class for every small case, or catching the base class everywhere. Keep a few meaningful types, and catch the specific one you can actually handle.

## Don't confuse with

A built-in exception such as ValueError is a general type from the language. A custom exception names a failure from your own domain, so callers can handle it without guessing from the message text.

## Say it at work

- Can we raise a custom exception here so the API returns the right status code?
- Let's subclass our base AppError so the global handler catches all of ours.
