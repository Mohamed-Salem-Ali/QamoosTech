---
id: microtask-queue
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [event-loop, async-await, callback]
tags: [javascript]
aliases: ["microtask", "macrotask"]
term: "Microtask Queue"
translation: "طابور المهام الدقيقة"
pronunciation: "مايكروتاسك كيو"
keywords: ["استدعاءات الوعود تعمل أولاً", "تعمل قبل المؤقتات", "استكمال then وawait", "الدالة queueMicrotask", "تجويع الحلقة", "ترتيب التنفيذ", "promise callbacks run first", "runs before timers", "then and await continuations", "queuemicrotask", "starve the loop", "order of execution"]
---

## التعريف

طابور المهام الدقيقة (Microtask Queue) يحمل مهاماً صغيرة، أهمها استدعاءات الوعود (`then` والكود بعد `await`)، تشغلها حلقة الأحداث بعد المهمة الحالية مباشرة وقبل أي مؤقت أو مهمة أخرى.

## أين تسمعه؟

في ألغاز ترتيب التنفيذ في جافاسكربت، وأسئلة مقابلات "الوعد مقابل setTimeout"، وأخطاء async الدقيقة.

## أمثلة

- The promise callback prints before the `setTimeout` one because microtasks run first.
  - يُطبع استدعاء الوعد قبل استدعاء `setTimeout` لأن المهام الدقيقة تعمل أولاً.
- An endless chain of microtasks can starve rendering.
  - سلسلة لا تنتهي من المهام الدقيقة قد تجوّع الرسم.
- The then callback runs before the timer, because promise callbacks are microtasks.
  - تعمل دالة then قبل المؤقت، لأن دوال الوعود مهام دقيقة (microtasks).

## خطأ شائع

افتراض أن كل الاستدعاءات تشترك في طابور واحد. تستخدم الوعود والمؤقتات طوابير مختلفة بأولويات مختلفة.

## لا تخلطه مع

طابور المهام الكبيرة الذي يحمل المؤقتات والإدخال والإخراج وأحداث المستخدم ويُعالج مهمة لكل دورة.

## قلها في العمل

- Microtasks drain completely before the next task.
  - تُفرَّغ المهام الدقيقة كلها قبل المهمة التالية.
- What's the output order here?
  - ما ترتيب المخرجات هنا؟
