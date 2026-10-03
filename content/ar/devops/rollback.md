---
id: rollback
category: devops
level: intermediate
related: [deployment, feature-flag]
term: "Rollback"
translation: "التراجع عن إصدار"
pronunciation: "رولباك"
---
## التعريف

العودة إلى الإصدار السابق السليم بعد إصدار سيئ.

## أين تسمعه؟

الحوادث وخطط الإصدار.

## أمثلة

- The release broke login, so we rolled back in two minutes.
  - تسبب الإصدار في تعطّل تسجيل الدخول، فتراجعنا خلال دقيقتين.
- Always have a rollback plan before you deploy.
  - احرص دائمًا على وجود خطة تراجع قبل النشر.

## خطأ شائع

نسيان أن migration قاعدة البيانات قد لا يكون قابلًا للعكس. خطّط لتغييرات البيانات بعناية.

## لا تخلطه مع

غالباً ما يتم الخلط بين التراجع (rollback) والتقدم (roll-forward)؛ فالتراجع يعيد النظام إلى حالة مستقرة سابقة، بينما التقدم يطبق إصلاحاً جديداً لحل المشكلة في الإصدار الحالي.

## قلها في العمل

- The new feature is causing too many errors, so let's perform a rollback to the previous build immediately.
  - الميزة الجديدة تسبب الكثير من الأخطاء، لنقم بإجراء تراجع (rollback) إلى الإصدار السابق فوراً.
- I have initiated a rollback of the production environment due to the critical memory leak identified in the latest deployment.
  - لقد بدأت عملية تراجع (rollback) لبيئة الإنتاج بسبب تسريب الذاكرة الحرج الذي تم اكتشافه في آخر عملية نشر.
