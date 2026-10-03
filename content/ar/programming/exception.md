---
id: exception
category: programming
level: beginner
related: [debugging]
term: "Exception"
translation: "استثناء"
pronunciation: "إكسيبشن"
keywords: ["معالجة أخطاء وقت التشغيل","إيقاف انهيار البرنامج","التقاط الأخطاء البرمجية","كيفية التعامل مع الاستثناءات","رسائل الخطأ أثناء التشغيل","تجنب توقف البرنامج المفاجئ","تغليف الكود بـ try catch","مصطلح إكسيبشن في البرمجة","أخطاء التنفيذ البرمجية","التعامل مع تعطل الكود","runtime error handling","code crash prevention","try catch block","how to handle errors","unexpected program stop","program execution interruption","debugging runtime issues","catching code errors","error throwing mechanism","fix application crashes"]
---
## التعريف

خطأ يحدث أثناء تشغيل البرنامج. يوقف سير التنفيذ الطبيعي ما لم تلتقطه شيفرتك وتعالجه.

## أين تسمعه؟

رسائل الـ stack trace، والسجلات، و`try/catch`، وتقارير الأخطاء.

## أمثلة

- The service throws an exception when the file is missing.
  - تُطلق الخدمة استثناءً عندما يكون الملف مفقودًا.
- Catch the exception and show a friendly message.
  - التقط الاستثناء واعرض رسالة مفهومة للمستخدم.

## خطأ شائع

التقاط كل الاستثناءات وتجاهلها. يختفي الخطأ من أمام عينيك لكنه لا يختفي من الواقع.

## لا تخلطه مع

يمثل الاستثناء خطأ أثناء التشغيل يمكن لشيفرتك معالجته، بينما يمنع خطأ البناء الشيفرة من الترجمة أو التشغيل من الأساس.

## قلها في العمل

- Make sure to add a specific try-catch block here so we don't let this exception crash the background worker.
  - تأكد من إضافة كتلة try-catch محددة هنا حتى لا نسمح لهذا الاستثناء بإيقاف العامل الخلفي.
- Please wrap the database call in a try-catch block and log the exception details for further investigation.
  - يرجى تغليف استدعاء قاعدة البيانات في كتلة try-catch وتجسيل تفاصيل الاستثناء لمزيد من التحقيق.
