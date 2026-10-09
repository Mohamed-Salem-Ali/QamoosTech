---
id: binary-search-tree
category: programming
subcategory: data-structures
level: intermediate
related: [binary-tree, index, recursion]
tags: [python]
aliases: ["bst"]
term: "Binary Search Tree"
translation: "شجرة البحث الثنائية"
pronunciation: "باينري سيرش تري"
keywords: ["الأيسر أصغر والأيمن أكبر", "بحث سريع", "بيانات مرتبة", "شجرة متوازنة", "بحث لوغاريتمي", "المرور الداخلي يعطي الترتيب", "left smaller right larger", "fast lookup", "ordered data", "balanced tree", "log n search", "inorder gives sorted"]
---

## التعريف

شجرة البحث الثنائية (BST) شجرة ثنائية يكون فيها كل ما في الشجرة الفرعية اليسرى لعقدة أصغر وكل ما في اليمنى أكبر، فتبحث باختيار اليسار أو اليمين في كل خطوة.

## أين تسمعه؟

في مقابلات الخوارزميات، وشروح فهارس قواعد البيانات (B-tree)، وتنفيذات الخرائط المرتبة.

## أمثلة

- Searching a balanced BST takes about log n steps.
  - يستغرق البحث في شجرة متوازنة نحو log n خطوة.
- Inserting sorted data into a plain BST makes it a chain.
  - إدراج بيانات مرتبة في BST عادية يجعلها سلسلة.
- Looking up a key in the BST skips half of the remaining tree at each step.
  - يتخطى البحث عن مفتاح في شجرة البحث الثنائية نصف الشجرة المتبقية في كل خطوة.

## خطأ شائع

نسيان أن BST غير المتوازنة قد تنحدر إلى O(n). الأشجار ذاتية التوازن (AVL وred-black) تتجنب ذلك.

## لا تخلطه مع

جدول التجزئة الذي يعطي بحثاً سريعاً دون ترتيب.

## قلها في العمل

- Implement insert and search on a BST.
  - نفّذ الإدراج والبحث على شجرة بحث ثنائية.
- Is the tree balanced?
  - هل الشجرة متوازنة؟
