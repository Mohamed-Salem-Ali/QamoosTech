---
id: json-schema
category: web-apis
level: intermediate
related: [payload, schema, restful-api]
term: "JSON Schema"
pronunciation: "جايسون سكيما"
keywords: ["التحقق من صحة بيانات جايسون","قواعد هيكل بيانات جيسون","مخطط التحقق من ملفات جيسون","التاكد من تطابق بيانات جيسون","تحديد هيكل طلبات اي بي آي","التحقق من صحة المدخلات","مخطط بيانات جيسون","فحص هيكل ملفات جيسون","validate json payload structure","json data validation rules","check json format requirements","json schema validator","define json object structure","validate api request body","json structure definition language","json validation schema","enforce json schema rules"]
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

## لا تخلطه مع

غالبًا ما يتم الخلط بين JSON Schema و OpenAPI، ولكن في حين تتحقق JSON Schema من هيكل مستند JSON واحد، فإن OpenAPI يصف واجهات RESTful كاملة بما في ذلك نقاط النهاية والطرق والاستجابات.

## قلها في العمل

- Can we update the JSON Schema to make the email field optional for this endpoint?
  - هل يمكننا تحديث الـ JSON Schema لجعل حقل البريد الإلكتروني اختيارياً لنقطة النهاية هذه؟
- Please find attached the updated JSON Schema for the user profile registration payload.
  - تجدون مرفقاً الـ JSON Schema المُحدّث الخاص ببيانات تسجيل الملف الشخصي للمستخدم.
