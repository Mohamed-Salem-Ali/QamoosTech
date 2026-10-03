---
id: circuit-breaker
category: architecture
level: intermediate
related: [design-pattern, monolith-vs-microservices, single-point-of-failure]
term: "Circuit Breaker"
pronunciation: "سيركيت بريكر"
translation: "قاطع الدائرة"
---

## التعريف

نمط تصميم يُستخدم في الأنظمة الموزعة لاكتشاف الأعطال وإيقاف إرسال الطلبات مؤقتاً إلى الخدمة المعطلة، مما يمنع انتشار الأعطال في النظام.

## أين تسمعه؟

في نقاشات هندسة الأنظمة المصغرة (microservices)، وتخطيط المرونة، واجتماعات موثوقية الأنظمة.

## أمثلة

- The circuit breaker opened after the payment service threw too many errors, falling back to a cached response.
  - انفتح قاطع الدائرة بعد أن أثارت خدمة الدفع أخطاء كثيرة جداً، مما أدى إلى الرجوع لاستجابة مخزنة مؤقتاً.
- We configured the circuit breaker to automatically retry the remote API after a thirty-second cooling period.
  - قمنا بتكوين قاطع الدائرة لإعادة محاولة الاتصال بواجهة برمجة التطبيقات البعيدة تلقائياً بعد فترة تهدئة مدتها ثلاثون ثانية.

## خطأ شائع

الاعتقاد بأنه مجرد وقت محدد انتهاء (timeout)، في حين أن قاطع الدائرة يتتبع معدلات الفشل بمرور الوقت ويتوقف عن استدعاء الخدمة تماماً حتى تتعافى.
