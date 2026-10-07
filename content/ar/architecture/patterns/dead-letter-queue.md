---
id: dead-letter-queue
category: architecture
subcategory: patterns
level: intermediate
related: [message-queue]
term: "Dead Letter Queue (DLQ)"
pronunciation: "ديد لتر كيو"
translation: "طابور الرسائل التالفة"
keywords: ["طابور الرسائل الفاشلة","مكان تخزين الرسائل المتعثرة","معالجة الرسائل التي لم تكتمل","طابور المهام التي فشلت","أين تذهب الرسائل التالفة","طابور الرسائل غير القابلة للمعالجة","طريقة التعامل مع الرسائل المرفوضة","تخزين الرسائل بعد فشل المحاولات","ديد لتر كيو","طابور الأخطاء في المراسلة","failed message storage","handle unprocessable queue items","where do failed messages go","dlq meaning","message broker error handling","queue for failed tasks","storing rejected messages","debugging failed background jobs","dead letter exchange","retry limit exceeded queue"]
---

## التعريف

هو مساحة تخزين مخصصة في أنظمة المراسلة للاحتفاظ بالرسائل التي تعذر معالجتها بنجاح بعد عدد معين من المحاولات.

## أين تسمعه؟

في الأنظمة غير المتزامنة (Asynchronous)، الأنظمة المعمارية القائمة على الأحداث، وعند إعداد وسطاء الرسائل.

## أمثلة

- The background worker moved the malformed JSON message to the DLQ after three failed retries.
  - قام العامل الخلفي بنقل رسالة جيسون التالفة إلى طابور الرسائل التالفة بعد ثلاث محاولات فاشلة.
- We set up an alert to notify the engineering team whenever a message lands in the payment service DLQ.
  - قمنا بإعداد تنبيه لإعلام فريق الهندسة كلما استقرت رسالة في طابور الرسائل التالفة لخدمة الدفع.

## خطأ شائع

الاعتقاد بأن طابور الرسائل التالفة يحل خطأ المعالجة تلقائياً، بينما هو في الواقع يقوم فقط بتخزين الرسائل الفاشلة لمراجعتها لاحقاً وتصحيح أخطائها يدويياً.

## لا تخلطه مع

طابور الرسائل التالفة (DLQ) مقابل طابور إعادة المحاولة (Retry Queue): يحتفظ طابور إعادة المحاولة بالرسائل التي فشلت مؤقتاً وسيتم إعادة معالجتها تلقائياً، بينما يخزن طابور الرسائل التالفة الرسائل التي فشلت بشكل دائم وتتطلب تدخلاً بشرياً.

## قلها في العمل

- I noticed a spike in our DLQ, so we should probably investigate why these messages are failing.
  - لاحظت ارتفاعاً في عدد الرسائل في طابور الرسائل التالفة، لذا يجب علينا التحقق من سبب فشل هذه الرسائل.
- Please review the messages currently sitting in the DLQ to identify the root cause of the processing errors.
  - يرجى مراجعة الرسائل الموجودة حالياً في طابور الرسائل التالفة لتحديد السبب الجذري لأخطاء المعالجة.
