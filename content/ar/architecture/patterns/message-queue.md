---
id: message-queue
category: architecture
subcategory: patterns
level: intermediate
related: [event-driven, idempotency]
term: "Message Queue"
translation: "طابور الرسائل"
pronunciation: "ميسيج كيو"
keywords: ["نظام معالجة المهام الخلفية","طريقة تنفيذ المهام لاحقا","ترتيب تنفيذ العمليات برمجيا","تأجيل معالجة الطلبات","نظام توزيع المهام","ميسيج كيو","طابور تنفيذ الأوامر","آلية معالجة الرسائل المؤجلة","فصل الخدمات عن بعضها","تنظيم تدفق البيانات","طابور الطلبات المعلقة","background job processing","handle tasks asynchronously","buffer for incoming requests","decouple services with queues","task distribution system","worker queue pattern","message broker service","queueing system for jobs","process tasks in background","event processing queue","msg queue","async task runner"]
---
## التعريف

نظام يخزّن المهام أو الرسائل ليعالجها جزء آخر من التطبيق لاحقًا واحدة تلو الأخرى، خارج طلب المستخدم.

## أين تسمعه؟

المهام الخلفية، والبريد، وإنشاء التقارير، وRabbitMQ أو SQS.

## أمثلة

- We send the report to a queue instead of generating it during the request.
  - نرسل التقرير إلى queue بدل إنشائه أثناء الطلب.
- The queue has 5,000 waiting messages.
  - في الـ queue خمسة آلاف رسالة تنتظر.
- The queue holds the order emails, and a worker sends them one by one.
  - يحتفظ الطابور برسائل الطلبات، ويرسلها عامل واحدة تلو الأخرى.

## خطأ شائع

افتراض أن كل رسالة تصل مرة واحدة تمامًا. قد تصل مرتين، لذلك يجب أن تكون المعالجات idempotent.

## لا تخلطه مع

يوصّل طابور الرسائل المهام إلى العمال للمعالجة، بينما يبث نظام النشر والاشتراك كل رسالة إلى جميع المشتركين النشطين في نفس الوقت.

## قلها في العمل

- Let's push these notifications to the message queue so they don't block the main API response.
  - دعنا نرسل هذه الإشعارات إلى طابور الرسائل حتى لا تعطل استجابة الواجهة البرمجية الرئيسية.
- Please ensure the consumer handling this message queue can gracefully recover if the database goes down.
  - يرجى التأكد من أن المستهلك الذي يعالج طابور الرسائل هذا يمكنه التعافي بشكل سلس إذا توقفت قاعدة البيانات.
