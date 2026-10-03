---
id: n-plus-one
category: databases
level: intermediate
related: [orm, join, query]
term: "N+1 Query Problem"
translation: "مشكلة الاستعلام N+1"
pronunciation: "إن بلس وان"
---
## التعريف

خطأ في الأداء: استعلام واحد يجلب قائمة من N عنصرًا، ثم تنفّذ الشيفرة استعلامًا إضافيًا لكل عنصر، فتحصل على N+1 استعلامًا.

## أين تسمعه؟

مراجعات أداء الـ ORM والتحقيق في الصفحات البطيئة.

## أمثلة

- The page runs 101 queries because of an N+1 problem.
  - تنفّذ الصفحة 101 استعلام بسبب مشكلة N+1.
- Use `select_related` to load the related data in one query.
  - استخدم `select_related` لجلب البيانات المرتبطة في استعلام واحد.

## خطأ شائع

الاختبار على 5 صفوف فقط. تظهر المشكلة فقط مع آلاف الصفوف في الإنتاج.
