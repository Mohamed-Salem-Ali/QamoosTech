---
id: race-condition
category: architecture
subcategory: reliability
level: intermediate
related: [deadlock, idempotency, unique-constraint, toctou]
tags: [python, sql]
aliases: ["race", "concurrency bug", "lost update"]
term: "Race Condition"
translation: "حالة التسابق"
pronunciation: "ريس كونديشن"
keywords: ["خطأ يعتمد على التوقيت", "طلبان في الوقت نفسه", "افحص ثم نفّذ", "دفع مزدوج", "يعمل منفرداً ويفشل تحت الحمل", "تحديث ضائع", "timing dependent bug", "two requests at the same time", "check then act", "double payment", "works alone fails under load", "lost update"]
---

## التعريف

حالة التسابق (Race Condition) خطأ تعتمد نتيجته على توقيت إجراءين، كأن يفحص طلبان أن مقعداً شاغر ثم يحجزه كلاهما.

## أين تسمعه؟

في تقارير الأخطاء التي تحدث "أحياناً" فقط، وأنظمة الدفع والحجز، ونقاشات التزامن.

## أمثلة

- Two clicks at once created two payments; it's a race condition.
  - نقرتان معاً أنشأتا دفعتين؛ إنها حالة تسابق.
- A unique constraint closes the race at the database level.
  - قيد الفرادة يغلق التسابق على مستوى قاعدة البيانات.
- Two admins clicked approve together, so the request was processed twice, a race condition.
  - ضغط مديران على الموافقة معاً، فعولج الطلب مرتين، وهذا سباق (race condition).

## خطأ شائع

الفحص في الكود ثم الكتابة بافتراض ألا شيء يتغير بينهما. استخدم قيداً في قاعدة البيانات أو قفلاً أو تحديثاً ذرياً.

## لا تخلطه مع

الجمود (Deadlock) حيث تنتظر عمليتان بعضهما إلى الأبد. التسابق ينتج نتائج خاطئة والجمود ينتج توقفاً.

## قلها في العمل

- We can't reproduce it, so I suspect a race condition.
  - لا نستطيع إعادة إنتاجه فأشك في حالة تسابق.
- Wrap the check and the write in one transaction.
  - ضع الفحص والكتابة في معاملة واحدة.
