---
id: utf-8
category: programming
subcategory: text-and-data-formats
level: intermediate
related: [unicode, content-type, url-encoding]
aliases: ["utf8"]
term: "UTF-8"
translation: "يو تي إف 8"
pronunciation: "يو تي إف إيت"
keywords: ["معيار ترميز النصوص", "حفظ الملف بصيغة UTF-8", "الحروف العربية تتحول إلى علامات استفهام", "خطأ في الترميز", "فتح ملف بترميز utf-8", "ترويسة charset utf-8", "text encoding standard", "save file as utf-8", "arabic characters become question marks", "encoding error", "open file with encoding utf-8", "charset utf-8 header"]
---

## التعريف

UTF-8 هو أشهر طريقة لتخزين نص Unicode كبايتات. يستخدم بايتاً واحداً للحروف الإنجليزية الأساسية وبايتات أكثر للحروف الأخرى.

## أين تسمعه؟

عند حفظ ملفات النصوص أو قراءتها، وضبط ترميز قاعدة البيانات أو صفحة الويب، وإصلاح العربية المشوهة.

## أمثلة

- Always open the file with `encoding="utf-8"`.
  - افتح الملف دائماً مع `encoding="utf-8"`.
- The response header declares the charset as UTF-8.
  - ترويسة الاستجابة تعلن أن الـ charset هو UTF-8.

## خطأ شائع

الاعتماد على الترميز الافتراضي للنظام. في بعض الأجهزة ليس UTF-8، فينكسر النص العربي.

## لا تخلطه مع

Unicode نفسه، وهو قائمة الحروف وليس طريقة حفظها.

## قلها في العمل

- Set the encoding to UTF-8 on both the file and the database.
  - اضبط الترميز على UTF-8 في الملف وقاعدة البيانات.
- The Arabic turns into question marks because the file isn't saved as UTF-8.
  - تتحول العربية إلى علامات استفهام لأن الملف غير محفوظ بصيغة UTF-8.
