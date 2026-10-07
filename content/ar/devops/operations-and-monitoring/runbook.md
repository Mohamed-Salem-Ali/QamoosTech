---
id: runbook
category: devops
subcategory: operations-and-monitoring
level: intermediate
related: [monitoring, rollback, blameless-postmortem]
aliases: ["playbook", "operational runbook"]
term: "Runbook"
translation: "دليل التشغيل"
pronunciation: "رنبوك"
keywords: ["دليل خطوة بخطوة للحوادث", "ماذا تفعل عند التنبيه", "تعليمات المناوب", "إجراء تشغيلي", "قائمة إعادة التشغيل", "إصلاح موثّق", "step by step incident guide", "what to do when alert fires", "oncall instructions", "operational procedure", "restart checklist", "documented fix"]
---

## التعريف

دليل التشغيل (Runbook) دليل مكتوب خطوة بخطوة للتعامل مع مهمة تشغيلية أو حادثة محددة، مثل ما يجب فحصه وفعله عند انطلاق تنبيه معين.

## أين تسمعه؟

في مناوبات الاستجابة، والتعامل مع الحوادث، وأوصاف التنبيهات التي تربط بوثائق، ومستندات التسليم.

## أمثلة

- The alert links to a runbook with the first five checks.
  - يرتبط التنبيه بدليل تشغيل فيه أول خمسة فحوص.
- Update the runbook after every incident.
  - حدّث دليل التشغيل بعد كل حادثة.

## خطأ شائع

كتابته مرة وعدم تحديثه. دليل قديم أسوأ من لا دليل لأن الناس يتبعون خطوات خاطئة.

## لا تخلطه مع

المراجعة اللاحقة (Postmortem) التي تنظر في الحادثة بعد انتهائها. أما دليل التشغيل فيرشدك أثناء حدوثها.

## قلها في العمل

- Is there a runbook for this alert?
  - هل هناك دليل تشغيل لهذا التنبيه؟
- Follow the runbook step by step.
  - اتبع دليل التشغيل خطوة بخطوة.
