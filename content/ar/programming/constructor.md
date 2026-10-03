---
id: constructor
category: programming
level: beginner
related: [class, object]
term: "Constructor"
pronunciation: "كونستركتور"
translation: "المُنشئ"
---

## التعريف

دالة خاصة في البرمجة الكائنية يتم تنفيذها تلقائياً عند إنشاء كائن جديد من الفئة، وتُستخدَم عادةً لتعيين القيم الأولية للخصائص.

## أين تسمعه؟

في نقاشات البرمجة الكائنية، عند الحديث عن تهيئة الكائنات، أو أثناء مراجعة الكود.

## أمثلة

- The `User` class has a constructor that accepts an email and password.
  - تمتلك فئة `User` مُنشئاً يستقبل بريداً إلكترونياً وكلمة مرور.
- Make sure to call the parent constructor using `super()` inside your subclass.
  - تأكد من استدعاء مُنشئ الفئة الأب باستخدام `super()` داخل فئتك الفرعية.

## خطأ شائع

الاعتقاد بأن المُنشئ يُرجِع قيمة، في حين أن غرضه الأساسي هو تهيئة الكائن وليس إرجاعه.
