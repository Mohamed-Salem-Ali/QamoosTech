---
id: join
category: databases
subcategory: querying
level: intermediate
related: [query, table-row-column, n-plus-one]
term: "Join"
translation: "ربط الجداول"
pronunciation: "جوين"
keywords: ["ربط جدولين في قاعدة البيانات","دمج جدولين بناء على عمود","استعلام من جدولين مختلفين","ربط بيانات جدولين sql","كيف أعمل join بين جدولين","الفرق بين join و union","ربط الجداول في قواعد البيانات","امر الربط في sql","combine two tables in sql","merge tables on shared column","sql join operation","inner join and left join","link tables using id","query data from multiple tables","sql table relationship query","join vs union sql","connect two tables together"]
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
- The join pairs each order with its customer using customer_id.
  - يقرن الربط كل طلب بعميله باستخدام customer_id.

## خطأ شائع

نسيان شرط الربط، فيُضرب كل صف في كل صف.

## لا تخلطه مع

غالبًا ما يتم الخلط بين Join و Union؛ فبينما يدمج Join الأعمدة من جدولين بناءً على عمود مشترك، يقوم Union بإلحاق صفوف مجموعة نتائج بأخرى.

## قلها في العمل

- We should use a left join here to make sure we don't lose any records from the primary table.
  - يجب أن نستخدم left join هنا لضمان عدم فقدان أي سجلات من الجدول الأساسي.
- Please include an inner join in the query to filter out users who do not have an active subscription.
  - يرجى تضمين inner join في الاستعلام لتصفية المستخدمين الذين ليس لديهم اشتراك نشط.
