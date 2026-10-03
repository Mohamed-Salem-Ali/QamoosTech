---
id: middleware
category: web-apis
level: intermediate
related: [request-response, dependency-injection]
term: "Middleware"
pronunciation: "MID-ul-wair"
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
