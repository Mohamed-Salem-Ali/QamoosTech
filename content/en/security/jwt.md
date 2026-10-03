---
id: jwt
category: security
level: intermediate
related: [authentication-vs-authorization, http-header, oauth]
term: "JWT (JSON Web Token)"
pronunciation: "JOT"
---
## Definition

A signed token that proves who you are. The server can trust it without keeping a session. The content is readable, but it cannot be changed without breaking the signature.

## Where you hear it

API authentication.

## Examples

- Send the JWT in the `Authorization: Bearer` header.
- The JWT expired, so you got a 401.

## Common mistake

Storing secrets in the payload. A JWT is encoded, not encrypted, so anyone can read it.
