---
id: csrf
category: security
level: intermediate
related: [authentication-vs-authorization, vulnerability, cookie]
term: "Cross-Site Request Forgery (CSRF)"
pronunciation: "KROSS-SYT REE-kwest FOR-jer-ee"
---

## Definition

CSRF is a security vulnerability that tricks an authenticated user into executing unwanted actions on a web application where they are currently logged in. It exploits the trust a site has in the user's browser by forcing the browser to send unauthorized requests.

## Where you hear it

- During security audits or code reviews.
- When discussing web application authentication mechanisms.
- While configuring security headers or middleware.

## Examples

- The application is vulnerable to CSRF because it lacks anti-forgery tokens.
- We must implement CSRF protection on all state-changing endpoints.

## Common mistake

Confusing CSRF with Cross-Site Scripting (XSS). While XSS involves injecting malicious scripts into a page, CSRF focuses on forcing the user to perform unintended actions using their existing session credentials.
