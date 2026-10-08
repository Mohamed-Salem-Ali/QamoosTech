---
id: generator
category: programming
subcategory: iteration-and-generators
level: intermediate
related: [iterator, iterable, loop, map-and-filter]
tags: [python, javascript]
aliases: ["generator expression", "yield"]
term: "Generator"
translation: "المولِّد"
pronunciation: "جنريتر"
keywords: ["دالة تنتج قيماً بـ yield", "قيم كسولة واحدة تلو الأخرى", "معالجة ملفات ضخمة دون استهلاك الذاكرة", "الكلمة المفتاحية yield", "الفرق بين المولّد والقائمة في الذاكرة", "تسلسل لا نهائي", "صيغة generator expression", "إيقاف الدالة واستئنافها", "function that yields values", "lazy values one at a time", "process huge files without memory", "yield keyword", "generator vs list memory", "infinite sequence", "generator expression syntax", "pause and resume function"]
---

## التعريف

المولِّد (Generator) دالة تنتج القيم واحدة تلو الأخرى باستخدام `yield`، فتتوقف مؤقتاً بين القيم بدلاً من بناء القائمة كاملة في الذاكرة.

## أين تسمعه؟

في كود بايثون الذي يقرأ ملفات كبيرة أو تدفقات بيانات، وفي مراجعات الأداء حول استهلاك الذاكرة، وعند شرح التقييم الكسول.

## أمثلة

- We use a generator to read the log file line by line.
  - نستخدم مولّداً لقراءة ملف السجل سطراً بسطر.
- The generator is infinite, so take only the first ten values.
  - المولّد لا نهائي، لذا خذ أول عشر قيم فقط.

## خطأ شائع

التعامل مع المولّد كأنه قائمة. لا يمكنك الوصول إلى عنصر بفهرس أو قياس طوله، ولا يُقرأ إلا مرة واحدة.

## لا تخلطه مع

الـ list comprehension الذي يبني القائمة كاملة فوراً. أما generator expression فله الشكل نفسه لكنه ينتج العناصر عند الطلب.

## قلها في العمل

- Make it a generator so we never hold the whole file in memory.
  - اجعلها generator حتى لا نحمّل الملف كاملاً في الذاكرة أبداً.
- This pipeline is lazy: each stage is a generator.
  - هذا الـ pipeline كسول: كل مرحلة فيه generator.
