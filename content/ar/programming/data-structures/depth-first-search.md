---
id: depth-first-search
category: programming
subcategory: data-structures
level: intermediate
related: [breadth-first-search, recursion, binary-tree]
tags: [python]
aliases: ["dfs"]
term: "Depth-First Search"
translation: "البحث بالعمق أولاً"
pronunciation: "ديبث فيرست سيرش"
keywords: ["اذهب لأعمق مدى أولاً", "اختصار DFS", "مكدس أو استدعاء ذاتي", "استكشاف رسم بياني", "حل المتاهات", "التراجع", "go as deep as possible first", "dfs", "stack or recursion", "explore a graph", "maze solving", "backtracking"]
---

## التعريف

البحث بالعمق أولاً (DFS) يستكشف شجرة أو رسماً بيانياً باتباع مسار واحد إلى أقصاه ثم الرجوع وتجربة الفرع التالي. ويستخدم مكدساً أو استدعاءً ذاتياً.

## أين تسمعه؟

في مقررات الخوارزميات ومقابلاتها، والمرور على شجرة الملفات، وحل الاعتماديات، وحل الألغاز.

## أمثلة

- DFS visits every file in a folder tree by going into each subfolder first.
  - يزور DFS كل ملف في شجرة مجلدات بالدخول إلى كل مجلد فرعي أولاً.
- Mark visited nodes so DFS doesn't loop in a graph with cycles.
  - علّم العقد المزارة حتى لا يدور DFS في رسم فيه دورات.
- DFS detects the cycle by noticing a node that is already on the current path.
  - يكتشف DFS الدورة حين يلاحظ عقدة موجودة بالفعل على المسار الحالي.

## خطأ شائع

نسيان مجموعة المزارة في رسم بياني. مع الدورات لا ينتهي البحث.

## لا تخلطه مع

البحث بالعرض أولاً الذي يستكشف مستوى بمستوى ويجد أقصر مسار في رسم بلا أوزان.

## قلها في العمل

- Use DFS to explore all reachable nodes.
  - استخدم DFS لاستكشاف كل العقد الممكن بلوغها.
- The recursion goes too deep; use an explicit stack.
  - الاستدعاء الذاتي عميق جداً؛ استخدم مكدساً صريحاً.
