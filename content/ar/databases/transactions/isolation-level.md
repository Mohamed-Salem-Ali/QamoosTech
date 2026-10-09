---
id: isolation-level
category: databases
subcategory: transactions
level: intermediate
related: [database, transaction]
term: "Isolation Level"
translation: "مستوى العزل"
pronunciation: "آيسوليشن ليفل"
keywords: ["ضبط مستوى عزل العمليات","التحكم في ظهور بيانات المعاملات","إعدادات تضارب العمليات المتزامنة","تحديد مستوى العزل في قاعدة البيانات","منع قراءة البيانات غير المكتملة","مستوى عزل المعاملات البرمجية","تحسين أداء قراءة البيانات المتزامنة","ضبط مستوى العزل لتقليل الأقفال","مشاكل تداخل العمليات في قاعدة البيانات","آيسوليشن ليفل في قواعد البيانات","database transaction visibility settings","prevent dirty reads in database","manage concurrent transaction consistency","database locking behavior configuration","serializable vs read committed","control data visibility between transactions","fix phantom reads in sql","database concurrency control settings","transaction integrity configuration","adjust database read consistency"]
---

## التعريف

هو إعداد في قاعدة البيانات يحدد مدى ظهور التغييرات التي تجريها عملية (Transaction) معينة للعمليات الأخرى التي تعمل في نفس الوقت. يوازن هذا الإعداد بين دقة البيانات وبين سرعة أداء النظام.

## أين تسمعه؟

عند ضبط إعدادات قاعدة البيانات، أو في نقاشات تحسين الأداء، أو عند حل مشاكل تتعلق بتضارب البيانات.

## أمثلة

- We set the isolation level to Serializable to prevent phantom reads in our financial reports.
  - قمنا بضبط مستوى العزل على Serializable لمنع حدوث قراءة البيانات الوهمية (phantom reads) في تقاريرنا المالية.
- Changing the isolation level to Read Committed can improve performance by reducing lock contention.
  - تغيير مستوى العزل إلى Read Committed قد يحسن الأداء عن طريق تقليل التنافس على الأقفال (lock contention).
- At Read Committed, the report can see rows that the other transaction has just committed.
  - عند مستوى Read Committed، قد يرى التقرير الصفوف التي أثبتتها المعاملة الأخرى للتو.

## خطأ شائع

الاعتقاد بأن مستوى العزل الأعلى هو دائماً الخيار الأفضل، متجاهلين أن المستويات العالية قد تقلل من قدرة النظام على معالجة العمليات المتزامنة وتسبب بطئاً في الأداء.

## قلها في العمل

- Let's check the current isolation level on the database to see if it's causing these deadlocks.
  - دعنا نتحقق من مستوى العزل الحالي في قاعدة البيانات لنرى ما إذا كان هو سبب حدوث هذه الأقفال الميتة (deadlocks).
- Please update the transaction isolation level in the configuration file before deploying the fix.
  - يرجى تحديث مستوى عزل العمليات في ملف الإعدادات قبل نشر الإصلاح.
