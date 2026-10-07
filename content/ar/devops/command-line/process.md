---
id: process
category: devops
subcategory: command-line
level: beginner
related: [thread, system-call, unix-signal]
aliases: ["pid", "child process", "process id", "subprocess"]
term: "Process"
translation: "العملية"
pronunciation: "بروسس"
keywords: ["برنامج قيد التشغيل", "رقم المعرّف PID", "لها ذاكرتها الخاصة", "الأمران ps وtop", "التشغيل والإنهاء", "الأب والابن", "running program", "pid", "has its own memory", "ps and top", "start and kill", "parent and child"]
---

## التعريف

العملية (Process) نسخة قيد التشغيل من برنامج. لها ذاكرتها الخاصة ومعرّف (PID) وخيط أو أكثر.

## أين تسمعه؟

في الطرفيات (`ps` و`top` و`kill`)، وإدارة الخوادم، ونقاشات Docker، ومقررات نظم التشغيل.

## أمثلة

- Find the process using port 8000 and kill it.
  - ابحث عن العملية التي تستخدم المنفذ 8000 وأنهِها.
- The web server runs as several worker processes.
  - يعمل خادم الويب كعدة عمليات عاملة.

## خطأ شائع

اعتبار "البرنامج" و"العملية" شيئاً واحداً. قد يعمل برنامج واحد كعمليات كثيرة معاً.

## لا تخلطه مع

الخيط الذي يعيش داخل عملية ويتشارك ذاكرتها.

## قلها في العمل

- What's the PID?
  - ما رقم العملية؟
- The process is using 90% CPU.
  - تستخدم العملية 90% من المعالج.
