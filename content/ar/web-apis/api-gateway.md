---
id: api-gateway
category: web-apis
level: intermediate
related: [monolith-vs-microservices, load-balancer, reverse-proxy]
term: "API Gateway"
pronunciation: "إيه بي آي جيت واي"
---

## التعريف

هو خادم يعمل كنقطة دخول موحدة للنظام، حيث يقوم بتوجيه طلبات العميل إلى الخدمة المصغرة (microservice) المناسبة. يقوم بمعالجة المهام المشتركة مثل التحقق من الهوية، وتحديد معدل الطلبات (rate limiting)، وتسجيل السجلات قبل تمرير الطلب.

## أين تسمعه؟

في اجتماعات تصميم بنية النظام، ونقاشات البنية التحتية للخدمات المصغرة.

## أمثلة

- We need to configure the API Gateway to route traffic to the new user service.
  - نحتاج إلى ضبط الـ API Gateway لتوجيه حركة البيانات إلى خدمة المستخدم الجديدة.
- The API Gateway handles all authentication checks so our microservices don't have to.
  - يقوم الـ API Gateway بمعالجة جميع عمليات التحقق من الهوية حتى لا تضطر الخدمات المصغرة للقيام بذلك.

## خطأ شائع

الخلط بين الـ API Gateway وموازن الأحمال (Load Balancer)؛ فبينما يوزع موازن الأحمال الطلبات على نسخ متطابقة من الخدمة، يقوم الـ API Gateway بتوجيه الطلبات إلى خدمات مختلفة بناءً على مسار الطلب أو منطق برمجى محدد.
