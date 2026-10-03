---
id: client-vs-server
category: web-apis
level: beginner
related: [request-response, endpoint]
term: "Client vs Server"
translation: "العميل والخادم"
pronunciation: "كلاينت مقابل سيرفر"
---
## التعريف

الـ *client* هو من يطلب (متصفح أو تطبيق جوال)، والـ *server* هو من يستقبل الطلب وينفّذ العمل ويرد.

## أين تسمعه؟

أي شرح لطريقة عمل الويب، ووثائق الـ API، وتقارير الأخطاء («هل المشكلة من العميل أم الخادم؟»).

## أمثلة

- The client sends a request and the server returns JSON.
  - يرسل العميل طلبًا ويعيد الخادم JSON.
- The validation runs on the client, but it must also run on the server.
  - التحقق يعمل في العميل، لكن يجب أن يعمل في الخادم أيضًا.

## خطأ شائع

الثقة في البيانات القادمة من العميل. يمكن للمستخدم التلاعب بالعميل، لذلك يجب أن يتحقق الخادم دائمًا.

## لا تخلطه مع

غالبًا ما يتم الخلط بين Client vs Server و Frontend vs Backend؛ فبينما يرتبطان ببعضهما، يشير الأول إلى بنية الشبكة في تبادل الطلبات، بينما يشير الثاني إلى الفصل بين واجهة المستخدم ومنطق العمل البرمجي.

## قلها في العمل

- We need to check if the data is being corrupted on the client side before it even reaches the server.
  - نحتاج للتحقق مما إذا كانت البيانات تتعرض للتلف في جهة العميل قبل أن تصل إلى الخادم.
- Please ensure that the server logs include the client IP address for better debugging of these failed requests.
  - يرجى التأكد من أن سجلات الخادم تتضمن عنوان IP الخاص بالعميل لتسهيل عملية تصحيح هذه الطلبات الفاشلة.
