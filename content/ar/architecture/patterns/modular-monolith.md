---
id: modular-monolith
category: architecture
subcategory: patterns
level: intermediate
related: [monolith-vs-microservices, distributed-monolith, separation-of-concerns]
aliases: ["modulith"]
term: "Modular Monolith"
translation: "المونوليث المعياري"
pronunciation: "موديولار مونوليث"
keywords: ["وحدة نشر واحدة بوحدات نظيفة", "حدود داخل تطبيق واحد", "ابدأ هنا قبل الخدمات المصغرة", "فرض قواعد الوحدات", "لا شبكة بين الوحدات", "سهل التقسيم لاحقاً", "one deployable clean modules", "boundaries inside one app", "start here before microservices", "enforce module rules", "no network between modules", "easy to split later"]
---

## التعريف

المونوليث المعياري (Modular Monolith) تطبيق واحد يُنشر كوحدة واحدة، تُنظَّم شيفرته في وحدات مفصولة جيداً بحدود واضحة وطرق محدودة لنداء بعضها.

## أين تسمعه؟

في نقاشات المعمارية حول البدء ببساطة، ونصيحة "المونوليث أولاً"، وتخطيط الهجرة.

## أمثلة

- We run a modular monolith: billing and members are separate modules in one app.
  - نشغّل مونوليثاً معيارياً: الفوترة والأعضاء وحدتان منفصلتان في تطبيق واحد.
- Modules only talk through public interfaces.
  - الوحدات تتخاطب عبر واجهات عامة فقط.
- The orders module calls the billing module only through its public interface.
  - تستدعي وحدة الطلبات وحدة الفوترة عبر واجهتها العامة فقط.

## خطأ شائع

ترك الوحدات تمد يدها إلى جداول بعضها أو تفاصيلها الداخلية. فيتحول إلى كرة طين متشابكة.

## لا تخلطه مع

الخدمات المصغرة حيث تُنشر كل وحدة وتتوسع منفصلة عبر الشبكة.

## قلها في العمل

- Keep it a modular monolith until we need to scale parts separately.
  - أبقه مونوليثاً معيارياً حتى نحتاج توسيع أجزاء منفصلة.
- Enforce the module boundaries in CI.
  - افرض حدود الوحدات في CI.
