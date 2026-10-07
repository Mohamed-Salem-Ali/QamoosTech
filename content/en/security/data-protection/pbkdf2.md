---
id: pbkdf2
category: security
subcategory: data-protection
level: intermediate
related: [hashing, salt, entropy]
aliases: ["key stretching", "bcrypt", "argon2", "password hashing"]
term: "PBKDF2"
pronunciation: "PEE-BEE-KAY-DEE-EF-too"
keywords: ["slow password hashing", "key stretching", "many iterations", "derive a key from a password", "bcrypt argon2 alternatives", "django password hasher", "تهشير كلمات المرور البطيء", "تمديد المفتاح", "تكرارات كثيرة", "اشتقاق مفتاح من كلمة مرور", "بدائل bcrypt وargon2", "مهشّر كلمات المرور في Django"]
---

## Definition

PBKDF2 is a standard way to turn a password into a key or stored hash by repeating a hash function many thousands of times with a salt, which makes guessing passwords slow.

## Where you hear it

In Django's default password hasher, security audits (iteration counts) and comparisons with bcrypt and Argon2.

## Examples

- Django hashes passwords with PBKDF2 and a random salt by default.
- Raise the iteration count as hardware gets faster.

## Common mistake

Using plain SHA-256 for passwords. It is fast, so attackers can test billions of guesses per second.

## Don't confuse with

A normal hash, designed to be fast. PBKDF2 is deliberately slow for password storage.

## Say it at work

- How many PBKDF2 iterations do we use?
- Consider Argon2 for new systems.
