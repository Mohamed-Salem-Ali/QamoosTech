---
id: jwt
category: security
subcategory: authentication-and-access
level: intermediate
related: [authentication-vs-authorization, http-header, oauth]
term: "JWT (JSON Web Token)"
pronunciation: "JOT"
keywords: ["stateless authentication token","json web token","secure api access token","bearer token for api","how to authenticate api requests","signed user identity token","token based authentication","jwt authentication explained","web token for sessions","encoded identity string","رمز التحقق من الهوية","طريقة مصادقة بدون جلسة","رمز الوصول للواجهات البرمجية","توكن المصادقة الموقعة","شرح رمز جوت","كيفية تأمين طلبات الـ api","رمز تعريف المستخدم المشفر","استخدام الرموز في المصادقة","الفرق بين الجلسة والتوكن","رمز التحقق المعتمد على json"]
---
## Definition

A signed token that proves who you are. The server can trust it without keeping a session. The content is readable, but it cannot be changed without breaking the signature.

## Where you hear it

API authentication.

## Examples

- Send the JWT in the `Authorization: Bearer` header.
- The JWT expired, so you got a 401.
- The API reads the user id from the JWT claims without a database lookup.

## Common mistake

Storing secrets in the payload. A JWT is encoded, not encrypted, so anyone can read it.

## Don't confuse with

JWT is often confused with session cookies; while JWTs are stateless tokens stored on the client, session cookies are typically managed by the server and stored in the browser's cookie jar.

## Say it at work

- Let's switch to using a JWT for this API so we don't have to manage session state on the server.
- Please ensure the JWT is properly validated in the middleware before allowing access to the protected route.
