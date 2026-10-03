---
id: json-schema
category: web-apis
level: intermediate
related: [payload, schema, restful-api]
term: "JSON Schema"
pronunciation: "جايسون سكيما"
---

## التعريف

هو لغة وصفية تُستخدم لتحديد هيكل بيانات JSON والتحقق من صحتها. يحدد هذا المعيار الحقول المطلوبة، أنواع البيانات، والقيود لضمان توافق كائن JSON مع القواعد المحددة.

## أين تسمعه؟

في توثيق واجهات برمجة التطبيقات (APIs)، ومنطق التحقق من صحة البيانات، وملفات الإعدادات في الخدمات الخلفية.

## أمثلة

- We use JSON Schema to validate the incoming payload in our API endpoints.
  - نستخدم JSON Schema للتحقق من صحة البيانات الواردة (payload) في نقاط النهاية الخاصة بـ API.
- The service will reject the request if the JSON structure does not match the defined schema.
  - ستقوم الخدمة برفض الطلب إذا كان هيكل JSON لا يطابق المخطط (schema) المحدد.

## خطأ شائع

الاعتقاد بأن JSON Schema هو تنسيق بيانات بحد ذاته؛ في الواقع هو مجموعة من القواعد المستخدمة لوصف هيكل بيانات JSON أخرى، وليس البيانات نفسها.
