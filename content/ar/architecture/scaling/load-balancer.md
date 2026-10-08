---
id: load-balancer
category: architecture
subcategory: scaling
level: intermediate
related: [scalability, reverse-proxy, single-point-of-failure, round-robin]
term: "Load Balancer"
translation: "موزّع الأحمال"
pronunciation: "لود بالانسر"
keywords: ["توزيع الطلبات على الخوادم","موزع الأحمال","منع الضغط على خادم واحد","توزيع حركة المرور","توجيه الطلبات للسيرفرات","لود بالانسر","موازن الأحمال","توزيع الترافيك على السيرفرات","distribute traffic across servers","prevent server overload","spread incoming requests","balance network traffic","reverse proxy vs load balancer","lod balancer","load balancr","route requests to multiple servers","high availability traffic routing"]
---
## التعريف

مكوّن يوزّع الطلبات الواردة على عدة خوادم حتى لا يتعرض خادم واحد لحمل زائد.

## أين تسمعه؟

إعدادات السحابة وتصميمات التوافر العالي.

## أمثلة

- The load balancer sends traffic only to healthy servers.
  - يرسل الـ load balancer الحركة إلى الخوادم السليمة فقط.
- We have two servers behind a load balancer.
  - لدينا خادمان خلف load balancer.

## خطأ شائع

حفظ جلسات المستخدمين في ذاكرة الخادم. قد يصل الطلب التالي إلى خادم آخر فتضيع الجلسة.

## لا تخلطه مع

الفرق بين الـ load balancer والـ reverse proxy هو أن الأول يوزع حركة المرور على عدة خوادم لتحسين الأداء، بينما يعمل الثاني كوسيط يتعامل مع الطلبات لخادم خلفي واحد لتوفير الأمان أو التخزين المؤقت.

## قلها في العمل

- We should check the load balancer logs to see if the traffic is being distributed correctly among the nodes.
  - يجب أن نتحقق من سجلات الـ load balancer لنرى ما إذا كانت حركة المرور تتوزع بشكل صحيح بين العُقد.
- Please ensure the new instance is registered with the load balancer before we proceed with the deployment.
  - يرجى التأكد من تسجيل النسخة الجديدة في الـ load balancer قبل أن نتابع عملية النشر.
