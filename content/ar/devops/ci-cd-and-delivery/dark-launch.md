---
id: dark-launch
category: devops
subcategory: ci-cd-and-delivery
level: intermediate
related: [feature-flag, canary-release, ab-test]
term: "Dark Launch"
translation: "الإطلاق الصامت"
pronunciation: "دارك لونش"
keywords: ["نشر شيفرة مخفية عن المستخدمين", "اختبار بحركة مرور حقيقية دون عرض", "نسخ حركة المرور إلى خدمة جديدة", "ميزة مخفية في الإنتاج", "deploy code hidden from users", "test under real traffic without showing it", "copy traffic to new service", "shadow traffic test", "hidden feature in production"]
---

## التعريف

نشر الشيفرة إلى بيئة الإنتاج مع بقاء الميزة مخفية عن المستخدمين، ليختبر الفريق أداءها تحت حمل حقيقي قبل تفعيلها لأي أحد.

## أين تسمعه؟

في تخطيط الإصدارات، ونقاشات اختبار خدمة جديدة بحركة مرور حقيقية.

## أمثلة

- The search service runs in a dark launch, so no user sees it yet.
  - تعمل خدمة البحث في إطلاق صامت، فلا يراها أي مستخدم بعد.
- We copied 10 percent of the traffic to the new service and ignored its responses.
  - نسخنا 10% من حركة المرور إلى الخدمة الجديدة وتجاهلنا استجاباتها.

## خطأ شائع

تسمية أي ميزة مخفية إطلاقاً صامتاً. الهدف هو اختبار الشيفرة تحت حمل حقيقي، لا مجرد إخفائها.

## لا تخلطه مع

الإطلاق الصامت ينشر شيفرة مخفية لاختبارها، أما مفتاح الميزة فيتحكم في من يرى ميزة مكتملة.
