---
id: auto-scaling
category: devops
level: intermediate
related: [load-balancer, scalability]
term: "Auto-scaling"
pronunciation: "أوتو-سكيلينج"
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
