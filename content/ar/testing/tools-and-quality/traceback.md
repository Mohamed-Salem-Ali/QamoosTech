---
id: traceback
category: testing
subcategory: tools-and-quality
level: beginner
related: [call-stack, debugging, bug, panic, custom-exception]
tags: [python]
aliases: ["stack trace", "stacktrace", "error trace"]
term: "Traceback"
translation: "تتبّع الأخطاء"
pronunciation: "تريس باك"
keywords: ["تقرير خطأ بايثون", "اقرأه من الأسفل", "أثر المكدس", "أين حدث الخطأ", "تفاصيل الاستثناء", "أسماء الملفات وأرقام الأسطر", "python error report", "read it from the bottom", "stack trace", "where the error happened", "exception details", "file and line numbers"]
---

## التعريف

التتبّع (Traceback أو Stack Trace) هو التقرير الذي يُطبع عندما يوقف خطأ برنامجاً. يسرد سلسلة الاستدعاءات التي أدت إلى الخطأ؛ وفي بايثون يحوي السطر الأخير الخطأ نفسه فتقرأ من الأسفل إلى الأعلى.

## أين تسمعه؟

عند تصحيح الأخطاء، وفي تقارير الأخطاء ("الصق التتبّع كاملاً")، وأدوات مراقبة الأخطاء والسجلات.

## أمثلة

- Paste the full traceback, not just the last line.
  - الصق التتبّع كاملاً وليس السطر الأخير فقط.
- The traceback points at line 42 in `payments.py`.
  - يشير التتبّع إلى السطر 42 في `payments.py`.
- The traceback shows the function that called the failing one, so you can work back up the chain.
  - يُظهر التتبّع (traceback) الدالة التي استدعت الدالة الفاشلة، فتستطيع أن تتتبّع السلسلة إلى الخلف.

## خطأ شائع

قراءة الأعلى فقط. السبب غالباً قرب الأسفل حيث يلتقي كودك بالاستدعاء الفاشل.

## لا تخلطه مع

مكدس الاستدعاءات (Call Stack) وهو البنية الحية للاستدعاءات النشطة. أما التتبّع فلقطة مطبوعة منه لحظة الخطأ.

## قلها في العمل

- Start with the last line of the traceback.
  - ابدأ بالسطر الأخير من التتبّع.
- Which frame in the traceback is in our code?
  - أي إطار في التتبّع موجود في كودنا؟
