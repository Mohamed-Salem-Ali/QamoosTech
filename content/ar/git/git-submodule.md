---
id: git-submodule
category: git
level: intermediate
related: [repository, commit]
term: "Git Submodule"
translation: "مستودع فرعي"
pronunciation: "جيت سب مودول"
---
## التعريف

طريقة لتضمين مستودع Git داخل مستودع آخر عند commit محدد.

## أين تسمعه؟

المشاريع التي تشارك شيفرة مشتركة بين المستودعات.

## أمثلة

- Clone with `--recurse-submodules` to get the nested repo.
  - استنسخ باستخدام `--recurse-submodules` للحصول على المستودع المتداخل.
- The submodule points to an old commit.
  - الـ submodule يشير إلى commit قديم.

## خطأ شائع

تحديث المستودع الفرعي ونسيان حفظ المؤشر الجديد في المستودع الأب.

## لا تخلطه مع

الفرق بين Git Submodule و Git Subtree هو أن الـ submodule يبقي المستودعات كيانات منفصلة مرتبطة بمؤشر، بينما يقوم الـ subtree بدمج محتويات المستودع الفرعي مباشرة داخل تاريخ المستودع الأب.

## قلها في العمل

- I'm having trouble pulling the latest changes; did you remember to update the Git submodule pointer?
  - أواجه مشكلة في سحب آخر التغييرات؛ هل تذكرت تحديث مؤشر الـ Git submodule؟
- Please ensure the Git submodule is initialized correctly in the CI pipeline to avoid build failures.
  - يرجى التأكد من تهيئة الـ Git submodule بشكل صحيح في مسار الـ CI لتجنب فشل عملية البناء.
