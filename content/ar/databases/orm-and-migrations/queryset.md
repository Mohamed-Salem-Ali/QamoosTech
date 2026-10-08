---
id: queryset
category: databases
subcategory: orm-and-migrations
level: intermediate
related: [orm, query, eager-loading, default-ordering]
tags: [django, python]
aliases: ["query set"]
term: "QuerySet"
translation: "مجموعة الاستعلام"
pronunciation: "كويري ست"
keywords: ["كائن الاستعلام الكسول في Django", "التصفية وتسلسل الاستعلامات", "الـ QuerySet كسول", "تنفيذ الـ queryset", "‏objects.filter", "نتيجة الـ ORM في Django", "django lazy query object", "filter and chain queries", "queryset is lazy", "evaluate a queryset", "objects.filter", "django orm result"]
---

## التعريف

الـ QuerySet وصف كسول لاستعلام قاعدة البيانات في Django. تستطيع تصفيته وتسلسله، ولا يعمل الاستعلام إلا عندما تقرأ النتائج فعلاً.

## أين تسمعه؟

في كود Django وتوثيقه، ومراجعات الأداء حول عدد الاستعلامات التي تنفذها صفحة، ومقابلات الـ ORM.

## أمثلة

- Chaining `filter()` and `order_by()` doesn't hit the database until the QuerySet is evaluated.
  - تسلسل `filter()` و`order_by()` لا يصل إلى قاعدة البيانات حتى يُنفَّذ الـ QuerySet.
- Return a QuerySet from the function so callers can keep refining it.
  - أعد QuerySet من الدالة ليستطيع من يستدعيها متابعة تصفيته.

## خطأ شائع

تحويله إلى قائمة مبكراً. هذا ينفّذ الاستعلام ويضيع فرصة إضافة المرشحات أو الحدود.

## لا تخلطه مع

قائمة كائنات النموذج المحمّلة أصلاً في الذاكرة. أما الـ QuerySet فقد لا يكون لمس قاعدة البيانات بعد.

## قلها في العمل

- Keep it as a QuerySet and filter further in the view.
  - أبقِه QuerySet وصفِّه أكثر في الـ view.
- Print `qs.query` to see the SQL it will run.
  - اطبع `qs.query` لترى الـ SQL الذي سينفّذه.
