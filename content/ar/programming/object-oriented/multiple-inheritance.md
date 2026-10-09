---
id: multiple-inheritance
category: programming
subcategory: object-oriented
level: intermediate
related: [inheritance, method-resolution-order, mixin]
tags: [python]
term: "Multiple Inheritance"
translation: "الوراثة المتعددة"
pronunciation: "ملتيبل إنهيريتانس"
keywords: ["صنف له أبوان", "الوراثة من عدة أصناف", "مشكلة الماسة", "أي دالة أب تعمل", "أصناف mixin", "ترتيب MRO في بايثون", "class with two parents", "inherit from several classes", "diamond problem", "which parent method runs", "mixin classes", "python mro"]
---

## التعريف

الوراثة المتعددة (Multiple Inheritance) تعني أن للصنف أكثر من صنف أب ويرث السلوك منها جميعاً.

## أين تسمعه؟

في نقاشات تصميم بايثون وC++، وعند شرح الـ mixins ومشكلة الماسة.

## أمثلة

- `class D(B, C)` inherits from both B and C.
  - `class D(B, C)` يرث من B وC معاً.
- Python uses the method resolution order to decide which parent's method runs first.
  - تستخدم بايثون ترتيب حل الدوال لتقرر دالة أي أب تعمل أولاً.
- The Robot class inherits from both Walker and Talker, so it gets two sets of methods.
  - ترث الفئة Robot من Walker وTalker معاً، فتحصل على مجموعتين من الدوال.

## خطأ شائع

استخدامها لمشاركة الكود بين أصناف غير مترابطة. فضّل التركيب أو mixins صغيرة تضيف سلوكاً واحداً.

## لا تخلطه مع

الوراثة متعددة المستويات وهي سلسلة بأب واحد لكل مستوى (من A إلى B ثم إلى C). أما المتعددة فلها عدة آباء مباشرين.

## قلها في العمل

- Multiple inheritance makes the lookup order hard to see here.
  - الوراثة المتعددة تجعل ترتيب البحث صعب الرؤية هنا.
- Let's use composition instead of a second parent class.
  - لنستخدم التركيب بدلاً من صنف أب ثانٍ.
