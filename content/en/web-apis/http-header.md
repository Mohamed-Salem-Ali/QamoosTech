---
id: http-header
category: web-apis
level: intermediate
related: [request-response, cookie]
term: "HTTP Header"
pronunciation: "aitch-tee-tee-pee HED-er"
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
