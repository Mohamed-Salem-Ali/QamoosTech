---
id: cookie
category: web-apis
subcategory: http-and-requests
level: beginner
related: [http-header, authentication-vs-authorization, local-storage, session]
term: "Cookie"
pronunciation: "KOOK-ee"
keywords: ["small piece of browser data","keep user logged in token","send data with every request","http session storage","browser cookie","session cookie","cooki","http state management","store session id in browser","ملف تعريف الارتباط","حفظ بيانات الجلسة في المتصفح","البقاء مسجل الدخول في الموقع","البيانات المخزنة في المتصفح","إرسال البيانات مع كل طلب","كوكي","ملفات الكوكيز للمتصفح","معرف الجلسة في المتصفح"]
---
## Definition

A small piece of data that the browser stores for a site and sends back with every request, often used to keep you logged in.

## Where you hear it

Login systems, privacy banners, analytics, and security reviews.

## Examples

- The session id is stored in a cookie.
- Mark the cookie as `HttpOnly` so scripts cannot read it.
- The site stores the language choice in a cookie, so it stays after you reload the page.

## Common mistake

Storing sensitive data directly in a cookie. Store a session id and keep the data on the server.

## Don't confuse with

A cookie is stored on the client side and sent with every HTTP request, whereas local storage is also on the client side but persists data without sending it automatically to the server.

## Say it at work

- Can we check if the authentication cookie is being sent properly in the request headers?
- Please ensure that all sensitive cookies are configured with the Secure and SameSite flags before merging this PR.
