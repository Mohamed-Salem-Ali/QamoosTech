---
id: coroutine
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [async-await, generator, thread, goroutine]
aliases: ["coroutines", "async function", "cooperative multitasking"]
term: "Coroutine"
translation: "الروتين المتعاون"
pronunciation: "كوروتين"
keywords: ["دالة تستطيع التوقف", "الكلمة async def", "‏await تعيد التحكم", "تعدد مهام تعاوني", "تزامن خفيف", "حلقة الأحداث تشغلها", "function that can pause", "async def", "await gives control back", "cooperative multitasking", "lightweight concurrency", "event loop runs it"]
---

## التعريف

الروتين المتعاون (Coroutine) دالة تستطيع التوقف في المنتصف (عند `await`) وإتاحة تنفيذ عمل آخر ثم الاستئناف لاحقاً من حيث توقفت. وكود async مبني من هذه الروتينات.

## أين تسمعه؟

في `asyncio` في بايثون، وKotlin، ودوال async في جافاسكربت، ونقاشات التعامل مع اتصالات كثيرة.

## أمثلة

- Calling a coroutine function gives you a coroutine object; you must await it.
  - استدعاء دالة روتين يعطيك كائن روتين؛ ويجب أن تنتظره بـ await.
- One thread can run thousands of coroutines.
  - يمكن لخيط واحد تشغيل آلاف الروتينات.
- The coroutine waits for the network call and lets other requests run in the meantime.
  - تنتظر الدالة المشتركة (coroutine) استدعاء الشبكة، وتترك الطلبات الأخرى تعمل في هذه الأثناء.

## خطأ شائع

نسيان `await`. فلا يعمل الروتين وتكتفي بايثون بتحذير أنه لم يُنتظر.

## لا تخلطه مع

الخيط الذي يجدوله نظام التشغيل ويقاطعه في أي وقت. أما الروتين فيتوقف حيث يختار فقط.

## قلها في العمل

- Make this a coroutine so it doesn't block the loop.
  - اجعل هذا روتيناً حتى لا يحجب الحلقة.
- Don't call blocking code inside a coroutine.
  - لا تستدعِ كوداً حاجباً داخل روتين.
