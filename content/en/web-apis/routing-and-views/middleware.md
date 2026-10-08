---
id: middleware
category: web-apis
subcategory: routing-and-views
level: intermediate
related: [request-response, dependency-injection, wsgi-asgi]
term: "Middleware"
pronunciation: "MID-ul-wair"
keywords: ["code between request and response","handle authentication before route logic","express next function helper","log every incoming api request","intercept requests before controller","http request pipeline handler","custom request validation wrapper","midleware","meddleware","برمجية وسيطة","ميدلوير","كود بين الطلب والاستجابة","فحص الطلب قبل تنفيذه","معالجة الطلبات الواردة مسبقا","دالة التحقق من الصلاحيات","تسجيل الطلبات في الخادم","الوسيط بين الروتر والكونترولر"]
---
## Definition

Code that runs between receiving a request and sending the response, used for things like logging, authentication, and error handling.

## Where you hear it

Express, NestJS, Django, and Next.js backend discussions.

## Examples

- Add a middleware that logs every request.
- The auth middleware rejects requests without a valid token.

## Common mistake

In Express, forgetting to call `next()`. The request then hangs forever.

## Don't confuse with

Middleware is often confused with interceptors; while both handle requests, middleware is typically part of the framework's core request pipeline, whereas interceptors are often used to modify data or handle responses at a more granular or service-specific level.

## Say it at work

- We should add a new middleware to handle rate limiting for all incoming API calls.
- I have implemented a custom middleware to validate the request headers before processing the main logic.
