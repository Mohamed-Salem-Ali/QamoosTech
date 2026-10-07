---
id: decorator
category: programming
subcategory: functions-and-scope
level: intermediate
related: [function]
term: "Decorator"
pronunciation: "DEK-uh-ray-ter"
keywords: ["wrap function to add behavior","python at symbol syntax","modify function without changing code","add logging to existing functions","function wrapper pattern","add metadata to functions","dynamic function behavior modifier","typescript method wrapper","implementing cross cutting concerns","add authentication to routes","python function annotation","custom function extender","تغليف الدوال لإضافة سلوك","إضافة خصائص للدالة برمجيا","تعديل سلوك الدالة ديناميكيا","استخدام الرمز ات في بايثون","إضافة صلاحيات للمسارات برمجيا","نمط تغليف الدوال البرمجي","توسيع وظائف الدوال الموجودة","طريقة إضافة كود قبل الدالة","مصطلح ديكوريتر في البرمجة","إضافة تسجيل دخول للمسارات","تعديل الدوال دون تغيير محتواها","تغليف الوظائف البرمجية"]
---
## Definition

A function that wraps another function to add behavior, such as logging or permission checks, without editing the original code.

## Where you hear it

Python (`@login_required`), TypeScript frameworks like NestJS, and middleware talk.

## Examples

- Add `@login_required` so only signed-in users can open the page.
- We wrote a decorator that logs how long each call takes.

## Common mistake

In Python, forgetting `functools.wraps`, which makes the wrapped function lose its name and docstring.

## Don't confuse with

A decorator wraps a function to modify its behavior dynamically, while inheritance creates a new subclass to extend functionality statically.

## Say it at work

- Can we write a custom decorator to handle the caching for these API endpoints?
- Please use the authentication decorator on the new routes to ensure proper access control.
