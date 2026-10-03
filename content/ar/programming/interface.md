---
id: interface
category: programming
level: intermediate
related: [class, inheritance]
term: "Interface"
translation: "واجهة (عقد)"
pronunciation: "إنترفيس"
---
## التعريف

عقد يحدد ما يجب أن يوفره الشيء من دوال أو خصائص دون أن يحدد طريقة عملها.

## أين تسمعه؟

TypeScript وJava، ونقاشات كتابة شيفرة يسهل استبدال أجزائها واختبارها.

## أمثلة

- Both payment providers implement the same `PaymentGateway` interface.
  - كلا مزوّدَي الدفع ينفّذان واجهة `PaymentGateway` نفسها.
- Code against the interface, not the implementation.
  - اكتب شيفرتك اعتمادًا على الواجهة لا على التنفيذ.

## خطأ شائع

الخلط بينه وبين واجهة المستخدم. في البرمجة كثيرًا ما لا تعني كلمة interface الشاشات إطلاقًا.
