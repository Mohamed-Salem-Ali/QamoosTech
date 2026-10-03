---
id: monitoring
category: devops
level: intermediate
related: [logging, health-check, sla]
term: "Monitoring"
translation: "المراقبة"
pronunciation: "مونيتورينج"
---
## التعريف

مراقبة صحة النظام بأرقام وتنبيهات، مثل الأخطاء والسرعة واستهلاك المعالج، لاكتشاف المشكلات مبكرًا.

## أين تسمعه؟

دعم الإنتاج ونوبات الاستجابة (on-call).

## أمثلة

- Monitoring alerted us before any customer noticed the problem.
  - نبّهتنا المراقبة قبل أن يلاحظ أي عميل المشكلة.
- Set up an alert when the error rate goes above 2%.
  - اضبط تنبيهًا عندما يتجاوز معدل الأخطاء 2%.

## خطأ شائع

إنشاء تنبيهات كثيرة حتى يتجاهلها الجميع. نبّه فقط على ما يحتاج إلى تدخل.

## لا تخلطه مع

غالبًا ما يتم الخلط بين المراقبة (Monitoring) والقابلية للملاحظة (Observability)؛ فالمراقبة تخبرك أن النظام معطل، بينما توفر القابلية للملاحظة البيانات الداخلية اللازمة لفهم سبب هذا العطل.

## قلها في العمل

- Let's check our monitoring dashboard to see if the latency spikes are still happening.
  - دعونا نتحقق من لوحة تحكم المراقبة لنرى ما إذا كانت قفزات التأخير لا تزال تحدث.
- I have updated the monitoring configuration to include more granular metrics for the database service.
  - لقد قمت بتحديث إعدادات المراقبة لتشمل مقاييس أكثر تفصيلًا لخدمة قاعدة البيانات.
