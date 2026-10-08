---
id: end-to-end-test
category: testing
subcategory: test-types
level: intermediate
related: [integration-test, unit-test, smoke-test]
aliases: ["E2E test"]
term: "End-to-End Test"
translation: "اختبار شامل من البداية إلى النهاية"
pronunciation: "إند تو إند تيست"
keywords: ["اختبار مسار المستخدم كاملاً", "اختبار التطبيق في المتصفح", "اختبار E2E", "اختبار من تسجيل الدخول حتى الدفع", "test the whole user flow", "browser test of the app", "e2e test", "test from login to checkout", "playwright or cypress test"]
---

## التعريف

اختبار يشغّل التطبيق كاملاً كما يستخدمه المستخدم، من الواجهة مروراً بالخلفية وصولاً إلى قاعدة البيانات، ليتحقق من أن مساراً كاملاً يعمل.

## أين تسمعه؟

في فحوص الإصدار للمسارات الحرجة، مثل التسجيل والدفع وإعادة تعيين كلمة المرور.

## أمثلة

- The end-to-end test signs up, adds an item, and pays.
  - يسجّل الاختبار الشامل حساباً جديداً، ويضيف منتجاً، ثم يدفع.
- End-to-end tests are slow, so keep only the most important flows.
  - الاختبارات الشاملة بطيئة، لذا احتفظ فقط بأهم المسارات.

## خطأ شائع

كتابة اختبارات شاملة لكل تفصيل صغير. هي بطيئة وهشة، لذا استخدمها للمسارات الرئيسية للمستخدم، وغطِّ الباقي باختبارات الوحدات.

## لا تخلطه مع

الاختبار الشامل يشغّل النظام كله من جهة المستخدم، أما اختبار التكامل فيتحقق من أن جزأين يعملان معاً.
