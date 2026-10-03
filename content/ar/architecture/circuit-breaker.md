---
id: circuit-breaker
category: architecture
level: intermediate
related: [design-pattern, monolith-vs-microservices, single-point-of-failure]
term: "Circuit Breaker"
pronunciation: "سيركيت بريكر"
translation: "قاطع الدائرة"
keywords: ["منع انتشار الأعطال في النظام","إيقاف الطلبات للخدمة المعطلة مؤقتا","نمط تصميم لتحمل الأعطال","قاطع الدائرة","سيركيت بريكر","التعامل مع تعطل الخدمات الخارجية","منع انهيار النظام بسبب الأخطاء","إعادة المحاولة بعد فشل الخدمة","prevent cascading failures in microservices","stop calling failing external api","handle api timeouts and errors","resilience design pattern for services","circuit breaker pattern","serkit breyker","fallback when service is down","prevent system overload from errors","automatic retry after service failure"]
---

## التعريف

نمط تصميم يُستخدم في الأنظمة الموزعة لاكتشاف الأعطال وإيقاف إرسال الطلبات مؤقتاً إلى الخدمة المعطلة، مما يمنع انتشار الأعطال في النظام.

## أين تسمعه؟

في نقاشات هندسة الأنظمة المصغرة (microservices)، وتخطيط المرونة، واجتماعات موثوقية الأنظمة.

## أمثلة

- The circuit breaker opened after the payment service threw too many errors, falling back to a cached response.
  - انفتح قاطع الدائرة بعد أن أطلقت خدمة الدفع أخطاء كثيرة جداً، مما أدى إلى الرجوع لاستجابة مخزنة مؤقتاً.
- We configured the circuit breaker to automatically retry the remote API after a thirty-second cooling period.
  - قمنا بتكوين قاطع الدائرة لإعادة محاولة الاتصال بواجهة برمجة التطبيقات البعيدة تلقائياً بعد فترة انتظار مدتها ثلاثون ثانية.

## خطأ شائع

الاعتقاد بأنه مجرد مهلة زمنية (timeout)، في حين أن قاطع الدائرة يتتبع معدلات الفشل بمرور الوقت ويتوقف عن استدعاء الخدمة تماماً حتى تتعافى.

## لا تخلطه مع

قاطع الدائرة مقابل موازن الحمل: يقوم موازن الحمل بتوزيع حركة المرور على عدة خوادم لتحسين الأداء، بينما يقوم قاطع الدائرة بإيقاف حركة المرور إلى خدمة معطلة لمنع انهيار النظام بالكامل.

## قلها في العمل

- I think we should implement a circuit breaker here so that the entire system doesn't hang if the external API goes down.
  - أعتقد أنه يجب علينا تطبيق Circuit Breaker هنا حتى لا يتوقف النظام بالكامل عن الاستجابة في حال تعطل واجهة البرمجة الخارجية.
- Please review the pull request where I added a circuit breaker to handle potential timeouts from the authentication service.
  - يرجى مراجعة طلب السحب (pull request) حيث قمت بإضافة Circuit Breaker للتعامل مع المهلات الزمنية المحتملة من خدمة المصادقة.
