---
id: aliasing
category: programming
subcategory: data-structures
level: intermediate
related: [reference, array, immutable]
tags: [python]
aliases: ["alias"]
term: "Aliasing"
translation: "تعدد الأسماء للكائن نفسه"
pronunciation: "أليازينج"
keywords: ["اسمان لنفس الكائن", "تغيير قائمة يغيّر الأخرى", "‏b = a لا ينسخ", "تغيير مشترك غير متوقع", "خطأ المرجع المشترك", "تعديل قائمة داخل دالة", "two names same object", "changing one list changes the other", "b = a does not copy", "unexpected shared change", "shared reference bug", "list modified in function"]
---

## التعريف

تعدد الأسماء (Aliasing) يحدث عندما يشير اسمان أو أكثر إلى الكائن نفسه، فيظهر التغيير الذي يجري عبر أحدهما عبر الأسماء الأخرى.

## أين تسمعه؟

عند تصحيح أخطاء بايثون وجافاسكريبت، حين تتغير قائمة أو كائن في مكان لم تلمسه.

## أمثلة

- `b = a` creates an alias, not a copy, so adding to `b` also changes `a`.
  - `b = a` تنشئ اسماً آخر وليس نسخة، لذا الإضافة إلى `b` تغيّر `a` أيضاً.
- The bug was aliasing: both rows pointed at the same list.
  - كان الخطأ تعدد أسماء: الصفان يشيران إلى القائمة نفسها.
- Both variables point to the same list, so appending to one changes the other.
  - يشير المتغيران إلى القائمة نفسها، فإضافة عنصر إلى أحدهما تغيّر الآخر.

## خطأ شائع

استخدام `[[0] * 3] * 3` لبناء شبكة. هو يكرر الصف نفسه ثلاث مرات؛ ابنِ كل صف على حدة.

## لا تخلطه مع

النسخة (Copy) وهي كائن منفصل له بياناته الخاصة.

## قلها في العمل

- That's aliasing: make a copy before changing it.
  - هذا تعدد أسماء: اصنع نسخة قبل التعديل.
- Passing the list in creates an alias inside the function.
  - تمرير القائمة ينشئ اسماً آخر لها داخل الدالة.
