---
id: cors-preflight
category: web-apis
level: intermediate
related: [cors, http-header, request-response]
term: "CORS Preflight"
pronunciation: "KORS PREE-flayt"
keywords: ["browser options request","check cross origin permissions","fix cors request failure","automatic preflight check","handle options http method","cors access control check","why is my api failing","api security handshake","cors pre-flight error","browser security verification request","طلب التحقق التمهيدي","فحص صلاحيات الوصول للمتصفح","مشاكل طلبات كروس اوريجين","طلب خيارات المتصفح التلقائي","حل خطأ cors في المتصفح","التحقق من أذونات الخادم","طلب خيارات قبل الإرسال","فحص أمان واجهة البرمجة","كورز بري فلايت","تجاوز قيود المصادر المختلفة"]
---

## Definition

A CORS Preflight is an automatic `OPTIONS` request sent by the browser before a cross-origin request, to check if the server allows the actual request.

## Where you hear it

- In browser developer tools when debugging failed API calls
- When configuring security headers on a backend server

## Examples

- The browser sends a CORS preflight request before making a `POST` request with custom headers.
- If the server rejects the CORS preflight, the actual API request never gets sent.

## Common mistake

Thinking the preflight request carries your application data, when it only carries metadata like allowed methods and headers.

## Don't confuse with

CORS preflight is often confused with CORS itself, but preflight is specifically the automatic OPTIONS check sent beforehand, while CORS is the overall security mechanism for cross-origin requests.

## Say it at work

- Let's check the browser network tab to see if the CORS preflight request is failing.
- We need to update our server configuration to handle the CORS preflight OPTIONS requests properly.
