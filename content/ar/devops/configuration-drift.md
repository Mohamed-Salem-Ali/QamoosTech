---
id: configuration-drift
category: devops
level: intermediate
related: [infrastructure-as-code, source-of-truth, rollback]
term: "Configuration Drift"
translation: "انحراف الإعدادات"
pronunciation: "كونفيجريشن دريفت"
---

## التعريف

يحدث انحراف الإعدادات عندما تتغير إعدادات أو حالة الخوادم تدريجياً بمرور الوقت بحيث تصبح غير مطابقة للكود الأصلي أو المعيار المحدد.

## أين تسمعه؟

أثناء مراجعة الخوادم، أو استكشاف مشاكل بيئة الإنتاج وإصلاحها، أو عند فحص مسارات عمل البنية التحتية ككود (IaC pipelines).

## أمثلة

- Configuration drift caused the staging environment to behave differently than production.
  - تسبب انحراف الإعدادات في جعل بيئة التجربة تتصرف بشكل مختلف عن بيئة الإنتاج.
- We run automated scans daily to detect any configuration drift on our cloud servers.
  - نحن نشغل عمليات فحص آلية يومياً للكشف عن أي انحراف في الإعدادات على الخوادم السحابية.

## خطأ شائع

الاعتقاد بأن التعديلات اليدوية التي تتم مباشرة على خادم مباشر ستُحفظ تلقائياً في نظام التحكم بالإصدارات.
