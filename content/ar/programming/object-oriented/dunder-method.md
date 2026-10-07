---
id: dunder-method
category: programming
subcategory: object-oriented
level: intermediate
related: [method, class, operator-overloading]
tags: [python]
aliases: ["magic method", "special method", "dunder"]
term: "Dunder Method"
translation: "الدالة السحرية"
pronunciation: "دندر ميثود"
keywords: ["__init__ و __str__", "الدوال الخاصة في بايثون", "دوال الشرطتين السفليتين", "الدوال السحرية", "جعل الكائن يعمل مع len و +", "__repr__ و __eq__", "__init__ and __str__", "special methods in python", "double underscore methods", "magic methods", "make object work with len and +", "__repr__ __eq__"]
---

## التعريف

الدالة السحرية (Dunder Method) دالة خاصة اسمها محاط بشرطتين سفليتين مزدوجتين مثل `__init__` أو `__len__`. تستدعيها بايثون عنك في مواقف معينة.

## أين تسمعه؟

في أصناف بايثون، وعند شرح كيف يعمل `len(obj)` أو `a + b`، وفي مراجعات الأصناف المخصصة.

## أمثلة

- Define `__repr__` so the object prints clearly in logs.
  - عرّف `__repr__` لتُطبع صورة الكائن بوضوح في السجلات.
- Adding `__len__` lets you call `len()` on the collection.
  - إضافة `__len__` تتيح لك استدعاء `len()` على المجموعة.

## خطأ شائع

استدعاء الدوال السحرية مباشرة مثل `obj.__len__()`. استخدم الدالة المدمجة `len(obj)` ودع بايثون تستدعيها.

## لا تخلطه مع

الدالة الخاصة المسماة بشرطة سفلية واحدة، وهي مجرد اتفاق للاستخدام الداخلي.

## قلها في العمل

- Implement `__eq__` so two members with the same data compare equal.
  - نفّذ `__eq__` ليتساوى عضوان لهما البيانات نفسها.
- Add a `__repr__` for easier debugging.
  - أضف `__repr__` لتسهيل تصحيح الأخطاء.
