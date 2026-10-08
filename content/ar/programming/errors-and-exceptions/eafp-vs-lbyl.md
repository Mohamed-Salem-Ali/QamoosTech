---
id: eafp-vs-lbyl
category: programming
subcategory: errors-and-exceptions
level: intermediate
related: [exception, conditional-statement, pythonic, error-code]
tags: [python]
aliases: ["eafp", "lbyl"]
term: "EAFP vs LBYL"
translation: "اطلب المسامحة أم تحقق أولاً"
pronunciation: "إي إيه إف بي في إس إل بي واي إل"
keywords: ["جرّب أولاً ثم عالج الأخطاء", "تحقق قبل التنفيذ", "أسهل أن تطلب المسامحة", "انظر قبل أن تقفز", "أسلوب بايثون مع try except", "if key in dict مقابل try", "try first handle errors", "check before acting", "easier to ask forgiveness", "look before you leap", "python style try except", "if key in dict vs try"]
---

## التعريف

EAFP ("أسهل أن تطلب المسامحة من الإذن") تعني تجربة الإجراء ومعالجة الخطأ إن فشل. أما LBYL ("انظر قبل أن تقفز") فتعني الفحص أولاً ثم التنفيذ.

## أين تسمعه؟

في نقاشات أسلوب بايثون، ومراجعات الكود حول `try / except` مقابل `if`، ومقابلات الكود البايثوني.

## أمثلة

- EAFP: try to open the file and catch `FileNotFoundError`.
  - EAFP: حاول فتح الملف والتقط `FileNotFoundError`.
- LBYL: check that the file exists before opening it.
  - LBYL: تحقق من وجود الملف قبل فتحه.

## خطأ شائع

استخدام try/except لكل شيء أو تغليف كتلة ضخمة. اجعل `try` صغيرة والتقط الخطأ المتوقع فقط.

## لا تخلطه مع

حالة التسابق (Race Condition) وهي سبب يجعل EAFP أكثر أماناً: فقد يختفي الملف بين فحصك وتنفيذك.

## قلها في العمل

- Python prefers EAFP, so just try it and handle the exception.
  - بايثون تفضّل EAFP، لذا جرّب مباشرة وعالج الاستثناء.
- Here LBYL is clearer because the check is cheap.
  - هنا LBYL أوضح لأن الفحص رخيص.
