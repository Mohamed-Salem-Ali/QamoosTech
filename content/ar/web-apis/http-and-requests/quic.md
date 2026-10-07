---
id: quic
category: web-apis
subcategory: http-and-requests
level: intermediate
related: [head-of-line-blocking, multiplexing, ssl-tls]
aliases: ["http/3", "http3"]
term: "QUIC"
translation: "بروتوكول QUIC"
pronunciation: "كويك"
keywords: ["ناقل HTTP/3", "مبني على UDP", "إعداد اتصال أسرع", "بلا حجب رأس الطابور", "ترحيل الاتصال", "‏TLS مدمج", "http 3 transport", "built on udp", "faster connection setup", "no head of line blocking", "connection migration", "tls built in"]
---

## التعريف

‏QUIC بروتوكول نقل حديث مبني على UDP وهو أساس HTTP/3. ينشئ الاتصالات أسرع ويتضمن التشفير ويتجنب حجب رأس الطابور بين التيارات.

## أين تسمعه؟

في إعدادات HTTP/3 وCDN، ولوحات شبكة المتصفح (`h3`)، ومقالات الأداء.

## أمثلة

- Enable HTTP/3 (QUIC) on the CDN.
  - فعّل HTTP/3 (QUIC) على الـ CDN.
- QUIC keeps the connection alive when a phone switches from Wi-Fi to mobile data.
  - يُبقي QUIC الاتصال حياً عندما ينتقل الهاتف من Wi-Fi إلى بيانات الجوال.

## خطأ شائع

نسيان البديل. بعض الشبكات تحجب UDP فيحتاج العملاء إلى HTTP/2 عبر TCP.

## لا تخلطه مع

‏TCP الناقل الموثوق الأقدم الذي يستخدمه HTTP/1.1 وHTTP/2. أما QUIC فيعيد تنفيذ الموثوقية فوق UDP.

## قلها في العمل

- Is QUIC enabled on this domain?
  - هل QUIC مفعّل على هذا النطاق؟
- The browser shows h3, so it's using QUIC.
  - يعرض المتصفح h3 إذن يستخدم QUIC.
