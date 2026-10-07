---
id: at-least-once-delivery
category: architecture
subcategory: patterns
level: intermediate
related: [exactly-once-delivery, idempotency-key, retry-logic]
aliases: ["at least once"]
term: "At-Least-Once Delivery"
translation: "التسليم مرة على الأقل"
pronunciation: "آت ليست وانس"
keywords: ["لا تضيع لكن قد تتكرر", "إعادة المحاولة حتى التأكيد", "يجب أن يكون المستهلك idempotent", "الافتراضي في أغلب الوسطاء", "التأكيد بعد المعالجة", "رسائل مكررة", "never lost but maybe duplicated", "retry until acknowledged", "consumer must be idempotent", "default for most brokers", "ack after processing", "duplicate messages"]
---

## التعريف

التسليم مرة على الأقل (At-Least-Once) يضمن وصول الرسالة مرة أو أكثر: لا تضيع أبداً لكن قد تُسلَّم ثانية إن فُقد التأكيد، لذا يجب أن يتعامل المستهلكون مع التكرار.

## أين تسمعه؟

في وثائق SQS وRabbitMQ وKafka، وتصاميم تسليم الـ webhooks وإعادة المحاولة.

## أمثلة

- SQS standard queues deliver at least once, so the handler must be idempotent.
  - طوابير SQS القياسية تسلّم مرة على الأقل لذا يجب أن يكون المعالج idempotent.
- The consumer crashed before acking, so the message came again.
  - انهار المستهلك قبل التأكيد فعادت الرسالة.

## خطأ شائع

كتابة معالجات تخصم أو ترسل بريداً عند كل تسليم. فيخصم التكرار أو يرسل مرتين.

## لا تخلطه مع

مرة واحدة بالضبط التي تعد بلا تكرار لكنها صعبة التحقيق عملياً.

## قلها في العمل

- Assume at-least-once and dedupe.
  - افترض مرة على الأقل وأزل التكرار.
- Store processed message ids.
  - احفظ معرّفات الرسائل المعالجة.
