---
id: auto-scaling
category: devops
subcategory: infrastructure
level: intermediate
related: [load-balancer, scalability]
term: "Auto-scaling"
pronunciation: "أوتو-سكيلينج"
keywords: ["زيادة عدد الخوادم تلقائيا","ضبط سعة الخوادم ديناميكيا","التحكم التلقائي في موارد السحابة","توسيع البنية التحتية تلقائيا","إضافة خوادم عند زيادة الضغط","تقليل التكاليف عبر السعة التلقائية","أوتو سكيلينج","تغيير عدد الخوادم بناء على الطلب","إدارة موارد الخوادم تلقائيا","توسيع نطاق النظام ذاتيا","dynamic server capacity adjustment","handle traffic spikes automatically","increase server count based on load","cloud infrastructure resource management","scale servers up and down","automatically add compute instances","optimize cloud costs by scaling","dynamic resource allocation for servers","autoscaling vs load balancing","automatic cloud instance provisioning"]
---

## التعريف

خاصية في الحوسبة السحابية تقوم بزيادة أو تقليل عدد خوادم التطبيق تلقائياً بناءً على حجم حركة المرور أو استهلاك الموارد. تهدف هذه الخاصية إلى ضمان استقرار الأداء أثناء الضغط وتوفير التكاليف في أوقات الهدوء.

## أين تسمعه؟

أثناء التخطيط للبنية التحتية، أو في اجتماعات تحسين تكاليف السحابة، أو عند إعداد بيئة التشغيل (Production).

## أمثلة

- We configured auto-scaling to handle the traffic spike during the holiday sale.
  - قمنا بضبط الـ auto-scaling للتعامل مع زيادة حركة المرور أثناء تخفيضات الأعياد.
- The system uses auto-scaling to spin up new instances when CPU usage exceeds 80%.
  - يستخدم النظام الـ auto-scaling لتشغيل خوادم جديدة عندما يتجاوز استهلاك المعالج 80%.

## خطأ شائع

الاعتقاد بأن عملية الـ auto-scaling فورية؛ فغالباً ما تستغرق الخوادم الجديدة بضع دقائق لتعمل وتتصل بموزع الأحمال (Load Balancer)، مما قد يؤدي إلى بطء مؤقت في الأداء إذا لم يتم التخطيط لذلك جيداً.

## لا تخلطه مع

الـ Auto-scaling يقوم بتغيير السعة ديناميكياً بناءً على الطلب، بينما توزيع الأحمال (Load Balancing) يوزع حركة المرور القادمة على الخوادم الموجودة دون تغيير عددها.

## قلها في العمل

- Let's check if the auto-scaling rules are properly configured before launching the new feature.
  - دعونا نتأكد من ضبط قواعد الـ auto-scaling بشكل صحيح قبل إطلاق الميزة الجديدة.
- Please review the pull request updating the auto-scaling thresholds for our production cluster.
  - يرجى مراجعة طلب السحب الذي يحدّث حدود الـ auto-scaling لمجموعة خوادم الإنتاج لدينا.
