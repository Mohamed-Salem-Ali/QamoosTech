---
id: package-manager
category: devops
subcategory: environments-and-packaging
level: beginner
related: [pip, lock-file, package-dependency]
aliases: ["npm", "pnpm", "yarn", "poetry", "uv"]
term: "Package Manager"
translation: "مدير الحزم"
pronunciation: "باكدج مانجر"
keywords: ["‏npm وyarn وpnpm", "‏pip وpoetry وuv", "تثبيت المكتبات وتحديثها", "يحل الاعتماديات", "ينشئ ملف قفل", "تشغيل السكربتات", "npm yarn pnpm", "pip poetry uv", "install and update libraries", "resolves dependencies", "creates lock file", "run scripts"]
---

## التعريف

مدير الحزم (Package Manager) أداة تنزّل وتثبّت وتحدّث وتزيل المكتبات التي يعتمد عليها المشروع، وتحل تعارضات الإصدارات وتكتب غالباً ملف قفل. أمثلة: npm وpnpm وpip وPoetry وuv.

## أين تسمعه؟

في تعليمات الإعداد (`npm install` و`pip install`)، وسكربتات CI، وقرارات "أي مدير حزم نستخدم؟".

## أمثلة

- Run the package manager to install everything from the lock file.
  - شغّل مدير الحزم لتثبيت كل شيء من ملف القفل.
- Don't mix npm and yarn in the same project.
  - لا تخلط npm وyarn في المشروع نفسه.

## خطأ شائع

خلط مديري حزم في مشروع واحد. يكتبان ملفات قفل مختلفة ويثبتان إصدارات مختلفة.

## لا تخلطه مع

مدير حزم نظام التشغيل (apt وbrew) الذي يثبّت برامج لا مكتبات مشروع.

## قلها في العمل

- Which package manager does this repo use?
  - أي مدير حزم يستخدمه هذا المستودع؟
- Delete node_modules and reinstall.
  - احذف node_modules وأعد التثبيت.
