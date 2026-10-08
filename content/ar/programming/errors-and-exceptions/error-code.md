---
id: error-code
category: programming
subcategory: errors-and-exceptions
level: beginner
related: [exception, eafp-vs-lbyl, try-except]
aliases: ["error return value", "status return"]
term: "Error Code"
translation: "رمز الخطأ"
pronunciation: "إيرور كود"
keywords: ["return a number on failure", "check the return value", "c style error handling", "no exception thrown", "status flag from function", "error number from function", "رمز الخطأ المُعاد", "التحقق من قيمة الإرجاع", "معالجة الأخطاء بأسلوب C", "دالة ترجع رقم الخطأ", "بدون رفع استثناء", "علم حالة من الدالة"]
---

## التعريف

قيمة أو رقم تُعيده الدالة لتخبرك هل نجحت، وما الذي تعثّر إن فشلت، بدل رفع استثناء. وعلى المستدعي أن يتحقق منها بعد كل استدعاء.

## أين تسمعه؟

في شيفرة C وGo، وفي استدعاءات النظام والمكتبات القديمة، وفي النقاشات حول الاستثناءات مقابل قيم الإرجاع.

## أمثلة

- The function returns error code -1 when the file cannot be opened.
  - تُرجع الدالة رمز الخطأ -1 حين يتعذّر فتح الملف.
- Check the error code before you use the result.
  - تحقّق من رمز الخطأ قبل أن تستخدم النتيجة.
- A Unix command exits with a non-zero code to report a failure.
  - ينتهي أمر Unix برمز غير صفري للإبلاغ عن الفشل.

## خطأ شائع

تجاهل الرمز واستخدام النتيجة على أي حال. يكمل البرنامج بالبيانات الخاطئة، ويظهر الفشل بعيداً عن مصدره.

## لا تخلطه مع

الاستثناء يوقف التدفق العادي حتى يلتقطه شيء ما. أما رمز الخطأ فمجرد قيمة، فيستمر الكود ما لم يتحقق منه المستدعي ويتوقف.

## قلها في العمل

- Did we check the return code from the upload call?
  - هل تحققنا من رمز الإرجاع في استدعاء الرفع؟
- Let's return an error code from this helper, so the caller decides what to do.
  - لنُرجع رمز خطأ من هذه الدالة المساعدة، ليقرّر المستدعي ما يفعل.
