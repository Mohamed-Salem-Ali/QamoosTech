---
id: reconnection
category: web-apis
subcategory: realtime
level: intermediate
related: [websockets, server-sent-events, heartbeat, exponential-backoff, jitter]
aliases: ["reconnect", "auto reconnect"]
term: "Reconnection"
translation: "إعادة الاتصال"
pronunciation: "ريكونيكشن"
keywords: ["socket dropped reconnect", "reconnect with backoff", "connection lost banner", "resume after network change", "avoid thundering herd on restart", "catch up missed messages", "إعادة الاتصال", "الاتصال من جديد بعد الانقطاع", "تأخير متزايد بين المحاولات", "شريط انقطاع الاتصال", "استئناف بعد تغيّر الشبكة", "استعادة الرسائل الفائتة"]
---

## التعريف

إعادة فتح اتصال حي بعد انقطاعه، مثلاً حين تتغيّر الشبكة أو يُعاد تشغيل الخادم. العميل الجيد ينتظر أطول بعد كل محاولة فاشلة، ويضيف قدراً من العشوائية، ويستأنف من آخر رسالة استقبلها.

## أين تسمعه؟

في تطبيقات الدردشة، ولوحات المتابعة الحية، وتطبيقات الهاتف التي تنتقل بين Wi-Fi والبيانات المحمولة.

## أمثلة

- The client reconnects with exponential backoff after the socket closes.
  - يعيد العميل الاتصال بتأخير متزايد بين المحاولات بعد إغلاق الـ socket.
- After reconnecting, it asks only for events newer than the last one it saw.
  - بعد إعادة الاتصال يطلب الأحداث الأحدث من آخر حدث رآه فقط.
- Show a "reconnecting" banner, so users know the data may be stale.
  - اعرض شريطاً يقول "جارٍ إعادة الاتصال" حتى يعرف المستخدم أن البيانات قد تكون قديمة.

## خطأ شائع

إعادة المحاولة فوراً بلا تأخير. عند إعادة تشغيل الخادم تحاول كل الأجهزة في الوقت نفسه، وقد يُبقيه ذلك متوقفاً.

## لا تخلطه مع

إعادة المحاولة لطلب واحد فشل تكرّر الاستدعاء نفسه. أما إعادة الاتصال فتنشئ اتصالاً طويل العمر من جديد، وعليها أيضاً أن تستدرك ما فاتها.

## قلها في العمل

- After the deploy, every client reconnects at once; can we add jitter?
  - بعد النشر يعيد كل العملاء الاتصال معاً؛ هل نضيف عشوائية للتأخير (jitter)؟
- Make sure the app resumes from the last message instead of reloading everything.
  - تأكّد أن التطبيق يستأنف من آخر رسالة بدل إعادة تحميل كل شيء.
