---
id: group-by
category: databases
subcategory: querying
level: intermediate
related: [aggregation, query, sql, window-function]
tags: [sql]
aliases: ["group by clause"]
term: "GROUP BY"
translation: "التجميع بالمجموعات"
pronunciation: "جروب باي"
keywords: ["تجميع الصفوف بعمود", "العدد لكل فئة", "المجموع لكل أسبوع", "نتيجة واحدة لكل مجموعة", "جملة HAVING", "تقرير حسب الشهر", "group rows by a column", "count per category", "total per week", "one result per group", "having clause", "report by month"]
---

## التعريف

‏`GROUP BY` تقسم صفوف الاستعلام إلى مجموعات تشترك في قيمة، فتُحسب دالة تجميعية مثل المجموع أو العدد لكل مجموعة.

## أين تسمعه؟

في استعلامات التقارير مثل "المجموع لكل أسبوع"، وفي مقابلات SQL، وفي كود الـ ORM الذي يجمّع القيم.

## أمثلة

- Group by week to get the amount collected in each one.
  - جمّع حسب الأسبوع لتحصل على المبلغ المحصَّل في كل أسبوع.
- Use `HAVING` to filter groups after the grouping.
  - استخدم `HAVING` لتصفية المجموعات بعد التجميع.

## خطأ شائع

اختيار عمود لا هو مجمَّع ولا تجميعي. لا تستطيع قاعدة البيانات معرفة قيمة أي صف تعرض.

## لا تخلطه مع

‏`ORDER BY` التي ترتّب الصفوف فقط. أما `GROUP BY` فتغيّر عدد الصفوف العائدة.

## قلها في العمل

- Group by member and sum the amounts.
  - جمّع حسب العضو واجمع المبالغ.
- Filter the groups with `HAVING`, not `WHERE`.
  - صفِّ المجموعات بـ `HAVING` وليس `WHERE`.
