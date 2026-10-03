---
id: idempotency
category: architecture
level: intermediate
related: [webhook, message-queue, transaction]
term: "Idempotency"
translation: "خاصية التكرار الآمن"
pronunciation: "آيدمبوتنسي"
---
## التعريف

خاصية في العملية: تنفيذها عدة مرات يعطي النتيجة نفسها كما لو نُفّذت مرة واحدة. وهذا يجعل إعادة المحاولة آمنة.

## أين تسمعه؟

المدفوعات، والـ webhooks، وإعادة المحاولة، والمهام الخلفية.

## أمثلة

- Send an idempotency key so retries cannot charge the customer twice.
  - أرسل idempotency key حتى لا تُحاسب العميل مرتين عند إعادة المحاولة.
- Make the job idempotent because the queue may deliver it twice.
  - اجعل المهمة idempotent لأن الـ queue قد تسلّمها مرتين.

## خطأ شائع

بناء endpoint للدفع بلا idempotency key. إذا انقطعت الشبكة أعاد العميل المحاولة فدفع مرتين.
