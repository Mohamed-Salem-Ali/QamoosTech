---
id: pointer
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [reference, variable, virtual-memory]
aliases: ["dereference", "null pointer", "pointer arithmetic"]
term: "Pointer"
translation: "المؤشر"
pronunciation: "بوينتر"
keywords: ["عنوان قيمة", "يحمل عنوان ذاكرة", "المؤشرات في C وGo", "فك الإشارة", "المؤشر الفارغ", "التمرير بالعنوان", "address of a value", "holds a memory address", "c and go pointers", "dereference with star", "null pointer", "pass by address"]
---

## التعريف

المؤشر (Pointer) متغير يحمل عنوان ذاكرة قيمة أخرى بدل القيمة نفسها. وتسمى متابعة المؤشر للوصول إلى القيمة فك الإشارة (Dereferencing).

## أين تسمعه؟

في كود C وC++ وGo وRust، وبرمجة النظم، وعند المقارنة بمراجع بايثون وجافا.

## أمثلة

- In Go, pass a pointer to the struct so the function can change it.
  - في Go مرّر مؤشراً إلى البنية لتستطيع الدالة تغييرها.
- Dereferencing a null pointer crashes the program.
  - فك إشارة مؤشر فارغ ينهي البرنامج.
- The function receives a pointer to the struct, so it updates the original and not a copy.
  - تستقبل الدالة مؤشراً إلى البنية، فتعدّل الأصل لا نسخة منه.

## خطأ شائع

الخلط بينه وبين نسخة القيمة. بدون مؤشر تحصل الدالة على نسخة فلا تصل التغييرات إلى المستدعي.

## لا تخلطه مع

المرجع في بايثون أو جافا الذي يخفي العنوان ولا يُستخدم للحسابات. أما المؤشر فيكشفه.

## قلها في العمل

- Should this parameter be a pointer?
  - هل يجب أن يكون هذا المعامل مؤشراً؟
- Check for nil before dereferencing.
  - تحقق من nil قبل فك الإشارة.
