---
id: real-time
category: web-apis
subcategory: realtime
level: beginner
related: [polling, long-polling, websockets, server-sent-events, webhook]
aliases: ["live updates", "live data"]
term: "Real-time"
translation: "الزمن الحقيقي"
pronunciation: "ريل تايم"
keywords: ["updates without refreshing the page", "live data for users", "instant updates in the app", "how fast must updates arrive", "realtime feature requirements", "push updates to the browser", "بدون تحديث الصفحة", "بيانات حية للمستخدم", "تحديثات فورية في التطبيق", "ما السرعة المطلوبة للتحديث", "متطلبات الميزة اللحظية", "دفع التحديثات إلى المتصفح"]
---

## التعريف

في تطبيقات الويب، يعني الزمن الحقيقي أن يرى المستخدم التغييرات التي يجريها الآخرون، أو الخادم، تقريباً فور حدوثها، دون إعادة تحميل الصفحة. ويجب الاتفاق على ما يُعد سريعاً كفاية وكتابته، لأن ذلك يحدد التقنية المناسبة.

## أين تسمعه؟

في نقاشات المنتج حول الدردشة والإشعارات ولوحات المتابعة الحية والتحرير التعاوني، وفي الجدل حول الاستعلام الدوري مقابل الدفع.

## أمثلة

- The match score updates in real time, so nobody has to refresh the page.
  - تتحدّث نتيجة المباراة في الزمن الحقيقي، فلا يحتاج أحد إلى تحديث الصفحة.
- We need the order status in real time, but a 30-second delay is fine for the daily report.
  - نحتاج حالة الطلب في الزمن الحقيقي، لكن تأخيراً قدره 30 ثانية مقبول لتقرير اليوم.
- Agree how fast real time must be before choosing between polling and WebSockets.
  - اتفق على السرعة المطلوبة لـ"الزمن الحقيقي" قبل أن تختار بين الاستعلام الدوري وWebSockets.

## خطأ شائع

الوعد بالزمن الحقيقي دون تحديد سرعته. اسأل هل يحتاج المستخدم إلى التغيير خلال ثانية، أم خلال دقيقة، أم عند زيارته التالية فقط.

## لا تخلطه مع

الزمن الحقيقي يتعلق بسرعة وصول التحديثات إلى المستخدم. أما السرعة بمعناها الأضيق فتتعلق بسرعة رد الخادم على طلب واحد. وقد تكون واجهة سريعة بطيئة في إرسال التغييرات إلى الناس.

## قلها في العمل

- Does this really need to be real time, or is a refresh every minute enough?
  - هل تحتاج هذه الميزة فعلاً إلى الزمن الحقيقي، أم يكفي التحديث كل دقيقة؟
- We can show the change in real time once the WebSocket connection is in place.
  - نستطيع عرض التغيير في الزمن الحقيقي بعد تفعيل اتصال WebSocket.
