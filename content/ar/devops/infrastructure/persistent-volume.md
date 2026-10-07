---
id: persistent-volume
category: devops
subcategory: infrastructure
level: intermediate
related: [containerization, persistence, file-system]
aliases: ["docker volume", "volume", "pvc", "bind mount"]
term: "Persistent Volume"
translation: "الحجم الدائم"
pronunciation: "برسيستنت فوليوم"
keywords: ["تخزين يعيش أطول من الحاوية", "حجم Docker", "‏PV وPVC في Kubernetes", "بيانات قاعدة البيانات تنجو من إعادة التشغيل", "ربط قرص", "الربط المباشر", "storage that outlives the container", "docker volume", "kubernetes pv and pvc", "database data survives restart", "mount a disk", "bind mount"]
---

## التعريف

الحجم الدائم (Persistent Volume) تخزين يُربط بحاوية وتبقى بياناته عند إيقاف الحاوية أو استبدالها أو إعادة جدولتها، بخلاف نظام ملفات الحاوية المؤقت.

## أين تسمعه؟

في خيارات `-v` في Docker، وكائنات PV/PVC في Kubernetes، وتشغيل قواعد البيانات في حاويات.

## أمثلة

- Mount a volume at `/var/lib/postgresql/data` so the data survives restarts.
  - اربط حجماً عند `/var/lib/postgresql/data` لتنجو البيانات من إعادة التشغيل.
- Without a persistent volume the upload folder is wiped on redeploy.
  - بدون حجم دائم يُمحى مجلد الرفع عند إعادة النشر.

## خطأ شائع

كتابة رفوعات المستخدمين على قرص الحاوية نفسها. تختفي عند النشر التالي؛ استخدم حجماً أو تخزين كائنات.

## لا تخلطه مع

التخزين المؤقت (Ephemeral) الذي يُمحى عند زوال الحاوية.

## قلها في العمل

- Does this need a persistent volume?
  - هل يحتاج هذا حجماً دائماً؟
- Back up the volume regularly.
  - انسخ الحجم احتياطياً بانتظام.
