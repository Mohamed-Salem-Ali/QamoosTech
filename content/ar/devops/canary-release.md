---
id: canary-release
category: devops
level: intermediate
related: [ci-cd, deployment, rollback]
term: "Canary Release"
pronunciation: "كاناري ريليس"
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
