---
id: hash-function
category: programming
subcategory: data-structures
level: intermediate
related: [hashable, hashing, dictionary]
tags: [python]
aliases: ["hash", "hash table", "hash collision", "checksum"]
term: "Hash Function"
pronunciation: "HASH FUNK-shun"
keywords: ["turns data into a fixed size number", "same input same output", "dictionary lookup", "collisions", "sha256 md5", "hash table", "تحوّل البيانات إلى رقم بحجم ثابت", "نفس المدخل نفس المخرج", "البحث في القاموس", "التصادمات", "‏SHA-256 وMD5", "جدول التجزئة"]
---

## Definition

A hash function turns any input into a fixed-size value (the hash). The same input always gives the same hash, and a good function spreads different inputs widely.

## Where you hear it

In dictionaries and sets, checksums, password storage, caches and security discussions.

## Examples

- A dict uses a hash function to find the slot for each key.
- Two inputs with the same hash are a collision.
- The cache uses a hash function to turn each URL into a short key.

## Common mistake

Using a fast hash like MD5 for passwords or security. Pick a purpose-built, slow, salted one for passwords.

## Don't confuse with

Encryption, which can be reversed with a key. A hash is one-way.

## Say it at work

- What hash function does this use?
- Compare the file hashes to check integrity.
