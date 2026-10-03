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
