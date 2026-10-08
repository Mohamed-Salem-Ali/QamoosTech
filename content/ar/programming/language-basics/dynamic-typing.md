---
id: dynamic-typing
category: programming
subcategory: language-basics
level: beginner
related: [data-type, variable, type-narrowing]
tags: [python, javascript]
term: "Dynamic Typing"
translation: "التنميط الديناميكي"
pronunciation: "دايناميك تايبينج"
keywords: ["المتغير ليس له نوع ثابت", "فحص الأنواع أثناء التشغيل", "الفرق بين التنميط الثابت والديناميكي", "تغيير نوع المتغير في بايثون", "لماذا لا يحتاج بايثون لتحديد النوع", "أخطاء الأنواع وقت التشغيل", "التنميط الديناميكي في جافاسكريبت", "داينامك تايبنج", "variable has no fixed type", "types checked at runtime", "python vs java types", "assign string then number to same variable", "typeerror at runtime", "static vs dynamic typing difference", "duck typing language", "why python has no type declarations"]
---

## التعريف

التنميط الديناميكي (Dynamic Typing) يعني أن المتغير ليس له نوع ثابت؛ فالنوع يخص القيمة التي يحملها الآن، ويُفحص أثناء تشغيل البرنامج.

## أين تسمعه؟

في نقاشات بايثون وجافاسكريبت، وعند المقارنة بين لغات البرمجة، وفي مراجعات الكود التي تتناول أخطاء الأنواع.

## أمثلة

- In a dynamically typed language you can store a number in a variable and a string in it later.
  - في لغة ذات تنميط ديناميكي يمكنك تخزين رقم في متغير ثم تخزين نص فيه لاحقاً.
- Dynamic typing makes prototypes quick to write, but some mistakes only appear at runtime.
  - يجعل التنميط الديناميكي كتابة النماذج الأولية سريعة، لكن بعض الأخطاء لا تظهر إلا وقت التشغيل.
- In Python, the same variable can hold a number first and a list later.
  - في Python يمكن أن يحمل المتغير نفسه رقماً أولاً، ثم قائمة لاحقاً.

## خطأ شائع

الخلط بين التنميط الديناميكي والتنميط الضعيف. بايثون ديناميكية لكنها صارمة في الأنواع؛ فهي لا تجمع نصاً مع رقم بصمت.

## لا تخلطه مع

التنميط الثابت (Static Typing) حيث تُفحص الأنواع قبل تشغيل البرنامج، كما في Java وTypeScript.

## قلها في العمل

- Python is dynamically typed, so add type hints and a checker if you want these errors caught earlier.
  - بايثون ديناميكية التنميط، لذا أضف type hints وأداة فحص إن أردت اكتشاف هذه الأخطاء مبكراً.
- This bug only shows up at runtime because of dynamic typing, so let's add a unit test for it.
  - هذا الخطأ لا يظهر إلا وقت التشغيل بسبب التنميط الديناميكي، فلنضف اختبار وحدة له.
