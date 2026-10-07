---
id: cache-stampede
category: architecture
subcategory: scaling
level: intermediate
related: [cache-hit-and-miss, thundering-herd, cache-aside]
aliases: ["dogpile effect", "dogpiling"]
term: "Cache Stampede"
translation: "اندفاع الذاكرة المؤقتة"
pronunciation: "كاش ستامبيد"
keywords: ["طلبات كثيرة تعيد بناء المفتاح نفسه", "مفتاح منتهٍ يضرب قاعدة البيانات", "تأثير التكدس", "قفل أثناء إعادة البناء", "تفاوت أوقات الانتهاء", "ذروة عند انتهاء الصلاحية", "many requests rebuild the same key", "expired key hits the database", "dogpile effect", "lock while rebuilding", "stagger expirations", "cache expiry spike"]
---

## التعريف

اندفاع الذاكرة المؤقتة (Cache Stampede) يحدث حين تنتهي صلاحية عنصر شائع فتخفق طلبات كثيرة في اللحظة نفسها فتضرب جميعها قاعدة البيانات لإعادة بنائه.

## أين تسمعه؟

في حوادث أداء Redis وCDN، ومقابلات تصميم الأنظمة حول المفاتيح الساخنة.

## أمثلة

- The homepage key expired and 5,000 requests hit the database.
  - انتهى مفتاح الصفحة الرئيسية فضرب 5,000 طلب قاعدة البيانات.
- Add jitter to the TTLs so keys don't all expire together.
  - أضف تفاوتاً عشوائياً إلى أوقات الصلاحية حتى لا تنتهي المفاتيح معاً.

## خطأ شائع

إعطاء كل المفاتيح وقت الصلاحية نفسه. فتنتهي معاً وتسبب ذروة.

## لا تخلطه مع

القطيع المندفع (Thundering Herd) وهو المشكلة الأعم لعملاء كثيرين يتفاعلون معاً. والاندفاع هو الحالة الخاصة بالذاكرة المؤقتة.

## قلها في العمل

- Use a lock so only one request rebuilds the key.
  - استخدم قفلاً ليعيد طلب واحد فقط بناء المفتاح.
- Serve stale data while one worker refreshes it.
  - قدّم البيانات القديمة بينما يحدّثها عامل واحد.
