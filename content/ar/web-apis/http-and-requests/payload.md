---
id: payload
category: web-apis
subcategory: http-and-requests
level: intermediate
related: [request-response, dto]
term: "Payload"
translation: "الحمولة (البيانات المرسلة)"
pronunciation: "بايلود"
keywords: ["البيانات الفعلية داخل الطلب","محتوى جسم الطلب","معنى كلمة بايلود","البيانات المرسلة في الـ api","ماذا يوجد داخل الطلب","الفرق بين الجسم والحمولة","البيانات الأساسية للرسالة","محتوى الـ webhook","تعريف الحمولة البرمجية","البيانات دون الترويسات","البيانات المفيدة في الطلب","معنى payload في البرمجة","actual data in api request","what is inside http body","data sent in webhook","useful business data","api request content","meaning of payload","request body vs payload","data without headers","api response content","inspecting sent data","payload definition","transported data package"]
---
## التعريف

البيانات الفعلية داخل الطلب أو الاستجابة، دون الترويسات والتفاصيل التقنية المحيطة بها.

## أين تسمعه؟

وثائق الـ API، والـ webhooks، وتتبع الأخطاء («ماذا يوجد في الـ payload؟»).

## أمثلة

- The webhook payload contains the order id and the status.
  - يحتوي payload الـ webhook على رقم الطلب والحالة.
- The payload is too large, so the request fails.
  - الـ payload كبير جدًا، لذلك يفشل الطلب.

## خطأ شائع

تسجيل الـ payload كاملًا. قد يحتوي على كلمات مرور أو بيانات شخصية لا يجوز حفظها.

## لا تخلطه مع

يتم الخلط غالباً بين الـ payload وجسم الطلب (request body)، ولكن بينما يعتبر الـ body وعاء النقل في بروتوكول HTTP، يشير الـ payload تحديداً إلى بيانات العمل المفيدة التي يتم تسليمها.

## قلها في العمل

- Let's check the network tab to see what payload the frontend is sending to the server.
  - دعنا نتحقق من تبويب الشبكة لمعرفة الـ payload الذي ترسله واجهة المستخدم إلى الخادم.
- Please ensure the payload is validated against the schema before processing the database transaction.
  - يرجى التأكد من التحقق من الـ payload مقابل الـ schema قبل معالجة معاملة قاعدة البيانات.
