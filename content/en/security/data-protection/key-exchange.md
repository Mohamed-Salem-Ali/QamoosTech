---
id: key-exchange
category: security
subcategory: data-protection
level: intermediate
related: [asymmetric-encryption, forward-secrecy, ssl-tls]
aliases: ["diffie-hellman", "diffie hellman", "ecdh", "session key"]
term: "Key Exchange"
pronunciation: "KEE iks-CHAYNJ"
keywords: ["agree on a secret over an open channel", "diffie hellman", "tls handshake", "no secret sent in clear", "session key", "ecdh", "الاتفاق على سر عبر قناة مكشوفة", "‏Diffie-Hellman", "مصافحة TLS", "لا سر يُرسل مكشوفاً", "مفتاح الجلسة", "خوارزمية ECDH"]
---

## Definition

Key exchange is how two parties agree on a shared secret key over an insecure network without ever sending the key itself. Diffie-Hellman is the classic method.

## Where you hear it

In TLS handshake explanations, VPN and SSH setup, and cryptography courses.

## Examples

- During the TLS handshake the client and server run a key exchange and derive a session key.
- The shared key never travels over the network.
- Both devices computed the same session key, and the key itself was never sent.

## Common mistake

Thinking the public key encrypts all the traffic. It usually only helps agree on a symmetric session key.

## Don't confuse with

Encryption itself. The exchange only establishes the key that encryption will then use.

## Say it at work

- Which key exchange does the server support?
- Prefer ephemeral key exchange.
