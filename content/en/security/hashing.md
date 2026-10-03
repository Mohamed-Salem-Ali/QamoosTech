---
id: hashing
category: security
level: intermediate
related: [encryption, authentication-vs-authorization]
term: "Hashing"
pronunciation: "HASH-ing"
---
## Definition

Turning data into a fixed-length fingerprint that cannot be reversed. It is used to store passwords safely.

## Where you hear it

Password storage and data integrity checks.

## Examples

- We store a hash of the password, never the password itself.
- Use bcrypt or Argon2 for passwords.

## Common mistake

Mixing up hashing and encryption. You can decrypt encrypted data, but you cannot "un-hash" a hash.
