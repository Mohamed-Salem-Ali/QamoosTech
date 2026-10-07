---
id: read-replica
category: databases
subcategory: performance
level: intermediate
related: [primary-replica, eventual-consistency, failover]
tags: [sql, postgresql]
aliases: ["replication lag", "read replicas"]
term: "Read Replica"
translation: "نسخة القراءة"
pronunciation: "ريد ريبليكا"
keywords: ["نسخة تُستخدم للقراءة", "توسيع حركة القراءة", "تأخر النسخ", "إرسال التقارير إلى النسخة", "الأساسية تتولى الكتابة", "قراءات قديمة", "copy used for reads", "scale read traffic", "replication lag", "send reports to the replica", "primary handles writes", "stale reads"]
---

## التعريف

نسخة القراءة (Read Replica) نسخة من قاعدة البيانات تتلقى التغييرات من الأساسية وتخدم استعلامات القراءة فقط، فتوزع حمل القراءة. وقد تتأخر قليلاً عن الأساسية.

## أين تسمعه؟

في قواعد البيانات المُدارة (RDS وSupabase)، ونقاشات التوسع، وأخطاء لا تظهر فيها بيانات كُتبت قبل لحظة.

## أمثلة

- Heavy reports run against the read replica so the primary stays fast.
  - تعمل التقارير الثقيلة على نسخة القراءة لتبقى الأساسية سريعة.
- Read your own writes from the primary.
  - اقرأ كتاباتك من الأساسية.

## خطأ شائع

القراءة من النسخة بعد الكتابة مباشرة. تأخر النسخ قد يعيد القيمة القديمة.

## لا تخلطه مع

النسخة الاحتياطية وهي نسخة للاسترداد. أما النسخة المقروءة فحية وتخدم الاستعلامات.

## قلها في العمل

- How far behind is the replica?
  - كم تتأخر النسخة؟
- Route the analytics queries to the replica.
  - وجّه استعلامات التحليلات إلى النسخة.
