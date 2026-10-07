---
id: schema
category: databases
subcategory: fundamentals
level: beginner
related: [table-row-column, migration]
term: "Schema"
translation: "المخطط"
pronunciation: "سكيما"
keywords: ["بنية قاعدة البيانات","تصميم هيكل الجداول","تحديد أنواع البيانات والعلاقات","مخطط قاعدة البيانات","طريقة تنظيم البيانات","تعريف هيكلية الجداول","سكيما قاعدة البيانات","شكل البيانات في الجدول","مواصفات هيكل البيانات","كيفية تصميم جداول البيانات","database structure definition","how to organize tables","define data types and relations","database design blueprint","api request validation format","skima spelling","database map layout","data model structure","table column configuration","database schema definition","data structure blueprint"]
---
## التعريف

بنية بياناتك: أي الجداول موجودة، وما أعمدتها وأنواعها، وما العلاقات بينها.

## أين تسمعه؟

تصميم قواعد البيانات، وPrisma، والتحقق من مدخلات الـ API.

## أمثلة

- Update the schema, then create a migration.
  - حدّث الـ schema ثم أنشئ migration.
- The request does not match the schema, so it is rejected.
  - الطلب لا يطابق الـ schema، لذلك يُرفض.

## خطأ شائع

تصميم الـ schema دون التفكير في الاستعلامات المستقبلية. فكّر في كيفية قراءة البيانات.

## لا تخلطه مع

الـ Schema تحدد بنية بياناتك، بينما الـ Migration هو السكربت المتحكم في الإصدارات والذي يطبق تلك التغييرات الهيكلية على قاعدة البيانات.

## قلها في العمل

- Let us update the database schema first before we write the new API endpoints.
  - دعنا نحدث schema قاعدة البيانات أولاً قبل أن نكتب نقاط نهاية الـ API الجديدة.
- Please review the proposed schema changes in the pull request to ensure all foreign keys are properly indexed.
  - يرجى مراجعة التغييرات المقترحة على الـ schema في الـ pull request للتأكد من فهرسة جميع المفاتيح الأجنبية بشكل صحيح.
