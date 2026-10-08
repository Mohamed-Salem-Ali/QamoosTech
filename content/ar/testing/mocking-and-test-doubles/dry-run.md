---
id: dry-run
category: testing
subcategory: mocking-and-test-doubles
level: beginner
related: [ci-cd, staging-vs-production]
term: "Dry Run"
pronunciation: "دراي ران"
translation: "تنفيذ تجريبي"
keywords: ["تنفيذ تجريبي بدون تغييرات","اختبار الأوامر دون حفظ","معاينة التغييرات قبل النشر","تشغيل السكريبت للاختبار فقط","التنفيذ الوهمي للنشر","فحص الترحيل بدون تعديل قاعدة البيانات","دراي ران","تجربة النشر برمجيا","test script without saving changes","preview deployment changes safely","run migration without modifying database","simulate command execution","test run before production","check script for errors safely","preview command output","dai run","dryran"]
---

## التعريف

تنفيذ سكريبت أو أمر أو نشر برمجيات لاختبار كيفية عمله دون إجراء أي تغييرات دائمة على قاعدة البيانات أو بيئة الإنتاج.

## أين تسمعه؟

أثناء إعداد مسارات الـ CI/CD، وعمليات ترحيل قواعد البيانات، واجتماعات التخطيط للإصدارات.

## أمثلة

- Let's do a dry run of the migration script on the staging database before touching production.
  - دعنا نقوم بتنفيذ تجريبي لسكريبت الترحيل على قاعدة بيانات بيئة الاختبار (Staging) قبل المساس ببيئة الإنتاج.
- The deployment tool supports a dry run flag so we can preview the changes.
  - أداة النشر تدعم علامة التنفيذ التجريبي لكي نتمكن من معاينة التغييرات.
- The dry run lists the twelve files it would delete, so we can check them first.
  - يسرد التشغيل التجريبي (dry run) الملفات الاثني عشر التي كان سيحذفها، فنتحقق منها أولاً.

## خطأ شائع

الاعتقاد بأن الـ dry run خالي تماماً من المخاطر؛ إذ قد يستهلك موارد أو يتسبب في أقفال مؤقتة حتى وإن لم يقم بكتابة البيانات.

## لا تخلطه مع

التنفيذ التجريبي (dry run) يختبر عملية دون إجراء تغييرات دائمة، بينما النسخ الاحتياطي (backup) ينشئ نسخة آمنة للبيانات الحالية قبل بدء التعديلات.

## قلها في العمل

- Let us run the deployment command with the dry run flag first to make sure there are no syntax errors.
  - دعنا نشغل أمر النشر مع علامة التنفيذ التجريبي أولاً للتأكد من عدم وجود أخطاء في الصياغة.
- Please attach the output logs from the dry run to the pull request description before merging.
  - يرجى إرفاق سجلات المخرجات من التنفيذ التجريبي بوصف طلب السحب قبل الدمج.
