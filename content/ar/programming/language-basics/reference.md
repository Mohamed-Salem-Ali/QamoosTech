---
id: reference
category: programming
subcategory: language-basics
level: intermediate
related: [variable, object, immutable]
tags: [python]
term: "Reference"
translation: "المرجع"
pronunciation: "ريفرنس"
keywords: ["المتغير يشير إلى كائن", "النسخ بالمرجع وليس بالقيمة", "متغيران لنفس الكائن", "لماذا تتغير القائمة داخل الدالة", "الأسماء والكائنات في بايثون", "تمرير بالمرجع أم بالقيمة", "مؤشر إلى الكائن في الذاكرة", "المتغير مجرد اسم", "variable points to object", "assignment copies reference not value", "two variables same object", "why list changes in function", "python names and objects", "pass by reference or value", "pointer to object in memory", "variable is a label"]
---

## التعريف

المرجع (Reference) هو اسم يشير إلى كائن في الذاكرة. عندما تسند متغيراً إلى آخر فإنك تنسخ المرجع، فيشير الاسمان إلى الكائن نفسه.

## أين تسمعه؟

في دورات بايثون وجافاسكريبت، وعندما تتغير قائمة أو كائن بشكل غير متوقع، وفي المقابلات التي تسأل عن التمرير بالقيمة والتمرير بالمرجع.

## أمثلة

- Both names hold a reference to the same list, so changing one changes the other.
  - كلا الاسمين يحمل مرجعاً إلى القائمة نفسها، لذا فتغيير أحدهما يغيّر الآخر.
- The function received a reference to the object, so it modified the caller's data.
  - استلمت الدالة مرجعاً إلى الكائن، لذلك عدّلت بيانات من استدعاها.
- A reference to the cart is passed around, so every function sees the same cart.
  - يُمرَّر مرجع إلى السلة، فيرى كل دالة السلة نفسها.

## خطأ شائع

الاعتقاد بأن `b = a` ينشئ نسخة. هو ينسخ المرجع فقط؛ استخدم نسخة حقيقية عندما تحتاج كائناً مستقلاً.

## لا تخلطه مع

نسخ القيمة. النسخة كائن جديد، أما المرجع فهو مجرد اسم آخر للكائن الموجود.

## قلها في العمل

- Careful, that variable is a reference, so mutating it here also changes it in the caller.
  - انتبه، هذا المتغير مرجع، فتعديله هنا يغيّره أيضاً عند من استدعى الدالة.
- I made a copy instead of passing the reference to avoid the side effect.
  - أنشأت نسخة بدلاً من تمرير المرجع لتجنب الأثر الجانبي.
