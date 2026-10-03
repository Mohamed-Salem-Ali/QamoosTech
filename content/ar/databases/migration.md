---
id: migration
category: databases
level: intermediate
related: [schema, orm]
term: "Migration"
translation: "ترحيل (تغيير بنية القاعدة)"
pronunciation: "مايجريشن"
---
## التعريف

ملف له إصدار يصف تغييرًا واحدًا في بنية قاعدة البيانات، مثل إضافة عمود. تشغيله يطبّق التغيير.

## أين تسمعه؟

النشر وسير عمل الفريق مع Django وPrisma وRails.

## أمثلة

- Run the migration before starting the new version.
  - شغّل الـ migration قبل تشغيل الإصدار الجديد.
- Never edit a migration that already ran in production.
  - لا تعدّل أبدًا migration تم تشغيله في الإنتاج.

## خطأ شائع

تعديل migration قديم. أنشئ migration جديدًا حتى تتبع كل البيئات التاريخ نفسه.
