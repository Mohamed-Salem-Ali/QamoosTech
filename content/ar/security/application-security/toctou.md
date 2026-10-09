---
id: toctou
category: security
subcategory: application-security
level: intermediate
related: [race-condition, insecure-direct-object-reference, vulnerability]
aliases: ["time of check time of use", "toctou race"]
term: "TOCTOU"
translation: "ثغرة الفحص ثم الاستخدام"
pronunciation: "توكتو"
keywords: ["وقت الفحص ووقت الاستخدام", "الملف يتغير بين الفحص والفتح", "سباق الفحص ثم التنفيذ", "تبديل الرابط الرمزي", "تجاوز فحص الصلاحيات", "فتح ذري", "time of check time of use", "file changes between check and open", "check then act race", "symlink swap", "permission check bypass", "atomic open"]
---

## التعريف

ثغرة TOCTOU (من وقت الفحص إلى وقت الاستخدام) خلل تسابق يُتحقق فيه من شيء ثم يتغير قبل استخدامه، كملف يُفحص على أنه آمن ثم يُبدَّل قبل فتحه.

## أين تسمعه؟

في أدلة البرمجة الآمنة، وكود التعامل مع الملفات، وتدقيقات الأمان، وتقارير CVE.

## أمثلة

- `if os.path.exists(f): open(f)` has a TOCTOU gap.
  - السطر `if os.path.exists(f): open(f)` فيه فجوة TOCTOU.
- Open the file once and act on the handle; don't check by path first.
  - افتح الملف مرة وتصرّف بالمقبض؛ ولا تفحص بالمسار أولاً.
- The check of the file owner happens before the open, which creates a TOCTOU gap.
  - يتم فحص مالك الملف قبل فتحه، وهذا يُحدث ثغرة TOCTOU.

## خطأ شائع

فحص الصلاحيات أو الوجود أولاً ثم التنفيذ لاحقاً. اجعل الفحص والإجراء خطوة ذرية واحدة.

## لا تخلطه مع

حالة التسابق العامة. أما TOCTOU فهي الحالة الأمنية حيث تتيح الفجوة للمهاجم تغيير الكائن.

## قلها في العمل

- That's a TOCTOU bug.
  - هذه ثغرة TOCTOU.
- Use `O_EXCL` so creation and check are one operation.
  - استخدم `O_EXCL` لتكون الإنشاء والفحص عملية واحدة.
