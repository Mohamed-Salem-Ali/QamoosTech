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
