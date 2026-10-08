---
id: unicode
category: programming
subcategory: text-and-data-formats
level: intermediate
related: [utf-8, data-type, url-encoding, escape-sequence]
term: "Unicode"
translation: "يونيكود"
pronunciation: "يونيكود"
keywords: ["حروف كل اللغات", "النص العربي في الكود", "الإيموجي في النصوص", "الرمز الرقمي للحرف", "معيار مجموعة الأحرف", "مشكلة ظهور النص مشوهاً", "characters from every language", "arabic text in code", "emoji in strings", "code point of a character", "character set standard", "garbled text problem"]
---

## التعريف

اليونيكود (Unicode) هو المعيار الذي يعطي كل حرف من كل نظام كتابة رقماً فريداً، فيتعامل برنامج واحد مع العربية والإنجليزية والإيموجي وغيرها.

## أين تسمعه؟

في نقاشات أخطاء النصوص، والتدويل، وقواعد البيانات أو الملفات التي يجب أن تخزّن العربية بشكل صحيح.

## أمثلة

- Python strings are Unicode, so Arabic text works without special handling.
  - نصوص بايثون بصيغة Unicode، لذا يعمل النص العربي دون معالجة خاصة.
- The emoji is one Unicode character but takes several bytes when stored.
  - الإيموجي حرف Unicode واحد لكنه يشغل عدة بايتات عند التخزين.

## خطأ شائع

الخلط بين Unicode والترميز. Unicode هو قائمة الحروف المرقّمة، أما UTF-8 فهو إحدى طرق تخزينها كبايتات.

## لا تخلطه مع

الـ UTF-8 وهو ترميز يحوّل حروف Unicode إلى بايتات.

## قلها في العمل

- Store the names as Unicode text so Arabic characters are not lost.
  - خزّن الأسماء كنص Unicode حتى لا تضيع الحروف العربية.
- That garbled text is a Unicode problem, not a font problem.
  - هذا النص المشوّه مشكلة Unicode وليس مشكلة خط.
