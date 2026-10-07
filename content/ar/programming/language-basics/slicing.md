---
id: slicing
category: programming
subcategory: language-basics
level: beginner
related: [array, immutable]
tags: [python]
term: "Slicing"
translation: "التقطيع"
pronunciation: "سلايسنج"
keywords: ["أخذ جزء من قائمة", "استخراج جزء من نص", "البداية والنهاية والخطوة", "عكس نص باستخدام [::-1]", "الفهرس السالب في بايثون", "أخذ أول عناصر من قائمة", "نسخ قائمة بـ [:]", "معنى list[1:3]", "get part of a list", "substring in python", "start stop step", "reverse a string with [::-1]", "negative index python", "take first n items", "copy a list with [:]", "list[1:3] meaning"]
---

## التعريف

التقطيع (Slicing) هو أخذ جزء من تسلسل مثل القائمة أو النص باستخدام الصيغة `[start:stop:step]`. موضع التوقف لا يدخل في النتيجة.

## أين تسمعه؟

في دروس بايثون، وعند التعامل مع النصوص والقوائم، وفي تمارين المقابلات مثل عكس نص.

## أمثلة

- `names[1:3]` returns the second and third items.
  - `names[1:3]` يعيد العنصر الثاني والثالث.
- `text[::-1]` reverses the string.
  - `text[::-1]` يعكس النص.

## خطأ شائع

نسيان أن فهرس التوقف مستبعد، فـ `[0:3]` تعطي ثلاثة عناصر وليس أربعة.

## لا تخلطه مع

الفهرسة (Indexing). الفهرس مثل `items[2]` يعيد عنصراً واحداً، أما التقطيع مثل `items[2:3]` فيعيد تسلسلاً جديداً.

## قلها في العمل

- Just slice the first ten rows instead of looping through everything.
  - فقط قطّع أول عشرة صفوف بدلاً من المرور على كل شيء.
- A slice returns a copy, so the original list stays unchanged.
  - التقطيع يعيد نسخة، لذا تبقى القائمة الأصلية كما هي.
