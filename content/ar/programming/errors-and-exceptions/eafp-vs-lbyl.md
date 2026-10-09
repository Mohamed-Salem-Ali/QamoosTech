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
- The EAFP version opens the file and catches the error, instead of checking first.
  - تفتح نسخة EAFP الملف وتلتقط الخطأ بدلاً من الفحص أولاً.

## خطأ شائع

استخدام try/except لكل شيء أو تغليف كتلة ضخمة. اجعل `try` صغيرة والتقط الخطأ المتوقع فقط.

## لا تخلطه مع

الأسلوبان يحميان العملية نفسها. يتحقق LBYL من الشرط أولاً، وقد يتغيّر الوضع قبل أن تتصرف. أما EAFP فيتصرف أولاً ويعالج الفشل، وهو أكثر أماناً حين قد يغيّر طرف آخر الحالة بين الفحص والتنفيذ.

## قلها في العمل

- Python prefers EAFP, so just try it and handle the exception.
  - بايثون تفضّل EAFP، لذا جرّب مباشرة وعالج الاستثناء.
- Here LBYL is clearer because the check is cheap.
  - هنا LBYL أوضح لأن الفحص رخيص.
