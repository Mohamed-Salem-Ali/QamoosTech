---
id: type-hint
category: programming
subcategory: types-and-typing
level: intermediate
related: [dynamic-typing, static-typing, data-type]
tags: [python, typescript]
aliases: ["type annotation", "type hints", "type annotations"]
term: "Type Hint"
translation: "تلميح النوع"
pronunciation: "تايب هنت"
keywords: ["تحديد أنواع معاملات الدالة", "إخبار المحرر بالنوع", "تعليقات النوع في بايثون", "def f(x: int) -> str", "فحص mypy", "أنواع TypeScript", "annotate function parameters", "tell the editor the type", "python type annotations", "def f(x: int) -> str", "mypy checks", "typescript types"]
---

## التعريف

تلميح النوع (Type Hint) ملاحظة في الكود تقول أي نوع يجب أن تكون عليه القيمة. تستخدمها أدوات مثل المحررات وأدوات فحص الأنواع لاكتشاف الأخطاء مبكراً.

## أين تسمعه؟

في مشاريع بايثون وTypeScript، ومراجعات الكود، ونقاشات جعل اللغة الديناميكية أكثر أماناً.

## أمثلة

- Add type hints to the function signature so the editor can warn us.
  - أضف type hints إلى تعريف الدالة ليتمكن المحرر من تنبيهنا.
- Python ignores type hints at runtime; a separate checker reads them.
  - بايثون تتجاهل type hints وقت التشغيل؛ أداة فحص منفصلة هي التي تقرؤها.

## خطأ شائع

الظن بأن type hints تُفرض. في بايثون لا تُفحص أثناء التشغيل؛ تحتاج أداة مثل mypy.

## لا تخلطه مع

فحص وقت التشغيل مثل `isinstance` الذي يفحص القيمة فعلياً أثناء عمل البرنامج.

## قلها في العمل

- Please add type hints to the public functions.
  - أرجو إضافة type hints إلى الدوال العامة.
- The checker caught a wrong type before the tests even ran.
  - التقطت أداة الفحص نوعاً خاطئاً قبل أن تعمل الاختبارات.
