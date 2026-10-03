---
id: observability
category: architecture
level: intermediate
related: [monitoring, logging]
term: "Observability"
pronunciation: "أوبزيرفابيليتي"
---

## التعريف

هي قدرة النظام على كشف حالته الداخلية من خلال البيانات التي ينتجها، مثل السجلات (logs) والمقاييس (metrics) والتتبعات (traces). تساعد هذه القدرة المهندسين على فهم ما يحدث داخل النظام بدقة.

## أين تسمعه؟

في النقاشات المتعلقة بموثوقية النظام، التعامل مع الأعطال، وصيانة البنية التحتية.

## أمثلة

- We need to improve our observability to debug these intermittent latency spikes.
  - نحتاج إلى تحسين الـ observability لدينا لنتمكن من تصحيح أخطاء ارتفاع زمن الاستجابة المتقطع.
- Adding better observability tools helped us identify the root cause of the system failure.
  - إضافة أدوات observability أفضل ساعدتنا في تحديد السبب الجذري لعطل النظام.

## خطأ شائع

الاعتقاد بأن الـ observability هي مجرد مرادف للـ monitoring؛ فالـ monitoring يخبرك بأن النظام معطل، بينما الـ observability تساعدك على فهم سبب هذا العطل.

## لا تخلطه مع

توضح الـ observability سبب فشل النظام بناءً على مخرجاته، بينما يقتخبرك الـ monitoring فقط متى يفشل النظام.

## قلها في العمل

- Let's check our observability dashboard to see what caused the service to slow down during peak hours.
  - دعنا نتحقق من لوحة تحكم الـ observability لدينا لنرى ما الذي أسباب بطء الخدمة خلال ساعات الذروة.
- Please ensure that all new microservices include proper observability configurations before merging this pull request.
  - يرجى التأكد من أن جميع خدمات الـ microservices الجديدة تتضمن إعدادات observability مناسبة قبل دمج طلب السحب هذا.
