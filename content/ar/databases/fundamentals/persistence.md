---
id: persistence
category: databases
subcategory: fundamentals
level: beginner
related: [database, schema, orm]
aliases: ["persistent storage", "data persistence"]
term: "Persistence"
translation: "حفظ البيانات الدائم"
pronunciation: "برسيستنس"
keywords: ["الاحتفاظ بالبيانات بعد توقف البرنامج", "الحفظ في قاعدة بيانات أو ملف", "البيانات تنجو من إعادة التشغيل", "تخزين دائم", "الذاكرة مقابل التخزين", "بيانات دائمة", "keep data after program stops", "save to database or file", "data survives restart", "persistent storage", "in memory vs stored", "durable data"]
---

## التعريف

حفظ البيانات الدائم (Persistence) يعني الاحتفاظ بالبيانات بعد توقف البرنامج بحفظها في مكان دائم مثل قاعدة بيانات أو ملف، بدلاً من إبقائها في الذاكرة فقط.

## أين تسمعه؟

في نقاشات المعمارية، وتوثيق الـ ORM ("طبقة الحفظ")، وعند تقرير أين يجب أن تعيش البيانات.

## أمثلة

- The list is lost on restart because nothing persists it.
  - تضيع القائمة عند إعادة التشغيل لأن لا شيء يحفظها.
- The persistence layer hides whether we use files or a database.
  - تخفي طبقة الحفظ هل نستخدم ملفات أم قاعدة بيانات.
- The cart survives a restart because it is saved to the database.
  - تبقى السلة بعد إعادة التشغيل لأنها محفوظة في قاعدة البيانات.

## خطأ شائع

التعامل مع الذاكرة المؤقتة أو المتغير كأنه تخزين. كل ما في الذاكرة فقط يختفي عند انتهاء العملية.

## لا تخلطه مع

الذاكرة المؤقتة (Cache) وهي نسخة سريعة مؤقتة تُرمى. أما البيانات الدائمة فهي السجل الدائم.

## قلها في العمل

- Where do we persist this: the database or a file?
  - أين نحفظ هذا: في قاعدة البيانات أم ملف؟
- Add a persistence layer so the logic doesn't know about SQL.
  - أضف طبقة حفظ حتى لا يعرف المنطق شيئاً عن SQL.
