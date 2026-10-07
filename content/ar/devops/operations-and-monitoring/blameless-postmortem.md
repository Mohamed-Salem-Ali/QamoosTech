---
id: blameless-postmortem
category: devops
subcategory: operations-and-monitoring
level: intermediate
related: [runbook, monitoring, sla]
aliases: ["postmortem", "post-mortem", "incident review", "root cause analysis"]
term: "Blameless Postmortem"
translation: "المراجعة اللاحقة بلا لوم"
pronunciation: "بليمليس بوست مورتم"
keywords: ["مراجعة بعد الحادثة", "التركيز على العملية لا الأشخاص", "الجدول الزمني والسبب الجذري", "بنود العمل", "التعلم من الإخفاقات", "الأمان النفسي", "review after an incident", "focus on process not people", "timeline and root cause", "action items", "learn from failures", "psychological safety"]
---

## التعريف

المراجعة اللاحقة بلا لوم (Blameless Postmortem) مراجعة مكتوبة بعد حادثة تشرح ما حدث ولماذا وكيف نمنع تكراره، وتركّز على الأنظمة والعملية لا على لوم الأفراد.

## أين تسمعه؟

في فرق SRE وDevOps، ومتابعات الحوادث، ونقاشات الثقافة الهندسية.

## أمثلة

- The postmortem lists a timeline, the root cause and three action items.
  - تسرد المراجعة جدولاً زمنياً والسبب الجذري وثلاثة بنود عمل.
- Ask what let the mistake happen, not who made it.
  - اسأل عما سمح بحدوث الخطأ لا عمّن ارتكبه.

## خطأ شائع

الانتهاء بـ"خطأ بشري" كسبب. اسأل لماذا سمح النظام لذلك الخطأ بأن يسبب ضرراً.

## لا تخلطه مع

تقييم أداء لشخص. أما المراجعة اللاحقة فتفحص النظام ولا تصدر حكماً على الأفراد.

## قلها في العمل

- Let's write the postmortem by Friday.
  - لنكتب المراجعة اللاحقة بحلول الجمعة.
- What would have caught this earlier?
  - ما الذي كان سيلتقط هذا أبكر؟
