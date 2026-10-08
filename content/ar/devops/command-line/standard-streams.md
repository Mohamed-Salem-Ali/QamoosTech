---
id: standard-streams
category: devops
subcategory: command-line
level: beginner
related: [cli, exit-code, logging]
tags: [python]
aliases: ["stdout", "stderr", "stdin", "standard output", "standard error"]
term: "Standard Streams"
translation: "مجاري الإدخال والإخراج القياسية"
pronunciation: "ستاندرد ستريمز"
keywords: ["مجرى النتائج ومجرى الأخطاء", "الطباعة مقابل مخرجات الخطأ", "إعادة توجيه المخرجات إلى ملف", "إعادة توجيه الأخطاء", "تمرير النتائج", "الأخطاء تذهب إلى مجرى الخطأ", "stdout and stderr", "print vs error output", "redirect output to a file", "2> redirect", "pipe results", "errors go to stderr"]
---

## التعريف

المجاري القياسية (Standard Streams) هي القنوات التي يستخدمها كل برنامج: الإدخال القياسي (stdin) والإخراج القياسي (stdout) للنتائج والخطأ القياسي (stderr) لرسائل الأخطاء.

## أين تسمعه؟

عند إعادة توجيه المخرجات (`> file` و`2> errors.txt`)، وربط الأوامر بالأنابيب، وقراءة سجلات CI.

## أمثلة

- Print the results to stdout and the errors to stderr.
  - اطبع النتائج إلى stdout والأخطاء إلى stderr.
- Redirecting stdout to a file still shows the errors on screen.
  - إعادة توجيه stdout إلى ملف تُبقي الأخطاء ظاهرة على الشاشة.
- The script writes the report to stdout, so you can pipe it into a file.
  - يكتب السكربت التقرير إلى stdout، فتستطيع توجيهه إلى ملف.

## خطأ شائع

إرسال الأخطاء إلى stdout. فتختلط بالبيانات التي يقرؤها الأمر التالي في الأنبوب.

## لا تخلطه مع

التسجيل (Logging) الذي يدوّن الأحداث بمستويات وتوقيتات. أما المجاري فهي وجهة المخرجات فقط.

## قلها في العمل

- Send the progress messages to stderr so they don't pollute the output.
  - أرسل رسائل التقدم إلى stderr حتى لا تلوّث المخرجات.
- Pipe stdout into `grep`.
  - مرّر stdout إلى `grep`.
