---
id: distribution-package
category: devops
subcategory: environments-and-packaging
level: intermediate
related: [pypi, pyproject-toml, editable-install]
tags: [python]
aliases: ["wheel", "sdist", "source distribution"]
term: "Distribution Package"
translation: "حزمة التوزيع"
pronunciation: "ديستريبيوشن باكدج"
keywords: ["ملف wheel", "أرشيف المصدر sdist", "الحزمة المبنية للنشر", "ما ترفعه إلى PyPI", "أمر بناء الحزمة", "مجلد dist", "wheel file", "sdist source archive", "built package to publish", "what you upload to pypi", "python -m build", "dist folder"]
---

## التعريف

حزمة التوزيع (Distribution Package) هي الملف المبني الذي تنشره وتثبته، وغالباً wheel (`.whl` جاهز للتثبيت) أو sdist (أرشيف مصدر).

## أين تسمعه؟

عند نشر مكتبة بايثون، وفي أدلة التغليف، ومهام CI التي تبني الإصدارات وترفعها.

## أمثلة

- Build the distribution, then upload the wheel and the sdist.
  - ابنِ حزمة التوزيع ثم ارفع ملفي wheel وsdist.
- Install the wheel in a clean environment to test it.
  - ثبّت ملف wheel في بيئة نظيفة لاختباره.
- We uploaded the wheel and the source archive to the package index.
  - رفعنا ملف wheel وأرشيف المصدر إلى فهرس الحزم.

## خطأ شائع

الخلط بينها وبين حزمة الاستيراد. حزمة التوزيع هي ما تثبّته وحزمة الاستيراد هي ما تستخدمه في `import`.

## لا تخلطه مع

الـ `package` في الكود وهي مجلد وحدات فقط. أما حزمة التوزيع فهي الأرشيف القابل للشحن لواحدة أو أكثر منها.

## قلها في العمل

- CI builds the wheel on every tag.
  - يبني CI ملف wheel عند كل وسم.
- The sdist is missing a file; check the manifest.
  - ملف sdist ينقصه ملف؛ افحص الـ manifest.
