---
id: pub-sub
category: architecture
level: intermediate
related: [event-driven, message-queue]
term: "Pub/Sub"
pronunciation: "باب-ساب"
---

## التعريف

نمط تصميم لتبادل الرسائل يقوم فيه المرسل (Publisher) بإرسال الرسائل إلى موضوع معين (Topic) دون معرفة هوية المستلمين (Subscribers). يقوم المستلمون بالاشتراك في هذه المواضيع لتصلهم الرسائل تلقائياً بمجرد نشرها.

## أين تسمعه؟

في نقاشات تصميم الأنظمة الموزعة (Distributed Systems) وعند اختيار البنية التحتية لتبادل الرسائل بين الخدمات المصغرة (Microservices).

## أمثلة

- We use Pub/Sub to decouple our user service from the email notification system.
  - نستخدم Pub/Sub لفصل خدمة المستخدم عن نظام إشعارات البريد الإلكتروني.
- The analytics engine subscribes to the click-stream topic to process user events in real-time.
  - يشترك محرك التحليلات في موضوع تدفق النقرات لمعالجة أحداث المستخدم لحظياً.

## خطأ شائع

الاعتقاد بأن Pub/Sub يضمن وصول الرسائل أو ترتيبها بشكل تلقائي، حيث أن العديد من تطبيقاته تعمل بشكل غير متزامن (Asynchronous) ولا تتابع ما إذا كان المستلم قد نجح في معالجة الرسالة أم لا.

## لا تخلطه مع

غالباً ما يتم الخلط بين نمط Pub/Sub وطابور الرسائل (Message Queue)، ولكن في حين يقوم الطابور عادةً بتسليم كل رسالة لمستهلك واحد، فإن Pub/Sub يبث الرسائل لعدة مشتركين في نفس الوقت.

## قلها في العمل

- Can we use Pub/Sub here to broadcast updates to all connected microservices at once?
  - هل يمكننا استخدام Pub/Sub هنا لبث التحديثات لجميع الخدمات المصغرة المتصلة دفعة واحدة؟
- Please ensure that the new event publisher is properly registered in the Pub/Sub topic before merging the pull request.
  - الرجاء التأكد من تسجيل ناشر الأحداث الجديد بشكل صحيح في موضوع Pub/Sub قبل دمج طلب السحب.
