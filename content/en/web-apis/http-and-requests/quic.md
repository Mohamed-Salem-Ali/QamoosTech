---
id: quic
category: web-apis
subcategory: http-and-requests
level: intermediate
related: [head-of-line-blocking, multiplexing, ssl-tls]
aliases: ["http/3", "http3"]
term: "QUIC"
pronunciation: "KWIK"
keywords: ["http 3 transport", "built on udp", "faster connection setup", "no head of line blocking", "connection migration", "tls built in", "ناقل HTTP/3", "مبني على UDP", "إعداد اتصال أسرع", "بلا حجب رأس الطابور", "ترحيل الاتصال", "‏TLS مدمج"]
---

## Definition

QUIC is a modern transport protocol built on UDP that is the foundation of HTTP/3. It sets up connections faster, includes encryption, and avoids head-of-line blocking between streams.

## Where you hear it

In HTTP/3 and CDN settings, browser network panels (`h3`) and performance articles.

## Examples

- Enable HTTP/3 (QUIC) on the CDN.
- QUIC keeps the connection alive when a phone switches from Wi-Fi to mobile data.

## Common mistake

Forgetting the fallback. Some networks block UDP, so clients still need HTTP/2 over TCP.

## Don't confuse with

TCP, the older reliable transport that HTTP/1.1 and HTTP/2 use. QUIC reimplements reliability on top of UDP.

## Say it at work

- Is QUIC enabled on this domain?
- The browser shows h3, so it's using QUIC.
