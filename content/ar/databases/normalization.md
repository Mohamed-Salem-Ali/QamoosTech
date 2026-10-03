---
id: normalization
category: databases
level: intermediate
related: [database, schema, table-row-column]
term: "Normalization"
pronunciation: "نورمالايزيشن"
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
