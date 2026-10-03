---
id: cascading-delete
category: databases
level: intermediate
related: [database, schema, table-row-column]
term: "Cascading Delete"
pronunciation: "كاسكيدينج ديليت"
---

## التعريف

خاصية في قواعد البيانات تقوم بحذف السجلات التابعة (child records) تلقائياً عند حذف السجل الرئيسي (parent record) المرتبط بها. تهدف هذه الخاصية إلى الحفاظ على سلامة البيانات ومنع وجود سجلات يتيمة في الجداول المرتبطة.

## أين تسمعه؟

أثناء تصميم هيكل قاعدة البيانات (schema)، أو التخطيط لعمليات الترحيل (migration)، أو عند إعداد العلاقات في أدوات الـ ORM.

## أمثلة

- We configured a cascading delete so that removing a user automatically deletes their profile settings.
  - قمنا بضبط الـ cascading delete بحيث يؤدي حذف المستخدم إلى حذف إعدادات ملفه الشخصي تلقائياً.
- Using a cascading delete simplifies cleanup but can lead to accidental data loss if not used carefully.
  - استخدام الـ cascading delete يسهل عملية التنظيف، لكنه قد يؤدي إلى فقدان بيانات غير مقصود إذا لم يُستخدم بحذر.

## خطأ شائع

الاعتقاد بأن الـ cascading delete هو الخيار الأمثل دائماً؛ فغالباً ما ينسى المطورون أنه قد يتسبب في عمليات حذف جماعية غير مقصودة عبر جداول متعددة إذا كانت سلسلة العلاقات طويلة.

## لا تخلطه مع

الحذف المتتابع (cascading delete) يحذف السجلات المرتبطة تلقائياً عند حذف السجل الرئيسي، بينما الحذف الناعم (soft delete) يضع علامة على السجل كغير فعال فقط دون إزالته فعلياً من قاعدة البيانات.

## قلها في العمل

- Make sure we set up a cascading delete on this foreign key so we don't end up with orphaned records in the table.
  - تأكد من إعداد cascading delete على هذا الـ foreign key لكي لا ينتهي بنا المطاف بوجود سجلات يتيمة في الجدول.
- Please review the database migration to verify that enabling cascading delete will not cause unintended data loss across related tables.
  - يرجى مراجعة ترحيل قاعدة البيانات للتحقق من أن تفعيل الـ cascading delete لن يتسبب في فقدان غير مقصود للبيانات عبر الجداول المرتبطة.
