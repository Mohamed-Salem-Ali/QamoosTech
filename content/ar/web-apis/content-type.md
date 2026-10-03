---
id: content-type
category: web-apis
level: beginner
related: [http-header, request-response, payload]
term: "Content-Type"
pronunciation: "كونتنت تايب"
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

## خطأ شائع

الاعتقاد بأن الخادم سيحدد صيغة البيانات تلقائياً دون الحاجة لتحديد ترويسة `Content-Type` بوضوح.
