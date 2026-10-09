---
id: lazy-evaluation
category: programming
subcategory: iteration-and-generators
level: intermediate
related: [generator, iterator, memoization, map-and-filter]
aliases: ["lazily evaluated", "deferred evaluation"]
term: "Lazy Evaluation"
translation: "التقييم الكسول"
pronunciation: "ليزي إيفاليويشن"
keywords: ["الحساب عند الحاجة فقط", "تأجيل الحساب حتى الاستخدام", "تسلسلات لا نهائية", "المولّدات كسولة", "تجنب تحميل كل شيء", "التقييم المتعجل مقابل الكسول", "compute only when needed", "delay calculation until used", "infinite sequences", "generators are lazy", "avoid loading everything", "eager vs lazy"]
---

## التعريف

التقييم الكسول (Lazy Evaluation) يعني أن القيمة تُحسب فقط عند الحاجة إليها فعلاً بدلاً من حسابها مسبقاً. يوفر الذاكرة والجهد.

## أين تسمعه؟

في نقاشات المولّدات، واستعلامات قواعد البيانات التي لا تعمل إلا عند القراءة، ومراجعات الأداء.

## أمثلة

- The query is lazy: nothing hits the database until we loop over the results.
  - الاستعلام كسول: لا شيء يصل إلى قاعدة البيانات حتى نمر على النتائج.
- A generator is lazy, so it can describe an endless sequence.
  - المولّد كسول، لذا يمكنه وصف تسلسل لا ينتهي.
- The filter runs only when the results are printed, so unused rows are never processed.
  - لا يعمل المرشّح إلا حين تُطبع النتائج، فلا تُعالَج الصفوف غير المستخدمة أبداً.

## خطأ شائع

نسيان أن القيمة الكسولة لم تُحسب بعد. تظهر الأخطاء والبطء لاحقاً عند استخدامها أخيراً.

## لا تخلطه مع

التحميل الكسول (Lazy Loading) في الواجهة الذي يؤجل تحميل الصور أو الكود. الفكرة متشابهة لكن هذا المصطلح عن حساب القيم.

## قلها في العمل

- Keep it lazy until the last moment.
  - أبقِه كسولاً حتى اللحظة الأخيرة.
- Because of lazy evaluation, the error shows up where we read the value, not where we built it.
  - بسبب التقييم الكسول يظهر الخطأ حيث نقرأ القيمة لا حيث بنيناها.
