---
id: cors
category: web-apis
subcategory: http-and-requests
level: intermediate
related: [http-header, client-vs-server, cors-preflight]
term: "CORS"
pronunciation: "KORZ"
keywords: ["blocked by cors policy error","browser blocks api request","allow domain in backend","cross origin resource sharing","fix api access from frontend","http headers for domains","allow origin wildcard error","browser security policy restriction","خطأ منع الطلبات بين النطاقات","حل مشكلة حظر المتصفح للـ api","السماح بنطاق معين في الخادم","مشاركة الموارد بين النطاقات","خطأ blocked by cors policy","السماح للواجهة الأمامية بالاتصال","إعدادات أمان المتصفح للـ api","مشكلة الاتصال بين نطاقات مختلفة"]
---
## Definition

A browser rule that blocks a web page from calling another website's API unless that server allows it with special headers.

## Where you hear it

The most common frontend error: "blocked by CORS policy".

## Examples

- The request is blocked by CORS because the server does not allow our domain.
- Add our frontend URL to the allowed origins on the backend.
- The browser blocked the response until the API added the Access-Control-Allow-Origin header.

## Common mistake

Fixing it by allowing every origin (`*`) in production. That removes a protection you may need.

## Don't confuse with

CORS is often confused with CSRF; while CORS is a browser security mechanism that restricts cross-origin resource access, CSRF is an attack that tricks a user into performing unwanted actions on a site where they are authenticated.

## Say it at work

- I'm getting a CORS error when calling the API from my local environment, so we might need to update the allowed origins.
- Could you please verify if the backend configuration allows our staging domain in the CORS policy settings?
