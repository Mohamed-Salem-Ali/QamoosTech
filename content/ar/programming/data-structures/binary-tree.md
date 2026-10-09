---
id: binary-tree
category: programming
subcategory: data-structures
level: intermediate
related: [binary-search-tree, recursion, depth-first-search]
tags: [python]
aliases: ["tree", "tree structure", "root node", "leaf node"]
term: "Binary Tree"
translation: "الشجرة الثنائية"
pronunciation: "باينري تري"
keywords: ["لكل عقدة طفلان على الأكثر", "الطفل الأيسر والأيمن", "الجذر والأوراق", "المرور على الشجرة", "بنية تكرارية", "عمق الشجرة", "each node has up to two children", "left and right child", "root and leaves", "traversal", "recursive structure", "tree depth"]
---

## التعريف

الشجرة الثنائية (Binary Tree) بنية من العقد لكل عقدة طفلان على الأكثر، يسميان الأيسر والأيمن، تبدأ من عقدة جذر واحدة.

## أين تسمعه؟

في مقررات الخوارزميات ومقابلاتها، ومحللات التعبيرات، والبنى الشبيهة بأنظمة الملفات، والأكوام.

## أمثلة

- Each node holds a value and two child pointers.
  - تحمل كل عقدة قيمة ومؤشري طفلين.
- Find the depth of a binary tree with a recursive function.
  - أوجد عمق الشجرة الثنائية بدالة تكرارية ذاتية.
- An expression tree is a binary tree whose leaves are numbers.
  - شجرة التعبير شجرة ثنائية أوراقها أرقام.

## خطأ شائع

افتراض أن كل شجرة ثنائية متوازنة. قد تشبه الشجرة المنحلّة قائمة مترابطة.

## لا تخلطه مع

شجرة البحث الثنائية وهي شجرة ثنائية بقاعدة ترتيب تجعل البحث سريعاً.

## قلها في العمل

- Walk the tree in-order.
  - مرّ على الشجرة بالترتيب الداخلي.
- What's the height of this tree?
  - ما ارتفاع هذه الشجرة؟
