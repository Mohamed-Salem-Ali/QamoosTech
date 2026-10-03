---
id: mocking
category: testing
level: intermediate
related: [unit-test, dependency-injection]
term: "Mocking"
translation: "المحاكاة"
pronunciation: "موكينج"
---
## التعريف

استبدال تبعية حقيقية، مثل خدمة البريد أو API الدفع، بأخرى وهمية أثناء الاختبارات.

## أين تسمعه؟

اختبار الوحدات ونقاشات إعداد الاختبارات.

## أمثلة

- We mock the payment gateway so tests never charge real cards.
  - نحاكي بوابة الدفع (mock) حتى لا تخصم الاختبارات من بطاقات حقيقية.
- Too many mocks make the test fragile.
  - كثرة الـ mocks تجعل الاختبار هشًّا.

## خطأ شائع

محاكاة كل شيء. إذا كان الاختبار يفحص الـ mocks فقط فهو لا يثبت شيئًا عن الشيفرة الحقيقية.
