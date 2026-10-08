---
id: custom-exception
category: programming
subcategory: errors-and-exceptions
level: intermediate
related: [exception, try-except, traceback]
aliases: ["custom error class", "application error"]
term: "Custom Exception"
translation: "استثناء مخصص"
pronunciation: "كاستم إكسيبشن"
keywords: ["own exception class", "define my own error type", "domain specific error", "subclass the exception class", "raise a specific error", "error that maps to http status", "استثناء مخصص", "تعريف نوع خطأ خاص بالتطبيق", "خطأ خاص بمجال العمل", "الوراثة من فئة الاستثناء", "رفع خطأ محدد", "خطأ يُترجم إلى رمز استجابة"]
---

## التعريف

فئة استثناء تكتبها بنفسك لفشل يهم مجال تطبيقك، مثل طلب غير موجود أو حساب رصيده لا يكفي. يستطيع المستدعي التقاط هذا الفشل تحديداً وقراءة الحقول التي تصفه.

## أين تسمعه؟

في شيفرة الخدمات، وفي طبقات الواجهات البرمجية التي تحوّل الأخطاء إلى استجابات، وفي مراجعات تسلسل الاستثناءات.

## أمثلة

- Raise OrderNotFound instead of a generic error, so the API can return 404.
  - ارفع OrderNotFound بدل خطأ عام، لكي تُرجع الواجهة البرمجية الرمز 404.
- The billing code catches InsufficientFunds and asks the customer to top up.
  - تلتقط شيفرة الفوترة الاستثناء InsufficientFunds وتطلب من العميل شحن رصيده.
- Give all app errors one base class, then subclass it for each case.
  - اجعل لكل أخطاء التطبيق فئة أساسية واحدة، ثم اشتقّ منها فئة فرعية لكل حالة.

## خطأ شائع

إنشاء فئة جديدة لكل حالة صغيرة، أو التقاط الفئة الأساسية في كل مكان. احتفظ بأنواع قليلة ذات معنى، والتقط النوع المحدد الذي تستطيع معالجته فعلاً.

## لا تخلطه مع

الاستثناء المدمج مثل ValueError نوع عام تقدمه اللغة. أما الاستثناء المخصص فيسمّي فشلاً من مجال تطبيقك، فيستطيع المستدعي معالجته دون تخمين من نص الرسالة.

## قلها في العمل

- Can we raise a custom exception here so the API returns the right status code?
  - هل نستطيع رفع استثناء مخصص هنا حتى تُرجع الواجهة رمز الحالة الصحيح؟
- Let's subclass our base AppError so the global handler catches all of ours.
  - لنشتق من الفئة الأساسية AppError حتى يلتقط المعالج العام كل أخطائنا.
