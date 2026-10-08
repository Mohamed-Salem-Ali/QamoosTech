---
id: normalization
category: databases
subcategory: modeling
level: intermediate
related: [database, schema, table-row-column, derived-value]
term: "Normalization"
translation: "التطبيع"
pronunciation: "نورمالايزيشن"
keywords: ["تقليل تكرار البيانات في قاعدة البيانات","تنظيم الجداول في قاعدة البيانات","تقسيم الجداول الكبيرة إلى جداول","ضمان سلامة البيانات في الداتا بيس","تصميم هيكل قاعدة البيانات","تطهير البيانات المتكررة","تنظيم الداتا بيس","قواعد تسوية البيانات","organize database tables to reduce redundancy","minimize data duplication in sql","split tables into related ones","database schema design best practices","ensure data integrity and consistency","db normalization rules","fix repeating columns in database","database forms first second third"]
---

## التعريف

هي عملية تنظيم البيانات في قاعدة البيانات لتقليل التكرار وضمان سلامة البيانات. تتضمن هذه العملية تقسيم الجداول الكبيرة إلى جداول أصغر ذات صلة وتحديد العلاقات بينها.

## أين تسمعه؟

أثناء تصميم هيكل قاعدة البيانات (schema)، أو في نقاشات تحسين الأداء، أو عند مراجعة نماذج البيانات لتجنب الأخطاء المنطقية.

## أمثلة

- We need to apply normalization to this table to avoid storing the same address multiple times.
  - نحتاج إلى تطبيق Normalization على هذا الجدول لتجنب تخزين نفس العنوان عدة مرات.
- The database schema requires normalization to ensure that updates to user information remain consistent.
  - يتطلب هيكل قاعدة البيانات تطبيق Normalization لضمان بقاء تحديثات معلومات المستخدم متسقة.

## خطأ شائع

الاعتقاد بأن Normalization تؤدي دائماً إلى أفضل أداء؛ أحياناً يكون الـ Denormalization أفضل في الأنظمة التي تعتمد بكثرة على القراءة لتقليل عدد عمليات الربط (joins) المعقدة.

## لا تخلطه مع

غالباً ما يتم الخلط بين Normalization و Denormalization، حيث تركز الـ Normalization على تقليل التكرار عبر تقسيم الجداول، بينما تضيف الـ Denormalization التكرار عمداً لتحسين أداء القراءة.

## قلها في العمل

- Let's perform some normalization on this schema to clean up these redundant columns before we start coding.
  - دعونا نقوم ببعض الـ Normalization على هذا الـ schema لتنظيف هذه الأعمدة المتكررة قبل أن نبدأ في البرمجة.
- I have reviewed the database model and suggest applying further normalization to ensure data integrity across the new modules.
  - لقد راجعت نموذج قاعدة البيانات وأقترح تطبيق المزيد من الـ Normalization لضمان سلامة البيانات عبر الوحدات البرمجية الجديدة.
