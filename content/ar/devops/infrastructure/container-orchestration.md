---
id: container-orchestration
category: devops
subcategory: infrastructure
level: intermediate
related: [containerization, deployment, load-balancer, pod, kubernetes]
tags: [kubernetes]
term: "Container Orchestration"
pronunciation: "كونتينر أوركستريشن"
translation: "تنسيق الحاويات"
keywords: ["تنسيق الحاويات البرمجية","إدارة الحاويات تلقائيا","التحكم التلقائي في الحاويات","أداة إدارة كوبرنيتس","نشر الحاويات على عدة سيرفرات","إدارة دورة حياة الحاويات","توسيع نطاق الخدمات المصغرة","تشغيل الحاويات آليا","automate docker containers deployment","manage multiple containers across servers","scale microservices automatically","kubernetes cluster management tool","container lifecycle management","restart failed docker instances","docker orchestration system","container management platform"]
---

## التعريف

إدارة الحاويات الآلية (Container Orchestration) هي عملية التحكم التلقائي في تشغيل، وتوسيع، وربط حاويات البرمجيات عبر خوادم متعددة. تتولى هذه الأداة مهام مثل نشر التطبيقات ومراقبتها واستبدال الحاويات المعطلة تلقائياً.

## أين تسمعه؟

- في اجتماعات الديف أوبس أثناء مناقشة تجمعات سيرفرات كوبرنيتس
- عند توسيع نطاق معماريات الخدمات المصغرة
- خلال التخطيط للبنية التحتية وتصميم عمليات النشر

## أمثلة

- Container orchestration automatically restarts any container that crashes in production.
  - تقوم أداة إدارة الحاويات بإعادة تشغيل أي حاوية تتوقف عن العمل في بيئة الإنتاج تلقائياً.
- We use container orchestration to scale our API pods up and down based on traffic.
  - نستخدم إدارة الحاويات لتكبير وتصغير حجم وحدات الـ API حسب حجم حركة المرور.
- The orchestrator moved the failed pod to a healthy node within seconds.
  - نقل المنسّق الحاوية المعطلة إلى عقدة سليمة خلال ثوانٍ.

## خطأ شائع

الاعتقاد بأن إدارة الحاويات مخصصة لتشغيل حاوية واحدة فقط، في حين أنها مصممة في الأصل لإدارة أنظمة معقدة تضم مئات أو آلاف الحاويات المتفاعلة.

## لا تخلطه مع

غالباً ما يتم الخلط بين تنسيق الحاويات (Container Orchestration) وتغليف الحاويات (Containerization)؛ فبينما يقوم التغليف بجمع التطبيق مع تبعياته في وحدة واحدة، يقوم التنسيق بإدارة دورة حياة ونشر العديد من هذه الوحدات عبر مجموعة من الخوادم.

## قلها في العمل

- We need to set up container orchestration to handle the traffic spikes we are seeing on our microservices.
  - نحتاج إلى إعداد تنسيق الحاويات للتعامل مع ذروة حركة المرور التي نشهدها على خدماتنا المصغرة.
- I have updated the configuration files to improve our container orchestration strategy for the upcoming release.
  - لقد قمت بتحديث ملفات الإعداد لتحسين استراتيجية تنسيق الحاويات الخاصة بنا للإصدار القادم.
