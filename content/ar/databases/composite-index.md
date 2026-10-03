---
id: composite-index
category: databases
level: intermediate
related: [database, index, query]
term: "Composite Index"
pronunciation: "كومبوزيت إنديكس"
---

## التعريف

هو فهرس في قاعدة البيانات يُنشأ على عمودين أو أكثر في الجدول. يساعد هذا الفهرس قاعدة البيانات في البحث عن السجلات بكفاءة أكبر عند استخدام هذه الأعمدة معاً في الاستعلام.

## أين تسمعه؟

في جلسات تحسين أداء قواعد البيانات، مراجعة تصميم الجداول (Schema)، وعند العمل على تسريع استعلامات SQL البطيئة.

## أمثلة

- We added a composite index on `(last_name, first_name)` to speed up our user search feature.
  - أضفنا فهرساً مركباً على `(last_name, first_name)` لتسريع ميزة البحث عن المستخدمين.
- The query is slow because it filters by `category` and `created_at` without a matching composite index.
  - الاستعلام بطيء لأنه يقوم بالتصفية حسب `category` و `created_at` دون وجود فهرس مركب مطابق.

## خطأ شائع

الاعتقاد بأن الفهرس المركب على `(A, B)` سيسرع الاستعلامات التي تستخدم العمود `B` فقط؛ في العادة، لا يعمل الفهرس إلا إذا كان الاستعلام يتضمن العمود الأول `A` في التصفية.
