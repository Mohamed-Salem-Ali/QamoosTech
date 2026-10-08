---
id: code-smell
category: programming
subcategory: code-quality
level: intermediate
related: [refactoring, boilerplate, tech-debt]
term: "Code Smell"
translation: "رائحة الشيفرة"
pronunciation: "كود سمل"
keywords: ["علامة على مشكلة في التصميم", "دالة طويلة رائحة سيئة", "تكرار الشيفرة", "شيفرة تبدو خاطئة", "sign of a design problem", "long function is a smell", "duplicated code smell", "code that looks wrong", "refactor a code smell"]
---

## التعريف

علامة في الشيفرة تدل على أن التصميم قد يكون فيه خلل، مثل دالة طويلة جداً أو المنطق نفسه منسوخاً في أماكن كثيرة. ليست خطأ، لكنها تجعل التغيير أصعب.

## أين تسمعه؟

في مراجعات الشيفرة، حين يقول المراجع: «هذا يبدو مريباً»، وفي نقاشات إعادة الهيكلة.

## أمثلة

- This function has 200 lines, which is a code smell.
  - هذه الدالة فيها 200 سطر، وهذه رائحة سيئة في الشيفرة.
- The same validation appears in five places, a clear code smell.
  - التحقق نفسه يظهر في خمسة أماكن، وهذه رائحة واضحة في الشيفرة.

## خطأ شائع

التعامل مع كل رائحة شيفرة كخطأ يجب إصلاحه فوراً. الرائحة تنبيه للنظر أقرب، وليست أمراً بإعادة الكتابة.

## لا تخلطه مع

رائحة الشيفرة تنبيه إلى أن التصميم قد يكون ضعيفاً، أما الخطأ فهو سلوك خاطئ الآن.
