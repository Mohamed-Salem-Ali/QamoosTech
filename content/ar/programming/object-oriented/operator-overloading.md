---
id: operator-overloading
category: programming
subcategory: object-oriented
level: intermediate
related: [dunder-method, polymorphism, class]
tags: [python]
term: "Operator Overloading"
translation: "إعادة تعريف العوامل"
pronunciation: "أوبريتر أوفرلودنج"
keywords: ["تعريف + لصنفي", "‏__add__ و __eq__", "سلوك مخصص للعوامل", "جعل الكائنات قابلة للجمع", "صنف جمع المتجهات", "مقارنة كائنات مخصصة", "define plus for my class", "__add__ and __eq__", "custom behavior for operators", "make objects addable", "vector addition class", "compare custom objects"]
---

## التعريف

إعادة تعريف العوامل (Operator Overloading) تتيح لصنفك أن يحدد ماذا تعني العوامل مثل `+` و`==` و`<` لكائناته، عبر تعريف دوال خاصة.

## أين تسمعه؟

في أصناف بايثون وC++، وأنواع الرياضيات أو المال، ومراجعات كائنات القيم المخصصة.

## أمثلة

- Implementing `__add__` lets you write `price_a + price_b` for Money objects.
  - تنفيذ `__add__` يتيح لك كتابة `price_a + price_b` لكائنات Money.
- Compare two points with `==` because the class defines equality.
  - قارن نقطتين بـ `==` لأن الصنف يعرّف المساواة.

## خطأ شائع

إعطاء عامل معنى مفاجئاً. اجعله طبيعياً: `+` يجب أن تجمع الأشياء لا أن تسبب آثاراً جانبية.

## لا تخلطه مع

الدالة العادية مثل `add()`. أما إعادة التعريف فتجعل العامل نفسه يعمل على كائناتك.

## قلها في العمل

- Overload `+` so adding two amounts of the same currency just works.
  - أعد تعريف `+` ليعمل جمع مبلغين بالعملة نفسها ببساطة.
- Return `NotImplemented` for types the operator doesn't support.
  - أعد `NotImplemented` للأنواع التي لا يدعمها العامل.
