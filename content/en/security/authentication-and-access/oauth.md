---
id: oauth
category: security
subcategory: authentication-and-access
level: intermediate
related: [jwt, authentication-vs-authorization, api-key, identity-provider]
term: "OAuth 2.0"
pronunciation: "OH-awth too-point-oh"
keywords: ["sign in with google","third party account access","authorization framework for apps","grant limited access tokens","connect external accounts safely","oauth protocol","auth 2","social login integration","delegated access standard","api authorization flow","تسجيل الدخول بحساب جوجل","منح صلاحيات لتطبيق خارجي","تسجيل الدخول عبر منصة أخرى","بروتوكول التفويض والتخويل","ربط الحسابات الخارجية بأمان","بروتوكول اوauth","نظام الصلاحيات والتصريح","الدخول بحساب سوشيال ميديا"]
---
## Definition

A standard that lets a user give an app limited access to their account on another service, without sharing their password. It powers "Sign in with Google".

## Where you hear it

Social login and third-party integrations.

## Examples

- We added Google login using OAuth 2.0.
- The app asks for permission to read your calendar only.
- The app asks for read-only access to the calendar, and the user approves it on Google.

## Common mistake

Calling OAuth an authentication protocol. It is for authorization; OpenID Connect adds identity on top.

## Don't confuse with

OAuth 2.0 is often confused with OpenID Connect; OAuth 2.0 is strictly for authorization (granting access), whereas OpenID Connect is an identity layer built on top of it to handle authentication.

## Say it at work

- We should implement OAuth 2.0 so users can connect their accounts without us ever seeing their actual passwords.
- Please review the PR; I have updated the OAuth 2.0 flow to handle the token refresh process more securely.
