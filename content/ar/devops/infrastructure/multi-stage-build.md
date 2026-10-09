---
id: multi-stage-build
category: devops
subcategory: infrastructure
level: intermediate
related: [containerization, container-registry, pipeline]
tags: [docker]
aliases: ["multistage build", "multi-stage dockerfile"]
term: "Multi-Stage Build"
translation: "البناء متعدد المراحل"
pronunciation: "مالتي ستيج بيلد"
keywords: ["صورة Docker أصغر", "البناء في مرحلة والتشغيل في أخرى", "نسخ الناتج فقط", "بلا مترجمات في الإنتاج", "‏FROM build AS builder", "صورة نهائية رشيقة", "smaller docker image", "build in one stage run in another", "copy only the output", "no compilers in production", "from build as builder", "slim final image"]
---

## التعريف

البناء متعدد المراحل (Multi-Stage Build) يستخدم عدة خطوات `FROM` في Dockerfile واحد: تبني الأدوات الثقيلة التطبيق في المرحلة الأولى، ثم يُنسخ الناتج النهائي فقط إلى صورة نهائية صغيرة.

## أين تسمعه؟

في ملفات Dockerfile لتطبيقات Node وGo وPython، ومراجعات حجم الصور، وتقوية الأمان.

## أمثلة

- The multi-stage build shrank the image from 1.2 GB to 150 MB.
  - قلّص البناء متعدد المراحل الصورة من 1.2 جيجابايت إلى 150 ميجابايت.
- Only copy the compiled binary into the final stage.
  - انسخ الملف التنفيذي المترجم فقط إلى المرحلة النهائية.
- The first stage compiles the code with the full toolchain, and the final stage copies only the binary.
  - تُترجم المرحلة الأولى الشيفرة بسلسلة الأدوات الكاملة، وتنسخ المرحلة النهائية الملف التنفيذي فقط.

## خطأ شائع

نسخ شجرة المصدر كلها إلى المرحلة النهائية. هذا يعيد الحجم والأسرار التي أردت تركها.

## لا تخلطه مع

ملف Dockerfile بمرحلة واحدة حيث تبقى أدوات البناء في الصورة التي تشحنها.

## قلها في العمل

- Split this into build and runtime stages.
  - قسّم هذا إلى مرحلتي بناء وتشغيل.
- Why is the image so big?
  - لماذا الصورة كبيرة هكذا؟
