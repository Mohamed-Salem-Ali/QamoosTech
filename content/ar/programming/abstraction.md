---
id: abstraction
category: programming
level: intermediate
related: [interface, design-pattern, separation-of-concerns]
term: "Abstraction"
translation: "التجريد"
pronunciation: "أب-ستراك-شن"
---

## التعريف

التجريد هو عملية إخفاء تفاصيل التنفيذ المعقدة وإظهار الميزات الأساسية فقط لكائن أو نظام معين. يسمح هذا للمطورين بالتعامل مع واجهة مبسطة دون الحاجة لفهم المنطق البرمجي الداخلي.

## أين تسمعه؟

في النقاشات حول هندسة البرمجيات، أثناء مراجعة الكود، أو عند تصميم مكونات النظام.

## أمثلة

- Using a library function to send an email is an abstraction over the complex SMTP protocol.
  - استخدام دالة جاهزة لإرسال بريد إلكتروني هو تجريد لبروتوكول SMTP المعقد.
- An interface provides an abstraction that allows you to swap database implementations without changing your business logic.
  - توفر الواجهة (Interface) تجريداً يسمح لك بتبديل قواعد البيانات دون تغيير منطق العمل الخاص بك.

## خطأ شائع

الاعتقاد بأن التجريد يعني حذف الوظائف؛ في الواقع، هو يعني إخفاء كيفية تنفيذ هذه الوظائف لتقليل العبء الذهني على المبرمج.

## لا تخلطه مع

غالباً ما يُخلط بين التجريد (Abstraction) والتغليف (Encapsulation)، لكن التجريد يركز على إخفاء تفاصيل التنفيذ عن المستخدم، بينما يركز التغليف على تجميع البيانات والدوال معاً لحماية الحالة الداخلية.

## قلها في العمل

- We need more abstraction in this service layer so we can easily swap out the payment provider later.
  - نحتاج إلى المزيد من التجريد في طبقة الخدمة هذه حتى نتمكن من تغيير مزود الدفع بسهولة لاحقاً.
- Please improve the abstraction of these database calls to keep the business logic clean and decoupled.
  - يرجى تحسين تجريد استدعاءات قاعدة البيانات هذه للحفاظ على نظافة منطق العمل وفصله عن التفاصيل.
