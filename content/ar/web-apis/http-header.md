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
  - اضبط `Content-Type: application/json` وإلا لن يحلّل الخادم المحتوى.

## خطأ شائع

نسيان أن العميل يستطيع قراءة الترويسات وتغييرها. لا تعتمد عليها وحدها في الأمان.

## لا تخلطه مع

غالباً ما يتم الخلط بين ترويسة HTTP وجسم الطلب (HTTP body)، حيث تحتوي الترويسة على بيانات وصفية حول الطلب أو الاستجابة، بينما يحتوي الجسم على البيانات الفعلية التي يتم نقلها.

## قلها في العمل

- Can you check the network tab and see if the custom HTTP header is being sent correctly in the request?
  - هل يمكنك التحقق من تبويب الشبكة ومعرفة ما إذا كانت ترويسة HTTP المخصصة تُرسل بشكل صحيح في الطلب؟
- Please update the API documentation to specify which HTTP header is required for the authentication token.
  - يرجى تحديث وثائق الـ API لتحديد ترويسة HTTP المطلوبة لرمز المصادقة.
