---
id: edge-case
category: testing
level: intermediate
related: [unit-test, bug]
term: "Edge Case"
translation: "حالة حدّية"
pronunciation: "إيدج كيس"
---
## التعريف

موقف غير عادي عند حدود الاستخدام الطبيعي، مثل قائمة فارغة أو اسم طويل جدًا أو رقم سالب.

## أين تسمعه؟

مراجعات الشيفرة وتخطيط الاختبارات.

## أمثلة

- What happens in the edge case where the cart is empty?
  - ماذا يحدث في الحالة الحدّية التي تكون فيها السلة فارغة؟
- The function crashes on an edge case with zero items.
  - تنهار الدالة في حالة حدّية عدد عناصرها صفر.

## خطأ شائع

اختبار المسار الطبيعي (happy path) فقط. كثير من أخطاء بيئة الإنتاج تأتي من الحالات الحدّية.

## لا تخلطه مع

تختبر الحالة الحدّية (edge case) قيمًا متطرفة ضمن حدود التصميم، بينما تحدث الحالة الزاوية (corner case) عندما تقع ظروف متطرفة متعددة في نفس الوقت.

## قلها في العمل

- Let us add a test to cover this edge case before we merge the pull request.
  - دعنا نضيف اختبارًا لتغطية هذه الحالة الحدّية قبل أن ندمج طلب السحب.
- Could you please ensure that all edge cases for negative inputs are handled properly in the validation logic?
  - هل يمكنك التأكد من معالجة جميع الحالات الحدّية للمدخلات السالبة بشكل صحيح في منطق التحقق؟
