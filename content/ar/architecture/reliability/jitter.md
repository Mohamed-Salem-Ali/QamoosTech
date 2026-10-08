---
id: jitter
category: architecture
subcategory: reliability
level: intermediate
related: [exponential-backoff, thundering-herd, retry-logic, reconnection]
term: "Jitter"
translation: "التشويش العشوائي للتوقيت"
pronunciation: "جيتر"
keywords: ["تأخير عشوائي يضاف إلى المحاولات", "توزيع الطلبات", "تجنب عاصفة المحاولات", "عشوائية وقت الانتهاء", "random delay added to retries", "spread out requests", "avoid retry storm", "randomize expiry time", "jitter in backoff"]
---

## التعريف

تغيير عشوائي صغير يضاف إلى مدة انتظار أو مهلة، حتى لا يتصرف عملاء كثيرون في اللحظة نفسها. يوزّع التشويش الحمل عبر الزمن.

## أين تسمعه؟

في منطق إعادة المحاولة، وإعدادات انتهاء الذاكرة المؤقتة، والمهام المجدولة التي تشغّلها خوادم كثيرة.

## أمثلة

- Add jitter to the retry delay so the clients spread their requests.
  - أضف تشويشاً عشوائياً إلى مدة إعادة المحاولة حتى يوزّع العملاء طلباتهم.
- Each cache key gets a small random jitter on its expiry time.
  - يحصل كل مفتاح في الذاكرة المؤقتة على تشويش عشوائي صغير في وقت انتهائه.

## خطأ شائع

استخدام تشويش كبير يجعل المدة غير متوقعة، أو عدم استخدام أي تشويش، فيعيد العملاء المحاولة معاً.

## لا تخلطه مع

التشويش العشوائي يضيف عشوائية إلى المدة، أما التراجع الأسي فيجعل المدة تزيد مع الوقت.
