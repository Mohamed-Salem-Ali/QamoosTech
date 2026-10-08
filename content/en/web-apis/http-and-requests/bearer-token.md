---
id: bearer-token
category: web-apis
subcategory: http-and-requests
level: beginner
related: [http-header, jwt, oauth]
term: "Bearer Token"
pronunciation: "BEAR-er TO-ken"
keywords: ["authorization header string","access token for api","how to authenticate api requests","send identity in http request","token used for bearer auth","bearer token","secure api request credentials","get access with token","oauth authentication string","verify user identity via header","رمز التحقق من الهوية","ترويسة المصادقة في الطلبات","كيفية إرسال رمز الدخول","رمز الوصول للموارد المحمية","طريقة استخدام بيرر توكن","توثيق الطلبات عبر الويب","رمز المصادقة في الهيدر","استخدام الرموز في api","نظام صلاحيات الوصول","التعامل مع bearer token"]
---

## Definition

A Bearer Token is a security token sent in an HTTP request to prove the user's identity. The name implies that whoever holds (bears) the token is granted access to the protected resources.

## Where you hear it

- In API documentation under authentication headers
- During OAuth login implementation
- When inspecting HTTP headers in browser developer tools

## Examples

- Send the bearer token in the Authorization header of your API request.
- The server returns a bearer token after a successful login.
- The app sends the bearer token with every request after the user logs in.

## Common mistake

Treating a bearer token like a password and storing it in insecure browser storage like localStorage instead of secure memory or httpOnly cookies.

## Don't confuse with

A bearer token grants direct access based on possession, while an API key simply identifies the project or application making the request.

## Say it at work

- Can you check why the API is rejecting my bearer token during this test?
- Please ensure that the bearer token is never exposed in the client-side code.
