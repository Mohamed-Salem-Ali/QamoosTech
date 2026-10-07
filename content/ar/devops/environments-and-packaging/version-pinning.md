---
id: version-pinning
category: devops
subcategory: environments-and-packaging
level: intermediate
related: [lock-file, semantic-versioning, package-dependency]
tags: [python]
aliases: ["pin a version", "pinned dependency"]
term: "Version Pinning"
translation: "تثبيت الإصدار"
pronunciation: "فيرجن بيننج"
keywords: ["قفل اعتمادية على إصدار واحد", "تثبيت requests على إصدار محدد", "تجنب التحديثات المفاجئة", "إصدار محدد بدقة", "نطاق إصدارات متوافقة", "تثبيت الحزمة", "lock a dependency to one version", "requests==2.32.0", "avoid surprise upgrades", "exact version", "compatible version range", "pin the package"]
---

## التعريف

تثبيت الإصدار (Version Pinning) يعني تحديد اعتمادية على إصدار واحد بدقة، مثل `requests==2.32.0`، فلا تصل التحديثات دون علم.

## أين تسمعه؟

في ملفات `requirements.txt`، ومراجعات النشر، ونقاشات سبب تعطل بناء فجأة.

## أمثلة

- Pin the version in production; update it deliberately.
  - ثبّت الإصدار في الإنتاج وحدّثه عن قصد.
- Pinning to `>=2.0` isn't pinning; it still allows any newer version.
  - التثبيت بـ `>=2.0` ليس تثبيتاً؛ فهو يسمح بأي إصدار أحدث.

## خطأ شائع

التثبيت مرة وعدم التحديث أبداً. الإصدارات القديمة تفقد إصلاحات الأمان؛ جدول تحديثات منتظمة.

## لا تخلطه مع

ملف القفل الذي يثبّت كل اعتمادية تلقائياً. التثبيت هو الفكرة وملف القفل هو الأداة.

## قلها في العمل

- Pin it to the last known good version.
  - ثبّته على آخر إصدار سليم معروف.
- Unpinned dependencies are why the build broke.
  - الاعتماديات غير المثبتة هي سبب تعطل البناء.
