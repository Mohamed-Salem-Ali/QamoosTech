---
id: retry-logic
category: architecture
level: beginner
related: [idempotency, exception]
term: "Retry Logic"
pronunciation: "ري-تراي لوجيك"
---

## التعريف

هي نمط برمجي يقوم بإعادة تنفيذ عملية معينة تلقائياً بعد فشلها. تُستخدم عادةً للتعامل مع الأخطاء المؤقتة، مثل انقطاع الاتصال بالشبكة أو عدم توفر الخدمة لفترة قصيرة.

## أين تسمعه؟

في النقاشات حول مرونة الأنظمة (resilience)، والتعامل مع واجهات البرمجة (APIs)، وحل مشاكل عدم استقرار الشبكة.

## أمثلة

- We implemented retry logic to handle intermittent database connection drops.
  - قمنا بتطبيق Retry Logic للتعامل مع انقطاعات الاتصال المتقطعة بقاعدة البيانات.
- The service uses retry logic with exponential backoff to avoid overwhelming the server.
  - تستخدم الخدمة Retry Logic مع تقنية التراجع الأسي (exponential backoff) لتجنب إرهاق الخادم.

## خطأ شائع

تطبيق Retry Logic على عمليات غير متطابقة (non-idempotent)، مما قد يؤدي إلى تكرار البيانات أو حدوث تعارض في حالة النظام.
