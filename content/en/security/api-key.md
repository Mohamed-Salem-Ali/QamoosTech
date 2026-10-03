---
id: api-key
category: security
level: beginner
related: [authentication-vs-authorization, jwt, oauth]
term: "API Key"
pronunciation: "AY-pee KEE"
---

## Definition

An API key is a unique secret token passed in HTTP requests to identify the calling application or project to a service provider.

## Where you hear it

In backend integration discussions, developer settings dashboards, and security configurations.

## Examples

- Include the API key in the request header to authenticate your weather service calls.
- Never expose your secret API key in frontend client code.

## Common mistake

Treating an API key like a user password and hardcoding it directly in public source code repositories.
