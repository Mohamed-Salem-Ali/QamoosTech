---
id: seed-data
category: databases
level: beginner
related: [database, migration, schema]
term: "Seed Data"
translation: "بيانات أولية"
pronunciation: "سيد داتا"
---

## التعريف

تشير Seed Data إلى مجموعة السطور الأولية التي تُحمل في قاعدة البيانات عند إعدادها لأول مرة أو إعادة ضبطها. وغالباً تتضمن إعدادات أساسية، أو أدوار مستخدمين افتراضية، أو بيانات تجريبية يحتاجها التطبيق ليعمل بشكل صحيح.

## أين تسمعه؟

- عند إعداد بيئة التطوير المحلية
- في الاختبارات الآلية وترحيل قاعدة البيانات (Migrations)
- عند نشر بيئة عمل جديدة

## أمثلة

- Run the database seeder command to populate the roles table with default values.
  - قم بتشغيل أمر تغذية قاعدة البيانات لملء جدول الأدوار بالقيم الافتراضية.
- The test suite automatically clears the database and loads seed data before every run.
  - تقوم حزمة الاختبارات بمحو قاعدة البيانات تلقائياً وتحميل البيانات الأولية قبل كل تشغيل.

## خطأ شائع

التعامل مع البيانات الأولية كأنها بيانات إنتاجية حقيقية، أو نسيان جعل سكربتات الإدخال قابلة للتكرار (Idempotent) مما يؤدي إلى إنشاء بيانات مكررة غير مرغوب فيها عند تشغيلها عدة مرات.
