---
id: request-response
category: web-apis
level: beginner
related: [client-vs-server, status-code]
term: "Request / Response"
translation: "الطلب والاستجابة"
pronunciation: "ريكويست / ريسبونس"
keywords: ["نمط التواصل بين العميل والخادم","كيفية إرسال واستقبال البيانات","دورة الطلب والاستجابة","آلية عمل الويب الأساسية","معالجة طلبات الخادم","فحص حركة الشبكة في المتصفح","الاستعلام والرد من الخادم","تبادل البيانات بين العميل والخادم","ريكويست وريسبونس","فهم دورة حياة الطلب","client server communication pattern","how browser talks to server","api call and return","sending data to server","getting server response back","http message exchange","network request lifecycle","request response cycle","check network traffic logs","client server interaction model"]
---
## التعريف

النمط الأساسي للويب: يرسل العميل طلبًا، فيعيد الخادم استجابة تحتوي على بيانات وحالة.

## أين تسمعه؟

وثائق الـ API، وتتبع الأخطاء في تبويب Network بالمتصفح، والسجلات.

## أمثلة

- The response took 3 seconds, so the page felt slow.
  - استغرقت الاستجابة 3 ثوانٍ، فبدت الصفحة بطيئة.
- Check the request body in the Network tab.
  - افحص محتوى الطلب في تبويب Network.

## خطأ شائع

الخلط بين الاثنين عند الإبلاغ عن خطأ. وضّح هل المشكلة فيما أرسلتَه أم فيما عاد إليك.

## قلها في العمل

- Let us check the payload of this request and see what response the server returns.
  - دعنا نتحقق من حمولة هذا الطلب (payload) ونرى الاستجابة التي يعيدها الخادم.
- Please attach the request headers and the response logs to the Jira ticket.
  - يرجى إرفاق ترويسات الطلب (headers) وسجلات الاستجابة بتذكرة Jira.
