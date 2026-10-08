---
id: streaming
category: web-apis
subcategory: realtime
level: intermediate
related: [server-sent-events, websockets, long-polling]
aliases: ["http streaming", "chunked response"]
term: "Streaming"
translation: "البث المتدفّق"
pronunciation: "ستريمينغ"
keywords: ["send data in chunks", "read response as it arrives", "stream tokens to the chat", "chunked http response", "stream a large export", "response buffered by proxy", "إرسال البيانات على دفعات", "قراءة الرد أثناء وصوله", "بث الكلمات إلى الدردشة", "استجابة HTTP مجزّأة", "بث تصدير كبير", "وكيل يحجز الاستجابة"]
---

## التعريف

إرسال البيانات على أجزاء، كل جزء حين يصبح جاهزاً، عبر استجابة واحدة مفتوحة، بدل انتظار النتيجة كاملة. يقرأ العميل الأجزاء واحداً تلو الآخر، فيظهر النص أو الأحداث فور وصولها.

## أين تسمعه؟

في إجابات الذكاء الاصطناعي التي تظهر كلمة كلمة، وفي عروض السجلات الحية، وفي تنزيل الملفات الكبيرة.

## أمثلة

- The chat endpoint streams tokens, so the answer appears while it is being generated.
  - تبثّ نقطة الدردشة الكلمات تباعاً، فتظهر الإجابة أثناء توليدها.
- Read the response body as a stream and render each chunk as it arrives.
  - اقرأ جسم الرد كتدفّق، واعرض كل جزء فور وصوله.
- A big export streams rows, so the server never holds the whole file in memory.
  - يبثّ التصدير الكبير الصفوف واحداً تلو الآخر، فلا يحتفظ الخادم بالملف كاملاً في الذاكرة.

## خطأ شائع

تخزين الرد كاملاً في وكيل أو في التطبيق، فلا يرى المستخدم شيئاً حتى النهاية. تأكّد أن كل طبقة تمرّر الأجزاء فوراً.

## لا تخلطه مع

أحداث الخادم المرسلة وWebSockets بروتوكولان للرسائل الحية. أما البث فهو الفكرة الأوسع، أي الإرسال على دفعات، ويستطيع رد HTTP عادي أن يبثّ دون أي بروتوكول خاص.

## قلها في العمل

- The answer shows up late; is the proxy buffering the stream?
  - تظهر الإجابة متأخرة؛ هل يخزّن الوكيل البث؟
- Let's stream the export so the download starts right away.
  - لنبثّ التصدير حتى يبدأ التنزيل فوراً.
