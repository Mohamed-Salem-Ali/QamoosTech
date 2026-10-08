---
id: canary-release
category: devops
subcategory: ci-cd-and-delivery
level: intermediate
related: [ci-cd, deployment, rollback]
term: "Canary Release"
translation: "الإصدار التجريبي المتدرّج"
pronunciation: "كاناري ريليس"
keywords: ["نشر التحديث لمجموعة صغيرة من المستخدمين","إطلاق التحديث تدريجيا للمستخدمين","فحص النسخة الجديدة على نسبة قليلة","نشر التحديثات بحذر للتاكد من الاستقرار","تحويل جزء من حركة المرور للتجربة","استراتيجية النشر التدريجي","اصدار الكناري","كاناري ريليس","roll out new version to few users","test update on subset of users","deploy to small percentage of traffic","gradual traffic shifting deployment","canary deployment strategy","monitor new release before full rollout","test new features safely in production","canary deployment","canary update"]
---

## التعريف

استراتيجية لنشر التحديثات البرمجية يتم فيها إطلاق النسخة الجديدة لمجموعة صغيرة من المستخدمين قبل تعميمها على الجميع. يهدف هذا الإجراء إلى مراقبة أداء النسخة الجديدة واكتشاف أي مشاكل تقنية قبل تأثر جميع المستخدمين.

## أين تسمعه؟

في اجتماعات التخطيط لإطلاق الميزات الجديدة، ومناقشات مسارات الـ (CI/CD)، وتحليل الأخطاء بعد وقوعها.

## أمثلة

- We will perform a canary release to 5% of our traffic to ensure the new database schema is stable.
  - سنقوم بعمل Canary Release لـ 5% من حركة المرور للتأكد من استقرار مخطط قاعدة البيانات الجديد.
- The team decided to use a canary release to test the new payment gateway integration.
  - قرر الفريق استخدام Canary Release لاختبار تكامل بوابة الدفع الجديدة.

## خطأ شائع

الخلط بين الـ Canary Release والـ Blue-Green Deployment؛ فبينما تهدف كلتاهما إلى تقليل المخاطر، يعتمد الـ Canary على التدرج في تحويل حركة المرور، بينما يعتمد الـ Blue-Green على التبديل الكامل بين بيئتين متطابقتين.

## لا تخلطه مع

غالباً ما يتم الخلط بين الـ Canary release والـ A/B testing؛ فبينما يتضمن كلاهما تقسيم حركة المرور، يركز الـ Canary release على استقرار النظام تقنياً، بينما يركز الـ A/B testing على قياس سلوك المستخدمين وأداء الميزات من منظور تسويقي.

## قلها في العمل

- Let's start with a canary release for the new dashboard to see if it handles the load correctly.
  - لنبدأ بعمل Canary release للوحة التحكم الجديدة لنرى ما إذا كانت تتعامل مع الضغط بشكل صحيح.
- I recommend a canary release for this update to minimize potential downtime for our production users.
  - أوصي بإجراء Canary release لهذا التحديث لتقليل وقت التوقف المحتمل لمستخدمي بيئة الإنتاج.
