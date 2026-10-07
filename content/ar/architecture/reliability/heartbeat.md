---
id: heartbeat
category: architecture
subcategory: reliability
level: beginner
related: [health-check, failover, leader-election]
aliases: ["keepalive", "liveness signal"]
term: "Heartbeat"
translation: "نبض الحياة"
pronunciation: "هارت بيت"
keywords: ["إشارة أنا حي", "نبضة دورية", "اكتشاف العقد الميتة", "نبضات فائتة", "رسالة إبقاء الاتصال", "عضوية العنقود", "i am alive signal", "periodic ping", "detect dead nodes", "missed heartbeats", "keepalive message", "cluster membership"]
---

## التعريف

نبض الحياة (Heartbeat) إشارة صغيرة ترسلها خدمة على فترات منتظمة لتقول "أنا حي". وإن توقفت النبضات افترض الآخرون أنها تعطلت.

## أين تسمعه؟

في العناقيد، وKubernetes ونسخ قواعد البيانات، وعمال المهام، وتنبيهات المراقبة عن النبضات المفقودة.

## أمثلة

- A node that misses three heartbeats is marked down.
  - العقدة التي تفوّت ثلاث نبضات تُعلَّم متوقفة.
- The worker sends a heartbeat every 10 seconds so the job isn't reassigned.
  - يرسل العامل نبضة كل 10 ثوانٍ حتى لا تُعاد المهمة.

## خطأ شائع

ضبط المهلة قصيرة جداً. فتبدو هزة شبكة قصيرة كعقدة ميتة وتسبب تحويلاً غير ضروري.

## لا تخلطه مع

فحص الصحة حيث يسأل طرف خارجي الخدمة إن كانت سليمة. أما النبض فترسله الخدمة بنفسها.

## قلها في العمل

- We're missing heartbeats from worker 3.
  - نفقد نبضات العامل 3.
- Heartbeat interval 5 seconds, timeout 15.
  - فترة النبض 5 ثوانٍ والمهلة 15.
