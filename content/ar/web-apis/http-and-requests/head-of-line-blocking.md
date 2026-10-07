---
id: head-of-line-blocking
category: web-apis
subcategory: http-and-requests
level: intermediate
related: [multiplexing, quic, latency-vs-throughput]
aliases: ["hol blocking", "hol-blocking"]
term: "Head-of-Line Blocking"
translation: "حجب رأس الطابور"
pronunciation: "هيد أوف لاين بلوكينج"
keywords: ["عنصر بطيء يحجب الباقي", "حزمة مفقودة توقف كل التيارات", "الطابور عالق خلف العنصر الأول", "مشكلة HTTP/1.1", "إعادة إرسال TCP", "‏QUIC يعالجها", "one slow item blocks the rest", "lost packet stalls all streams", "queue stuck behind first item", "http 1.1 problem", "tcp retransmission", "quic fixes this"]
---

## التعريف

حجب رأس الطابور (Head-of-Line Blocking) يحدث حين يتأخر العنصر الأول في طابور فينتظر كل ما خلفه حتى لو كان جاهزاً، مثل حزمة TCP مفقودة توقف كل الطلبات على الاتصال.

## أين تسمعه؟

في مقارنات HTTP/1.1 وHTTP/2 وHTTP/3، وترتيب طوابير الرسائل، ونقاشات أداء الشبكة.

## أمثلة

- In HTTP/1.1 a slow response blocks the requests queued behind it.
  - في HTTP/1.1 يحجب الرد البطيء الطلبات المصطفة خلفه.
- HTTP/3 avoids head-of-line blocking between streams.
  - يتجنب HTTP/3 حجب رأس الطابور بين التيارات.

## خطأ شائع

الظن بأن تعدد الإرسال وحده يزيله. ما زال TCP يسلّم البايتات بالترتيب فيحجب الفقد كل التيارات.

## لا تخلطه مع

الجمود حيث تنتظر المهام بعضها للأبد. هنا ينتهي الانتظار حالما يصل العنصر الأول.

## قلها في العمل

- That's head-of-line blocking at the TCP layer.
  - هذا حجب رأس الطابور على طبقة TCP.
- Process messages per partition to limit it.
  - عالج الرسائل لكل قسم للحد منه.
