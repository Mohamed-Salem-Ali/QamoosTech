---
id: failover
category: architecture
subcategory: reliability
level: intermediate
related: [high-availability, primary-replica, single-point-of-failure]
aliases: ["failback", "automatic failover"]
term: "Failover"
translation: "التحويل عند الفشل"
pronunciation: "فيل أوفر"
keywords: ["التحويل إلى النسخة الاحتياطية تلقائياً", "الاحتياطي يتولى العمل", "سقوط الأساسي", "ترقية نسخة", "تعافٍ تلقائي", "العودة للأساسي", "switch to backup automatically", "standby takes over", "primary goes down", "promote a replica", "automatic recovery", "failback"]
---

## التعريف

التحويل عند الفشل (Failover) هو الانتقال التلقائي إلى مكوّن احتياطي عندما يفشل الأساسي، فتستمر الخدمة بانقطاع قليل أو بلا انقطاع.

## أين تسمعه؟

في نسخ قواعد البيانات، وموزعات الأحمال، وإعدادات المناطق المتعددة في السحابة، ومراجعات الحوادث.

## أمثلة

- The replica was promoted automatically; failover took 20 seconds.
  - تُرقيت النسخة تلقائياً واستغرق التحويل 20 ثانية.
- We test failover every quarter.
  - نختبر التحويل كل ربع سنة.

## خطأ شائع

عدم اختباره أبداً. التحويل الذي لم يُجرَّب غالباً يفشل عند الحاجة إليه.

## لا تخلطه مع

النسخ الاحتياطي وهو نسخة بيانات تُستعاد لاحقاً. أما التحويل فيُبقي الخدمة تعمل الآن.

## قلها في العمل

- What triggers the failover?
  - ما الذي يطلق التحويل؟
- After failover, point the app at the new primary.
  - بعد التحويل وجّه التطبيق إلى الأساسية الجديدة.
