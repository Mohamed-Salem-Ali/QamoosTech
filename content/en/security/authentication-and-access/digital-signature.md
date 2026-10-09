---
id: digital-signature
category: security
subcategory: authentication-and-access
level: intermediate
related: [asymmetric-encryption, hmac, jwt]
aliases: ["signature", "signed", "rs256", "hs256", "signing algorithm"]
term: "Digital Signature"
pronunciation: "DIJ-ih-tul SIG-nuh-chur"
keywords: ["prove who created it", "detect tampering", "sign with private key", "verify with public key", "signed commit or package", "non repudiation", "إثبات من أنشأه", "اكتشاف التلاعب", "التوقيع بالمفتاح الخاص", "التحقق بالمفتاح العام", "commit أو حزمة موقّعة", "عدم الإنكار"]
---

## Definition

A digital signature is a value made with a private key that proves who created some data and that it wasn't changed. Anyone can check it with the matching public key.

## Where you hear it

In signed Git commits, software releases, JWTs (RS256) and TLS certificates.

## Examples

- The release is signed so users can check it wasn't tampered with.
- Verify the signature with the publisher's public key.
- The installer checks the digital signature before it runs, so tampered files are refused.

## Common mistake

Thinking a signature hides the content. It only proves origin and integrity; the data is still readable.

## Don't confuse with

Encryption, which hides content. A signature proves who sent it and that it is unchanged.

## Say it at work

- Is this commit signed?
- Check the signature before installing.
