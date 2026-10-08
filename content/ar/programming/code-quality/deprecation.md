---
id: deprecation
category: programming
subcategory: code-quality
level: intermediate
related: [breaking-change, backward-compatibility, refactoring]
term: "Deprecation"
translation: "الإهمال"
pronunciation: "ديبريكيشن"
keywords: ["معلَم بأنه مهمل", "الدالة ستُزال لاحقاً", "تحذير الإهمال", "توقف عن استخدام الدالة القديمة", "marked as deprecated", "function will be removed", "deprecation warning", "stop using old function", "old API still works for now"]
---

## التعريف

وضع علامة على ميزة أو دالة أو واجهة بأنها قديمة، لتحذير المستخدمين من الانتقال عنها. ما زالت تعمل الآن، لكنها ستُزال في نسخة لاحقة.

## أين تسمعه؟

في الشيفرة المصدرية للمكتبات، وفي رسائل التحذير أثناء التشغيل، وفي أدلة الترقية.

## أمثلة

- The old helper is deprecated, so use the new function instead.
  - الدالة المساعدة القديمة مهملة، لذا استخدم الدالة الجديدة بدلاً منها.
- The warning says this parameter is deprecated since version 2.
  - تقول رسالة التحذير إن هذا المعامل مهمل منذ الإصدار 2.

## خطأ شائع

إهمال ميزة دون إخبار أحد بكيفية استبدالها، أو إزالتها قبل انتهاء فترة التحذير.

## لا تخلطه مع

الميزة المهملة ما زالت تعمل لكنها ستُزال، أما التغيير الكاسر فيتوقف عن العمل عند إصداره.
