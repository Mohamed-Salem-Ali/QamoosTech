---
id: standard-library
category: programming
subcategory: modules-and-libraries
level: beginner
related: [module, package, third-party-library]
tags: [python]
aliases: ["stdlib", "built-in modules"]
term: "Standard Library"
translation: "المكتبة القياسية"
pronunciation: "ستاندرد لايبريري"
keywords: ["الوحدات المدمجة", "تأتي مع بايثون", "لا تحتاج pip install", "‏datetime وjson وpathlib", "البطاريات المرفقة", "ما تأتي به بايثون", "built in modules", "comes with python", "no pip install needed", "datetime json pathlib", "batteries included", "what python ships with"]
---

## التعريف

المكتبة القياسية (Standard Library) مجموعة الوحدات التي تأتي مع اللغة، مثل `json` و`datetime` و`pathlib` في بايثون، فتستخدمها دون تثبيت أي شيء.

## أين تسمعه؟

في الدروس، وعندما يسأل أحدهم هل يضيف اعتمادية، وفي مراجعات الكود التي تفضّل الأدوات المدمجة.

## أمثلة

- The standard library already handles JSON, so no extra package is needed.
  - المكتبة القياسية تتعامل مع JSON أصلاً، فلا حاجة لحزمة إضافية.
- Check the standard library before adding a dependency.
  - تحقق من المكتبة القياسية قبل إضافة اعتمادية.
- The standard library has datetime, so we did not need another package for dates.
  - تتضمن المكتبة القياسية datetime، فلم نحتج إلى حزمة أخرى للتواريخ.

## خطأ شائع

تثبيت حزمة لشيء تؤديه المكتبة القياسية جيداً أصلاً.

## لا تخلطه مع

المكتبة الخارجية (Third-Party Library) التي تثبّتها على حدة وقد تتغير باستقلال عن اللغة.

## قلها في العمل

- Use `pathlib` from the standard library instead of adding a package.
  - استخدم `pathlib` من المكتبة القياسية بدلاً من إضافة حزمة.
- Fewer dependencies means we stick to the standard library.
  - اعتماديات أقل تعني أن نلتزم بالمكتبة القياسية.
