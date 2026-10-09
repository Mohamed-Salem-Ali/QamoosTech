---
id: error-budget
category: architecture
subcategory: reliability
level: intermediate
related: [sla, monitoring, high-availability]
aliases: ["slo", "service level objective", "error budgets"]
term: "Error Budget"
translation: "ميزانية الأخطاء"
pronunciation: "إيرور بدجت"
keywords: ["المقدار المسموح من الفشل", "هدف مستوى الخدمة 99.9%", "أنفقها على الإصدارات", "جمّد النشر عند نفادها", "هدف الموثوقية", "ممارسة SRE", "allowed amount of failure", "slo 99.9 percent", "spend it on releases", "freeze deploys when used up", "reliability target", "sre practice"]
---

## التعريف

ميزانية الأخطاء (Error Budget) هي مقدار عدم الموثوقية المسموح للخدمة في فترة، مثل 0.1% توقف لهدف 99.9%. ما دامت الميزانية باقية يمكن للفرق إطلاق الميزات، وعند نفادها تركّز على الاستقرار.

## أين تسمعه؟

في فرق SRE وDevOps، ومراجعات SLO، وتخطيط الإصدارات، والنقاش بين المنتج والهندسة حول الموثوقية.

## أمثلة

- We've used 80% of this month's error budget, so we slow down releases.
  - استهلكنا 80% من ميزانية أخطاء هذا الشهر فنبطئ الإصدارات.
- A 99.9% target gives about 43 minutes of downtime a month.
  - هدف 99.9% يعطي نحو 43 دقيقة توقف في الشهر.
- The team has spent most of its error budget, so the risky migration waits.
  - أنفق الفريق معظم ميزانية الأخطاء، لذلك ينتظر الترحيل الخطير.

## خطأ شائع

السعي إلى 100%. هو مستحيل ويبطئ كل إصدار ويكلف أكثر مما يلاحظ المستخدمون.

## لا تخلطه مع

اتفاقية مستوى الخدمة (SLA) وهي وعد للعملاء غالباً بغرامات. أما ميزانية الأخطاء فهامش داخلي نحو الهدف.

## قلها في العمل

- How much error budget is left?
  - كم بقي من ميزانية الأخطاء؟
- We're out of budget; freeze risky deploys.
  - نفدت الميزانية؛ جمّد النشر الخطر.
