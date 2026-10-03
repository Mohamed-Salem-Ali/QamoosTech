---
id: http-header
category: web-apis
level: intermediate
related: [request-response, cookie]
term: "HTTP Header"
pronunciation: "aitch-tee-tee-pee HED-er"
keywords: ["send authorization token in request","set content type application json","metadata sent with api request","http header vs body","custom request headers network tab","api authentication header missing","http hedder","request headers response headers","ترويسة http","هيدر الطلب","إرسال رمز المصادقة في الهيدر","تحديد نوع المحتوى في الطلب","بيانات إضافية مع الطلب","الفرق بين الترويسة والجسم","إتش تي تي بي هيدر","مشاكل هيدر الـ api"]
---
## Definition

Extra information sent with a request or response, such as the content type or the authorization token.

## Where you hear it

API docs, authentication, caching, and CORS issues.

## Examples

- Send the token in the `Authorization` header.
- Set `Content-Type: application/json` or the server will not parse the body.

## Common mistake

Forgetting that headers can be read and changed by the client. Never rely on them alone for security.

## Don't confuse with

HTTP header is often confused with HTTP body; the header contains metadata about the request or response, while the body contains the actual data being transmitted.

## Say it at work

- Can you check the network tab and see if the custom HTTP header is being sent correctly in the request?
- Please update the API documentation to specify which HTTP header is required for the authentication token.
