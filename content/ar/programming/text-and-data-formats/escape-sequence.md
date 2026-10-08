---
id: escape-sequence
category: programming
subcategory: text-and-data-formats
level: beginner
related: [unicode, utf-8, regular-expression]
aliases: ["escape character"]
term: "Escape Sequence"
translation: "تسلسل الهروب"
pronunciation: "إيسكيب سيكوينس"
keywords: ["backslash n new line", "escape quotes inside a string", "backslash in string literal", "unescaped quote breaks string", "escape special characters", "tab character in code", "تسلسل الهروب", "الشرطة المائلة العكسية في النص", "هروب علامة الاقتباس داخل النص", "سطر جديد داخل النص", "حرف خاص داخل السلسلة", "علامة اقتباس غير محمية"]
---

## التعريف

مجموعة من الحروف تمثّل شيئاً لا تستطيع السلسلة عرضه مباشرة. في لغات كثيرة تبدأ الشرطة المائلة العكسية تسلسلاً كهذا: \n سطر جديد، و\t جدولة أفقية، و\" علامة اقتباس داخل نص بين علامتي اقتباس.

## أين تسمعه؟

في السلاسل النصية داخل الشيفرة، وفي مخرجات السجلات، وفي التعابير المنتظمة، وفي تقارير الأخطاء حين كسرت علامة اقتباس استعلاماً.

## أمثلة

- print('Line one\nLine two') shows the two lines on separate rows.
  - تعرض print('Line one\nLine two') السطرين في صفّين منفصلين.
- Write a quote inside a double-quoted string by escaping it: "She said \"hi\"".
  - اكتب علامة اقتباس داخل نص بين علامتي اقتباس بوضع شرطة مائلة عكسية قبلها.
- A Windows path such as C:\new\folder needs care, because \n inside it is read as a new line.
  - يحتاج مسار Windows مثل C:\new\folder إلى عناية، لأن \n داخله يُقرأ سطراً جديداً.

## خطأ شائع

بناء استعلام أو أمر شِل بلصق نص المستخدم دون حمايته. قد تُنهي علامة الاقتباس في المدخل النص مبكراً، فيتغيّر ما ينفّذه الأمر.

## لا تخلطه مع

تسلسل الهروب يُكتب داخل نص في شيفرة المصدر. أما ترميز الحروف، مثل UTF-8، فيحدّد كيف يُخزَّن الحرف كبايتات، وهذا سؤال آخر.

## قلها في العمل

- The JSON broke because the log message had an unescaped quote.
  - انكسر JSON لأن رسالة السجل تحوي علامة اقتباس غير محمية.
- Did we escape the backslashes once or twice in this string?
  - هل حمينا الشرطات المائلة العكسية مرة واحدة أم مرتين في هذا النص؟
