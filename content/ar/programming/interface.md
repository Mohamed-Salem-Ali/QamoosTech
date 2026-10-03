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

## لا تخلطه مع

الـ interface هو عقد يحدد الدوال التي يجب أن توجد، بينما الـ abstract class يمكنه تقديم شيفرة تنفيذية فعلية وحالة مشتركة للفئات الفرعية.

## قلها في العمل

- Let us define a clean interface for this service so we can easily swap the database later.
  - دعنا نحدد واجهة نظيفة لهذه الخدمة لكي نتمكن من استبدال قاعدة البيانات بسهولة لاحقًا.
- Please update the repository layer to depend on the new interface rather than the concrete class.
  - يرجى تحديث طبقة المستودع لتعتمد على الواجهة الجديدة بدلاً من الفئة الملموسة.
