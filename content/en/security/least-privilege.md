---
id: least-privilege
category: security
level: intermediate
related: [rbac, authentication-vs-authorization, vulnerability]
term: "Least Privilege"
pronunciation: "LEEST PRIV-ih-lij"
---

## Definition

Least Privilege is a security principle where a user, process, or service is given only the absolute minimum permissions needed to perform its required task. This limits potential damage if a component is compromised.

## Where you hear it

In security reviews, cloud IAM configuration meetings, and architecture discussions about system hardening.

## Examples

- The database service account only has read and write access to the specific database it uses, rather than full admin rights.
- Developers use staging environment credentials that cannot modify production infrastructure.

## Common mistake

Granting broad administrative permissions temporarily for convenience and forgetting to revoke them later.
