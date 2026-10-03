---
id: cors
category: web-apis
level: intermediate
related: [http-header, client-vs-server]
term: "CORS"
translation: "مشاركة الموارد بين النطاقات"
pronunciation: "كورس"
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

## خطأ شائع

حلّها بالسماح بكل النطاقات (`*`) في بيئة الإنتاج. هذا يزيل حماية قد تحتاجها.
