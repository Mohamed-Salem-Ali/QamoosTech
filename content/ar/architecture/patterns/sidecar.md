---
id: sidecar
category: architecture
subcategory: patterns
level: intermediate
related: [cross-cutting-concern, decoupling, container-orchestration]
term: "Sidecar"
translation: "النمط الجانبي"
pronunciation: "سايد كار"
keywords: ["حاوية مساعدة بجوار التطبيق", "وكيل السجلات بجوار الخدمة", "وكيل شبكة الخدمات", "نمط الجانبي", "helper container next to the app", "logging agent beside service", "service mesh proxy", "sidecar pattern", "run a helper process with the app"]
---

## التعريف

عملية أو حاوية مساعدة تعمل بجوار التطبيق وتتولى مهمة مشتركة، مثل السجلات أو الأمان أو الشبكات، فتبقى شيفرة التطبيق أبسط.

## أين تسمعه؟

في بودات Kubernetes، وتصاميم شبكات الخدمات، ومراجعات المعمارية حول المسؤوليات المشتركة.

## أمثلة

- A sidecar container ships the logs from the application to the central store.
  - تنقل حاوية جانبية السجلات من التطبيق إلى المخزن المركزي.
- The sidecar handles TLS, so the service code does not need certificates.
  - تتولى الحاوية الجانبية تشفير TLS، فلا تحتاج شيفرة الخدمة إلى شهادات.
- The sidecar proxy handles retries for the service, so the code does not implement them.
  - يتولى الوكيل المساعد (sidecar) إعادة المحاولات للخدمة، فلا تنفّذها الشيفرة.

## خطأ شائع

وضع منطق العمل في الحاوية الجانبية. يجب أن تتولى الجوانب التحتية فقط، ويبقى منطق التطبيق في التطبيق.

## لا تخلطه مع

الحاوية الجانبية تعمل بجوار تطبيق واحد وتشاركه دورة حياته، أما الاهتمام المتقاطع فهو الحاجة المشتركة نفسها، مثل السجلات.
