---
id: lookup
category: databases
subcategory: querying
level: intermediate
related: [queryset, aggregation, sql]
tags: [django, python]
aliases: ["field lookup", "filter operator"]
term: "Lookup"
translation: "عامل البحث"
pronunciation: "لوك أب"
keywords: ["العاملان gte وicontains", "عامل التصفية", "عوامل الحقول في Django", "التصفية بشرطتين سفليتين", "أكبر من أو يحتوي", "التصفية ببداية الاسم", "__gte __icontains", "filter operator", "field lookups in django", "double underscore filter", "greater than or contains", "filter(name__startswith)"]
---

## التعريف

عامل البحث (Lookup) معامل تصفية تلصقه باسم الحقل في استعلام الـ ORM، مثل `amount__gte=100` أو `name__icontains="ali"`، ليحدد كيف تتم المقارنة.

## أين تسمعه؟

في استعلامات Django (`filter()` و`exclude()`)، ووثائق الـ ORM، ومراجعات كود ميزات البحث.

## أمثلة

- Use `__gte` to get payments of at least 100.
  - استخدم `__gte` لجلب الدفعات بقيمة 100 فأكثر.
- `__icontains` ignores upper and lower case.
  - يتجاهل `__icontains` حالة الأحرف.

## خطأ شائع

استخدام `__contains` لبحث لا يفرّق بين الأحرف. هو حساس للحالة؛ استخدم `__icontains`.

## لا تخلطه مع

جملة `WHERE` في SQL وهي الصيغة الخام. أما عامل البحث فطريقة الـ ORM لكتابة الشرط نفسه.

## قلها في العمل

- Chain two lookups to narrow it down.
  - سلسل عاملي بحث لتضييق النتيجة.
- Which lookup would match the beginning of the name?
  - أي عامل بحث يطابق بداية الاسم؟
