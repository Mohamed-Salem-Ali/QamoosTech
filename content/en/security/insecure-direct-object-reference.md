---
id: insecure-direct-object-reference
category: security
level: intermediate
related: [authentication-vs-authorization, rbac, vulnerability]
term: "Insecure Direct Object Reference (IDOR)"
pronunciation: "in-SIK-yoor di-REKT OB-jekt REF-er-ens"
---

## Definition

A security vulnerability where an application exposes a reference to an internal implementation object, such as a database key, allowing attackers to manipulate the input and gain unauthorized access to data.

## Where you hear it

- During security code reviews
- In penetration testing reports
- When discussing authorization bugs

## Examples

- Changing the user ID in the URL parameter from `101` to `102` allows viewing another user's profile.
- An API endpoint that returns account details using an unverified record ID is vulnerable to IDOR.

## Common mistake

Assuming that hiding the object ID in the user interface or frontend makes the endpoint secure, when the backend still fails to verify authorization.

## Don't confuse with

IDOR is often confused with broken object level authorization (BOLA), but while IDOR is the underlying vulnerability caused by direct references, BOLA is the broader API security category that describes the lack of proper authorization checks.

## Say it at work

- We need to fix this IDOR issue in the user profile endpoint before we deploy to production.
- Please ensure that proper authorization checks are implemented to prevent potential IDOR vulnerabilities in this service.
