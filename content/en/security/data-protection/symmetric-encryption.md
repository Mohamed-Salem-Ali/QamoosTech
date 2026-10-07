---
id: symmetric-encryption
category: security
subcategory: data-protection
level: intermediate
related: [asymmetric-encryption, encryption, block-cipher]
aliases: ["aes", "secret key encryption", "shared key"]
term: "Symmetric Encryption"
pronunciation: "sih-MET-rik en-KRIP-shun"
keywords: ["same key encrypts and decrypts", "aes", "fast bulk encryption", "shared secret", "encrypt files and disks", "key must stay secret", "مفتاح واحد للتشفير وفكه", "معيار AES", "تشفير سريع للبيانات الكبيرة", "سر مشترك", "تشفير الملفات والأقراص", "يجب إبقاء المفتاح سرياً"]
---

## Definition

Symmetric encryption uses the same secret key to lock and unlock data. It is fast, so it protects large amounts of data, but both sides must share the key safely.

## Where you hear it

In disk and database encryption (AES), HTTPS data transfer after the handshake, and security reviews.

## Examples

- The backup is encrypted with AES-256, a symmetric cipher.
- Anyone with the key can decrypt the data, so protect the key.

## Common mistake

Storing the key next to the encrypted data. That makes the encryption pointless.

## Don't confuse with

Asymmetric encryption, which uses a public and private key pair so no secret has to be shared in advance.

## Say it at work

- Use AES-GCM for the data.
- Where is the key stored?
