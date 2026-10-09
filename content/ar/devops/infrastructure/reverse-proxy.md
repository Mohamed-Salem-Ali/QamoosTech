---
id: reverse-proxy
category: devops
subcategory: infrastructure
level: intermediate
related: [load-balancer, http-header, development-server, forward-proxy]
term: "Reverse Proxy"
translation: "وكيل عكسي"
pronunciation: "ريفيرس بروكسي"
keywords: ["خادم امام التطبيق لتوجيه الطلبات","حل مشكلة 502 bad gateway","توجيه الطلبات الى السيرفر الخلفي","وكيل عكسي","الفرق بين الوكيل الامامي والعكسي","ادارة شهادات ssl على السيرفر","اعدادات سيرفر nginx","سيرفر لاستقبال طلبات المستخدمين","server in front of app","handle https certificates server","route requests to backend","fix 502 bad gateway","nginx routing configuration","ssl termination server","forward vs reverse proxy","proxy server for backend","distribute traffic to servers"]
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
- The reverse proxy terminates HTTPS and forwards plain requests to the app on port 3000.
  - ينهي الوكيل العكسي HTTPS ويمرّر الطلبات العادية إلى التطبيق على المنفذ 3000.

## خطأ شائع

الخلط بينه وبين forward proxy. الـ forward proxy أمام المستخدمين، والـ reverse proxy أمام الخوادم.

## لا تخلطه مع

الوكيل العكسي (reverse proxy) باب أمامي لخادم واحد أو أكثر: ينهي HTTPS ويستطيع التخزين المؤقت ويعيد توجيه الطلبات. أما موزّع الأحمال فوكيل عكسي مهمته الأساسية توزيع الطلبات على عدة خوادم متطابقة.

## قلها في العمل

- We should configure the reverse proxy to handle SSL termination so our app doesn't have to deal with certificates.
  - يجب أن نقوم بضبط الـ reverse proxy ليتولى إنهاء اتصال SSL حتى لا يضطر تطبيقنا للتعامل مع الشهادات.
- I have updated the reverse proxy configuration to route all API requests to the new microservice instance.
  - لقد قمت بتحديث إعدادات الـ reverse proxy لتوجيه جميع طلبات الـ API إلى نسخة الخدمة المصغرة الجديدة.
