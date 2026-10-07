---
id: side-effect
category: programming
subcategory: functions-and-scope
level: intermediate
related: [pure-function, function, reference]
aliases: ["side effects"]
term: "Side Effect"
translation: "الأثر الجانبي"
pronunciation: "سايد إيفكت"
keywords: ["دالة تغيّر شيئاً خارجها", "تعديل متغير عام", "الكتابة في ملف أو قاعدة بيانات", "تعديل الوسيط", "تغيير غير متوقع في الكود", "سلوك خفي", "function changes something outside", "modifies global variable", "writes to file or database", "mutating an argument", "unexpected change in code", "hidden behavior"]
---

## التعريف

الأثر الجانبي (Side Effect) هو أي شيء تفعله الدالة غير إرجاع قيمة: تغيير متغير خارجها، أو كتابة ملف، أو استدعاء الشبكة، أو الطباعة.

## أين تسمعه؟

في مراجعات الكود، ونقاشات الاختبار، وعند شرح لماذا يصعب فهم بعض الدوال.

## أمثلة

- The function has a side effect: it modifies the list that was passed in.
  - للدالة أثر جانبي: فهي تعدّل القائمة التي مُرِّرت إليها.
- Sending the email is a side effect, so we mock it in tests.
  - إرسال البريد أثر جانبي، لذلك نحاكيه في الاختبارات.

## خطأ شائع

الظن بأن الآثار الجانبية سيئة دائماً. البرامج تحتاجها (حفظ البيانات وإرسال الرسائل)؛ الهدف حصرها في أماكن قليلة وواضحة.

## لا تخلطه مع

القيمة المعادة (Return Value) وهي النتيجة الظاهرة للدالة. أما الأثر الجانبي فشيء يحدث في الطريق.

## قلها في العمل

- That helper has a hidden side effect; let's make it return the new value instead.
  - هذه الدالة المساعدة لها أثر جانبي خفي؛ لنجعلها تعيد القيمة الجديدة بدلاً من ذلك.
- Isolate the side effects at the edges of the system.
  - اعزل الآثار الجانبية عند أطراف النظام.
