---
id: forward-secrecy
category: security
subcategory: data-protection
level: intermediate
related: [key-exchange, encryption-in-transit, ssl-tls]
aliases: ["perfect forward secrecy", "pfs", "ephemeral keys"]
term: "Forward Secrecy"
pronunciation: "FOR-werd SEE-kruh-see"
keywords: ["past traffic stays safe", "leaked key cannot decrypt old sessions", "ephemeral keys", "pfs", "record now decrypt later", "tls 1.3", "الحركة السابقة تبقى آمنة", "مفتاح مسرّب لا يفك الجلسات القديمة", "مفاتيح مؤقتة", "اختصار PFS", "سجّل الآن وفك لاحقاً", "‏TLS 1.3"]
---

## Definition

Forward secrecy means each session uses its own temporary keys, so even if the server's long-term key is stolen later, previously recorded traffic can't be decrypted.

## Where you hear it

In TLS configuration (ECDHE ciphers), security audits and talks about "record now, decrypt later" threats.

## Examples

- TLS 1.3 gives forward secrecy by default.
- Without it, one stolen key exposes years of recorded traffic.

## Common mistake

Keeping old cipher suites that use static RSA key exchange. They have no forward secrecy.

## Don't confuse with

Encryption at rest, which protects stored data. Forward secrecy protects past network sessions.

## Say it at work

- Disable cipher suites without forward secrecy.
- Use ECDHE.
