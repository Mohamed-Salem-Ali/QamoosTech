---
id: seed-data
category: databases
level: beginner
related: [database, migration, schema]
term: "Seed Data"
translation: "بيانات أولية"
pronunciation: "سيد داتا"
keywords: ["إدخال بيانات أولية للقاعدة","تعبئة قاعدة البيانات بالقيم الافتراضية","سكربت تغذية قاعدة البيانات","بيانات تجريبية عند التشغيل","إعداد قاعدة البيانات لأول مرة","سجلات افتراضية للتطبيق","طريقة استخدام سيد داتا","ملء الجداول ببيانات بدائية","إضافة بيانات أساسية للنظام","تجهيز بيئة العمل ببيانات","الفرق بين المايجريشن والسيد","initial database records","populate database with defaults","database seeder script","default application configuration data","sample data for testing","first time database setup","loading startup records","database seeding process","inserting baseline data","seed data vs migration","predefined database entries"]
---

## التعريف

تشير Seed Data إلى مجموعة السجلات الأولية التي تُحمل في قاعدة البيانات عند إعدادها لأول مرة أو إعادة ضبطها. وغالباً تتضمن إعدادات أساسية، أو أدوار مستخدمين افتراضية، أو بيانات تجريبية يحتاجها التطبيق ليعمل بشكل صحيح.

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

## لا تخلطه مع

تُستخدم البيانات الأولية (Seed Data) لملء الإعدادات الأولية والسجلات الافتراضية، بينما يُعرّف ترحيل قاعدة البيانات (Migration) تغييرات الهيكل والنسق بمرور الوقت.

## قلها في العمل

- Could you please update the seed data script so it includes the new default permissions?
  - هل يمكنك من فضلك تحديث سكربت البيانات الأولية ليشتمل على صلاحيات الافتراضية الجديدة؟
- I added a few more sample users to the seed data file for our local testing.
  - أضفت بضع مستخدمين تجريبيين آخرين إلى ملف البيانات الأولية لاختباراتنا المحلية.
