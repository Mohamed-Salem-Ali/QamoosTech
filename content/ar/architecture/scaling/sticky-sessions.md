---
id: sticky-sessions
category: architecture
subcategory: scaling
level: intermediate
related: [load-balancer, stateless-vs-stateful, horizontal-scaling]
aliases: ["session affinity", "sticky session"]
term: "Sticky Sessions"
translation: "الجلسات الملتصقة"
pronunciation: "ستيكي سيشنز"
keywords: ["نفس المستخدم على نفس الخادم", "ارتباط الجلسة بالخادم", "موزّع الأحمال يتذكر الخادم", "توجيه بالكوكيز", "الحالة محفوظة على جهاز واحد", "تنكسر عند موت الخادم", "same user same server", "session affinity", "load balancer remembers the server", "cookie based routing", "state kept on one machine", "breaks when the server dies"]
---

## التعريف

الجلسات الملتصقة (Sticky Sessions) تجعل موزّع الأحمال يرسل كل طلبات المستخدم نفسه إلى الخادم نفسه، عادة بواسطة كوكي، فتستمر جلسة الذاكرة في ذلك الخادم بالعمل.

## أين تسمعه؟

في إعدادات موزّع الأحمال، ومراجعات التوسع، ونقاشات سبب اختفاء تسجيل الدخول بعد النشر.

## أمثلة

- Enable sticky sessions until we move sessions to Redis.
  - فعّل الجلسات الملتصقة إلى أن ننقل الجلسات إلى Redis.
- Users lose their cart when the sticky server restarts.
  - يفقد المستخدمون سلتهم عند إعادة تشغيل الخادم الملتصق.

## خطأ شائع

الاعتماد عليها دائماً. يصبح الحمل غير متساوٍ وفشل خادم يُخرج المستخدمين. احتفظ بالحالة في مخزن مشترك.

## لا تخلطه مع

التصميم بلا حالة حيث يستطيع أي خادم معالجة أي طلب لأن لا شيء محفوظ محلياً.

## قلها في العمل

- Do we need sticky sessions here?
  - هل نحتاج الجلسات الملتصقة هنا؟
- Move the session to a shared store and drop stickiness.
  - انقل الجلسة إلى مخزن مشترك وأزل الالتصاق.
