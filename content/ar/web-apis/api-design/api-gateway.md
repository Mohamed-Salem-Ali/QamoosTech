---
id: api-gateway
category: web-apis
subcategory: api-design
level: intermediate
related: [monolith-vs-microservices, load-balancer, reverse-proxy]
term: "API Gateway"
translation: "بوابة واجهة البرمجة"
pronunciation: "إيه بي آي جيت واي"
keywords: ["نقطة دخول موحدة للخدمات","بوابة إدارة طلبات البرمجيات","توجيه الطلبات للخدمات المصغرة","إدارة مركزية لطلبات الـ api","خادم وسيط للخدمات المصغرة","بوابة الربط البرمجي","إيه بي آي جيت واي","تنظيم الاتصال بين الخدمات","بوابة توجيه الطلبات البرمجية","مركز التحكم في طلبات النظام","single entry point for services","microservices traffic router","manage api requests centrally","centralized authentication and rate limiting","api management server","routing requests to microservices","unified api access layer","gateway for backend services","api proxy for microservices","handle cross cutting concerns"]
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
- The gateway checks the API key once, then forwards the request to the orders service.
  - تتحقق البوابة من مفتاح API مرة واحدة، ثم تمرّر الطلب إلى خدمة الطلبات.

## خطأ شائع

الخلط بين الـ API Gateway وموازن الأحمال (Load Balancer)؛ فبينما يوزع موازن الأحمال الطلبات على نسخ متطابقة من الخدمة، يقوم الـ API Gateway بتوجيه الطلبات إلى خدمات مختلفة بناءً على مسار الطلب أو منطق برمجى محدد.

## لا تخلطه مع

الخلط بين الـ API Gateway والـ Reverse Proxy؛ فبينما يتعامل الـ Reverse Proxy عادةً مع موازنة الأحمال والأمان لخادم واحد أو مجموعة خوادم، يوفر الـ API Gateway ميزات إضافية مثل تحويل الطلبات، وترجمة البروتوكولات، والتوجيه المعقد للخدمات المصغرة.

## قلها في العمل

- Let's check if the API Gateway is correctly forwarding the headers to our internal services.
  - دعونا نتحقق مما إذا كان الـ API Gateway يقوم بتمرير الترويسات (headers) بشكل صحيح إلى خدماتنا الداخلية.
- I have updated the API Gateway configuration to include the new endpoint for the payment service.
  - لقد قمت بتحديث إعدادات الـ API Gateway لتشمل نقطة النهاية (endpoint) الجديدة الخاصة بخدمة الدفع.
