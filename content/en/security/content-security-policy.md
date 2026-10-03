---
id: content-security-policy
category: security
level: intermediate
related: [vulnerability, http-header, cors]
term: "Content Security Policy (CSP)"
pronunciation: "KONT-ent se-KYUR-i-tee POL-i-see"
---

## Definition

Content Security Policy (CSP) is an HTTP response header that lets site operators restrict the resources (such as JavaScript, CSS, and Images) that the browser is allowed to load for a given page. It is mainly used to detect and mitigate injection attacks like Cross-Site Scripting (XSS).

## Where you hear it

- In security audits and penetration testing reports
- During web app hardening and header configuration
- When troubleshooting blocked scripts in the browser console

## Examples

- We need to add a Content Security Policy header to prevent unauthorized scripts from running on our dashboard.
- The application crashed because the strict Content Security Policy blocked inline styles.

## Common mistake

Treating CSP as a replacement for proper input sanitization, when it should instead serve as a defense-in-depth layer.

## Don't confuse with

Content Security Policy (CSP) is often confused with CORS, but CSP controls what resources the browser loads for a page, whereas CORS controls which domains are allowed to access server resources via APIs.

## Say it at work

- Let us check the browser console to see if our Content Security Policy is blocking that external script.
- Please review the updated Content Security Policy configuration in the staging environment before we merge this pull request.
