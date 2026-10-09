---
id: polymorphism
category: programming
subcategory: object-oriented
level: intermediate
related: [inheritance, interface, duck-typing]
tags: [python, typescript]
aliases: ["method overriding"]
term: "Polymorphism"
translation: "تعدد الأشكال"
pronunciation: "بوليمورفيزم"
keywords: ["الدالة نفسها بسلوك مختلف", "إعادة تعريف دالة في الصنف الفرعي", "استدعاء دالة دون معرفة الصنف", "كائنات تستجيب بشكل مختلف للاستدعاء نفسه", "أعمدة البرمجة كائنية التوجه الأربعة", "تنفيذات الواجهة", "مثال الحيوانات وأصواتها", "تجنب if else على النوع", "same method different behavior", "override a method in subclass", "call method without knowing the class", "objects respond differently to same call", "oop four pillars", "interface implementations", "animals speak example", "avoid if else on type"]
---

## التعريف

تعدد الأشكال (Polymorphism) يعني أن أصنافاً مختلفة تستطيع الاستجابة لاستدعاء الدالة نفسه كلٌّ بطريقتها، فيعمل الكود معها دون معرفة نوعها بالضبط.

## أين تسمعه؟

في نقاشات التصميم كائني التوجه، وفي مقابلات أعمدة OOP، وفي مراجعات الكود التي تستبدل سلاسل `if` الطويلة.

## أمثلة

- Each shape implements `area()`, so the report just calls it on every shape.
  - كل شكل ينفّذ `area()`، فيكتفي التقرير باستدعائها على كل شكل.
- Thanks to polymorphism, adding a new payment type needs no change to the checkout code.
  - بفضل تعدد الأشكال، لا تحتاج إضافة نوع دفع جديد إلى أي تغيير في كود إتمام الشراء.
- The checkout calls process() on every payment object, whatever its class.
  - تستدعي صفحة الدفع الدالة process() على كل كائن دفع، مهما كانت فئته.

## خطأ شائع

استخدام فحوص النوع مثل `if isinstance(...)` في كل مكان بدلاً من ترك كل صنف يحمل سلوكه الخاص.

## لا تخلطه مع

الوراثة (Inheritance) وهي إحدى طرق تحقيق تعدد الأشكال عبر مشاركة صنف أب. تعدد الأشكال هو السلوك، والوراثة أداة.

## قلها في العمل

- Let's use polymorphism here instead of a long if-else on the type.
  - لنستخدم تعدد الأشكال هنا بدلاً من if-else طويلة على النوع.
- Each handler overrides `run()`, so the loop doesn't care which one it has.
  - كل معالج يعيد تعريف `run()`، فلا تهتم الحلقة بأيها بين يديها.
