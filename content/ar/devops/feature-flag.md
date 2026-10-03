---
id: feature-flag
category: devops
level: intermediate
related: [rollback, deployment]
term: "Feature Flag"
translation: "مفتاح تفعيل الميزة"
pronunciation: "فيتشر فلاج"
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

## خطأ شائع

عدم حذف الـ flags القديمة أبدًا. تتراكم وتجعل الشيفرة مربكة.

## لا تخلطه مع

يتحكم الـ feature flag في الوظائف ديناميكيًّا دون الحاجة لنشر جديد، بينما الـ branch هو مسار تطوري منفصل في نظام التحكم بالإصدارات يتطلب الدمج والنشر ليصل إلى بيئة الإنتاج.

## قلها في العمل

- Let us wrap this new UI component behind a feature flag before we merge it.
  - دعونا نضع مكون واجهة المستخدم الجديد هذا خلف مفتاح تفعيل الميزة قبل أن نقوم بدمجه.
- Please ensure the feature flag is enabled for all beta testers in the upcoming release.
  - يرجى التأكد من تفعيل مفتاح الميزة لجميع مختبري النسخة التجريبية في الإصدار القادم.
