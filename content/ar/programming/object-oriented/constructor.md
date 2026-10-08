---
id: constructor
category: programming
subcategory: object-oriented
level: beginner
related: [class, object, class-method-vs-static-method]
term: "Constructor"
pronunciation: "كونستركتور"
translation: "المُنشئ"
keywords: ["دالة تهيئة الكائن","إنشاء كائن جديد من الفئة","دالة البناء في البرمجة","تهيئة القيم الأولية للفئة","المُنشئ","كونستركتور","دالة الإنشاء التلقائية","تعيين خصائص الكائن الأولية","initialize new object instance","class initialization method","set initial property values","create object from class","construktor","constractor","init method in class","object instantiation function","run automatically on creation"]
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
- The constructor sets the balance to zero when a new account is created.
  - يضبط المُنشئ (constructor) الرصيد على صفر عند إنشاء حساب جديد.

## خطأ شائع

الاعتقاد بأن المُنشئ يُرجِع قيمة، في حين أن غرضه الأساسي هو تهيئة الكائن وليس إرجاعه.

## لا تخلطه مع

المُنشئ (Constructor) مقابل الدالة (Method): يتم استدعاء المُنشئ مرة واحدة فقط عند إنشاء الكائن لتهيئة حالته، بينما يمكن استدعاء الدالة عدة مرات طوال دورة حياة الكائن لتنفيذ عمليات متنوعة.

## قلها في العمل

- I need to update the constructor to accept the new configuration object as a parameter.
  - أحتاج إلى تحديث المُنشئ ليقبل كائن الإعدادات الجديد كمعامل.
- Please ensure that the constructor correctly initializes all required fields to avoid null pointer exceptions.
  - يرجى التأكد من أن المُنشئ يقوم بتهيئة جميع الحقول المطلوبة بشكل صحيح لتجنب أخطاء المؤشر الفارغ.
