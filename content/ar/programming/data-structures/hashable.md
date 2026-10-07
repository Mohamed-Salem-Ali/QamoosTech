---
id: hashable
category: programming
subcategory: data-structures
level: intermediate
related: [dictionary, set, hashing]
tags: [python]
term: "Hashable"
translation: "القابل للتجزئة"
pronunciation: "هاشابل"
keywords: ["يمكن أن يكون مفتاحاً في قاموس", "خطأ unhashable type", "لماذا لا تصلح القائمة مفتاحاً", "الكائنات غير القابلة للتعديل كمفاتيح", "‏hash و eq", "عناصر المجموعة يجب أن تكون قابلة للتجزئة", "can be a dictionary key", "unhashable type error", "why list cannot be key", "immutable objects as keys", "hash and eq", "set members must be hashable"]
---

## التعريف

القيمة قابلة للتجزئة (Hashable) إذا كان لها رقم تجزئة ثابت طوال حياتها، فتصلح مفتاحاً في قاموس أو عضواً في مجموعة. القيم غير القابلة للتعديل كالأرقام والنصوص والـ tuples قابلة للتجزئة.

## أين تسمعه؟

في أخطاء بايثون مثل `unhashable type: 'list'`، وعند شرح لماذا يجب ألا تتغير مفاتيح القاموس.

## أمثلة

- A list is not hashable, so you cannot use it as a dictionary key.
  - القائمة غير قابلة للتجزئة، لذا لا يمكنك استخدامها مفتاحاً في قاموس.
- Convert the list to a tuple so it becomes hashable.
  - حوّل القائمة إلى tuple لتصبح قابلة للتجزئة.

## خطأ شائع

تعريف `__eq__` في صنف دون `__hash__`. عندها تجعل بايثون كائناته غير قابلة للتجزئة.

## لا تخلطه مع

التجزئة التشفيرية (Hashing) وهي دالة باتجاه واحد لكلمات المرور وفحص السلامة. أما القابلية للتجزئة فتتعلق باستخدام القيمة كمفتاح.

## قلها في العمل

- Keys must be hashable; use a tuple instead of a list.
  - يجب أن تكون المفاتيح قابلة للتجزئة؛ استخدم tuple بدلاً من list.
- The class is mutable, so it shouldn't be hashable.
  - الصنف قابل للتعديل، لذا يجب ألا يكون قابلاً للتجزئة.
