---
id: identity-provider
category: security
level: intermediate
related: [authentication-vs-authorization, oauth, jwt]
term: "Identity Provider (IdP)"
pronunciation: "eye-DEN-ti-tee pro-VY-der"
---

## Definition

An Identity Provider (IdP) is a system service that creates, maintains, and manages user identity information while providing authentication services to applications. It acts as a centralized authority to verify who a user is before granting them access to other services.

## Where you hear it

During architectural discussions about authentication flows, setting up Single Sign-On (SSO), or integrating third-party login services.

## Examples

- We need to configure our application to trust the company's Identity Provider for user logins.
- The Identity Provider issues a token once the user successfully verifies their credentials.

## Common mistake

Confusing the IdP with the Service Provider (SP); the IdP verifies the identity, while the Service Provider is the application the user is trying to access.

## Don't confuse with

Identity Provider (IdP) vs. Service Provider (SP); the IdP authenticates the user's identity, whereas the SP relies on that authentication to grant access to a specific application or resource.

## Say it at work

- We should check if our current Identity Provider supports OIDC so we can integrate it with the new dashboard.
- Please update the configuration to point to the new Identity Provider endpoint before we deploy the changes to production.
