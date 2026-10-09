---
id: forward-secrecy
category: security
subcategory: data-protection
level: intermediate
related: [key-exchange, encryption-in-transit, ssl-tls]
aliases: ["perfect forward secrecy", "pfs", "ephemeral keys"]
term: "Forward Secrecy"
translation: "السرية المستقبلية"
pronunciation: "فورورد سيكريسي"
keywords: ["الحركة السابقة تبقى آمنة", "مفتاح مسرّب لا يفك الجلسات القديمة", "مفاتيح مؤقتة", "اختصار PFS", "سجّل الآن وفك لاحقاً", "‏TLS 1.3", "past traffic stays safe", "leaked key cannot decrypt old sessions", "ephemeral keys", "pfs", "record now decrypt later", "tls 1.3"]
---

## التعريف

السرية المستقبلية (Forward Secrecy) تعني أن لكل جلسة مفاتيحها المؤقتة الخاصة، فحتى لو سُرق مفتاح الخادم طويل الأمد لاحقاً لا يمكن فك الحركة المسجلة سابقاً.

## أين تسمعه؟

في إعداد TLS (شفرات ECDHE)، وتدقيقات الأمان، ونقاشات تهديد "سجّل الآن وفك لاحقاً".

## أمثلة

- TLS 1.3 gives forward secrecy by default.
  - يوفر TLS 1.3 السرية المستقبلية افتراضياً.
- Without it, one stolen key exposes years of recorded traffic.
  - بدونها يكشف مفتاح مسروق واحد سنوات من الحركة المسجلة.
- With forward secrecy, old recorded sessions stay unreadable even if the server key leaks.
  - مع السرّية الأمامية تبقى الجلسات القديمة المسجّلة غير قابلة للقراءة حتى لو تسرّب مفتاح الخادم.

## خطأ شائع

إبقاء حزم شفرات قديمة تستخدم تبادل RSA الثابت. لا سرية مستقبلية فيها.

## لا تخلطه مع

التشفير أثناء التخزين الذي يحمي البيانات المخزنة. أما السرية المستقبلية فتحمي جلسات الشبكة السابقة.

## قلها في العمل

- Disable cipher suites without forward secrecy.
  - عطّل حزم الشفرات التي بلا سرية مستقبلية.
- Use ECDHE.
  - استخدم ECDHE.
