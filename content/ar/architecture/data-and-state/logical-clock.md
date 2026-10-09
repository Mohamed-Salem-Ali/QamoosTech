---
id: logical-clock
category: architecture
subcategory: data-and-state
level: intermediate
related: [eventual-consistency, race-condition, heartbeat]
aliases: ["lamport clock", "vector clock", "happened-before", "happens-before"]
term: "Logical Clock"
translation: "الساعة المنطقية"
pronunciation: "لوجيكال كلوك"
keywords: ["ترتيب الأحداث دون الوقت الحقيقي", "ساعة لامبورت", "الساعة المتجهة", "حدث قبل", "ساعات الأجهزة تنحرف", "الترتيب السببي", "order events without real time", "lamport clock", "vector clock", "happened before", "clocks drift between machines", "causal ordering"]
---

## التعريف

الساعة المنطقية (Logical Clock) عداد يُستخدم لترتيب الأحداث في نظام موزع دون الوثوق بالساعات الحقيقية التي تنحرف. والساعة المتجهة (Vector Clock) توسعها لمعرفة أي الأحداث وقعت قبل غيرها.

## أين تسمعه؟

في مقررات الأنظمة الموزعة، وداخل قواعد البيانات (Dynamo وCassandra)، ونقاشات حل التعارض.

## أمثلة

- Each message carries a Lamport timestamp so the receiver can order events.
  - تحمل كل رسالة ختم لامبورت ليرتب المستقبل الأحداث.
- Two vector clocks that can't be ordered mean a concurrent update, so a conflict.
  - ساعتان متجهتان لا يمكن ترتيبهما تعنيان تحديثاً متزامناً أي تعارضاً.
- Lamport timestamps show that the update on node B happened after the write on node A.
  - تُظهر طوابع لامبورت الزمنية أن التحديث على العقدة B حدث بعد الكتابة على العقدة A.

## خطأ شائع

مقارنة أختام الوقت الحقيقية بين الخوادم. انحراف ثوانٍ قليلة قد يعيد ترتيب الأحداث.

## لا تخلطه مع

ساعة الجدار (وقت النظام) التي قد تقفز أو تنحرف ولا تصلح للترتيب بين الأجهزة.

## قلها في العمل

- We can't trust timestamps here; use a logical clock.
  - لا نستطيع الوثوق بأختام الوقت هنا؛ استخدم ساعة منطقية.
- Did A happen before B, or were they concurrent?
  - هل وقع A قبل B أم كانا متزامنين؟
