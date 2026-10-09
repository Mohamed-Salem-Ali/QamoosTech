---
id: authentication-tag
category: security
subcategory: data-protection
level: intermediate
related: [block-cipher, hmac, symmetric-encryption]
aliases: ["aead", "authenticated encryption", "gcm"]
term: "Authentication Tag"
pronunciation: "aw-then-tih-KAY-shun TAG"
keywords: ["detect modified ciphertext", "aead gcm", "integrity check of encrypted data", "decryption fails if tampered", "tag appended to ciphertext", "authenticated encryption", "اكتشاف تعديل النص المشفر", "التشفير الموثّق GCM", "فحص سلامة البيانات المشفرة", "يفشل فك التشفير عند التلاعب", "وسم ملحق بالنص المشفر", "تشفير مع مصادقة"]
---

## Definition

An authentication tag is a short value produced alongside the ciphertext in authenticated encryption (AEAD, such as AES-GCM). When decrypting, a wrong tag means the data was changed, so decryption is refused.

## Where you hear it

In AES-GCM and ChaCha20-Poly1305 documentation, encryption library APIs and security reviews.

## Examples

- AES-GCM returns the ciphertext and a 16-byte authentication tag.
- Decryption raised an error because the tag didn't match.
- Decryption failed on the tag check, so the stored file was corrupted or changed.

## Common mistake

Encrypting without authentication. Attackers can alter the ciphertext in ways you won't notice.

## Don't confuse with

An HMAC, a separate signature you compute yourself. AEAD builds the tag into the encryption step.

## Say it at work

- Always check the tag before using the plaintext.
- Use authenticated encryption, not bare AES.
