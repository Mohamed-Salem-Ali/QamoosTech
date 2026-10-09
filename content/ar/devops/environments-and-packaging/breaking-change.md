---
id: breaking-change
category: devops
subcategory: environments-and-packaging
level: intermediate
related: [semantic-versioning, backward-compatibility, version-pinning]
aliases: ["breaking changes"]
term: "Breaking Change"
translation: "تغيير كاسر"
pronunciation: "بريكينغ تشينج"
keywords: ["تغيير يكسر المستخدمين الحاليين", "تحديث غير متوافق", "التحديث كسر الشيفرة", "حذف دالة من المكتبة", "change that breaks existing users", "incompatible update", "upgrade breaks my code", "remove a function from the library", "major version change"]
---

## التعريف

تغيير في مكتبة أو واجهة برمجية أو منتج يوقف عمل الشيفرة القائمة، فيضطر المستخدمون إلى تغيير شيفرتهم أو إعدادهم ليواصلوا العمل.

## أين تسمعه؟

في ملاحظات الإصدار، وأدلة الترقية، ونقاشات النسخة الرئيسية الجديدة.

## أمثلة

- The new version removes the old login method, which is a breaking change.
  - تزيل النسخة الجديدة طريقة تسجيل الدخول القديمة، وهذا تغيير كاسر.
- Mark breaking changes clearly in the release notes.
  - حدّد التغييرات الكاسرة بوضوح في ملاحظات الإصدار.
- The v3 release renamed the user_id field, a breaking change for every client.
  - أعاد الإصدار v3 تسمية الحقل user_id، وهو تغيير كاسر لكل العملاء.

## خطأ شائع

إصدار تغيير كاسر في نسخة فرعية أو تصحيحية. يثق المستخدمون بهذه الأرقام، لذلك تُنشر التغييرات الكاسرة في نسخة رئيسية.

## لا تخلطه مع

التغيير الكاسر يوقف عمل الشيفرة القائمة، أما الإهمال (Deprecation) فيحذّر من إزالة شيء لاحقاً ولا يزال يعمل الآن.
