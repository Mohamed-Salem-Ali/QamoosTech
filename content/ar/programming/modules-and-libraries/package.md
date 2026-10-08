---
id: package
category: programming
subcategory: modules-and-libraries
level: beginner
related: [module, import, third-party-library]
tags: [python, javascript]
aliases: ["packages"]
term: "Package"
translation: "الحزمة"
pronunciation: "باكيدج"
keywords: ["مجلد من الوحدات", "الملف __init__.py", "تثبيت حزمة بـ pip", "تجميع وحدات مترابطة", "هيكل حزمة بايثون", "حزمة npm", "folder of modules", "__init__.py", "install a package with pip", "group related modules", "python package structure", "npm package"]
---

## التعريف

الحزمة (Package) مجلد من الوحدات المترابطة تستوردها معاً. وتعني الكلمة أيضاً مكتبة تثبّتها، مثل ما يأتي من PyPI أو npm.

## أين تسمعه؟

في هيكل مشاريع بايثون وجافاسكريبت، وتعليمات التثبيت، ونقاشات الاعتماديات.

## أمثلة

- The `billing` package contains the invoice and payment modules.
  - تحتوي حزمة `billing` على وحدتي الفواتير والمدفوعات.
- Install the package with pip before running the script.
  - ثبّت الحزمة بـ pip قبل تشغيل السكريبت.
- The team published the utils package on PyPI, so other projects can install it.
  - نشر الفريق حزمة utils على PyPI، فتستطيع المشاريع الأخرى تثبيتها.

## خطأ شائع

استخدام الكلمة نفسها لفكرتين دون ملاحظة. قد تكون الحزمة مجلد كودك أنت أو شيئاً نزّلته؛ والسياق يوضح أيهما.

## لا تخلطه مع

الوحدة (Module) وهي ملف واحد. أما الحزمة فتجمع وحدات في مجلد.

## قلها في العمل

- Move these helpers into a package so imports stay tidy.
  - انقل هذه الدوال المساعدة إلى حزمة لتبقى الاستيرادات مرتبة.
- Pin the package version in the requirements file.
  - ثبّت إصدار الحزمة في ملف المتطلبات.
