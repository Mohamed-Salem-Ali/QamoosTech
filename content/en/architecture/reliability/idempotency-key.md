---
id: idempotency-key
category: architecture
subcategory: reliability
level: intermediate
related: [idempotency, retry-logic, race-condition]
aliases: ["idempotency token", "idempotent request key"]
term: "Idempotency Key"
pronunciation: "eye-dem-POH-ten-see KEE"
keywords: ["unique id per request", "retry safely", "avoid double charge", "stripe idempotency header", "server remembers the key", "same key same result", "معرّف فريد لكل طلب", "إعادة المحاولة بأمان", "تجنب الخصم المزدوج", "ترويسة عدم التكرار في Stripe", "الخادم يتذكر المفتاح", "نفس المفتاح نفس النتيجة"]
---

## Definition

An idempotency key is a unique value the client sends with a request so the server can recognise a retry and return the original result instead of doing the action twice.

## Where you hear it

In payment APIs (Stripe, PayPal), order creation endpoints and any API where a timeout could cause a retry.

## Examples

- Send an `Idempotency-Key` header so a retry doesn't charge the card twice.
- The server stores the key and the response for 24 hours.

## Common mistake

Generating a new key on each retry. The server then sees separate requests and repeats the action.

## Don't confuse with

Idempotency in general, which is the property. The key is one technique to achieve it for non-idempotent actions like POST.

## Say it at work

- Does this endpoint support idempotency keys?
- Reuse the same key when retrying.
