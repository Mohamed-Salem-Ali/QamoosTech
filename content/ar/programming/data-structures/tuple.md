---
id: tuple
category: programming
subcategory: data-structures
level: beginner
related: [array, immutable, dictionary]
tags: [python]
term: "Tuple"
translation: "المجموعة المرتبة"
pronunciation: "تابل"
keywords: ["قائمة لا يمكن تغييرها", "تسلسل غير قابل للتعديل في بايثون", "الفرق بين tuple وlist", "إرجاع عدة قيم من دالة", "فك تغليف tuple", "سجل ثابت من القيم", "استخدام tuple كمفتاح في القاموس", "tuple بعنصر واحد والفاصلة", "list that cannot change", "immutable sequence python", "tuple vs list", "return multiple values from function", "unpack a tuple", "fixed record of values", "tuple as dictionary key", "single item tuple comma"]
---

## التعريف

الـ Tuple مجموعة مرتبة وثابتة من القيم. بعد إنشائها لا يمكن تغييرها.

## أين تسمعه؟

في كود بايثون الذي يعيد عدة قيم، وعند شرح متى تستخدم tuple بدلاً من list.

## أمثلة

- The function returns a tuple of the minimum and maximum.
  - تعيد الدالة tuple تحتوي على القيمة الصغرى والعظمى.
- A tuple of coordinates can be used as a dictionary key.
  - يمكن استخدام tuple من الإحداثيات كمفتاح في القاموس.

## خطأ شائع

نسيان الفاصلة في tuple بعنصر واحد: `(5)` هي الرقم 5 فقط، أما `(5,)` فهي tuple.

## لا تخلطه مع

القائمة (List) القابلة للتعديل. استخدم tuple لسجل ثابت واستخدم list لمجموعة تنمو.

## قلها في العمل

- Return a tuple so the caller can unpack both values at once.
  - أعد tuple ليتمكن من استدعى الدالة من فك القيمتين دفعة واحدة.
- Make it a tuple, since these values should never change.
  - اجعلها tuple لأن هذه القيم يجب ألا تتغير أبداً.
