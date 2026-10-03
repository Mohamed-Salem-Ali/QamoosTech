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

يححدث انحراف الإعدادات عندما تتغير إعدادات أو حالة الخوادم تدريجياً بمرور الوقت بحيث تصبح غير مطابقة للكود الأصلي أو المعيار المحدد.

## أين تسمعه؟

أثناء مراجعة الخوادم، أو استكشاف مشاكل بيئة الإنتاج وإصلاحها، أو عند فحص خطوط تجميع البنية التحتية.

## أمثلة

- Configuration drift caused the staging environment to behave differently than production.
  - تسبب انحراف الإعدادات في جعل بيئة التجربة تتصرف بشكل مختلف عن بيئة الإنتاج.
- We run automated scans daily to detect any configuration drift on our cloud servers.
  - نحن نشغل عمليات فحص آلية يومياً للكشف عن أي انحراف في الإعدادات على خوادم السحاب.

## خطأ شائع

الاعتقاد بأن التعديلات اليدوية التي تتم مباشرة على خادم مباشر سُتفظ تلقائياً في نظام التحكم بالإصدارات.
