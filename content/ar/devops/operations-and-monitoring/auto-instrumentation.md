---
id: auto-instrumentation
category: devops
subcategory: operations-and-monitoring
level: intermediate
related: [observability, monitoring, logging]
aliases: ["instrumentation", "opentelemetry", "tracing"]
term: "Auto-Instrumentation"
translation: "القياس التلقائي"
pronunciation: "أوتو إنسترومنتيشن"
keywords: ["تتبعات دون تغيير الكود", "وكيل OpenTelemetry", "ربط المكتبات", "مقاطع تتبع تلقائية", "بلا تسجيل يدوي", "إضافة المراقبة بسرعة", "traces without changing code", "opentelemetry agent", "library hooks", "automatic spans", "no manual logging", "add monitoring quickly"]
---

## التعريف

القياس التلقائي (Auto-Instrumentation) يضيف التتبع والمقاييس إلى تطبيق تلقائياً، غالباً عبر مكتبة أو وكيل يرتبط بأطر مثل خوادم الويب ومشغلات قواعد البيانات، بتغييرات قليلة أو بلا تغيير في الكود.

## أين تسمعه؟

في إعداد OpenTelemetry وDatadog وSentry، وفي نشر الملاحظة عبر خدمات كثيرة.

## أمثلة

- Turn on auto-instrumentation to get HTTP and database spans for free.
  - فعّل القياس التلقائي لتحصل على مقاطع HTTP وقاعدة البيانات مجاناً.
- Add manual spans for the business steps it can't see.
  - أضف مقاطع يدوية للخطوات التجارية التي لا يراها.

## خطأ شائع

الاعتماد عليه وحده. يرى الاستدعاءات التقنية لا أحداثك التجارية؛ أضف مقاطع مخصصة حيث تهم.

## لا تخلطه مع

القياس اليدوي حيث تكتب كود التتبع بنفسك وتقرر ما يُسجَّل بالضبط.

## قلها في العمل

- Is auto-instrumentation on for this service?
  - هل القياس التلقائي مفعّل لهذه الخدمة؟
- Add a custom span around the payment step.
  - أضف مقطعاً مخصصاً حول خطوة الدفع.
