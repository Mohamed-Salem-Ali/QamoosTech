---
id: websockets
category: web-apis
level: intermediate
related: [request-response]
term: "WebSockets"
translation: "ويب سوكتس"
pronunciation: "ويب سوكتس"
keywords: ["اتصال مستمر بين الخادم والعميل","بروتوكول الدردشة الفورية","فتح اتصال دائم مع السيرفر","اتصال ثنائي الاتجاه بالويب","تحديث لوحة التحكم لحظيا","ويب سوكتس","تقنية الاتصال المباشر بالمتصفح","ارسال رسائل فورية بدون طلبات جديدة","persistent connection between client and server","real time bidirectional communication protocol","keep connection open for messages","chat app live messaging protocol","websocket connection","websokets","websocket vs polling","two way browser communication","streaming data to browser"]
---
## التعريف

اتصال يظل مفتوحًا ليتبادل العميل والخادم الرسائل في أي وقت دون طلبات جديدة.

## أين تسمعه؟

تطبيقات الدردشة، والإشعارات الفورية، ولوحات المتابعة، والألعاب الجماعية.

## أمثلة

- We use WebSockets to show new messages instantly.
  - نستخدم WebSockets لإظهار الرسائل الجديدة فورًا.
- Polling every second is wasteful. Let's switch to WebSockets.
  - الاستعلام كل ثانية مُهدِر للموارد. لننتقل إلى WebSockets.

## خطأ شائع

استخدام WebSockets في كل شيء. إذا كانت التحديثات نادرة فالاستعلام الدوري أو Server-Sent Events أبسط.

## لا تخلطه مع

غالبًا ما يتم الخلط بين WebSockets وتقنية Server-Sent Events؛ فبينما تسمح WebSockets باتصال ثنائي الاتجاه، فإن SSE مخصصة فقط لنقل البيانات من الخادم إلى العميل في اتجاه واحد.

## قلها في العمل

- We should implement WebSockets for this feature so the dashboard updates in real-time without needing a page refresh.
  - يجب أن نستخدم WebSockets لهذه الميزة حتى يتم تحديث لوحة التحكم بشكل لحظي دون الحاجة إلى إعادة تحميل الصفحة.
- I have reviewed the connection handling logic and it seems that the WebSockets are not closing properly when the user logs out.
  - لقد راجعت منطق التعامل مع الاتصال، ويبدو أن WebSockets لا تُغلق بشكل صحيح عند تسجيل خروج المستخدم.
