---
id: auto-increment-id
category: databases
subcategory: modeling
level: beginner
related: [primary-key, table-row-column, database]
aliases: ["auto increment", "autoincrement", "serial id", "sequential id"]
term: "Auto-Increment ID"
translation: "المعرّف التلقائي التزايد"
pronunciation: "أوتو إنكريمنت آي دي"
keywords: ["معرّف يزيد من تلقاء نفسه", "مفتاح أساسي تسلسلي", "عمود autoincrement", "المعرّف الرقمي مقابل UUID", "قاعدة البيانات تعطي المعرّف", "المعرّف لا يُعاد استخدامه", "id that counts up by itself", "serial primary key", "autoincrement column", "numeric id vs uuid", "database assigns the id", "id never reused"]
---

## التعريف

المعرّف التلقائي التزايد (Auto-Increment ID) مفتاح أساسي تعطيه قاعدة البيانات قيمته تلقائياً بعدّ تصاعدي: 1 ثم 2 ثم 3 وهكذا.

## أين تسمعه؟

في تصميم الجداول، والإعدادات الافتراضية للـ ORM، ونقاشات المعرّفات الرقمية مقابل UUID.

## أمثلة

- The database gives each new payment the next auto-increment ID.
  - تعطي قاعدة البيانات كل دفعة جديدة المعرّف التالي تلقائياً.
- Don't expose sequential ids in public URLs because people can guess them.
  - لا تكشف المعرّفات المتسلسلة في روابط عامة لأن الناس يستطيعون تخمينها.
- The orders table uses an auto-increment ID, so each new order gets the next number.
  - يستخدم جدول الطلبات معرّفاً ذا زيادة تلقائية، فيحصل كل طلب جديد على الرقم التالي.

## خطأ شائع

توقع أن تكون المعرّفات بلا فجوات. الصفوف المحذوفة والإدراجات الفاشلة تترك فجوات، والمعرّف المحذوف لا يُعاد استخدامه.

## لا تخلطه مع

الـ UUID وهو معرّف عشوائي طويل. يصعب تخمينه ويمكن إنشاؤه دون سؤال قاعدة البيانات.

## قلها في العمل

- Use an auto-increment ID internally and a public slug in URLs.
  - استخدم معرّفاً تلقائي التزايد داخلياً و slug عاماً في الروابط.
- Ids are never reused, so there will be gaps.
  - المعرّفات لا تُعاد، لذا ستكون هناك فجوات.
