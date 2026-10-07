---
id: logging
category: devops
subcategory: operations-and-monitoring
level: beginner
related: [monitoring, audit-logging]
term: "Logging"
translation: "تسجيل الأحداث"
pronunciation: "لوجينج"
keywords: ["تسجيل أحداث النظام","تتبع أخطاء التطبيق","كتابة سجلات النشاط","معرفة سبب فشل الطلبات","لوجينج","حفظ مسار تنفيذ البرنامج","مراقبة سلوك التطبيق","استخراج سجلات الأخطاء","طريقة تتبع المشاكل","تسجيل البيانات في ملفات","تتبع سير العمل","track application events","write messages to console","debug production errors","record system execution flow","save app activity history","see what happened before crash","application log files","print statements for debugging","loggin","trace execution path","monitor app behavior"]
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
