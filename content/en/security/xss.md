---
id: xss
category: security
level: intermediate
related: [cors, vulnerability]
term: "Cross-Site Scripting (XSS)"
pronunciation: "KROSS-syt SKRIP-ting"
---

## Definition

A security vulnerability that allows attackers to inject malicious client-side scripts into web pages viewed by other users. This usually happens when an application takes user input and renders it in the browser without proper validation or escaping.

## Where you hear it

In security audits, penetration testing reports, code reviews, and when discussing input sanitization.

## Examples

- The security scan flagged an XSS vulnerability in the user profile comment section.
- We must sanitize all user inputs to prevent stored XSS attacks.

## Common mistake

Thinking XSS only affects other users; attackers can also use stored XSS to target administrators and compromise the entire application.

## Don't confuse with

XSS is often confused with CSRF; while XSS involves injecting malicious scripts into a page, CSRF tricks a user into performing unwanted actions on a site where they are already authenticated.

## Say it at work

- We should double-check if the search results page is properly escaping output to avoid any potential XSS.
- The recent security audit identified an XSS vulnerability in the feedback form, so please prioritize the fix in the next sprint.
