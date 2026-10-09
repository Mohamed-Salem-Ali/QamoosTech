---
id: priority-queue
category: programming
subcategory: data-structures
level: intermediate
related: [binary-tree, hash-function, topological-sort]
tags: [python]
aliases: ["heap", "min heap", "heapq"]
term: "Priority Queue"
translation: "طابور الأولويات"
pronunciation: "برايوريتي كيو"
keywords: ["الأعلى أولوية أولاً", "وحدة heapq", "خوارزمية ديكسترا", "المجدول", "كومة صغرى", "أخرج الأصغر", "highest priority first", "heapq", "dijkstra", "scheduler", "min heap", "pop the smallest"]
---

## التعريف

طابور الأولويات (Priority Queue) مجموعة لكل عنصر فيها أولوية، والعنصر التالي الذي تخرجه هو دائماً صاحب أعلى أولوية (أو أقل قيمة) وليس الأقدم.

## أين تسمعه؟

في المجدولات، وخوارزميات أقصر مسار (ديكسترا)، وأنظمة المهام، و`heapq` في بايثون.

## أمثلة

- Urgent jobs jump ahead of normal ones in the priority queue.
  - تتقدم المهام العاجلة على العادية في طابور الأولويات.
- `heapq.heappop` returns the smallest item.
  - تعيد `heapq.heappop` أصغر عنصر.
- The support queue serves the urgent tickets first, then the rest in arrival order.
  - يخدم طابور الدعم التذاكر العاجلة أولاً، ثم بقية التذاكر حسب ترتيب وصولها.

## خطأ شائع

استخدام قائمة مرتبة وإعادة الترتيب بعد كل إدراج. طابور الأولويات المبني على الكومة أسرع بكثير.

## لا تخلطه مع

الطابور العادي (FIFO) الذي يخدم العناصر بترتيب الوصول بدقة.

## قلها في العمل

- Put the tasks in a priority queue.
  - ضع المهام في طابور أولويات.
- Break ties by insertion order.
  - فكّ التعادل بترتيب الإدراج.
