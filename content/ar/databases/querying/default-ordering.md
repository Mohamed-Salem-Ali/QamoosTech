---
id: default-ordering
category: databases
subcategory: querying
level: intermediate
related: [queryset, sql, primary-key]
tags: [django, sql]
aliases: ["meta ordering", "row order", "ordering"]
term: "Default Ordering"
translation: "الترتيب الافتراضي"
pronunciation: "ديفولت أوردرينج"
keywords: ["الترتيب عند عدم طلبه", "ترتيب ضمن Meta", "الصفوف بلا ترتيب مضمون", "الترتيب بالمعرّف", "ترتيب ثابت للترقيم", "ترتيب النتائج بثبات", "order when none is requested", "meta ordering", "rows come back in no guaranteed order", "order by id", "stable ordering for pagination", "sort result consistently"]
---

## التعريف

الترتيب الافتراضي (Default Ordering) هو ترتيب عودة الصفوف حين لا يطلب الاستعلام ترتيباً. بدون `ORDER BY` صريحة لا تعد قاعدة البيانات بأي ترتيب معين.

## أين تسمعه؟

في إعدادات نموذج الـ ORM (`Meta.ordering`)، وأخطاء الترقيم، والاختبارات التي تنجح أو تفشل بحسب ترتيب الصفوف.

## أمثلة

- Set the default ordering to newest first.
  - اجعل الترتيب الافتراضي من الأحدث أولاً.
- Pagination needs a stable order, or pages repeat rows.
  - يحتاج الترقيم إلى ترتيب ثابت وإلا تكررت الصفوف بين الصفحات.

## خطأ شائع

الاعتماد على عودة الصفوف بترتيب الإدراج. غالباً ينجح مع بيانات صغيرة ثم ينكسر لاحقاً.

## لا تخلطه مع

‏`order_by` صريحة في استعلام واحد. أما الترتيب الافتراضي فينطبق على كل استعلام لا يتجاوزه.

## قلها في العمل

- Add a tie-breaker like the id to the ordering.
  - أضف عنصر فصل مثل المعرّف إلى الترتيب.
- The test is flaky because no ordering is defined.
  - الاختبار متذبذب لأن لا ترتيب معرّفاً.
