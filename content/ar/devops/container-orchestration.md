---
id: container-orchestration
category: devops
level: intermediate
related: [containerization, deployment, load-balancer]
term: "Container Orchestration"
pronunciation: "كونتينر أوركستريشن"
translation: "أوركسترا الحاويات"
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

## خطأ شائع

الاعتقاد بأن إدارة الحاويات مخصصة لتشغيل حاوية واحدة فقط، في حين أنها مصممة في الأصل لإدارة أنظمة معقدة تضم مئات أو آلاف الحاويات المتفاعلة.
