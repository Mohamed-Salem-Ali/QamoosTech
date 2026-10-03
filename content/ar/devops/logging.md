---
id: logging
category: devops
level: beginner
related: [monitoring, audit-logging]
term: "Logging"
translation: "تسجيل الأحداث"
pronunciation: "لوجينج"
---
## التعريف

كتابة رسائل عمّا يفعله التطبيق، لتفهم الأخطاء والسلوك لاحقًا.

## أين تسمعه؟

تتبع مشكلات الإنتاج.

## أمثلة

- Check the logs to see why the request failed.
  - افحص الـ logs لترى لماذا فشل الطلب.
- Add more logging around the payment step.
  - أضف مزيدًا من التسجيل حول خطوة الدفع.

## خطأ شائع

تسجيل كلمات المرور أو الـ tokens أو البيانات الشخصية. غالبًا يمكن للكثيرين الوصول إلى السجلات.

## لا تخلطه مع

يسجل الـ logging أحداث تنفيذ النظام بغرض التتبع وتصحيح الأخطاء، بينما تتابع الـ monitoring المقاييس والصحة العامة بمرور الوقت للتنبيه بالمشكلات.

## قلها في العمل

- Could we add some extra logging here so we can see what payload the API received?
  - هل يمكننا إضافة بعض الـ logging الإضافي هنا لنتمكن من معرفة البيانات التي استقبلها الـ API؟
- Please ensure that no sensitive user data is exposed in the new logging statements before merging this pull request.
  - يرجى التأكد من عدم ظهور أي بيانات مستخدم حساسة في أوامر الـ logging الجديدة قبل دمج طلب الـ pull request هذا.
