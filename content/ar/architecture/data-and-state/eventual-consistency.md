---
id: eventual-consistency
category: architecture
subcategory: data-and-state
level: intermediate
related: [strong-consistency, primary-replica, acid]
aliases: ["eventually consistent"]
term: "Eventual Consistency"
translation: "الاتساق النهائي"
pronunciation: "إيفينتشوال كونسستنسي"
keywords: ["النسخ تلحق لاحقاً", "قراءات قديمة للحظة", "يتقارب مع الوقت", "قواعد البيانات الموزعة", "مقايضة الدقة بالتوفر", "اكتب الآن واقرأ لاحقاً", "replicas catch up later", "stale reads for a moment", "converges over time", "distributed databases", "trade accuracy for availability", "write now read later"]
---

## التعريف

الاتساق النهائي (Eventual Consistency) يعني أنه بعد الكتابة قد تختلف نسخ البيانات للحظات، لكن إن لم تصل كتابات جديدة فستنتهي كلها بالقيمة نفسها.

## أين تسمعه؟

في قواعد البيانات الموزعة (DynamoDB وCassandra)، ونسخ القراءة، وانتشار DNS، ونقاشات نظرية CAP.

## أمثلة

- The profile update shows on the replica a second later; it's eventually consistent.
  - يظهر تحديث الملف على النسخة بعد ثانية؛ فهو اتساق نهائي.
- Don't read from a replica right after a write if you need the new value.
  - لا تقرأ من نسخة فور الكتابة إن كنت تحتاج القيمة الجديدة.

## خطأ شائع

افتراض أن القراءة بعد الكتابة مباشرة تعيد القيمة الجديدة. مع النسخ قد تعيد القديمة.

## لا تخلطه مع

الاتساق القوي حيث ترى كل قراءة آخر كتابة، على حساب السرعة أو التوفر.

## قلها في العمل

- Is this read eventually consistent?
  - هل هذه القراءة بإتساق نهائي؟
- Users may see old data for a few seconds.
  - قد يرى المستخدمون بيانات قديمة لبضع ثوانٍ.
