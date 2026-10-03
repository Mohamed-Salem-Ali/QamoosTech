---
id: fail-open-vs-fail-closed
category: architecture
level: intermediate
related: [rate-limiting, single-point-of-failure]
term: "Fail Open vs Fail Closed"
translation: "الفشل المفتوح والفشل المغلق"
pronunciation: "فيل أوبن مقابل فيل كلوزد"
keywords: ["سلوك النظام عند تعطل المكونات","ماذا يحدث عند توقف الخدمة","استراتيجية التعامل مع أعطال النظام","السماح بالدخول عند فشل النظام","منع الوصول عند تعطل الخدمة","الفشل المفتوح مقابل الفشل المغلق","تصميم الأنظمة عند حدوث خطأ","تحديد حالة النظام عند الانهيار","مفهوم الفشل الآمن في البرمجيات","الفرق بين الفشل المفتوح والمغلق","what happens when system breaks","system behavior during service outage","default state after component failure","allow or block during crash","security vs availability trade off","fail safe design patterns","fail open fail closed meaning","handling errors in critical services","system resilience strategy","default access after service failure"]
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
