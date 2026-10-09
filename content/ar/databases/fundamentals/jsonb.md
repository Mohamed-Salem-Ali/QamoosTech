---
id: jsonb
category: databases
subcategory: fundamentals
level: intermediate
related: [database, query, schema]
tags: [postgresql]
term: "JSONB"
translation: "JSON الثنائي"
pronunciation: "جاي-سون-بي"
keywords: ["تخزين البيانات الثنائية في بوستجريس","صيغة جيسون الثنائية في قواعد البيانات","فهرسة بيانات جيسون في بوستجريس","الفرق بين جيسون وجيسون بي","تخزين بيانات شبه مهيكلة","تسريع الاستعلام عن بيانات جيسون","نوع بيانات جيسون الثنائي","استخدام جيسون بي في بوستجريس","binary json in postgresql","store json efficiently database","postgresql json storage format","index json data postgres","json vs jsonb postgresql","query semi structured data","decomposed binary json format","jsonb column postgresql"]
---

## التعريف

JSONB هو صيغة تخزين ثنائية (binary) لبيانات JSON في قواعد بيانات PostgreSQL، تتيح فهرسة البيانات ومعالجتها بكفاءة عالية. على عكس صيغة JSON العادية، يتم تخزين البيانات بصيغة ثنائية مفككة، مما يغني عن الحاجة لإعادة تحليل النص في كل مرة يتم فيها الوصول إلى البيانات.

## أين تسمعه؟

في اجتماعات تصميم هيكل قاعدة البيانات (schema)، ونقاشات تحسين الأداء، وعند التعامل مع بيانات شبه مهيكلة في PostgreSQL.

## أمثلة

- We should use a JSONB column to store the flexible user preferences object.
  - يجب أن نستخدم عموداً من نوع JSONB لتخزين كائن تفضيلات المستخدم المرن.
- Querying a JSONB field with a GIN index significantly improves search performance.
  - الاستعلام عن حقل JSONB باستخدام فهرس GIN يحسن أداء البحث بشكل ملحوظ.
- The query finds users whose preferences contain a dark theme, using the JSONB index.
  - يجد الاستعلام المستخدمين الذين تحتوي تفضيلاتهم على السمة الداكنة، مستعيناً بفهرس JSONB.

## خطأ شائع

الاعتقاد بأن JSONB أفضل دائماً من JSON العادي؛ فبينما هو أسرع في الاستعلام، إلا أنه يستغرق وقتاً أطول قليلاً في الكتابة لأن البيانات يجب أن تُحول إلى الصيغة الثنائية أولاً.

## لا تخلطه مع

غالباً ما يتم الخلط بين JSONB و JSON العادي؛ الفرق الجوهري هو أن JSON يخزن البيانات كنسخة مطابقة للنص المدخل، بينما يخزنها JSONB بصيغة ثنائية مفككة تدعم الفهرسة.

## قلها في العمل

- Let's switch this column to JSONB so we can create an index on the nested attributes.
  - لنقم بتحويل هذا العمود إلى JSONB حتى نتمكن من إنشاء فهرس على السمات المتداخلة.
- I have updated the schema to use JSONB for the metadata field to ensure faster query execution times.
  - لقد قمت بتحديث هيكل قاعدة البيانات لاستخدام JSONB لحقل البيانات الوصفية لضمان سرعة أكبر في تنفيذ الاستعلامات.
