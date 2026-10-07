---
id: interpreter
category: programming
subcategory: language-basics
level: beginner
related: [repl, data-type, variable]
tags: [python]
term: "Interpreter"
translation: "المفسِّر"
pronunciation: "إنتربريتر"
keywords: ["برنامج ينفذ الكود سطراً بسطر", "إصدار مفسر بايثون", "الفرق بين اللغة المفسرة والمترجمة", "ما الذي يشغّل سكريبت بايثون", "تشغيل الكود دون ترجمة", "محرك جافاسكريبت", "program that runs code line by line", "python interpreter version", "interpreted vs compiled language", "what runs my python script", "javascript engine runs code", "run code without compiling"]
---

## التعريف

المفسِّر (Interpreter) برنامج يقرأ الكود وينفّذه خطوة بخطوة، بدلاً من ترجمة البرنامج كله أولاً إلى ملف بلغة الآلة.

## أين تسمعه؟

في دورات بايثون وجافاسكريبت، وعند المقارنة بين اللغات المفسَّرة والمترجَمة، وعندما يسأل أحدهم أي إصدار من بايثون يشغّل السكريبت.

## أمثلة

- The interpreter stops and reports the error as soon as it reaches the faulty line.
  - يتوقف المفسِّر ويبلّغ عن الخطأ بمجرد وصوله إلى السطر المعيب.
- Which interpreter version does your virtual environment use?
  - أي إصدار من المفسِّر تستخدمه بيئتك الافتراضية؟

## خطأ شائع

الاعتقاد بأن اللغة المفسَّرة لا تترجم أي شيء إطلاقاً. كثير من المفسِّرات تحوّل الكود أولاً إلى bytecode؛ والفرق الحقيقي في طريقة تشغيل البرنامج.

## لا تخلطه مع

المترجِم (Compiler) الذي يترجم البرنامج كله مسبقاً إلى ملف يشغّله الحاسوب مباشرة.

## قلها في العمل

- Check which interpreter your editor is using; it may not be the one in the virtual environment.
  - تحقق من المفسِّر الذي يستخدمه محررك؛ قد لا يكون الموجود في البيئة الافتراضية.
- The script fails on the CI interpreter because it is an older version.
  - يفشل السكريبت على مفسِّر الـ CI لأنه إصدار أقدم.
