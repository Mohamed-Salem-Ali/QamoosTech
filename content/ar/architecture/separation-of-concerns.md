---
id: separation-of-concerns
category: architecture
level: intermediate
related: [design-pattern, component]
term: "Separation of Concerns"
translation: "فصل الاهتمامات"
pronunciation: "سيباريشن أوف كونسيرنز"
---
## التعريف

تنظيم الشيفرة بحيث يكون لكل جزء مهمة واضحة واحدة، مثل فصل الوصول إلى البيانات عن قواعد العمل عن العرض.

## أين تسمعه؟

مراجعات الشيفرة ونقاشات المعمارية.

## أمثلة

- This controller also sends emails. Let's separate the concerns.
  - هذا الـ controller يرسل بريدًا أيضًا. لنفصل الاهتمامات.
- Good separation of concerns makes testing easier.
  - الفصل الجيد للاهتمامات يجعل الاختبار أسهل.

## خطأ شائع

تقسيم الشيفرة إلى طبقات صغيرة كثيرة حتى لا يستطيع أحد تتبعها. افصل فقط ما يتغير لأسباب مختلفة فعلًا.
