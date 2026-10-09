---
id: feature-flag
category: devops
subcategory: ci-cd-and-delivery
level: intermediate
related: [rollback, deployment]
term: "Feature Flag"
translation: "مفتاح تفعيل الميزة"
pronunciation: "فيتشر فلاج"
keywords: ["تفعيل الميزة بدون نشر جديد","مفتاح تشغيل الميزات برمجيا","التحكم في ظهور الميزات","إصدار الميزات بشكل تدريجي","إيقاف الميزات عند حدوث أعطال","تفعيل الميزة لمستخدمين محددين","مفتاح تبديل الوظائف البرمجية","فيتشر فلاج","التحكم في الميزات عن بعد","مفاتيح تفعيل الخصائص","toggle features without deployment","enable code for specific users","turn off broken features instantly","gradual rollout control switch","dynamic feature toggling","conditional code execution switch","beta testing release control","feature toggle pattern","remote configuration switch","kill switch for features"]
---
## التعريف

مفتاح في الشيفرة يشغّل الميزة أو يطفئها دون نشر جديد، وغالبًا لمجموعة صغيرة من المستخدمين أولًا.

## أين تسمعه؟

الإصدار التدريجي واختبارات A/B.

## أمثلة

- The new checkout is behind a feature flag for 10% of users.
  - صفحة الدفع الجديدة خلف feature flag لعشرة بالمئة من المستخدمين.
- If something breaks, just switch the flag off.
  - إذا حدث خلل فأطفئ الـ flag فقط.
- The new dashboard sits behind a feature flag that only the internal team can see.
  - لوحة المتابعة الجديدة خلف علامة ميزة لا يراها إلا الفريق الداخلي.

## خطأ شائع

عدم حذف الـ flags القديمة أبدًا. تتراكم وتجعل الشيفرة مربكة.

## لا تخلطه مع

يتحكم الـ feature flag في الوظائف ديناميكيًّا دون الحاجة لنشر جديد، بينما الـ branch هو مسار تطوري منفصل في نظام التحكم بالإصدارات يتطلب الدمج والنشر ليصل إلى بيئة الإنتاج.

## قلها في العمل

- Let us wrap this new UI component behind a feature flag before we merge it.
  - دعونا نضع مكون واجهة المستخدم الجديد هذا خلف مفتاح تفعيل الميزة قبل أن نقوم بدمجه.
- Please ensure the feature flag is enabled for all beta testers in the upcoming release.
  - يرجى التأكد من تفعيل مفتاح الميزة لجميع مختبري النسخة التجريبية في الإصدار القادم.
