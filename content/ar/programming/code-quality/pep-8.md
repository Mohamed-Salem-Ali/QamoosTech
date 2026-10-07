---
id: pep-8
category: programming
subcategory: code-quality
level: beginner
related: [linting, pythonic, refactoring]
tags: [python]
aliases: ["pep8", "python style guide"]
term: "PEP 8"
translation: "دليل أسلوب بايثون"
pronunciation: "بيب إيت"
keywords: ["دليل أسلوب بايثون", "قواعد تنسيق الكود", "تسمية snake_case", "إزاحة 4 مسافات", "حد طول السطر", "‏ruff و black و flake8", "python style guide", "code formatting rules", "snake_case naming", "4 spaces indentation", "line length limit", "ruff black flake8"]
---

## التعريف

PEP 8 هو الدليل الرسمي لأسلوب بايثون. يصف كيف تسمّي الأشياء وتزيح الكود وتنسّقه لتبدو برامج بايثون متسقة.

## أين تسمعه؟

في مراجعات كود بايثون، وإعدادات أدوات الفحص والتنسيق، ومستندات استقبال المطورين الجدد.

## أمثلة

- Please follow PEP 8: four spaces and `snake_case` names.
  - من فضلك اتبع PEP 8: أربع مسافات وأسماء بصيغة `snake_case`.
- The linter reports a PEP 8 violation on that line.
  - تبلّغ أداة الفحص عن مخالفة لـ PEP 8 في ذلك السطر.

## خطأ شائع

الجدال حول الأسلوب يدوياً في المراجعات. اترك أداة تنسيق مثل Ruff أو Black تفرضه تلقائياً.

## لا تخلطه مع

أداة الفحص (Linter) التي تجد الأخطاء المحتملة. أما PEP 8 فهو مجرد اتفاق الأسلوب الذي تفحصه الأدوات.

## قلها في العمل

- Run the formatter so we don't discuss PEP 8 in the review.
  - شغّل أداة التنسيق حتى لا نناقش PEP 8 في المراجعة.
- The CI fails on style, so fix the PEP 8 warnings first.
  - يفشل الـ CI بسبب الأسلوب، فأصلح تحذيرات PEP 8 أولاً.
