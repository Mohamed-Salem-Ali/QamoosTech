---
id: blue-green-deployment
category: devops
level: intermediate
related: [ci-cd, deployment, rollback]
term: "Blue-Green Deployment"
pronunciation: "بلو-جرين ديبلويمينت"
---

## التعريف

استراتيجية لنشر البرمجيات تعتمد على وجود بيئتين متطابقتين تماماً للإنتاج، حيث تكون إحداهما فعالة بينما يتم تحديث الأخرى، مما يتيح التبديل الفوري والعودة السريعة للنسخة السابقة عند حدوث مشاكل.

## أين تسمعه؟

في النقاشات المتعلقة بإدارة الإصدارات، وخطوط أنابيب النشر المستمر (CI/CD)، والبنية التحتية ذات التوافر العالي.

## أمثلة

- We use Blue-Green Deployment to ensure zero downtime during our releases.
  - نستخدم Blue-Green Deployment لضمان عدم توقف الخدمة أثناء إطلاق التحديثات.
- If the new version has a bug, we can quickly switch traffic back to the old environment.
  - إذا احتوت النسخة الجديدة على خطأ برمجي، يمكننا تحويل حركة المرور بسرعة إلى البيئة القديمة.

## خطأ شائع

الاعتقاد بأن Blue-Green Deployment هي مجرد بيئة تجريبية (Staging)؛ الهدف الأساسي منها هو وجود بيئتين جاهزتين للإنتاج فعلياً لتسهيل عملية التبديل بينهما دون انقطاع.
