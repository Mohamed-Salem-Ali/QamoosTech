---
id: dead-letter-queue
category: architecture
level: intermediate
related: [message-queue]
term: "Dead Letter Queue (DLQ)"
pronunciation: "ديد لتر كيو"
translation: "طابور الرسائل التالفة"
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
