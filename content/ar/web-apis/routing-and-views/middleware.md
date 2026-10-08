---
id: middleware
category: web-apis
subcategory: routing-and-views
level: intermediate
related: [request-response, dependency-injection, wsgi-asgi]
term: "Middleware"
translation: "برمجية وسيطة"
pronunciation: "ميدلوير"
keywords: ["برمجية وسيطة","ميدلوير","كود بين الطلب والاستجابة","فحص الطلب قبل تنفيذه","معالجة الطلبات الواردة مسبقا","دالة التحقق من الصلاحيات","تسجيل الطلبات في الخادم","الوسيط بين الروتر والكونترولر","code between request and response","handle authentication before route logic","express next function helper","log every incoming api request","intercept requests before controller","http request pipeline handler","custom request validation wrapper","midleware","meddleware"]
---
## التعريف

شيفرة تعمل بين استقبال الطلب وإرسال الاستجابة، وتُستخدم لأمور مثل التسجيل والمصادقة ومعالجة الأخطاء.

## أين تسمعه؟

نقاشات الـ backend في Express وNestJS وDjango وNext.js.

## أمثلة

- Add a middleware that logs every request.
  - أضف middleware يسجّل كل طلب.
- The auth middleware rejects requests without a valid token.
  - يرفض middleware المصادقة الطلبات التي ليس معها token صالح.

## خطأ شائع

في Express، نسيان استدعاء `next()`. عندها يظل الطلب معلقًا إلى الأبد.

## لا تخلطه مع

غالباً ما يتم الخلط بين الـ Middleware والـ Interceptors؛ فبينما يتعامل كلاهما مع الطلبات، يكون الـ Middleware عادةً جزءاً من مسار الطلب الأساسي في إطار العمل، بينما تُستخدم الـ Interceptors غالباً لتعديل البيانات أو التعامل مع الاستجابات على مستوى أكثر دقة أو تخصيصاً للخدمات.

## قلها في العمل

- We should add a new middleware to handle rate limiting for all incoming API calls.
  - يجب أن نضيف middleware جديداً للتحكم في معدل الطلبات لجميع استدعاءات الـ API الواردة.
- I have implemented a custom middleware to validate the request headers before processing the main logic.
  - لقد قمت بتنفيذ middleware مخصص للتحقق من ترويسات الطلب قبل معالجة المنطق الأساسي.
