---
id: blue-green-deployment
category: devops
level: intermediate
related: [ci-cd, deployment, rollback]
term: "Blue-Green Deployment"
pronunciation: "بلو-جرين ديبلويمينت"
keywords: ["النشر بدون انقطاع الخدمة","استراتيجية النشر الثنائي","التبديل بين بيئتين متطابقتين","نشر التحديثات بدون توقف","التراجع السريع عن الإصدار","النشر بين بيئتي إنتاج","بلو جرين ديبلويمينت","استراتيجية بلو جرين","zero downtime deployment strategy","switch traffic between two environments","instant rollback deployment method","two identical production environments","blue green release","deploy without downtime","fast environment switching","active idle deployment","blue green deploy"]
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

## لا تخلطه مع

الفرق بين Blue-Green Deployment و Canary Deployment هو أن الأولى تعتمد على تحويل كامل حركة المرور بين بيئتين متطابقتين، بينما تعتمد الثانية على تحويل حركة المرور تدريجياً لمجموعة صغيرة من المستخدمين لاختبار النسخة الجديدة بأمان.

## قلها في العمل

- Let's switch to the green environment now that the smoke tests have passed.
  - لنقم بالتبديل إلى البيئة الخضراء (green environment) الآن بعد أن اجتازت اختبارات الدخان بنجاح.
- We have successfully deployed the update to the idle environment and are ready to route traffic to it.
  - لقد قمنا بنشر التحديث بنجاح في البيئة الخاملة ونحن مستعدون لتوجيه حركة المرور إليها.
