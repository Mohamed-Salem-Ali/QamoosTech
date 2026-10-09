---
id: competing-consumers
category: architecture
subcategory: patterns
level: intermediate
related: [message-queue, consumer-group, horizontal-scaling]
aliases: ["worker pool", "work queue"]
term: "Competing Consumers"
translation: "المستهلكون المتنافسون"
pronunciation: "كومبيتنج كونسيومرز"
keywords: ["عمال كثيرون وطابور واحد", "كل رسالة تُعالج مرة", "زيادة العمال", "معالجة المهام بالتوازي", "طابور العمل", "تقاسم الحمل", "many workers one queue", "each message handled once", "scale workers up", "parallel processing of jobs", "work queue", "share the load"]
---

## التعريف

المستهلكون المتنافسون (Competing Consumers) يعني أن عدة عمال يقرؤون من الطابور نفسه وتذهب كل رسالة إلى أحدهم فقط، فيجري العمل بالتوازي ويتوسع النظام بإضافة عمال.

## أين تسمعه؟

في طوابير المهام (Celery وSQS وRabbitMQ)، والمعالجة الخلفية، ونقاشات التوسع.

## أمثلة

- Start five workers; they compete for emails in the queue.
  - شغّل خمسة عمال؛ يتنافسون على رسائل البريد في الطابور.
- The queue is growing, so add more consumers.
  - الطابور يكبر لذا أضف مستهلكين أكثر.
- Three workers compete for the same queue, so each email is sent only once.
  - يتنافس ثلاثة عمّال على الطابور نفسه، فيُرسل كل بريد مرة واحدة فقط.

## خطأ شائع

توقع أن يُحفظ ترتيب الرسائل. مع مستهلكين كثر تنتهي الرسائل بأي ترتيب.

## لا تخلطه مع

النشر والاشتراك حيث يحصل كل مشترك على نسخته من كل رسالة. هنا تذهب الرسالة إلى مستهلك واحد.

## قلها في العمل

- Scale the competing consumers on queue depth.
  - وسّع المستهلكين المتنافسين حسب عمق الطابور.
- Make the handler idempotent; messages may repeat.
  - اجعل المعالج idempotent؛ فقد تتكرر الرسائل.
