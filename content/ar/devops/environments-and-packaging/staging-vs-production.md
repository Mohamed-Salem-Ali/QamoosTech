---
id: staging-vs-production
category: devops
subcategory: environments-and-packaging
level: beginner
related: [deployment, environment-variable, code-freeze, dry-run]
term: "Staging vs Production"
translation: "بيئة التجربة وبيئة الإنتاج"
pronunciation: "ستيجينج مقابل برودكشن"
keywords: ["الفرق بين بيئة الاختبار والإنتاج","ما هي بيئة الإنتاج","ما هي بيئة التجربة","الفرق بين برودكشن وستيجينج","بيئة التشغيل الفعلية للمستخدمين","الفرق بين السيرفر التجريبي والحقيقي","بيئة التجربة قبل النشر","الفرق بين بيئة dev و prod","staging vs production environments","difference between staging and prod","what is a staging environment","live system vs test server","prod vs stage difference","pre production vs production","test before releasing live","mirror of production environment","staging server vs live server"]
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
- The migration ran on staging without errors, so we schedule it for production tonight.
  - نُفّذ الترحيل على بيئة الاختبار دون أخطاء، لذلك نجدول تنفيذه في بيئة الإنتاج الليلة.

## خطأ شائع

الاختبار على staging ببيانات وهمية فقط. قد تكشف البيانات الحقيقية مشكلات تخفيها البيانات الوهمية.

## لا تخلطه مع

غالباً ما يتم الخلط بين بيئة Staging وبيئة التطوير (Dev)؛ فبينما تُستخدم بيئة التطوير للبرمجة وتصحيح الأخطاء، تُعد بيئة Staging نسخة مطابقة لبيئة الإنتاج تُستخدم للتحقق النهائي قبل النشر.

## قلها في العمل

- Let's verify this fix on staging before we push it to production.
  - دعنا نتحقق من هذا الإصلاح على بيئة staging قبل أن نرفعه إلى بيئة الإنتاج.
- The deployment to production is scheduled for tonight, provided that the smoke tests pass on staging.
  - تمت جدولة عملية النشر إلى بيئة الإنتاج الليلة، بشرط أن تجتاز اختبارات الدخان بنجاح على بيئة staging.
