---
id: breadth-first-search
category: programming
subcategory: data-structures
level: intermediate
related: [depth-first-search, priority-queue, binary-tree]
tags: [python]
aliases: ["bfs"]
term: "Breadth-First Search"
translation: "البحث بالعرض أولاً"
pronunciation: "بريدث فيرست سيرش"
keywords: ["مستوى بمستوى", "اختصار BFS", "يستخدم طابوراً", "أقصر مسار بلا أوزان", "الأقرب أولاً", "درجات الشبكة الاجتماعية", "level by level", "bfs", "uses a queue", "shortest path unweighted", "nearest first", "social network degrees"]
---

## التعريف

البحث بالعرض أولاً (BFS) يستكشف رسماً أو شجرة مستوى بمستوى: العقدة الأولى ثم جيرانها ثم جيران الجيران، باستخدام طابور. ويجد أقصر مسار حين تكلف كل الخطوات الشيء نفسه.

## أين تسمعه؟

في مقابلات الخوارزميات (أقصر مسار في متاهة أو شبكة)، وميزات الرسوم الاجتماعية، وزواحف الويب.

## أمثلة

- BFS finds the fewest hops between two users.
  - يجد BFS أقل عدد قفزات بين مستخدمين.
- Push neighbours onto the queue and mark them visited.
  - ادفع الجيران إلى الطابور وعلّمهم كمزارين.
- BFS visits all friends at distance one before it looks at any friend of a friend.
  - يزور BFS كل الأصدقاء على مسافة واحدة قبل أن ينظر في أي صديق لصديق.

## خطأ شائع

استخدام BFS للمسارات الموزونة. الحواف بتكاليف مختلفة تحتاج خوارزمية ديكسترا.

## لا تخلطه مع

البحث بالعمق أولاً الذي يتعمق أولاً ويستخدم ذاكرة أقل في الرسوم العريضة لكنه لا يجد أقصر المسارات.

## قلها في العمل

- Use BFS to find the shortest route.
  - استخدم BFS لإيجاد أقصر طريق.
- The queue grows with the width of the graph.
  - يكبر الطابور مع عرض الرسم.
