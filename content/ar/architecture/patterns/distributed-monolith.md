---
id: distributed-monolith
category: architecture
subcategory: patterns
level: intermediate
related: [monolith-vs-microservices, decoupling, modular-monolith]
term: "Distributed Monolith"
translation: "المونوليث الموزع"
pronunciation: "ديستريبيوتد مونوليث"
keywords: ["خدمات مصغرة يجب نشرها معاً", "ترابط وثيق عبر الشبكة", "أسوأ ما في الاثنين", "قاعدة بيانات مشتركة", "تغيير واحد يكسر كثيراً", "خدمات كثيرة الحوار", "microservices that must deploy together", "tight coupling over the network", "worst of both worlds", "shared database", "change one break many", "chatty services"]
---

## التعريف

المونوليث الموزع (Distributed Monolith) نظام مقسّم إلى خدمات كثيرة لكنها مترابطة بإحكام بحيث يجب تغييرها ونشرها معاً. له تكلفة الخدمات المصغرة دون فوائدها.

## أين تسمعه؟

في مراجعات المعمارية وقصص التجارب عن هجرات الخدمات المصغرة الفاشلة.

## أمثلة

- Five services share one database and deploy in lockstep; it's a distributed monolith.
  - خمس خدمات تتشارك قاعدة بيانات وتُنشر معاً؛ إنه مونوليث موزع.
- We got network latency and operational cost but no independence.
  - حصلنا على زمن الشبكة وتكلفة التشغيل دون استقلالية.

## خطأ شائع

التقسيم قبل فهم الحدود. الخدمات ذات الحدود غير الواضحة تنتهي بنداء بعضها باستمرار.

## لا تخلطه مع

المونوليث المعياري وحدة نشر واحدة بوحدات داخلية نظيفة. يتجنب كلفة الشبكة ويحفظ الحدود.

## قلها في العمل

- Are we building microservices or a distributed monolith?
  - هل نبني خدمات مصغرة أم مونوليثاً موزعاً؟
- If they always deploy together, merge them.
  - إذا كانت تُنشر معاً دائماً فادمجها.
