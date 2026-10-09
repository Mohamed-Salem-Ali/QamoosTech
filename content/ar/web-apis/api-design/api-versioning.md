---
id: api-versioning
category: web-apis
subcategory: api-design
level: intermediate
related: [endpoint, restful-api, request-response]
term: "API Versioning"
translation: "إدارة إصدارات واجهة البرمجة"
pronunciation: "إيه بي آي فيرجنينج"
keywords: ["إدارة التغييرات في واجهة برمجة التطبيقات","تحديث الـ api بدون تعطيل العملاء","إضافة إصدارات للـ api","إصدارات الـ endpoints المختلفة","تغيير إصدار الـ api في الرابط","استراتيجية إصدارات الـ api","دعم عدة إصدارات للـ api","اي بي آي فيرجنينج","manage api changes safely","handle breaking api updates","url versioning for endpoints","add v1 v2 to api","api versioning strategy","versioning rest apis","api header versioning","support multiple api versions"]
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
- Clients on v1 keep working while the new fields ship under v2.
  - يواصل العملاء على الإصدار v1 عملهم، بينما تُطلق الحقول الجديدة ضمن v2.

## خطأ شائع

الاعتقاد بأن كل تغيير بسيط يتطلب إصداراً جديداً، مما يؤدي إلى تعقيد غير ضروري وصعوبة في صيانة الـ API.

## قلها في العمل

- Let us check how we are handling API versioning for this new endpoint before we merge the code.
  - دعنا نتحقق من كيفية التعامل مع الـ API versioning لهذا الـ endpoint الجديد قبل أن نقوم بدمج الكود.
- Please update the documentation to reflect the new API versioning strategy we agreed on.
  - يرجى تحديث الوثائق لتعكس استراتيجية الـ API versioning الجديدة التي اتفقنا عليها.
