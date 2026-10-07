---
id: event-loop
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [microtask-queue, async-await, callback]
tags: [javascript]
aliases: ["node event loop", "task queue", "callback queue"]
term: "Event Loop"
translation: "حلقة الأحداث"
pronunciation: "إيفنت لوب"
keywords: ["كيف تشغل جافاسكربت الكود غير المتزامن", "خيط واحد", "المكدس والطوابير", "‏setTimeout تعمل لاحقاً", "حجب الحلقة", "‏Node.js والمتصفح", "how javascript runs async code", "single thread", "call stack and queues", "settimeout runs later", "blocking the loop", "node.js and browser"]
---

## التعريف

حلقة الأحداث (Event Loop) هي الآلية التي تتيح لخيط واحد معالجة مهام كثيرة: تأخذ مراراً الاستدعاء التالي المنتظر (مؤقت أو نقرة أو رد شبكة) وتنفذه عندما يفرغ المكدس.

## أين تسمعه؟

في مقابلات جافاسكربت وNode.js (و`asyncio` في بايثون)، وتصحيح الأداء عند تجمد الواجهة، وأسئلة "لماذا عملت setTimeout أخيراً؟".

## أمثلة

- A long loop blocks the event loop, so the page can't respond.
  - تحجب الحلقة الطويلة حلقة الأحداث فلا تستجيب الصفحة.
- `setTimeout(fn, 0)` still waits until the stack is empty.
  - ‏`setTimeout(fn, 0)` ما زالت تنتظر حتى يفرغ المكدس.

## خطأ شائع

تشغيل عمل معالج ثقيل على الحلقة. لا يعمل شيء آخر في الأثناء، بما فيه طلبات المستخدمين الآخرين في Node.

## لا تخلطه مع

تعدد الخيوط حيث تعمل عدة خيوط معاً. أما حلقة الأحداث فخيط واحد يتناوب.

## قلها في العمل

- Don't block the event loop.
  - لا تحجب حلقة الأحداث.
- Move the heavy work to a worker.
  - انقل العمل الثقيل إلى عامل.
