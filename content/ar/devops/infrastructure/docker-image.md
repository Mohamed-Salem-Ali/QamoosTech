---
id: docker-image
category: devops
subcategory: infrastructure
level: intermediate
related: [containerization, container-registry, multi-stage-build]
tags: [docker]
term: "Docker Image"
translation: "صورة Docker"
pronunciation: "دوكر إميج"
keywords: ["قالب للحاوية للقراءة فقط", "بناء صورة Docker", "وسم الصورة", "تقليل حجم الصورة", "read-only template for a container", "build a docker image", "image tag", "docker build output", "image size reduction"]
---

## التعريف

قالب للقراءة فقط يحتوي التطبيق وكل ما يحتاجه ليعمل، مثل الشيفرة والمكتبات والإعدادات. والحاوية نسخة تعمل من الصورة.

## أين تسمعه؟

في خطوط البناء، وسجلات الحاويات، وملفات النشر.

## أمثلة

- The docker image is 1.2 GB, so we need a smaller base image.
  - حجم صورة Docker 1.2 غيغابايت، لذا نحتاج إلى صورة أساسية أصغر.
- Tag the image with the commit hash before you push it.
  - ضع وسماً على الصورة برقم الالتزام قبل دفعها.

## خطأ شائع

بناء صورة تحتوي أسراراً داخلها. أي شخص يستطيع سحب الصورة يستطيع قراءة تلك الأسرار.

## لا تخلطه مع

الصورة هي القالب، والحاوية هي النسخة التي تعمل بعد تشغيلها من هذا القالب.
