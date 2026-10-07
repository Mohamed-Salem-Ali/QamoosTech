---
id: exactly-once-delivery
category: architecture
subcategory: patterns
level: intermediate
related: [at-least-once-delivery, idempotency-key, message-queue]
aliases: ["exactly once", "effectively once", "at-most-once"]
term: "Exactly-Once Delivery"
translation: "التسليم مرة واحدة بالضبط"
pronunciation: "إيجزاكتلي وانس"
keywords: ["بلا فقد ولا تكرار", "صعب الضمان", "إزالة التكرار عند المستهلك", "معاملات Kafka", "فعلياً مرة واحدة", "معالجة idempotent", "no loss no duplicates", "hard to guarantee", "dedupe on the consumer", "transactions in kafka", "effectively once", "idempotent processing"]
---

## التعريف

التسليم مرة واحدة بالضبط (Exactly-Once) يعني معالجة كل رسالة مرة واحدة، دون فقد أو تكرار. وهو صعب جداً عبر الشبكة لذا تقاربه الأنظمة عادة بالتسليم مرة على الأقل مع معالجة idempotent.

## أين تسمعه؟

في نقاشات تصميم Kafka والطوابير، وخطوط الدفع والفوترة، وادعاءات المزودين حول ضمانات التسليم.

## أمثلة

- The broker says exactly-once, but we still dedupe by message id.
  - يقول الوسيط إنه مرة واحدة لكننا ما زلنا نزيل التكرار بمعرّف الرسالة.
- Aim for effectively-once: at-least-once plus idempotency.
  - اهدف إلى فعلياً مرة واحدة: مرة على الأقل مع idempotency.

## خطأ شائع

تصديق التسمية دون تمحيص. الضمانات غالباً تصح داخل نظام واحد لا بين قاعدة بياناتك والعالم الخارجي.

## لا تخلطه مع

مرة على الأكثر التي قد تفقد رسائل لكنها لا تكررها.

## قلها في العمل

- Is that really exactly-once end to end?
  - هل هي فعلاً مرة واحدة من البداية إلى النهاية؟
- Dedupe on the consumer side to be safe.
  - أزل التكرار عند المستهلك للأمان.
