---
id: pod
category: devops
subcategory: infrastructure
level: intermediate
related: [container-orchestration, containerization, sidecar, kubernetes]
tags: [kubernetes]
term: "Pod"
translation: "البود"
pronunciation: "بود"
keywords: ["أصغر وحدة في Kubernetes", "حاوية أو أكثر معاً", "إعادة تشغيل البود", "البودات التي تعمل", "smallest unit in kubernetes", "one or more containers together", "pod restarts", "running pods", "pod shares network"]
---

## التعريف

أصغر وحدة يشغّلها منظّم مثل Kubernetes. يحتوي البود حاوية أو أكثر تتشارك عنوان الشبكة والتخزين، وتبدأ وتتوقف معاً.

## أين تسمعه؟

في ملفات Kubernetes، ولوحات تحكم العنقود، ونقاشات سبب إعادة تشغيل خدمة ما.

## أمثلة

- The API pod restarted after it ran out of memory.
  - أعيد تشغيل بود الواجهة البرمجية بعد أن نفدت ذاكرته.
- Put the log shipper in the same pod as the application.
  - ضع أداة إرسال السجلات في البود نفسه مع التطبيق.
- The pod runs the app and a log shipper side by side, sharing the same network address.
  - تشغّل الحاوية (pod) التطبيق ومُرسِل السجلات جنباً إلى جنب، ويشتركان في عنوان الشبكة نفسه.

## خطأ شائع

الظن بأن البود الواحد هو تطبيق واحد. قد يحتوي البود عدة حاويات، ويستطيع المنظم استبدال البودات في أي وقت.

## لا تخلطه مع

الحاوية تشغّل عملية واحدة، أما البود فيجمع حاويات تُجدوَل معاً.
