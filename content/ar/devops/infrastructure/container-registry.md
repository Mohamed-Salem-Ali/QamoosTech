---
id: container-registry
category: devops
subcategory: infrastructure
level: beginner
related: [containerization, pipeline, deployment]
aliases: ["docker registry", "docker hub", "image registry"]
term: "Container Registry"
translation: "سجل الحاويات"
pronunciation: "كونتينر ريجستري"
keywords: ["تخزين صور Docker", "‏Docker Hub وECR وGHCR", "رفع الصور وسحبها", "وسم الصورة", "سجل خاص", "إصدارات الصور", "store docker images", "docker hub ecr ghcr", "push and pull images", "tag the image", "private registry", "image versions"]
---

## التعريف

سجل الحاويات (Container Registry) خدمة تخزن صور الحاويات وتتيح لك رفع إصدارات جديدة وسحبها لتشغيلها على أي خادم. أمثلة: Docker Hub وGitHub Container Registry وAWS ECR.

## أين تسمعه؟

في خطوط CI/CD، وملفات Kubernetes (أسطر `image:`)، وسكربتات النشر.

## أمثلة

- The pipeline builds the image and pushes it to the registry.
  - يبني خط التجهيز الصورة ويرفعها إلى السجل.
- Pin the deployment to a specific tag, not `latest`.
  - ثبّت النشر على وسم محدد وليس `latest`.

## خطأ شائع

نشر الوسم `latest`. لا تعرف أي إصدار يعمل ولا تتراجع بموثوقية.

## لا تخلطه مع

مستودع Git الذي يخزن الكود المصدري. أما السجل فيخزن الصور المبنية.

## قلها في العمل

- Which registry do we push to?
  - إلى أي سجل نرفع؟
- Tag the image with the commit hash.
  - اوسم الصورة بهاش الـ commit.
