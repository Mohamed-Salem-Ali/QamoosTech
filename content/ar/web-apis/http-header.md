---
id: http-header
category: web-apis
level: intermediate
related: [request-response, cookie]
term: "HTTP Header"
translation: "ترويسة HTTP"
pronunciation: "إتش تي تي بي هيدر"
---
## التعريف

معلومات إضافية تُرسل مع الطلب أو الاستجابة، مثل نوع المحتوى أو رمز التفويض.

## أين تسمعه؟

وثائق الـ API، والمصادقة، والتخزين المؤقت، ومشكلات CORS.

## أمثلة

- Send the token in the `Authorization` header.
  - أرسل الـ token في ترويسة `Authorization`.
- Set `Content-Type: application/json` or the server will not parse the body.
  - اضبط `Content-Type: application/json` وإلا لن يقرأ الخادم المحتوى.

## خطأ شائع

نسيان أن العميل يستطيع قراءة الترويسات وتغييرها. لا تعتمد عليها وحدها في الأمان.
