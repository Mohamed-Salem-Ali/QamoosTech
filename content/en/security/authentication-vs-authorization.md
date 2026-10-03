---
id: authentication-vs-authorization
category: security
level: beginner
related: [jwt, rbac, oauth]
term: "Authentication vs Authorization"
pronunciation: "aw-then-tih-KAY-shun versus aw-thor-ih-ZAY-shun"
---
## Definition

*Authentication* checks who you are (login). *Authorization* checks what you are allowed to do.

## Where you hear it

Security, API design, and interviews.

## Examples

- Authentication passed, but authorization failed, so the API returned 403.
- Check authorization on the server for every action.

## Common mistake

Using the two words as if they were the same. Remember: authN = who you are, authZ = what you can do.
