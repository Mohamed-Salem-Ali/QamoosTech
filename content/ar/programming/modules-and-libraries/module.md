---
id: module
category: programming
subcategory: modules-and-libraries
level: beginner
related: [package, import, standard-library, namespace, wildcard-import]
tags: [python]
aliases: ["python module", "modules"]
term: "Module"
translation: "الوحدة"
pronunciation: "مودل"
keywords: ["ملف بايثون يمكن استيراده", "ملف كود واحد", "استيراد ملفي الخاص", "فصل الكود إلى ملفات", "اسم الوحدة و __name__", "ملف كود قابل لإعادة الاستخدام", "a python file you can import", "single file of code", "import my own file", "separate code into files", "module name and __name__", "reusable code file"]
---

## التعريف

الوحدة (Module) ملف كود واحد مثل `money.py` تستطيع استيراد دوالها وأصنافها واستخدامها في ملفات أخرى.

## أين تسمعه؟

في مشاريع بايثون وجافاسكريبت، كلما قُسّم الكود إلى ملفات، وفي أخطاء مثل `ModuleNotFoundError`.

## أمثلة

- Put the date helpers in their own module.
  - ضع دوال التاريخ في وحدة خاصة بها.
- The import fails because Python can't find the module.
  - يفشل الاستيراد لأن بايثون لا تجد الوحدة.
- The date helpers live in one module, so the report and the invoice both import them.
  - تعيش دوال التاريخ في وحدة واحدة، فيستوردها التقرير والفاتورة معاً.

## خطأ شائع

تسمية ملفك باسم وحدة من مكتبة مثل `random.py` أو `json.py`. فهو يخفي الوحدة الحقيقية.

## لا تخلطه مع

الحزمة (Package) وهي مجلد يجمع عدة وحدات معاً.

## قلها في العمل

- Let's split this into modules: one for money, one for dates.
  - لنقسّم هذا إلى وحدات: واحدة للمال وواحدة للتواريخ.
- Which module defines this function?
  - أي وحدة تعرّف هذه الدالة؟
