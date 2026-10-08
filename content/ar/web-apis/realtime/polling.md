---
id: polling
category: web-apis
subcategory: realtime
level: beginner
related: [long-polling, websockets, webhook, real-time]
tags: [javascript]
aliases: ["short polling", "polling interval"]
term: "Polling"
translation: "الاستعلام الدوري"
pronunciation: "بولينج"
keywords: ["اسأل مراراً", "افحص التحديثات كل بضع ثوانٍ", "بسيط لكنه مهدر", "طلب في setInterval", "حلقة فحص الحالة", "بدل الدفع", "ask again and again", "check for updates every few seconds", "simple but wasteful", "setinterval request", "status check loop", "instead of push"]
---

## التعريف

الاستعلام الدوري (Polling) يعني أن يسأل العميل الخادم مراراً "هل من جديد؟" على فترات منتظمة، بدل أن يخطره الخادم. هو بسيط لكنه يهدر الطلبات حين لا يتغير شيء.

## أين تسمعه؟

في صفحات حالة المهام، والميزات اللحظية البسيطة، ونقاشات الاستعلام الدوري مقابل WebSockets وwebhooks.

## أمثلة

- The page polls the job status every 5 seconds until it finishes.
  - تستعلم الصفحة عن حالة المهمة كل 5 ثوانٍ حتى تنتهي.
- Use polling for something simple; switch to WebSockets if it needs to be instant.
  - استخدم الاستعلام الدوري للأشياء البسيطة وانتقل إلى WebSockets إن لزمت اللحظية.
- The dashboard polls the server every ten seconds to refresh the order count.
  - تستعلم لوحة المتابعة الخادم كل عشر ثوانٍ لتحديث عدد الطلبات.

## خطأ شائع

الاستعلام بكثرة أو إلى الأبد. يضيف حملاً؛ باعد الفترة وتوقف عند انتهاء المهمة.

## لا تخلطه مع

الاستعلام الطويل حيث يُبقي الخادم الطلب مفتوحاً حتى يوجد جديد. أما العادي فيرد فوراً حتى بلا جديد.

## قلها في العمل

- Can we just poll for now?
  - هل نكتفي بالاستعلام الدوري الآن؟
- Poll every 10 seconds with a timeout.
  - استعلم كل 10 ثوانٍ مع مهلة.
