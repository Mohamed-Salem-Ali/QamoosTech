---
id: fail-open-vs-fail-closed
category: architecture
level: intermediate
related: [rate-limiting, single-point-of-failure]
term: "Fail Open vs Fail Closed"
translation: "الفشل المفتوح والفشل المغلق"
pronunciation: "فيل أوبن مقابل فيل كلوزد"
---
## التعريف

ما يفعله النظام عندما يتعطل جزء منه. *Fail open* يستمر في العمل بدون ذلك الجزء، و*fail closed* يمنع كل شيء حتى يُصلح.

## أين تسمعه؟

مرونة الأنظمة، وتصميم الأمان، وتحديد معدل الطلبات.

## أمثلة

- If Redis is down, the rate limiter fails open and lets users in.
  - إذا توقف Redis فإن محدد المعدل يعمل بنظام fail open ويسمح بدخول المستخدمين.
- Login must fail closed: if the auth service is down, nobody gets in.
  - تسجيل الدخول يجب أن يعمل بنظام fail closed: إذا توقفت خدمة المصادقة فلا يدخل أحد.

## خطأ شائع

اختيار fail open دائمًا. في الأمان والمدفوعات تريد عادةً fail closed.

## قلها في العمل

- Let's make sure the gateway is configured to fail open for this non-critical widget.
  - دعنا نتأكد من ضبط البوابة على العمل بنظام fail open لهذا العنصر غير الحرج.
- We decided that the payment service should fail closed to prevent any unauthorized transactions during an outage.
  - لقد قررنا أن خدمة الدفع يجب أن تعمل بنظام fail closed لمنع أي معاملات غير مصرح بها أثناء انقطاع الخدمة.
