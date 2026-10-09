---
id: invariant
category: programming
subcategory: object-oriented
level: intermediate
related: [class, encapsulation, constraint]
term: "Invariant"
translation: "الثابت المنطقي"
pronunciation: "إنفاريانت"
keywords: ["قاعدة يجب أن تتحقق دائماً", "حالة كائن صالحة", "ضمانات الصنف", "عدم السماح بحالة غير صالحة", "التحقق في الـ constructor", "التصميم بالعقد", "rule that must always be true", "valid object state", "class guarantees", "never allow invalid state", "validate in constructor", "design by contract"]
---

## التعريف

الثابت المنطقي (Invariant) قاعدة يجب أن تتحقق دائماً ليكون الكائن صالحاً، مثل "الرصيد لا يكون سالباً أبداً". والصنف الجيد يجعل كسرها مستحيلاً.

## أين تسمعه؟

في تصميم الكائنات، ونمذجة المجال، ومراجعات الكود حول التحقق من البيانات عند حدود الصنف.

## أمثلة

- The constructor enforces the invariant: weeks must be a positive number.
  - يفرض الـ constructor الثابت المنطقي: يجب أن تكون الأسابيع رقماً موجباً.
- Breaking the invariant would leave the object in an invalid state.
  - كسر الثابت المنطقي سيترك الكائن في حالة غير صالحة.
- Every order must have a positive total, an invariant that the Order class checks on each change.
  - يجب أن يكون لكل طلب مجموع موجب، وهو شرط ثابت تتحقق منه فئة Order عند كل تغيير.

## خطأ شائع

فحص القاعدة في مكان واحد بينما تستطيع دوال أخرى كسرها. احمها في كل مكان قد تتغير فيه البيانات.

## لا تخلطه مع

القيد (Constraint) في قاعدة البيانات الذي يفرض قاعدة مشابهة على الصفوف المخزنة. أما الثابت المنطقي فيعيش في كود الكائن.

## قلها في العمل

- What invariant does this class guarantee?
  - ما الثابت المنطقي الذي يضمنه هذا الصنف؟
- Let's validate in the constructor so the invariant always holds.
  - لنتحقق في الـ constructor ليتحقق الثابت المنطقي دائماً.
