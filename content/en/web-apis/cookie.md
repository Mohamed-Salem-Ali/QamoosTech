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

## Don't confuse with

A cookie is stored on the client side and sent with every HTTP request, whereas local storage is also on the client side but persists data without sending it automatically to the server.

## Say it at work

- Can we check if the authentication cookie is being sent properly in the request headers?
- Please ensure that all sensitive cookies are configured with the Secure and SameSite flags before merging this PR.
