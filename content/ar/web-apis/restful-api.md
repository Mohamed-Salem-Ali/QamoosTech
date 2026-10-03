---
id: restful-api
category: web-apis
level: intermediate
related: [endpoint, status-code, graphql]
term: "RESTful API"
translation: "واجهة REST"
pronunciation: "ريستفل إيه بي آي"
---
## التعريف

أسلوب لبناء الـ API يكون فيه لكل شيء (مستخدم، طلب) عنوانه الخاص، وتتعامل معه بطرق HTTP القياسية (GET وPOST وPUT وDELETE).

## أين تسمعه؟

تصميم الأنظمة، ومقابلات الـ backend، ووثائق الـ API.

## أمثلة

- The mobile app talks to a RESTful API that returns JSON.
  - يتواصل تطبيق الجوال مع واجهة REST تعيد JSON.
- Use `POST` to create and `DELETE` to remove a resource.
  - استخدم `POST` للإنشاء و`DELETE` للحذف.

## خطأ شائع

تسمية كل API تعمل عبر HTTP بأنها «REST». كثير منها مجرد «HTTP API» ولا يتبع قواعد REST مثل استخدام الأفعال الصحيحة.

## لا تخلطه مع

غالبًا ما يتم الخلط بين واجهة REST وGraphQL، ولكن بينما تستخدم REST نقاط نهاية متعددة وطرق HTTP القياسية، تستخدم GraphQL نقطة نهاية واحدة وتسمح للعملاء بطلب البيانات التي يحتاجونها بالضبط.

## قلها في العمل

- Let's make sure our new RESTful API endpoints follow standard naming conventions before we publish the documentation.
  - دعونا نتأكد من أن نقاط نهاية واجهة REST الجديدة تتبع اصطلاحات التسمية القياسية قبل أن ننشر الوثائق.
- Please update the authentication headers in this RESTful API pull request so the frontend tests can pass successfully.
  - يرجى تحديث ترويسات المصادقة في طلب الدمج الخاص بواجهة REST هذه لكي تنجح اختبارات الواجهة الأمامية بنجاح.
