---
id: api-versioning
category: web-apis
level: intermediate
related: [endpoint, restful-api, request-response]
term: "API Versioning"
pronunciation: "إيه بي آي فيرجنينج"
---

## التعريف

هي ممارسة إدارة التغييرات في واجهة برمجة التطبيقات من خلال تخصيص إصدارات فريدة لكل تحديث. يتيح ذلك للمطورين إدخال تحسينات أو تغييرات جذرية دون تعطيل عمل التطبيقات التي تعتمد على الإصدارات السابقة.

## أين تسمعه؟

أثناء التخطيط للهندسة البرمجية، في اجتماعات تطوير الـ backend، وعند تحديث وثائق الـ APIs.

## أمثلة

- We need to implement API versioning in the URL, such as `/v1/users` and `/v2/users`.
  - نحتاج إلى تطبيق API versioning في الرابط، مثل `/v1/users` و `/v2/users`.
- The team decided to use a custom HTTP header for API versioning instead of query parameters.
  - قرر الفريق استخدام HTTP header مخصص لـ API versioning بدلاً من الـ query parameters.

## خطأ شائع

الاعتقاد بأن كل تغيير بسيط يتطلب إصداراً جديداً، مما يؤدي إلى تعقيد غير ضروري وصعوبة في صيانة الـ API.
