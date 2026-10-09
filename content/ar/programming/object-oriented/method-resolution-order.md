---
id: method-resolution-order
category: programming
subcategory: object-oriented
level: intermediate
related: [multiple-inheritance, inheritance, polymorphism]
tags: [python]
term: "Method Resolution Order (MRO)"
translation: "ترتيب حل الدوال"
pronunciation: "ميثود ريزوليوشن أوردر"
keywords: ["ترتيب بحث بايثون في الأصناف الأب", "الخاصية __mro__", "super() يتبع MRO", "البحث في وراثة الماسة", "أي دالة ستُستدعى", "ترتيب C3", "order python searches parent classes", "__mro__ attribute", "super() follows mro", "diamond inheritance lookup", "which method gets called", "c3 linearization"]
---

## التعريف

ترتيب حل الدوال (MRO) هو الترتيب الذي تبحث به بايثون في الصنف وآبائه عن دالة ما. و`super()` يتبع هذا الترتيب.

## أين تسمعه؟

في نقاشات الوراثة في بايثون، ومقابلات مشكلة الماسة، وعند تتبع أي دالة عملت فعلاً.

## أمثلة

- Print `D.__mro__` to see the lookup order.
  - اطبع `D.__mro__` لترى ترتيب البحث.
- `super()` calls the next class in the MRO, not necessarily the direct parent.
  - يستدعي `super()` الصنف التالي في الـ MRO، وليس بالضرورة الأب المباشر.
- The MRO places the mixin before the base class, so its method runs first.
  - يضع ترتيب البحث عن الدوال (MRO) الـ mixin قبل الفئة الأساسية، فتعمل دالته أولاً.

## خطأ شائع

الظن بأن `super()` تعني دائماً الأب المباشر. مع الوراثة المتعددة تعني الصنف التالي في الـ MRO.

## لا تخلطه مع

إعادة تعريف الدالة (overriding) وهي استبدال دالة موروثة. أما الـ MRO فيحدد أي نسخة تُوجد أولاً.

## قلها في العمل

- Check the MRO before adding another base class.
  - افحص الـ MRO قبل إضافة صنف أساسي آخر.
- The method resolution order explains why the mixin's version runs first.
  - ترتيب حل الدوال يفسر لماذا تعمل نسخة الـ mixin أولاً.
