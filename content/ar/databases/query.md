---
id: query
category: databases
level: beginner
related: [index, join]
term: "Query"
translation: "استعلام"
pronunciation: "كويري"
---
## التعريف

طلب إلى قاعدة البيانات لقراءة بيانات أو تغييرها، ويُكتب عادةً بلغة SQL.

## أين تسمعه؟

تحسين الأداء: «هذا الاستعلام بطيء».

## أمثلة

- Run this query to find all unpaid invoices.
  - نفّذ هذا الاستعلام لإيجاد كل الفواتير غير المدفوعة.
- The query takes 8 seconds because there is no index.
  - يستغرق الاستعلام 8 ثوانٍ لأنه لا يوجد index.

## خطأ شائع

بناء الاستعلامات بدمج نصوص مع مدخلات المستخدم. هذا يفتح الباب أمام SQL injection، فاستخدم المعاملات.

## لا تخلطه مع

غالباً ما يتم الخلط بين الاستعلام (Query) والأمر (Command)؛ فالاستعلام يُستخدم عادةً لاسترجاع البيانات دون تغييرها، بينما يُستخدم الأمر لتعديل حالة قاعدة البيانات أو هيكلها.

## قلها في العمل

- Could you take a look at this query and see if there is any way to optimize it?
  - هل يمكنك إلقاء نظرة على هذا الاستعلام ومعرفة ما إذا كانت هناك أي طريقة لتحسين أدائه؟
- I have updated the query in the latest commit to include the new join condition.
  - لقد قمت بتحديث الاستعلام في الـ commit الأخير ليشمل شرط الربط الجديد.
