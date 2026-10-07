---
id: ssl-tls
category: web-apis
subcategory: http-and-requests
level: intermediate
related: [encryption, authentication-vs-authorization]
term: "SSL / TLS"
translation: "طبقة المقابس الآمنة / أمان طبقة النقل"
pronunciation: "إس-إس-إل / تي-إل-إس"
keywords: ["تشفير البيانات بين المتصفح والخادم","تأمين الموقع بشهادة الحماية","بروتوكول التشفير الآمن","تجديد شهادة الموقع الإلكتروني","حل مشكلة خطأ الشهادة الأمنية","طبقة المقابس الآمنة","أمان طبقة النقل","إعداد شهادات الأمان للموقع","حماية الاتصال بين العميل والخادم","encrypt data between client and server","secure website with https certificate","fix err ssl protocol error","website security certificate configuration","tls encryption protocol","ssl certificate renewal","secure connection between browser and server","http traffic encryption","transport layer security","secure sockets layer"]
---

## التعريف

بروتوكولات أمان تقوم بتشفير البيانات المنقولة بين العميل والخادم، مما يحميها من الاعتراض والتلاعب.

## أين تسمعه؟

أثناء إعداد الخوادم، أو مراجعات الأمان، أو تكوين شهادات النطاق، أو عند إصلاح أخطاء الاتصال الآمن.

## أمثلة

- The server is configured to redirect all incoming HTTP traffic to HTTPS using SSL / TLS.
  - تم تكوين الخادم لإعادة توجيه حركة المرور الواردة عبر HTTP إلى HTTPS باستخدام SSL / TLS.
- We need to renew the SSL / TLS certificate before it expires next month.
  - نحتاج إلى تجديد شهادة SSL / TLS قبل انتهاء صلاحيتها الشهر القادم.

## خطأ شائع

الاعتقاد بأن SSL لا يزال يُستخدم فعلياً، في حين أنه تم استبداله بالكامل بخليفته الآمن TLS.

## لا تخلطه مع

غالباً ما يتم الخلط بين SSL/TLS و HTTPS؛ فبينما يعد SSL/TLS بروتوكول التشفير الأساسي الذي يؤمن الاتصال، فإن HTTPS هو بروتوكول التطبيق الفعلي الذي يستخدم SSL/TLS لنقل البيانات بشكل آمن.

## قلها في العمل

- We should check if the load balancer is correctly terminating the SSL/TLS connection before passing the traffic to our internal service.
  - يجب أن نتحقق مما إذا كان موازن الأحمال يقوم بإنهاء اتصال SSL/TLS بشكل صحيح قبل تمرير حركة المرور إلى خدمتنا الداخلية.
- Please ensure the server configuration enforces modern SSL/TLS versions to comply with our current security policy.
  - يرجى التأكد من أن إعدادات الخادم تفرض إصدارات حديثة من SSL/TLS للامتثال لسياسة الأمان الحالية لدينا.
