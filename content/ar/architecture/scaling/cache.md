---
id: cache
category: architecture
subcategory: scaling
level: beginner
related: [latency-vs-throughput, scalability]
term: "Cache"
translation: "ذاكرة تخزين مؤقت"
pronunciation: "كاش"
keywords: ["ذاكرة مؤقتة سريعة","تسريع جلب البيانات","تقليل الضغط على السيرفر","حفظ نسخة من البيانات","حل مشكلة بطء الاستجابة","تخزين مؤقت للبيانات","تحديث البيانات المخزنة","مسح ذاكرة التخزين","تحسين أداء التطبيق","تخزين البيانات في الذاكرة","fast temporary data storage","speed up database queries","reduce server load time","keep copy of frequent data","improve application response speed","memory for quick access","stale data issues fix","caching layer implementation","temporary retrieval storage","how to clear cache"]
---
## التعريف

مكان سريع يُحفظ فيه نسخة من بيانات مكلفة الحصول عليها، لتعيد الطلبات التالية استخدامها.

## أين تسمعه؟

تحسين الأداء، والنصيحة الشهيرة «امسح الـ cache».

## أمثلة

- We cache the product list for five minutes.
  - نخزّن قائمة المنتجات مؤقتًا لمدة خمس دقائق.
- The old data appears because of the cache.
  - تظهر البيانات القديمة بسبب الـ cache.

## خطأ شائع

التخزين المؤقت دون خطة لتحديثه. يرى المستخدمون بيانات قديمة ولا يعرف أحد السبب.

## لا تخلطه مع

الـ cache يخزن البيانات مؤقتاً لتسهيل وسرعة الوصول إليها، بينما قاعدة البيانات تخزن مصدر الحقيقة بشكل دائم.

## قلها في العمل

- Let's add a cache layer here so we can reduce the load on the main database.
  - دعنا نضيف طبقة cache هنا لنتمكن من تقليل الضغط على قاعدة البيانات الرئيسية.
- Please invalidate the cache after updating user profiles to prevent stale data issues.
  - يرجى إلغاء الـ cache بعد تحديث الملفات الشخصية للمستخدمين لمنع مشاكل البيانات القديمة.
