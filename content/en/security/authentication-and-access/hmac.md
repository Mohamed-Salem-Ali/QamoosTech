---
id: hmac
category: security
subcategory: authentication-and-access
level: intermediate
related: [hashing, digital-signature, webhook]
aliases: ["message authentication code", "mac", "webhook signature"]
term: "HMAC"
pronunciation: "AYCH-mak"
keywords: ["hash with a secret key", "verify webhook signature", "message authentication code", "shared secret signing", "hs256", "detect tampering", "هاش بمفتاح سري", "التحقق من توقيع webhook", "رمز مصادقة الرسالة", "توقيع بسر مشترك", "خوارزمية HS256", "اكتشاف التلاعب"]
---

## Definition

HMAC is a way to prove a message is genuine and unchanged by hashing it together with a secret key that only the sender and receiver know.

## Where you hear it

In webhook verification (Stripe, GitHub), API request signing and HS256 JWTs.

## Examples

- Compute the HMAC of the raw body with the shared secret and compare it to the header.
- Use a constant-time comparison for the signatures.
- The webhook is signed with an HMAC, so we reject any request whose signature does not match.

## Common mistake

Comparing signatures with `==`. Timing differences can leak information; use a constant-time compare.

## Don't confuse with

A plain hash, which anyone can compute. An HMAC needs the secret, so an attacker can't forge it.

## Say it at work

- Verify the HMAC before trusting the webhook.
- Rotate the signing secret.
