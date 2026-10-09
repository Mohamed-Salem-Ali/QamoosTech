---
id: edge-case
category: testing
subcategory: test-design
level: intermediate
related: [unit-test, bug, happy-path]
term: "Edge Case"
translation: "حالة حدّية"
pronunciation: "إيدج كيس"
keywords: ["اختبار القيم المتطرفة","معالجة الحالات الحدية","سيناريوهات غير متوقعة","اختبار حدود المدخلات","تغطية حالات المدخلات الفارغة","ما هي الحالات الحدية","الفرق بين الحالات الحدية والزاوية","سيناريوهات الاستخدام النادرة","فحص القيم عند الحدود","إيدج كيس في البرمجة","extreme input values testing","handling boundary conditions","unexpected data scenarios","testing outside happy path","corner case vs edge case","uncommon system states","input validation limits","testing empty or null inputs","edge cases in software","boundary value analysis","rare execution paths"]
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
- The edge case with a discount above 100 percent was not covered by any test.
  - حالة الحدّ الخاصة بخصم يتجاوز 100 في المئة لم تغطّها أي اختبار.

## خطأ شائع

اختبار المسار الطبيعي (happy path) فقط. كثير من أخطاء بيئة الإنتاج تأتي من الحالات الحدّية.

## لا تخلطه مع

تختبر الحالة الحدّية (edge case) قيمًا متطرفة ضمن حدود التصميم، بينما تحدث الحالة الزاوية (corner case) عندما تقع ظروف متطرفة متعددة في نفس الوقت.

## قلها في العمل

- Let us add a test to cover this edge case before we merge the pull request.
  - دعنا نضيف اختبارًا لتغطية هذه الحالة الحدّية قبل أن ندمج طلب السحب.
- Could you please ensure that all edge cases for negative inputs are handled properly in the validation logic?
  - هل يمكنك التأكد من معالجة جميع الحالات الحدّية للمدخلات السالبة بشكل صحيح في منطق التحقق؟
