---
id: health-probes
category: devops
subcategory: infrastructure
level: intermediate
related: [health-check, container-orchestration, heartbeat]
tags: [kubernetes]
aliases: ["liveness probe", "readiness probe", "startup probe", "liveness", "readiness"]
term: "Liveness and Readiness Probes"
translation: "فحوصات الحيوية والجاهزية"
pronunciation: "لايفنس أند ريدينس بروبس"
keywords: ["فحوصات الصحة في Kubernetes", "إعادة التشغيل إذا لم يكن حياً", "إرسال الحركة عند الجاهزية فقط", "فحص البدء", "مسار الفحص ومنفذه", "فحص فاشل", "kubernetes health checks", "restart if not alive", "send traffic only when ready", "startup probe", "probe path and port", "failing probe"]
---

## التعريف

في Kubernetes، فحص الحيوية (Liveness) يتحقق هل ما زالت الحاوية حية (وإلا أُعيد تشغيلها)، وفحص الجاهزية (Readiness) يتحقق هل تستطيع استقبال الحركة (وإلا أُخرجت من موزّع الأحمال)، وفحص البدء (Startup) ينتظر البطيئة في الإقلاع.

## أين تسمعه؟

في ملفات Kubernetes، ومراجعات النشر، وحوادث مثل "الحاويات تعيد التشغيل في حلقة" أو "الحركة تصل إلى حاوية غير جاهزة".

## أمثلة

- The readiness probe fails until the database connection is up.
  - يفشل فحص الجاهزية حتى يعمل اتصال قاعدة البيانات.
- A liveness probe that is too strict restarts healthy pods.
  - فحص حيوية صارم جداً يعيد تشغيل حاويات سليمة.

## خطأ شائع

جعل فحص الحيوية يعتمد على قاعدة البيانات. فيعيد انقطاعها تشغيل كل الحاويات ويزيد السوء.

## لا تخلطه مع

نقطة فحص الصحة وهي الرابط الذي يستدعيه الفحص. أما الـ probe فآلية Kubernetes التي تستخدمه.

## قلها في العمل

- Add a readiness probe on `/healthz`.
  - أضف فحص جاهزية على `/healthz`.
- The pod keeps restarting; check the liveness probe.
  - الحاوية تعيد التشغيل باستمرار؛ افحص فحص الحيوية.
