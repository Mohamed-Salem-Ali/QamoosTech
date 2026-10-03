---
id: middleware
category: web-apis
level: intermediate
related: [request-response, dependency-injection]
term: "Middleware"
translation: "برمجية وسيطة"
pronunciation: "ميدلوير"
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
