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
