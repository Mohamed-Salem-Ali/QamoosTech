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

## لا تخلطه مع

غالباً ما يتم الخلط بين انحراف الإعدادات (Configuration drift) وعدم اتساق البيئات (Environment inconsistency)، لكن الانحراف يشير تحديداً إلى التغيرات بمرور الوقت عن معيار أساسي معروف، بينما يشير عدم الاتساق إلى وجود فروقات بين بيئتين قد لا تكونان متطابقتين أصلاً.

## قلها في العمل

- I think we have some configuration drift on the web server, so we should re-run the provisioning script to sync it back up.
  - أعتقد أن لدينا بعض انحراف الإعدادات على خادم الويب، لذا يجب أن نعيد تشغيل سكربت التجهيز لمزامنته مرة أخرى.
- Please review the logs, as the recent configuration drift is likely causing the deployment failure we observed this morning.
  - يرجى مراجعة السجلات، حيث أن انحراف الإعدادات الأخير هو على الأرجح السبب في فشل عملية النشر التي لاحظناها هذا الصباح.
