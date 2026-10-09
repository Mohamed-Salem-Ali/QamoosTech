---
id: asymmetric-encryption
category: security
subcategory: data-protection
level: intermediate
related: [symmetric-encryption, digital-signature, key-exchange]
aliases: ["public key", "private key", "key pair", "public-key cryptography", "rsa"]
term: "Asymmetric Encryption"
pronunciation: "ay-sih-MET-rik en-KRIP-shun"
keywords: ["public key and private key", "anyone can encrypt only owner decrypts", "rsa", "ssh keys", "key pair", "slower than symmetric", "مفتاح عام ومفتاح خاص", "أي أحد يشفّر والمالك فقط يفك", "خوارزمية RSA", "مفاتيح SSH", "زوج المفاتيح", "أبطأ من المتماثل"]
---

## Definition

Asymmetric encryption uses a pair of keys: a public key that anyone can have, and a private key kept secret. What one key locks, only the other can unlock.

## Where you hear it

In HTTPS certificates, SSH logins (`id_rsa`), JWT signing and email encryption (PGP).

## Examples

- Share your public key; never share the private key.
- RSA and Ed25519 are asymmetric algorithms.
- The server signs the token with its private key, and every client checks it with the public key.

## Common mistake

Committing a private key to Git. Treat it as a leaked secret and replace it.

## Don't confuse with

Symmetric encryption, which is faster but needs a shared secret. In practice both are combined.

## Say it at work

- Generate a new key pair.
- Add my public key to the server's authorized keys.
