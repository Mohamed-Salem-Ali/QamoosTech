---
id: starvation
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [deadlock, mutex, context-switch]
aliases: ["priority inversion", "aging"]
term: "Starvation"
translation: "التجويع"
pronunciation: "ستارفيشن"
keywords: ["مهمة لا يأتي دورها", "الأقل أولوية تنتظر دائماً", "جدولة غير عادلة", "القفل لا يُحصل عليه", "انعكاس الأولوية", "عمل يُتجاهل للأبد", "task never gets its turn", "low priority always waits", "unfair scheduling", "lock never acquired", "priority inversion", "work is ignored forever"]
---

## التعريف

التجويع (Starvation) يحدث حين لا تحصل عملية أو خيط على المورد الذي تحتاجه، كوقت المعالج أو قفل، لأن غيرها يسبقها دائماً.

## أين تسمعه؟

في مقررات نظم التشغيل والتزامن، وتصاميم أولويات طوابير المهام، وحوادث "مهمة واحدة لا تعمل أبداً".

## أمثلة

- Low-priority jobs never run while high-priority ones keep arriving; that's starvation.
  - المهام منخفضة الأولوية لا تعمل ما دامت العالية تتوالى؛ هذا تجويع.
- Aging raises a waiting task's priority over time.
  - تقدّم العمر يرفع أولوية المهمة المنتظرة مع الوقت.

## خطأ شائع

الخلط بينه وبين الجمود. في التجويع يتقدم الآخرون؛ وتُتجاهل مهمة واحدة فقط.

## لا تخلطه مع

الجمود (Deadlock) حيث تعلق المهام بانتظار بعضها فلا يتقدم أحد.

## قلها في العمل

- Add priority aging to avoid starvation.
  - أضف تقدّم العمر للأولوية لتجنب التجويع.
- Why does this job never get picked up?
  - لماذا لا تُلتقط هذه المهمة أبداً؟
