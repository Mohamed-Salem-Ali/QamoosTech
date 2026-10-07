---
id: aggregation
category: databases
subcategory: querying
level: intermediate
related: [group-by, query, sql]
tags: [sql, django]
aliases: ["aggregate", "aggregate function", "annotation"]
term: "Aggregation"
translation: "التجميع الإحصائي"
pronunciation: "أجريجيشن"
keywords: ["مجموع أو عدد أو متوسط الصفوف", "اختصار عدة صفوف في قيمة واحدة", "مجموع عمود", "القيمة العظمى والصغرى", "دالة تجميعية", "عدّ الصفوف", "sum count average of rows", "collapse many rows into one value", "total of a column", "max and min", "aggregate function", "count rows"]
---

## التعريف

التجميع الإحصائي (Aggregation) يدمج صفوفاً كثيرة في قيمة واحدة، مثل المجموع أو العدد أو المتوسط أو القيمة الصغرى أو العظمى.

## أين تسمعه؟

في استعلامات التقارير، ولوحات المتابعة، وكود الـ ORM مثل `aggregate()` و`annotate()`، ومراجعات الأداء.

## أمثلة

- The report uses an aggregation to total every payment for the week.
  - يستخدم التقرير تجميعاً لحساب مجموع كل دفعات الأسبوع.
- Let the database do the aggregation instead of looping in Python.
  - اترك قاعدة البيانات تجري التجميع بدلاً من الحلقات في بايثون.

## خطأ شائع

جلب كل الصفوف وجمعها في كود التطبيق. تستطيع قاعدة البيانات فعل ذلك أسرع بكثير في استعلام واحد.

## لا تخلطه مع

‏`GROUP BY` الذي يقسّم الصفوف إلى مجموعات أولاً لتحصل على قيمة تجميعية لكل مجموعة بدلاً من واحدة للجدول كله.

## قلها في العمل

- Do the aggregation in SQL and return just the total.
  - أجرِ التجميع في SQL وأعد المجموع فقط.
- That page is slow because it aggregates in Python.
  - هذه الصفحة بطيئة لأنها تجمّع في بايثون.
