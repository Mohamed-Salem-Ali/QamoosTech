---
id: denormalization
category: databases
level: intermediate
related: [database, index, query, schema]
term: "Denormalization"
pronunciation: "دي-نورمالايزيشن"
translation: "إلغاء التطبيع / إدراج تكرار البيانات"
---

## التعريف

إلغاء التطبيع هو إضافة تكرار للبيانات عن قصد داخل قاعدة البيانات لتحسين سرعة القراءة، على حساب إبطاء عمليات الكتابة وزيادة مساحة التخزين.

## أين تسمعه؟

في اجتماعات تصميم قواعد البيانات، وجلسات تحسين الأداء، وعند توسيع نطاق التطبيقات التي تواجه حركة قراءة عالية.

## أمثلة

- We added a duplicated `user_name` column to the orders table to avoid a costly join.
  - أضفنا عمود `user_name` مكرراً إلى جدول الطلبات لتجنب عملية ربط مكلفة.
- Denormalization improved our dashboard query speed by reducing the number of table scans.
  - أدى إلغاء التطبيع إلى تحسين سرعة استعلام لوحة التحكم من خلال تقليل عدد عمليات مسح الجداول.

## خطأ شائع

الاعتقاد بأن إلغاء التطبيع أمر سيء دائماً لأنه يخالف قواعد تطبيع قواعد البيانات، بينما هو في الواقع ممارسة قياسية للأنظمة التي تعتمد بشكل كبير على القراءة.
