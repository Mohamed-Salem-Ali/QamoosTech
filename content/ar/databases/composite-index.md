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

## لا تخلطه مع

يتم الخلط أحياناً بين الفهرس المركب (Composite index) والفهرس متعدد الأعمدة (Multi-column index)، لكن الفهرس المركب يشير تحديداً إلى ترتيب الأعمدة الذي يحدد كيفية معالجة هيكل شجرة البحث.

## قلها في العمل

- We should consider adding a composite index on these two columns to reduce the query execution time.
  - يجب أن نفكر في إضافة فهرس مركب على هذين العمودين لتقليل وقت تنفيذ الاستعلام.
- I have identified that the slow performance is due to a missing composite index on the filtering criteria.
  - لقد حددت أن الأداء البطيء يرجع إلى فقدان فهرس مركب على معايير التصفية.
