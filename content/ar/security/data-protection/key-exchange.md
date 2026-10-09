---
id: key-exchange
category: security
subcategory: data-protection
level: intermediate
related: [asymmetric-encryption, forward-secrecy, ssl-tls]
aliases: ["diffie-hellman", "diffie hellman", "ecdh", "session key"]
term: "Key Exchange"
translation: "تبادل المفاتيح"
pronunciation: "كي إكسشينج"
keywords: ["الاتفاق على سر عبر قناة مكشوفة", "‏Diffie-Hellman", "مصافحة TLS", "لا سر يُرسل مكشوفاً", "مفتاح الجلسة", "خوارزمية ECDH", "agree on a secret over an open channel", "diffie hellman", "tls handshake", "no secret sent in clear", "session key", "ecdh"]
---

## التعريف

تبادل المفاتيح (Key Exchange) هو الطريقة التي يتفق بها طرفان على مفتاح سري مشترك عبر شبكة غير آمنة دون إرسال المفتاح نفسه. وDiffie-Hellman هي الطريقة الكلاسيكية.

## أين تسمعه؟

في شروح مصافحة TLS، وإعداد VPN وSSH، ومقررات التشفير.

## أمثلة

- During the TLS handshake the client and server run a key exchange and derive a session key.
  - أثناء مصافحة TLS ينفذ العميل والخادم تبادل مفاتيح ويشتقان مفتاح الجلسة.
- The shared key never travels over the network.
  - المفتاح المشترك لا يسافر عبر الشبكة أبداً.
- Both devices computed the same session key, and the key itself was never sent.
  - حسب الجهازان مفتاح الجلسة نفسه، ولم يُرسل المفتاح نفسه أبداً.

## خطأ شائع

الظن بأن المفتاح العام يشفّر كل الحركة. هو عادة يساعد فقط على الاتفاق على مفتاح جلسة متماثل.

## لا تخلطه مع

التشفير نفسه. التبادل يؤسس المفتاح الذي سيستخدمه التشفير بعدها فقط.

## قلها في العمل

- Which key exchange does the server support?
  - أي تبادل مفاتيح يدعمه الخادم؟
- Prefer ephemeral key exchange.
  - فضّل تبادل المفاتيح المؤقتة.
