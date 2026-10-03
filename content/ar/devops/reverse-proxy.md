---
id: reverse-proxy
category: devops
level: intermediate
related: [load-balancer, http-header]
term: "Reverse Proxy"
translation: "وكيل عكسي"
pronunciation: "ريفيرس بروكسي"
---
## التعريف

خادم يقف أمام تطبيقك، يستقبل طلبات المستخدمين ويمررها إلى التطبيق. ويمكنه أيضًا التعامل مع HTTPS والتخزين المؤقت.

## أين تسمعه؟

إعدادات Nginx وحل مشكلات الإنتاج («502 Bad Gateway»).

## أمثلة

- Nginx works as a reverse proxy in front of our Node app.
  - يعمل Nginx كـ reverse proxy أمام تطبيق Node لدينا.
- The 502 error means the proxy cannot reach the app.
  - الخطأ 502 يعني أن الـ proxy لا يستطيع الوصول إلى التطبيق.

## خطأ شائع

الخلط بينه وبين forward proxy. الـ forward proxy أمام المستخدمين، والـ reverse proxy أمام الخوادم.

## لا تخلطه مع

غالباً ما يتم الخلط بين الـ reverse proxy والـ load balancer؛ فبينما يتعامل الـ reverse proxy مع الطلبات لخادم معين، يقوم الـ load balancer بتوزيع حركة المرور على عدة خوادم لضمان توفر الخدمة.

## قلها في العمل

- We should configure the reverse proxy to handle SSL termination so our app doesn't have to deal with certificates.
  - يجب أن نقوم بضبط الـ reverse proxy ليتولى إنهاء اتصال SSL حتى لا يضطر تطبيقنا للتعامل مع الشهادات.
- I have updated the reverse proxy configuration to route all API requests to the new microservice instance.
  - لقد قمت بتحديث إعدادات الـ reverse proxy لتوجيه جميع طلبات الـ API إلى نسخة الخدمة المصغرة الجديدة.
