---
id: oauth
category: security
level: intermediate
related: [jwt, authentication-vs-authorization]
term: "OAuth 2.0"
pronunciation: "OH-awth too-point-oh"
---
## Definition

A standard that lets a user give an app limited access to their account on another service, without sharing their password. It powers "Sign in with Google".

## Where you hear it

Social login and third-party integrations.

## Examples

- We added Google login using OAuth 2.0.
- The app asks for permission to read your calendar only.

## Common mistake

Calling OAuth an authentication protocol. It is for authorization; OpenID Connect adds identity on top.

## Don't confuse with

OAuth 2.0 is often confused with OpenID Connect; OAuth 2.0 is strictly for authorization (granting access), whereas OpenID Connect is an identity layer built on top of it to handle authentication.

## Say it at work

- We should implement OAuth 2.0 so users can connect their accounts without us ever seeing their actual passwords.
- Please review the PR; I have updated the OAuth 2.0 flow to handle the token refresh process more securely.
