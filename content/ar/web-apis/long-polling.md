---
id: long-polling
category: web-apis
level: intermediate
related: [request-response, websockets]
term: "Long Polling"
pronunciation: "لونج بوليج"
translation: "الاستعلام الطويل"
---

## التعريف

تقنية يرسل فيها العميل طلباً للخدم، ويقوم الخادم بإبقاء هذا الاتصال مفتوحاً حتى توفر بيانات جديدة أو انتهاء المهلة.

## أين تسمعه؟

في نقاشات الهندسة البرمجية حول الميزات الفورية أو تطبيقات الدردشة أو أنظمة الإشعارات عندما لا تكون تقنية `WebSockets` متاحة.

## أمثلة

- The notification service uses long polling to deliver alerts to the browser without opening a permanent socket.
  - تستخدم خدمة الإشعارات الاستعلام الطويل لإرسال التنبيهات إلى المتصفح دون فتح اتصال دائم.
- When the server receives a long polling request, it waits for thirty seconds before returning an empty response if no changes occur.
  - عندما يتلقى الخادم طلب استعلام طويل، ينتظر لمدة ثلاثين ثانية قبل إرجاع استجابة فارغة إذا لم تحدث أي تغييرات.

## خطأ شائع

الاعتقاد بأن الاستعلام الطويل مطابق تماماً لـ `WebSockets`، متجاهلين أنه يعتمد على دورات الطلب والاستجابة العادية لبروتوكول `HTTP` ويتطلب إرسال طلب جديد بعد كل رسالة.
