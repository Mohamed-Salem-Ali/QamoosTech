---
id: transactional-outbox
category: architecture
subcategory: patterns
level: intermediate
related: [message-queue, event-driven, transaction]
aliases: ["outbox pattern", "outbox table", "dual write"]
term: "Transactional Outbox"
translation: "صندوق الإرسال المعاملاتي"
pronunciation: "ترانزاكشنال أوت بوكس"
keywords: ["حفظ الحدث في المعاملة نفسها", "نشر موثوق للأحداث", "جدول صندوق الإرسال", "ناقل ينشر الأحداث", "تجنب الكتابة المزدوجة", "لا تفقد رسالة أبداً", "save event in same transaction", "reliable event publishing", "outbox table", "relay publishes events", "avoid dual write", "never lose a message"]
---

## التعريف

نمط صندوق الإرسال المعاملاتي (Transactional Outbox) يحفظ الحدث في جدول "outbox" ضمن المعاملة نفسها مع التغيير التجاري، وتنشره عملية منفصلة لاحقاً إلى وسيط الرسائل. وبذلك تُتجنب الكتابة إلى نظامين معاً.

## أين تسمعه؟

في تصاميم الخدمات المصغرة والأحداث، ونشر Kafka أو RabbitMQ، وأخطاء "حُفظت قاعدة البيانات لكن ضاع الحدث".

## أمثلة

- We insert the order and its OrderCreated event in one transaction.
  - ندرج الطلب وحدث OrderCreated في معاملة واحدة.
- A relay reads the outbox table and publishes each row.
  - ناقل يقرأ جدول outbox وينشر كل صف.
- The order and its event are written in one transaction, so no event is lost.
  - يُكتب الطلب وحدثه في معاملة واحدة، فلا يضيع أي حدث.

## خطأ شائع

الحفظ في قاعدة البيانات ثم النشر إلى الطابور كخطوتين. انهيار بينهما يضيّع الحدث.

## لا تخلطه مع

طابور الرسائل الميتة الذي يحفظ الرسائل التي فشلت معالجتها. أما الـ outbox فعن إرسالها بموثوقية أصلاً.

## قلها في العمل

- Use the outbox pattern; never dual-write.
  - استخدم نمط outbox؛ ولا تكتب مزدوجاً أبداً.
- Consumers must handle duplicates because delivery is at-least-once.
  - يجب أن يتعامل المستهلكون مع التكرار لأن التسليم مرة على الأقل.
