---
id: cors
category: web-apis
subcategory: http-and-requests
level: intermediate
related: [http-header, client-vs-server, cors-preflight]
term: "CORS"
translation: "مشاركة الموارد بين النطاقات"
pronunciation: "كورس"
keywords: ["خطأ منع الطلبات بين النطاقات","حل مشكلة حظر المتصفح للـ api","السماح بنطاق معين في الخادم","مشاركة الموارد بين النطاقات","خطأ blocked by cors policy","السماح للواجهة الأمامية بالاتصال","إعدادات أمان المتصفح للـ api","مشكلة الاتصال بين نطاقات مختلفة","blocked by cors policy error","browser blocks api request","allow domain in backend","cross origin resource sharing","fix api access from frontend","http headers for domains","allow origin wildcard error","browser security policy restriction"]
---
## التعريف

قاعدة في المتصفح تمنع صفحة ويب من استدعاء API موقع آخر ما لم يسمح الخادم بذلك عبر ترويسات خاصة.

## أين تسمعه؟

من أكثر أخطاء الواجهة شيوعًا: «blocked by CORS policy».

## أمثلة

- The request is blocked by CORS because the server does not allow our domain.
  - الطلب محجوب بسبب CORS لأن الخادم لا يسمح بنطاقنا.
- Add our frontend URL to the allowed origins on the backend.
  - أضف رابط الواجهة إلى النطاقات المسموح بها في الـ backend.
- The browser blocked the response until the API added the Access-Control-Allow-Origin header.
  - حجب المتصفح الرد حتى أضافت الواجهة ترويسة Access-Control-Allow-Origin.

## خطأ شائع

حلّها بالسماح بكل النطاقات (`*`) في بيئة الإنتاج. هذا يزيل حماية قد تحتاجها.

## لا تخلطه مع

غالباً ما يتم الخلط بين CORS و CSRF؛ فبينما يعد CORS آلية أمان في المتصفح تقيد الوصول إلى الموارد عبر النطاقات، فإن CSRF هو هجوم يخدع المستخدم لتنفيذ إجراءات غير مرغوب فيها على موقع هو مصادق عليه فيه.

## قلها في العمل

- I'm getting a CORS error when calling the API from my local environment, so we might need to update the allowed origins.
  - أواجه خطأ CORS عند استدعاء الـ API من بيئة العمل المحلية، لذا قد نحتاج إلى تحديث النطاقات المسموح بها.
- Could you please verify if the backend configuration allows our staging domain in the CORS policy settings?
  - هل يمكنك التحقق مما إذا كان إعداد الـ backend يسمح بنطاق بيئة الاختبار (staging) في إعدادات سياسة CORS؟
