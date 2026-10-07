---
id: migration
category: databases
subcategory: orm-and-migrations
level: intermediate
related: [schema, orm]
term: "Migration"
translation: "ترحيل (تغيير بنية القاعدة)"
pronunciation: "مايجريشن"
keywords: ["تحديث بنية قاعدة البيانات","تتبع تغييرات جداول البيانات","ملفات إصدارات قاعدة البيانات","تطبيق تغييرات الهيكلية برمجيا","مايجريشن","تغيير أعمدة قاعدة البيانات","سجل تغييرات قاعدة البيانات","أداة ترحيل البيانات","تحديث هيكل قاعدة البيانات","إدارة إصدارات القاعدة","database schema version control","apply database structure changes","track database table updates","versioned database evolution script","how to update db schema","run database change files","manage database table history","database migration tool","sync database across environments","mygration","db schema evolution"]
---
## التعريف

ملف له إصدار يصف تغييرًا واحدًا في بنية قاعدة البيانات، مثل إضافة عمود. تشغيله يطبّق التغيير.

## أين تسمعه؟

النشر وسير عمل الفريق مع Django وPrisma وRails.

## أمثلة

- Run the migration before starting the new version.
  - شغّل الـ migration قبل تشغيل الإصدار الجديد.
- Never edit a migration that already ran in production.
  - لا تعدّل أبدًا migration تم تشغيله في بيئة الإنتاج.

## خطأ شائع

تعديل migration قديم. أنشئ migration جديدًا حتى تتبع كل البيئات السجل نفسه.

## لا تخلطه مع

تحديث بنية قاعدة البيانات يتم عبر الـ migration، بينما يقوم الـ seed بملء القاعدة ببيانات أولية أو بيانات اختبار.

## قلها في العمل

- Did someone add a new migration for the user profile table, or should I create one?
  - هل قام أحد بإضافة migration جديد لجدول الملف الشخصي للمستخدم، أم أنشئ واحدًا أنا؟
- Please make sure to run the latest migration before testing the changes on the staging environment.
  - يرجى التأكد من تشغيل أحدث migration قبل اختبار التغييرات على بيئة التجربة.
