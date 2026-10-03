---
id: secret-management
category: security
level: intermediate
related: [encryption, environment-variable]
term: "Secret Management"
pronunciation: "SEE-krit MAN-ij-ment"
---

## Definition

Secret management is the secure storage, access control, and rotation of sensitive credentials like database passwords, API keys, and private keys. It prevents credentials from being exposed in source code or insecure configuration files.

## Where you hear it

During security reviews, when setting up cloud infrastructure, or when planning how applications connect to databases.

## Examples

- We use a dedicated vault service for secret management instead of hardcoding API keys.
- Proper secret management requires rotating database credentials every ninety days.

## Common mistake

Treating secret management the same as regular environment variables, which can accidentally expose sensitive credentials in plain text logs or repository history.
