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
