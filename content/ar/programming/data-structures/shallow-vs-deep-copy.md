---
id: shallow-vs-deep-copy
category: programming
subcategory: data-structures
level: intermediate
related: [aliasing, reference, object]
tags: [python, javascript]
aliases: ["shallow copy", "deep copy", "deepcopy"]
term: "Shallow vs Deep Copy"
translation: "النسخ السطحي مقابل العميق"
pronunciation: "شالو في ديب كوبي"
keywords: ["نسخ قائمة تحتوي قوائم داخلية", "الدالة copy.deepcopy", "الكائنات الداخلية ما زالت مشتركة", "استنساخ كائن", "الدالة structuredClone في جافاسكريبت", "نسخ قاموس في بايثون", "copy a list with nested lists", "copy.deepcopy", "inner objects still shared", "clone an object", "structuredclone javascript", "copy dictionary python"]
---

## التعريف

النسخ السطحي (Shallow Copy) يكرر الحاوية الخارجية فقط، فتبقى الكائنات المتداخلة مشتركة. أما النسخ العميق (Deep Copy) فيكرر كل ما بداخلها أيضاً.

## أين تسمعه؟

عند تصحيح أخطاء بايثون وجافاسكريبت، وفي المقابلات، وعندما يغيّر تعديل نسخة من قائمة الأصل بشكل غير متوقع.

## أمثلة

- A shallow copy of the list still shares the inner dictionaries with the original.
  - النسخ السطحي للقائمة ما زال يشارك القواميس الداخلية مع الأصل.
- Use a deep copy when the structure contains nested lists.
  - استخدم النسخ العميق عندما تحتوي البنية على قوائم متداخلة.
- A deep copy of the cart lets us change the copy's items without touching the original.
  - تتيح النسخة العميقة للسلة تغيير عناصر النسخة دون المساس بالأصل.

## خطأ شائع

الظن بأن `list.copy()` أو `[:]` مستقلة تماماً. هي تنسخ مستوى واحداً فقط.

## لا تخلطه مع

تعدد الأسماء (Aliasing) حيث لا توجد نسخة إطلاقاً: اسمان لكائن واحد.

## قلها في العمل

- It's a shallow copy, so the inner lists are still shared.
  - هذه نسخة سطحية، لذا القوائم الداخلية ما زالت مشتركة.
- Deep-copy the config before each test so they don't affect each other.
  - انسخ الإعدادات نسخاً عميقاً قبل كل اختبار حتى لا يؤثر بعضها في بعض.
