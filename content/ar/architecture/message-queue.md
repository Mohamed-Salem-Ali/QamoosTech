---
id: message-queue
category: architecture
level: intermediate
related: [event-driven, idempotency]
term: "Message Queue"
translation: "طابور الرسائل"
pronunciation: "ميسيج كيو"
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

## خطأ شائع

افتراض أن كل رسالة تصل مرة واحدة تمامًا. قد تصل مرتين، لذلك يجب أن تكون المعالجات idempotent.
