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
