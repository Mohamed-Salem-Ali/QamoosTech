---
id: context-switch
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [thread, process, starvation]
aliases: ["time slice", "preemption", "preemptive scheduling"]
term: "Context Switch"
translation: "تبديل السياق"
pronunciation: "كونتكست سويتش"
keywords: ["المعالج ينتقل إلى مهمة أخرى", "حفظ الحالة واستعادتها", "شريحة الوقت", "المجدول يقرر", "كلفة الخيوط الكثيرة", "المقاطعة", "cpu switches to another task", "save and restore state", "time slice", "scheduler decides", "overhead of many threads", "preemption"]
---

## التعريف

تبديل السياق (Context Switch) هو أن يتوقف المعالج عن تشغيل عملية أو خيط ويبدأ آخر. يحفظ نظام التشغيل حالة الأول ويحمّل حالة الثاني، وهذا يستغرق وقتاً قليلاً.

## أين تسمعه؟

في مقررات نظم التشغيل، وتحليل الأداء (عدد تبديلات مرتفع)، ونقاشات الخيوط مقابل async.

## أمثلة

- Thousands of threads cause heavy context switching.
  - آلاف الخيوط تسبب تبديل سياق كثيراً.
- Each task gets a short time slice before being switched out.
  - تحصل كل مهمة على شريحة وقت قصيرة قبل تبديلها.

## خطأ شائع

إنشاء خيوط أكثر بكثير من الأنوية. فيقضي المعالج وقتاً في التبديل أكثر من العمل.

## لا تخلطه مع

استدعاء الدالة الذي يقفز داخل الخيط نفسه ولا يكلف تقريباً شيئاً.

## قلها في العمل

- The context-switch rate is very high.
  - معدل تبديل السياق مرتفع جداً.
- Use a pool sized to the number of cores.
  - استخدم مجمّعاً بحجم عدد الأنوية.
