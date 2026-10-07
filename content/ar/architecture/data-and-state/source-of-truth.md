---
id: source-of-truth
category: architecture
subcategory: data-and-state
level: beginner
related: [database, cache]
term: "Source of Truth"
translation: "المصدر المرجعي"
pronunciation: "سورس أوف ثروث"
keywords: ["المصدر المرجعي للبيانات","المكان الرسمي للمعلومة","المصدر الأساسي للمعلومات","المرجع الأساسي للبيانات","المصدر الموثوق للبيانات","حل تعارض النسخ","سورس أوف ثروث","المصدر المرجعي الوحيد","قاعدة البيانات الأساسية","where data officially lives","authoritative data location","primary data store","master record location","ssot","single source of truth","original data copy","resolve conflicting data","database versus cache","authoritative source"]
---
## التعريف

المكان الوحيد الذي تعيش فيه المعلومة رسميًا. وعندما تختلف نسختان، تكون كلمة هذا المكان هي الأصح.

## أين تسمعه؟

التوثيق وتصميم الأنظمة وإدارة الإعدادات.

## أمثلة

- The database is the source of truth; the cache is only a copy.
  - قاعدة البيانات هي المصدر المرجعي، والـ cache مجرد نسخة.
- Where is the source of truth for prices?
  - أين المصدر المرجعي للأسعار؟

## خطأ شائع

وجود عدة «مصادر مرجعية». عندها لا يوجد مصدر فعلي، بل خطأ ينتظر أن يحدث.

## لا تخلطه مع

غالباً ما يتم الخلط بين المصدر المرجعي (Source of Truth) ومبدأ المصدر المرجعي الوحيد (SSOT)؛ فبينما يشير الأول إلى الموقع الموثوق للبيانات، يمثل الثاني مبدأ تصميمياً يضمن إدارة كل عنصر من البيانات في مكان واحد فقط على مستوى المؤسسة بالكامل.

## قلها في العمل

- We need to decide which service will be the source of truth for user profiles before we start building the API.
  - نحتاج إلى تحديد الخدمة التي ستكون المصدر المرجعي لملفات تعريف المستخدمين قبل أن نبدأ في بناء الـ API.
- Please update the configuration file in the repository, as it serves as the source of truth for our deployment environment variables.
  - يرجى تحديث ملف الإعدادات في المستودع، حيث إنه بمثابة المصدر المرجعي لمتغيرات بيئة النشر الخاصة بنا.
