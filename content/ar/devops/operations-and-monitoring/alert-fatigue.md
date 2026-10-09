---
id: alert-fatigue
category: devops
subcategory: operations-and-monitoring
level: intermediate
related: [monitoring, runbook, observability]
aliases: ["alert noise", "noisy alerts"]
term: "Alert Fatigue"
translation: "إرهاق التنبيهات"
pronunciation: "ألرت فاتيج"
keywords: ["تنبيهات كثيرة جداً", "الناس تتجاهل الإشعارات", "مراقبة مزعجة", "إنذارات كاذبة", "نبّه للمشكلات الحقيقية فقط", "اضبط العتبات", "too many alerts", "people ignore notifications", "noisy monitoring", "false alarms", "page only for real problems", "tune thresholds"]
---

## التعريف

إرهاق التنبيهات (Alert Fatigue) يحدث حين يتلقى الناس تنبيهات كثيرة، كثير منها كاذب أو غير مهم، فيبدؤون بتجاهلها ويفوتون الحقيقية.

## أين تسمعه؟

في فرق المناوبة، ومراجعات إعداد المراقبة، وتقارير الحوادث التي تقول "كان التنبيه موجوداً لكن تُجوهل".

## أمثلة

- We get 200 alerts a night; the team has alert fatigue.
  - نتلقى 200 تنبيه كل ليلة؛ الفريق مصاب بإرهاق التنبيهات.
- Page a human only when action is needed right now.
  - نبّه إنساناً فقط حين يلزم إجراء فوري.
- After we raised the CPU threshold, the on-call phone stopped ringing all night.
  - بعد رفع حدّ استخدام المعالج، توقّف هاتف المناوبة عن الرنين طوال الليل.

## خطأ شائع

إضافة تنبيه لكل مقياس "احتياطاً". يجب أن يحتاج كل تنبيه إلى إجراء بشري.

## لا تخلطه مع

المراقبة التي تجمع البيانات. أما التنبيه فيقرر أي الإشارات تقاطع شخصاً.

## قلها في العمل

- Delete or tune the noisy alerts.
  - احذف التنبيهات المزعجة أو اضبطها.
- Is this alert actionable?
  - هل هذا التنبيه قابل للتنفيذ؟
