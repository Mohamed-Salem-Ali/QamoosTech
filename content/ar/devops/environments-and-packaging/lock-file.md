---
id: lock-file
category: devops
subcategory: environments-and-packaging
level: intermediate
related: [version-pinning, package-dependency, semantic-versioning]
tags: [python, javascript]
aliases: ["lockfile", "package-lock", "poetry.lock"]
term: "Lock File"
translation: "ملف القفل"
pronunciation: "لوك فايل"
keywords: ["الإصدارات المثبتة بدقة", "تثبيتات قابلة للتكرار", "ملفات poetry.lock وpackage-lock", "نفس الإصدارات في كل مكان", "تجميد شجرة الاعتماديات", "ضمّ ملف القفل للمستودع", "exact versions installed", "reproducible installs", "poetry.lock package-lock", "same versions everywhere", "freeze the dependency tree", "commit the lock file"]
---

## التعريف

ملف القفل (Lock File) يسجل الإصدار الدقيق لكل اعتمادية مثبتة، بما فيها غير المباشرة، فيثبّت الجميع الحزم نفسها.

## أين تسمعه؟

في `package-lock.json` و`poetry.lock` و`uv.lock`، وفي خطوط النشر، وعند التحقيق في "يعمل عندي فقط".

## أمثلة

- Commit the lock file so the server installs the same versions.
  - ضمّ ملف القفل للمستودع ليثبّت الخادم الإصدارات نفسها.
- The build broke after a new release; the lock file would have prevented it.
  - تعطل البناء بعد إصدار جديد؛ وكان ملف القفل سيمنع ذلك.
- The lock file pins requests to 2.31.0, so the build installs the same version as yesterday.
  - يثبّت ملف القفل مكتبة requests على 2.31.0، فيثبّت البناء النسخة نفسها التي استُخدمت بالأمس.

## خطأ شائع

تعديله يدوياً أو تجاهله في git. تولّده الأداة ويجب ضمّه للمستودع.

## لا تخلطه مع

ملف `requirements.txt` بإصدارات مرنة وهو يسمح بتثبيتات مختلفة مع الوقت. وملف القفل يزيل هذه الحرية.

## قلها في العمل

- Regenerate the lock file after changing dependencies.
  - أعد توليد ملف القفل بعد تغيير الاعتماديات.
- CI installs strictly from the lock file.
  - يثبّت CI من ملف القفل بدقة.
