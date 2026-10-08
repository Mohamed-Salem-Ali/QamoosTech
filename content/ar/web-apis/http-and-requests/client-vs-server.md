---
id: client-vs-server
category: web-apis
subcategory: http-and-requests
level: beginner
related: [request-response, endpoint]
term: "Client vs Server"
translation: "العميل والخادم"
pronunciation: "كلاينت مقابل سيرفر"
keywords: ["الفرق بين العميل والخادم","كيف يعمل الويب","الفرق بين كلاينت وسيرفر","من المسؤول عن الطلب","هيكلية الشبكة للويب","العميل والخادم في التطبيقات","الفرق بين الواجهة والخلفية","معمارية الطلب والاستجابة","difference between client and server","how web requests work","client vs server architecture","browser and backend communication","who handles the request","frontend and backend basics","client side vs server side","understanding web app structure"]
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
- The phone app is the client, and the payments service on our server does the actual charge.
  - تطبيق الهاتف هو العميل، وخدمة المدفوعات على خادمنا هي التي تنفّذ الخصم فعلياً.

## خطأ شائع

الثقة في البيانات القادمة من العميل. يمكن للمستخدم التلاعب بالعميل، لذلك يجب أن يتحقق الخادم دائمًا.

## لا تخلطه مع

غالبًا ما يتم الخلط بين Client vs Server و Frontend vs Backend؛ فبينما يرتبطان ببعضهما، يشير الأول إلى بنية الشبكة في تبادل الطلبات، بينما يشير الثاني إلى الفصل بين واجهة المستخدم ومنطق العمل البرمجي.

## قلها في العمل

- We need to check if the data is being corrupted on the client side before it even reaches the server.
  - نحتاج للتحقق مما إذا كانت البيانات تتعرض للتلف في جهة العميل قبل أن تصل إلى الخادم.
- Please ensure that the server logs include the client IP address for better debugging of these failed requests.
  - يرجى التأكد من أن سجلات الخادم تتضمن عنوان IP الخاص بالعميل لتسهيل عملية تصحيح هذه الطلبات الفاشلة.
