---
id: block-cipher
category: security
subcategory: data-protection
level: intermediate
related: [symmetric-encryption, authentication-tag, entropy]
aliases: ["stream cipher", "mode of operation", "nonce", "iv"]
term: "Block Cipher"
pronunciation: "BLOK SY-fer"
keywords: ["encrypts fixed size blocks", "aes 128 bit blocks", "mode of operation gcm cbc", "iv or nonce", "never use ecb", "stream cipher alternative", "يشفّر كتلاً بحجم ثابت", "‏AES بكتل 128 بت", "أنماط التشغيل GCM وCBC", "المتجه IV أو nonce", "لا تستخدم ECB أبداً", "بديل تشفير التدفق"]
---

## Definition

A block cipher encrypts data in fixed-size chunks (blocks), such as 16 bytes for AES. A mode of operation (like GCM) then decides how the blocks are chained and how long messages are handled.

## Where you hear it

In cryptography libraries, encryption configuration and security reviews of how data is encrypted.

## Examples

- AES is a block cipher; GCM is the mode we run it in.
- Use a fresh random nonce for every message.

## Common mistake

Using ECB mode. Equal plaintext blocks give equal ciphertext, leaking patterns.

## Don't confuse with

A stream cipher, which encrypts data one byte or bit at a time.

## Say it at work

- Which mode are we using with AES?
- Don't roll your own; use a vetted library.
