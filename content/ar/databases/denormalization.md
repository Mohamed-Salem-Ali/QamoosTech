---
id: denormalization
category: databases
level: intermediate
related: [database, index, query, schema]
term: "Denormalization"
pronunciation: "دي-نورمالايزيشن"
translation: "إلغاء التطبيع / إدراج تكرار البيانات"
keywords: ["تسريع استعلامات قاعدة البيانات","تكرار البيانات لتحسين الأداء","تجنب عمليات الربط المكلفة","إلغاء التطبيع في الجداول","تحسين سرعة قراءة البيانات","إضافة بيانات مكررة عمداً","تقليل عمليات الربط المعقدة","دي نورمالايزيشن","تخفيف ضغط استعلامات القراءة","تصميم قاعدة بيانات غير مطبعة","speed up database reads","add redundant data columns","avoid expensive table joins","optimize query performance","intentional data duplication","improve read heavy performance","denormalise database schema","reduce complex query joins","database schema optimization","denormalization technique"]
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

## لا تخلطه مع

يُدخل إلغاء التطبيع تكراراً متحكماً للبيانات لتسريع القراءة، بينما يزيل التطبيع التكرار لضمان سلامة البيانات وتقليل التخزين.

## قلها في العمل

- Should we consider denormalization for this table to avoid joining four different collections on every request?
  - هل يجب أن نفكر في إلغاء التطبيع لهذا الجدول لتجنب ربط أربع مجموعات مختلفة في كل طلب؟
- Please note that this schema uses denormalization to optimize dashboard load times, so keep the synchronization logic in mind.
  - يرجى ملاحظة أن هذا التصميم يستخدم إلغاء التطبيع لتحسين أوقات تحميل لوحة التحكم، لذا يرجى مراعاة منطق المزامنة.
