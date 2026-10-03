---
id: n-plus-one
category: databases
level: intermediate
related: [orm, join, query]
term: "N+1 Query Problem"
translation: "مشكلة الاستعلام N+1"
pronunciation: "إن بلس وان"
keywords: ["مشكلة كثرة استعلامات قاعدة البيانات","تحسين أداء استعلامات الـ orm","بطء تحميل البيانات من قاعدة البيانات","مشكلة الاستعلامات المتكررة داخل حلقة","حل مشكلة n plus one","تقليل عدد الاستعلامات لقاعدة البيانات","التحميل الاستباقي مقابل الكسول","أخطاء الأداء في استعلامات sql","مشكلة الاستعلام الإضافي لكل عنصر","تسريع جلب البيانات من الجداول","too many database queries","orm performance issues","n plus one query problem","database query loop bug","eager loading vs lazy loading","fix slow page load queries","excessive database round trips","optimizing orm fetch patterns","n plus one problem","reduce database calls in loop"]
---
## التعريف

خطأ في الأداء: استعلام واحد يجلب قائمة من N عنصرًا، ثم تنفّذ الشيفرة استعلامًا إضافيًا لكل عنصر، فتحصل على N+1 استعلامًا.

## أين تسمعه؟

مراجعات أداء الـ ORM والتحقيق في الصفحات البطيئة.

## أمثلة

- The page runs 101 queries because of an N+1 problem.
  - تنفّذ الصفحة 101 استعلامًا بسبب مشكلة N+1.
- Use `select_related` to load the related data in one query.
  - استخدم `select_related` لجلب البيانات المرتبطة في استعلام واحد.

## خطأ شائع

الاختبار على 5 صفوف فقط. تظهر المشكلة فقط مع آلاف الصفوف في بيئة الإنتاج.

## لا تخلطه مع

غالبًا ما يتم الخلط بين مشكلة استعلام N+1 وبطء فهرس قاعدة البيانات، ولكن بينما يسرع الفهرس استعلامًا واحدًا، تتسبب مشكلة N+1 في تشغيل مئات الاستعلامات غير الضرورية.

## قلها في العمل

- We need to fix this N+1 query issue on the dashboard before we release it to production.
  - علينا إصلاح مشكلة استعلامات N+1 هذه في لوحة التحكم قبل إطلاقها إلى بيئة الإنتاج.
- This pull request introduces an N+1 query problem when fetching user profiles, please use eager loading instead.
  - يُقدم طلب السحب هذا مشكلة استعلام N+1 عند جلب ملفات المستخدمين، يرجى استخدام التحميل الاستباقي عوضاً عن ذلك.
