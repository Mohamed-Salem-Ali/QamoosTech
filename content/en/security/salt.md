---
id: salt
category: security
level: intermediate
related: [hashing, authentication-vs-authorization]
term: "Salt"
pronunciation: "SAWLT"
---

## Definition

Salt is a random string of data added to a password before it is hashed to ensure that identical passwords result in unique hash values. This technique prevents attackers from using precomputed tables, known as rainbow tables, to crack passwords.

## Where you hear it

In security audits, user authentication system design, and database schema reviews.

## Examples

- Always generate a unique salt for every user during the registration process.
- Storing the salt alongside the hashed password in the database is standard practice.

## Common mistake

Thinking that a salt is a form of encryption; it is not, because it is not intended to be secret or reversible, but rather to make brute-force attacks computationally expensive.
