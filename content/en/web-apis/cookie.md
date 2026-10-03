---
id: cookie
category: web-apis
level: beginner
related: [http-header, authentication-vs-authorization]
term: "Cookie"
pronunciation: "KOOK-ee"
---
## Definition

A small piece of data that the browser stores for a site and sends back with every request, often used to keep you logged in.

## Where you hear it

Login systems, privacy banners, analytics, and security reviews.

## Examples

- The session id is stored in a cookie.
- Mark the cookie as `HttpOnly` so scripts cannot read it.

## Common mistake

Storing sensitive data directly in a cookie. Store a session id and keep the data on the server.
