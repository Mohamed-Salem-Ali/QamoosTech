---
id: third-party-library
category: programming
subcategory: modules-and-libraries
level: beginner
related: [package, standard-library, dependency]
aliases: ["external library", "library"]
term: "Third-Party Library"
translation: "المكتبة الخارجية"
pronunciation: "ثيرد بارتي لايبريري"
keywords: ["حزمة تُثبَّت بـ pip", "مكتبة من PyPI أو npm", "اعتمادية خارجية", "حزمة مفتوحة المصدر", "إضافة اعتمادية", "مكتبة كتبها آخرون", "package installed with pip", "library from pypi or npm", "external dependency", "open source package", "add a dependency", "library written by others"]
---

## التعريف

المكتبة الخارجية (Third-Party Library) كود كتبه شخص آخر وتثبّته وتستخدمه في مشروعك، مثلاً من PyPI أو npm.

## أين تسمعه؟

في نقاشات الاعتماديات، ومراجعات الأمان لما يعتمد عليه المشروع، وعند الاختيار بين كتابة الكود وإضافة حزمة.

## أمثلة

- We use a third-party library for date parsing.
  - نستخدم مكتبة خارجية لتحليل التواريخ.
- Every third-party library is a dependency we have to keep updated.
  - كل مكتبة خارجية اعتمادية علينا أن نبقيها محدّثة.

## خطأ شائع

إضافة المكتبات باستخفاف. كل واحدة تجلب عمل تحديث وأمان وتوافق؛ أضف واحدة فقط عندما تستحق مكانها.

## لا تخلطه مع

المكتبة القياسية التي تأتي مع اللغة ولا تحتاج تثبيتاً.

## قلها في العمل

- Check the library's maintenance before depending on it.
  - تحقق من صيانة المكتبة قبل الاعتماد عليها.
- Pin the third-party libraries so builds are repeatable.
  - ثبّت إصدارات المكتبات الخارجية لتكون عمليات البناء قابلة للتكرار.
