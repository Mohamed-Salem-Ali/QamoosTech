---
id: subquery
category: databases
subcategory: querying
level: intermediate
related: [join, sql, query]
tags: [sql]
aliases: ["nested query", "inner query", "correlated subquery", "derived table"]
term: "Subquery"
translation: "الاستعلام الفرعي"
pronunciation: "سب كويري"
keywords: ["استعلام داخل استعلام", "جملة select بين قوسين", "‏where in select", "استعلام متداخل", "الاستعلام الداخلي", "جدول مشتق", "query inside a query", "select in parentheses", "where in select", "nested select", "inner query", "derived table"]
---

## التعريف

الاستعلام الفرعي (Subquery) هو `SELECT` مكتوب داخل استعلام آخر، عادة بين قوسين، ويستخدم الاستعلام الخارجي نتيجته، مثلاً لتصفية الصفوف بقائمة أو قيمة محسوبة.

## أين تسمعه؟

في مقابلات SQL، واستعلامات التقارير، وكود الـ ORM الذي يولد جمل `IN (SELECT ...)` متداخلة.

## أمثلة

- Find members whose total is above the average using a subquery.
  - اعثر على الأعضاء الذين مجموعهم فوق المتوسط باستخدام استعلام فرعي.
- Often a join is clearer and faster than a subquery.
  - غالباً يكون الـ join أوضح وأسرع من الاستعلام الفرعي.
- The subquery finds the customers who have at least one unpaid invoice.
  - يجد الاستعلام الفرعي العملاء الذين لديهم فاتورة واحدة غير مدفوعة على الأقل.

## خطأ شائع

استخدام استعلام فرعي مترابط ينفّذ لكل صف في جدول كبير. قد يكون بطيئاً جداً؛ جرّب join أو دالة نافذة.

## لا تخلطه مع

الـ join الذي يدمج الجداول جنباً إلى جنب. أما الاستعلام الفرعي فينتج قيمة أو قائمة يستخدمها استعلام آخر.

## قلها في العمل

- Can we replace this subquery with a join?
  - هل نستطيع استبدال هذا الاستعلام الفرعي بـ join؟
- Check the plan for the nested select.
  - افحص الخطة للـ select المتداخل.
