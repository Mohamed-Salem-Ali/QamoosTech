---
id: transaction
category: databases
subcategory: transactions
level: intermediate
related: [database, idempotency, compensating-transaction]
aliases: ["atomic operation", "atomicity"]
term: "Transaction"
translation: "معاملة"
pronunciation: "ترانزاكشن"
keywords: ["عمليات قاعدة البيانات الذرية","ضمان نجاح التحديثات بالكامل","تنفيذ مجموعة عمليات متكاملة","التراجع عن التغييرات الخاطئة","معاملات قاعدة البيانات","تجنب تحديث البيانات جزئيا","مجموعة أوامر sql مترابطة","ترانزاكشن في قاعدة البيانات","اعتماد التغييرات أو إلغاؤها","ضمان اتساق البيانات","مبدأ الكل أو لا شيء","atomic database operations","all or nothing updates","ensure data consistency","commit or rollback changes","prevent partial database updates","database unit of work","multi step operation safety","acid compliant database changes","grouping sql queries together","transection","db transaction block"]
---
## التعريف

مجموعة تغييرات في قاعدة البيانات إمّا تنجح كلها أو تفشل كلها، فلا تبقى البيانات محدّثة جزئيًا.

## أين تسمعه؟

المدفوعات، والتحويلات، وأي تحديث متعدد الخطوات.

## أمثلة

- Wrap both updates in a transaction so money is never lost.
  - ضع التحديثين داخل transaction حتى لا يضيع المال أبدًا.
- The transaction was rolled back after the error.
  - تم التراجع عن الـ transaction بعد الخطأ.

## خطأ شائع

ترك الـ transaction مفتوحة أثناء استدعاء API خارجي. هذا يقفل الصفوف ويبطّئ الجميع.

## لا تخلطه مع

تضمن الـ transaction سلامة البيانات عبر خصائص الـ ACID لسلسلة محددة من العمليات، بينما تعالج الـ batch حجمًا كبيرًا من سجلات البيانات دفعة واحدة دون بالضرورة أن تتطلب اتساقًا في الوقت الفعلي.

## قلها في العمل

- Let's make sure this entire registration flow runs inside a single transaction so we don't end up with orphan records.
  - دعنا نتأكد من أن تدفق التسجيل هذا بالكامل يعمل داخل transaction واحدة حتى لا ينتهي بنا المطاف بسجلات يتيمة.
- Please ensure that the database transaction is properly committed or rolled back at the end of the request lifecycle.
  - يرجى التأكد من أن الـ transaction الخاصة بقاعدة البيانات يتم اعتمادها أو التراجع عنها بشكل صحيح في نهاية دورة حياة الطلب.
