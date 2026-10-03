---
id: cors-preflight
category: web-apis
level: intermediate
related: [cors, http-header, request-response]
term: "CORS Preflight"
pronunciation: "KORS PREE-flayt"
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
