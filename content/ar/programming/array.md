---
id: array
category: programming
level: beginner
related: [loop, object]
term: "Array"
translation: "مصفوفة"
pronunciation: "آري"
---
## التعريف

قائمة مرتبة من القيم. لكل عنصر رقم موضع يسمى الفهرس (index) ويبدأ عادةً من 0.

## أين تسمعه؟

كلما تعاملت مع قوائم: مستخدمين، منتجات، نتائج.

## أمثلة

- The API returns an array of users.
  - الـ API تعيد مصفوفة من المستخدمين.
- `items[0]` is the first element of the array.
  - `items[0]` هو العنصر الأول في المصفوفة.

## خطأ شائع

نسيان أن العدّ يبدأ من 0، وهو سبب أخطاء off-by-one.

## لا تخلطه مع

المصفوفة (Array) مقابل القائمة المترابطة (Linked List): تخزن المصفوفة العناصر في مواقع ذاكرة متجاورة مما يسمح بالوصول السريع عبر الفهرس، بينما تستخدم القائمة المترابطة عقدًا تحتوي على مؤشرات لتسهيل عمليات الإضافة والحذف.

## قلها في العمل

- I think we should store these configuration flags in an array so we can iterate through them easily.
  - أعتقد أنه يجب علينا تخزين أعلام الإعدادات هذه في مصفوفة حتى نتمكن من المرور عليها بسهولة.
- Please ensure the function returns an empty array instead of null if no results are found to avoid runtime errors.
  - يرجى التأكد من أن الدالة تعيد مصفوفة فارغة بدلاً من null في حال عدم العثور على نتائج لتجنب أخطاء وقت التشغيل.
