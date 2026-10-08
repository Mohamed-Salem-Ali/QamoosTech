---
id: content-type
category: web-apis
subcategory: http-and-requests
level: beginner
related: [http-header, request-response, payload]
term: "Content-Type"
translation: "نوع المحتوى"
pronunciation: "كونتنت تايب"
keywords: ["تحديد صيغة بيانات الطلب","ترويسة نوع المحتوى","تعريف نوع البيانات المرسلة","حل خطأ 415 في الـ API","تحديد تنسيق جسم الطلب","إخبار الخادم بنوع البيانات","الفرق بين كونتنت تايب وأكسيبت","ضبط صيغة الـ JSON في الطلب","ترويسة تعريف صيغة الملفات","كيفية تحديد نوع الوسائط","tell server data format","http header for media type","define request body type","specify json or form data","fix 415 unsupported media error","mime type header","set payload format header","how to define data type","request header for parsing","content type vs accept header"]
---

## التعريف

ترويسة HTTP تخبر الخادم أو العميل بصيغة البيانات الموجودة داخل جسم الطلب أو الاستجابة، مما يضمن قراءتها بالشكل الصحيح مثل JSON أو نص عادي.

## أين تسمعه؟

- في وثائق واجهات البرمجة تحت ترويسات الطلب
- عند إصلاح خطأ `415 Unsupported Media Type`
- عند إعداد طلبات الشبكة لإرسال بيانات بصيغة JSON

## أمثلة

- Set the `Content-Type` header to `application/json` before sending the request payload.
  - اضبط ترويسة `Content-Type` إلى `application/json` قبل إرسال بيانات الطلب.
- The server rejected the upload because the `Content-Type` did not match the expected image format.
  - رفض الخادم عملية الرفع لأن `Content-Type` لم يتطابق مع صيغة الصورة المتوقعة.
- The API returns 415 when the Content-Type is text/plain instead of application/json.
  - تُرجع الواجهة الرمز 415 حين يكون Content-Type هو text/plain بدل application/json.

## خطأ شائع

الاعتقاد بأن الخادم سيحدد صيغة البيانات تلقائياً دون الحاجة لتحديد ترويسة `Content-Type` بوضوح.

## لا تخلطه مع

غالباً ما يتم الخلط بين Content-Type و Accept؛ حيث يصف Content-Type تنسيق البيانات التي يتم إرسالها، بينما يخبر Accept الخادم بالتنسيق الذي يفضل العميل استلامه.

## قلها في العمل

- Hey, make sure you set the Content-Type to application/json in your fetch call, otherwise the API might throw a 415 error.
  - مرحباً، تأكد من ضبط Content-Type على application/json في طلب fetch الخاص بك، وإلا فقد يرسل الـ API خطأ 415.
- I have updated the request headers to include the correct Content-Type, which should resolve the parsing issues we encountered during testing.
  - لقد قمت بتحديث ترويسات الطلب لتتضمن Content-Type الصحيح، مما ينبغي أن يحل مشاكل المعالجة التي واجهناها أثناء الاختبار.
