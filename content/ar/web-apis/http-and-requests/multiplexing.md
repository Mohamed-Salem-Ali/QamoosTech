---
id: multiplexing
category: web-apis
subcategory: http-and-requests
level: intermediate
related: [head-of-line-blocking, grpc, websockets]
aliases: ["http/2", "http2"]
term: "Multiplexing"
translation: "تعدد الإرسال"
pronunciation: "مالتيبلكسينج"
keywords: ["طلبات كثيرة على اتصال واحد", "ميزة في HTTP/2", "بلا اتصالات إضافية", "تيارات متداخلة", "تحميل صفحة أسرع", "اتصال TCP واحد", "many requests on one connection", "http 2 feature", "no extra connections", "interleaved streams", "faster page load", "one tcp connection"]
---

## التعريف

تعدد الإرسال (Multiplexing) يعني إرسال طلبات وردود مستقلة كثيرة في الوقت نفسه عبر اتصال واحد، بدل فتح اتصال جديد لكل منها، كما يفعل HTTP/2.

## أين تسمعه؟

في شروح HTTP/2 وHTTP/3، وgRPC، ونقاشات الأداء حول الاستغناء عن تجميع الملفات.

## أمثلة

- HTTP/2 multiplexes dozens of requests over one TCP connection.
  - يرسل HTTP/2 عشرات الطلبات عبر اتصال TCP واحد.
- With multiplexing we no longer need domain sharding.
  - مع تعدد الإرسال لم نعد نحتاج توزيع النطاقات.
- The browser loads the images and scripts over one connection, thanks to multiplexing.
  - يحمّل المتصفح الصور والسكربتات عبر اتصال واحد، بفضل التعدّد على الاتصال (multiplexing).

## خطأ شائع

الظن بأنه يحل كل شيء. على HTTP/2 فوق TCP قد توقف حزمة مفقودة واحدة كل التيارات.

## لا تخلطه مع

تجميع الاتصالات الذي يعيد استخدام عدة اتصالات. أما تعدد الإرسال فيتقاسم اتصالاً واحداً بين طلبات كثيرة.

## قلها في العمل

- Is the server on HTTP/2 with multiplexing?
  - هل الخادم على HTTP/2 مع تعدد الإرسال؟
- Fewer connections means less overhead.
  - اتصالات أقل تعني كلفة أقل.
