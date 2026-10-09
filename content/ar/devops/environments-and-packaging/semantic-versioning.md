---
id: semantic-versioning
category: devops
subcategory: environments-and-packaging
level: intermediate
related: [version-pinning, lock-file, distribution-package]
tags: [python, javascript]
aliases: ["semver"]
term: "Semantic Versioning"
translation: "الترقيم الدلالي للإصدارات"
pronunciation: "سيمانتك فيرجنينج"
keywords: ["رئيسي وفرعي وتصحيحي", "أرقام إصدار مثل 1.4.2", "التغيير المكسِّر يعني رئيسي", "الترقيم الدلالي", "نطاقات الإصدارات", "ما حجم هذا التحديث", "major minor patch", "1.4.2 version numbers", "breaking change means major", "semver", "caret and tilde ranges", "how big is this update"]
---

## التعريف

الترقيم الدلالي (Semantic Versioning) يرقّم الإصدارات بصيغة MAJOR.MINOR.PATCH. الرئيسي قد يكسر التوافق، والفرعي يضيف ميزات بتوافق، والتصحيحي يصلح الأخطاء فقط.

## أين تسمعه؟

في ملاحظات الإصدار، وتحديثات الاعتماديات، وكلما سأل أحدهم "هل الترقية آمنة؟".

## أمثلة

- It's 2.3.1 to 2.3.2, just a patch, so it should be safe.
  - من 2.3.1 إلى 2.3.2 مجرد تصحيح، فيفترض أنها آمنة.
- Going from 3.x to 4.0 is a major version; read the migration guide.
  - الانتقال من 3.x إلى 4.0 إصدار رئيسي؛ اقرأ دليل الترحيل.
- Upgrading from 2.4.0 to 2.5.0 adds features, and 2.5.1 only fixes a bug.
  - الترقية من 2.4.0 إلى 2.5.0 تضيف ميزات، أما 2.5.1 فيصلح خللاً فقط.

## خطأ شائع

الثقة العمياء به. هو وعد من المشرفين وبعض المشاريع تخالفه.

## لا تخلطه مع

الترقيم بالتقويم (مثل 2026.10) الذي يرقّم الإصدارات بالتاريخ لا بحجم التغيير.

## قلها في العمل

- Bump the minor version for this new feature.
  - ارفع الإصدار الفرعي لهذه الميزة الجديدة.
- Pin to the same major version to avoid breaking changes.
  - ثبّت على الإصدار الرئيسي نفسه لتجنب التغييرات المكسِّرة.
