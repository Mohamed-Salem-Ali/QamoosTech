---
id: type-checker
category: testing
subcategory: tools-and-quality
level: intermediate
related: [linting, type-hint, quality-gate]
tags: [python, typescript]
aliases: ["mypy", "pyright", "static type checker", "type checking"]
term: "Type Checker"
translation: "مدقّق الأنواع"
pronunciation: "تايب تشيكر"
keywords: ["أدوات mypy وpyright", "إيجاد أخطاء الأنواع دون تشغيل", "فحص الأنواع الثابت", "فحص تلميحات الأنواع", "نوع معامل خاطئ", "فحص مترجم TypeScript", "mypy pyright", "find type mistakes without running", "static type checking", "check type hints", "wrong argument type", "typescript compiler checks"]
---

## التعريف

مدقّق الأنواع (Type Checker) يقرأ كودك وتلميحات الأنواع فيه ويبلّغ عن أخطاء الأنواع، كتمرير نص حيث يُتوقع رقم، دون تشغيل البرنامج.

## أين تسمعه؟

في فحوص CI، ومشاريع بايثون التي تستخدم mypy أو pyright، وبناءات TypeScript.

## أمثلة

- CI runs the type checker and fails on any error.
  - يشغّل CI مدقّق الأنواع ويفشل عند أي خطأ.
- The type checker caught that `None` can reach this line.
  - التقط مدقّق الأنواع أن `None` قد يصل إلى هذا السطر.

## خطأ شائع

الظن بأنه يفرض الأنواع وقت التشغيل. في بايثون لا تُفحص التلميحات عند تشغيل البرنامج.

## لا تخلطه مع

المُدقِّق الأسلوبي (Linter) الذي يبحث عن مشكلات الأسلوب والأخطاء المحتملة. أما مدقّق الأنواع فيتحقق من الأنواع تحديداً.

## قلها في العمل

- Fix the type checker errors before merging.
  - أصلح أخطاء مدقّق الأنواع قبل الدمج.
- Run mypy in strict mode on the new module.
  - شغّل mypy بوضع صارم على الوحدة الجديدة.
