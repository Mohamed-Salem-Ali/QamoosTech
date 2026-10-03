---
id: graceful-degradation
category: architecture
level: intermediate
related: [single-point-of-failure, health-check, rollback]
term: "Graceful Degradation"
pronunciation: "جريسفول ديجراديشن"
translation: "التدهور التدريجي"
---

## التعريف

هو نمط تصميم هندسي يسمح للنظام بالحفاظ على وظائفه الأساسية عند تعطل أحد المكونات أو الخدمات الخارجية، بدلاً من توقف التطبيق بالكامل.

## أين تسمعه؟

- في اجتماعات مراجعة التصميم الهندسي
- عند مناقشة موثوقية الأنظمة وقدرتها على التحمل
- أثناء تحليلات ما بعد الأعطال

## أمثلة

- If the recommendation service is down, the e-commerce app displays standard items instead of crashing.
  - إذا توقفت خدمة التوصيات، يعرض تطبيق التجارة الإلكترونية المنتجات العادية بدلاً من الانهيار.
- The web app hides advanced animations when the browser's performance drops.
  - يقوم تطبيق الويب بإخفاء الرسوم المتحركة المتقدمة عندما ينخفض أداء المتصفح.

## خطأ شائع

الخلط بينه وبين مفهوم fail-open، حيث يتعلق الأخير بالتحكم في الصلاحيات والأمان وليس بالوظائف العامة لتجربة المستخدم.
