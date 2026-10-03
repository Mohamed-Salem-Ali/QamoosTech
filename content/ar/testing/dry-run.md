---
id: dry-run
category: testing
level: beginner
related: [ci-cd, staging-vs-production]
term: "Dry Run"
pronunciation: "دراي ران"
translation: "تجربة افتراضية / تنفيذ تجريبي"
---

## التعريف

تنفيذ سكريبت أو أمر أو نشر برمجيات لاختبار كيفية عمله دون إجراء أي تغييرات دائمة على قاعدة البيانات أو بيئة الإنتاج.

## أين تسمعه؟

أثناء إعداد مسارات الـ CI/CD، وعمليات تهجير قواعد البيانات، واجتماعات التخطيط للإصدارات.

## أمثلة

- Let's do a dry run of the migration script on the staging database before touching production.
  - دعنا نقوم بتنفيذ تجريبي لسكريبت التهجير على قاعدة بيانات التجهيز قبل مس بيئة الإنتاج.
- The deployment tool supports a dry run flag so we can preview the changes.
  - أداة النشر تدعم علامة التنفيذ التجريبي لكي نتمكن من معاينة التغييرات.

## خطأ شائع

الاعتقاد بأن الـ dry run خالي تماماً من المخاطر؛ إذ قد يستهلك موارد أو يتسبب في أقفال مؤقتة حتى وإن لم يقم بكتابة البيانات.
