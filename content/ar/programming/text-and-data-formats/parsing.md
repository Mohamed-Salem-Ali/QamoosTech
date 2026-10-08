---
id: parsing
category: programming
subcategory: text-and-data-formats
level: beginner
related: [serialization, regular-expression, json, xml]
aliases: ["parse"]
term: "Parsing"
translation: "تحليل النص"
pronunciation: "بارسينغ"
keywords: ["read text into structure", "turn string into objects", "parse json response", "invalid input fails to parse", "parser error message", "check the format of input", "تحليل النص إلى بنية", "تحويل النص إلى كائنات", "تحليل استجابة JSON", "فشل قراءة المدخل", "رسالة خطأ المحلل", "التحقق من صيغة المدخل"]
---

## التعريف

تحويل النص الخام إلى بنية يستطيع البرنامج استخدامها. يقرأ المحلل (parser) سلسلة نصية، مثل تاريخ أو مستند JSON، ويتحقق من اتباعها للقواعد، ثم ينتج قيماً كالأرقام والقوائم والكائنات.

## أين تسمعه؟

في معالجات الطلبات التي تقرأ المحتوى، وفي مقررات المترجمات، وفي رسائل الخطأ مثل "failed to parse".

## أمثلة

- The parser turns the string 2026-10-08 into a date value.
  - يحوّل المحلل النص 2026-10-08 إلى قيمة تاريخ.
- A missing comma makes the JSON fail to parse, so the server returns a 400 error.
  - فاصلة ناقصة في JSON تجعله يفشل في التحليل، فيُرجع الخادم خطأ 400.
- Parse the uploaded CSV once at the edge, then work with typed values.
  - حلّل ملف CSV المرفوع مرة واحدة عند المدخل، ثم اعمل بقيم محددة الأنواع.

## خطأ شائع

كتابة تعبير منتظم يدوياً لصيغة منظّمة، أو الوثوق بمدخل لم يُفحص. استخدم مكتبة المحلل الرسمية لتلك الصيغة.

## لا تخلطه مع

التحليل يقرأ النص ويحوّله إلى بنية. أما التسلسل (Serialization) فيفعل العكس، إذ يحوّل البنية إلى نص، مثل كتابة كائن بصيغة JSON.

## قلها في العمل

- The import fails to parse row 3; can you check the date format?
  - الاستيراد يفشل في تحليل السطر 3؛ هل تتحقق من صيغة التاريخ؟
- Let's parse the config once at startup instead of on every request.
  - لنحلّل ملف الإعدادات مرة واحدة عند التشغيل بدل كل طلب.
