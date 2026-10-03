---
id: staging-vs-production
category: devops
level: beginner
related: [deployment, environment-variable]
term: "Staging vs Production"
translation: "بيئة التجربة وبيئة الإنتاج"
pronunciation: "ستيجينج مقابل برودكشن"
---
## التعريف

الـ *production* هو النظام الحي الذي يستخدمه المستخدمون الفعليون، والـ *staging* نسخة مماثلة لتجربة التغييرات بأمان قبل نشرها.

## أين تسمعه؟

تخطيط الإصدارات وتقارير الأخطاء («هل تحدث في بيئة الإنتاج أم في الـ staging؟»).

## أمثلة

- Test it on staging first, then release to production.
  - جرّبه على staging أولًا ثم أصدره إلى production.
- The bug only happens in production.
  - الخطأ يحدث في production فقط.

## خطأ شائع

الاختبار على staging ببيانات وهمية فقط. قد تكشف البيانات الحقيقية مشكلات تخفيها البيانات الوهمية.

## لا تخلطه مع

غالباً ما يتم الخلط بين بيئة Staging وبيئة التطوير (Dev)؛ فبينما تُستخدم بيئة التطوير للبرمجة وتصحيح الأخطاء، تُعد بيئة Staging نسخة مطابقة لبيئة الإنتاج تُستخدم للتحقق النهائي قبل النشر.

## قلها في العمل

- Let's verify this fix on staging before we push it to production.
  - دعنا نتحقق من هذا الإصلاح على بيئة staging قبل أن نرفعه إلى بيئة الإنتاج.
- The deployment to production is scheduled for tonight, provided that the smoke tests pass on staging.
  - تمت جدولة عملية النشر إلى بيئة الإنتاج الليلة، بشرط أن تجتاز اختبارات الدخان بنجاح على بيئة staging.
