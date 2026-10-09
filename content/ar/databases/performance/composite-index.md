---
id: composite-index
category: databases
subcategory: performance
level: intermediate
related: [database, index, query]
term: "Composite Index"
translation: "الفهرس المركّب"
pronunciation: "كومبوزيت إنديكس"
keywords: ["فهرس على أكثر من عمود","تسريع استعلامات قاعدة البيانات","فهرس متعدد الأعمدة","تحسين أداء استعلامات sql","فهرس مركب لقواعد البيانات","البحث باستخدام عمودين أو أكثر","كومبوزيت إنديكس","حل بطء استعلامات قاعدة البيانات","index on multiple columns","speed up sql queries","multi column index","database index optimization","optimize queries with multiple filters","composite key index","b tree multiple columns","index with more than one column","fix slow database search"]
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
- The composite index on the customer and date columns speeds up the monthly report.
  - يسرّع الفهرس المركب على عمودي العميل والتاريخ التقرير الشهري.

## خطأ شائع

الاعتقاد بأن الفهرس المركب على `(A, B)` سيسرع الاستعلامات التي تستخدم العمود `B` فقط؛ في العادة، لا يعمل الفهرس إلا إذا كان الاستعلام يتضمن العمود الأول `A` في التصفية.

## لا تخلطه مع

الفهرس المركب فهرس واحد على عدة أعمدة. ترتيب الأعمدة مهم: يفيد الاستعلامات التي تُصفّي على العمود الأول، أو على الأول والثاني معاً، لكنه لا يفيد الاستعلام على العمود الثاني وحده.

## قلها في العمل

- We should consider adding a composite index on these two columns to reduce the query execution time.
  - يجب أن نفكر في إضافة فهرس مركب على هذين العمودين لتقليل وقت تنفيذ الاستعلام.
- I have identified that the slow performance is due to a missing composite index on the filtering criteria.
  - لقد حددت أن الأداء البطيء يرجع إلى فقدان فهرس مركب على معايير التصفية.
