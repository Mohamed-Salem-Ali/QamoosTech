---
id: hot-shard
category: architecture
subcategory: scaling
level: intermediate
related: [sharding, consistent-hashing, load-balancer]
aliases: ["hot partition", "hot key", "partition key"]
term: "Hot Shard"
translation: "الجزء الساخن"
pronunciation: "هوت شارد"
keywords: ["جزء واحد يتلقى كل الزيارات", "توزيع غير متساوٍ للبيانات", "مفتاح شائع يحمّل عقدة زائداً", "حمل غير متوازن", "قسم ساخن", "مفتاح تقسيم سيئ", "one shard gets all the traffic", "uneven data distribution", "popular key overloads a node", "skewed load", "hot partition", "bad partition key"]
---

## التعريف

الجزء الساخن (Hot Shard) هو قسم واحد في نظام مجزّأ يتلقى زيارات أكثر بكثير من غيره، فيصبح عنق الزجاجة بينما يبقى الباقي خاملاً.

## أين تسمعه؟

في حوادث أداء قواعد البيانات، ومراجعات تصميم DynamoDB وCassandra، ونقاشات تصميم المفاتيح.

## أمثلة

- A celebrity's account became a hot shard.
  - أصبح حساب مشهور جزءاً ساخناً.
- Choosing the date as the partition key sends all today's writes to one hot shard.
  - اختيار التاريخ كمفتاح تقسيم يرسل كل كتابات اليوم إلى جزء ساخن واحد.

## خطأ شائع

اختيار مفتاح تقسيم بقيم مميزة قليلة أو نمط منحاز. اختر مفتاحاً يوزع الحمل بالتساوي.

## لا تخلطه مع

نقطة الفشل الوحيدة التي يوقف فشلها كل شيء. أما الجزء الساخن فبطيء وليس بالضرورة معطلاً.

## قلها في العمل

- That key is hot; let's add a random suffix.
  - هذا المفتاح ساخن؛ لنضف لاحقة عشوائية.
- One shard is at 90% while the others are at 10%.
  - جزء واحد عند 90% بينما الباقي عند 10%.
