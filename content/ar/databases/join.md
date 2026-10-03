---
id: join
category: databases
level: intermediate
related: [query, table-row-column, n-plus-one]
term: "Join"
translation: "ربط الجداول"
pronunciation: "جوين"
---
## التعريف

عملية في SQL تجمع صفوفًا من جدولين باستخدام قيمة مشتركة مثل `user_id`.

## أين تسمعه؟

مقابلات SQL واستعلامات التقارير.

## أمثلة

- Join the `orders` table with `users` to show the customer name.
  - اربط جدول `orders` بجدول `users` لإظهار اسم العميل.
- A missing join condition returns millions of rows.
  - نسيان شرط الربط يعيد ملايين الصفوف.

## خطأ شائع

نسيان شرط الربط، فيُضرب كل صف في كل صف.
