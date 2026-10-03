---
id: sharding
category: architecture
level: intermediate
related: [database, scalability, monolith-vs-microservices]
term: "Sharding"
pronunciation: "شارْدِينج"
---

## التعريف

تقنية لتقسيم قاعدة البيانات تعتمد على تجزئة البيانات الضخمة إلى أجزاء أصغر تسمى "shards" وتوزيعها على خوادم متعددة. تهدف هذه العملية إلى تحسين الأداء وقابلية التوسع من خلال تخفيف الضغط عن خادم قاعدة بيانات واحد.

## أين تسمعه؟

في نقاشات تصميم الأنظمة، واجتماعات إدارة قواعد البيانات، وعند التخطيط للبنية التحتية للتطبيقات ذات الزيارات العالية.

## أمثلة

- We need to implement sharding to handle the rapid growth of our user data.
  - نحتاج إلى تطبيق Sharding للتعامل مع النمو السريع في بيانات المستخدمين.
- The database team is sharding the logs table across four different servers to improve query speed.
  - يقوم فريق قاعدة البيانات بتقسيم جدول السجلات (logs) عبر أربعة خوادم مختلفة لتحسين سرعة الاستعلام.

## خطأ شائع

الاعتقاد بأن Sharding مجرد إعداد بسيط يمكن تفعيله؛ فهو قرار معماري معقد يجعل عمليات الاستعلام التي تربط البيانات بين الأجزاء المختلفة (cross-shard queries) وضمان اتساق البيانات أمراً صعب الإدارة.

## لا تخلطه مع

الفرق بين Sharding و Partitioning هو أن التقسيم (Partitioning) عادةً يقسم قاعدة البيانات داخل خادم واحد، بينما التجزئة (Sharding) توزع تلك الأجزاء على خوادم فعلية متعددة.

## قلها في العمل

- Before we hit database limits this holiday season, we should look into sharding our user table.
  - قبل أن نصل إلى حدود قاعدة البيانات في موسم العطلات هذا، يجب أن نبحث في تجزئة جدول المستخدمين الخاص بنا.
- Please review the proposed sharding strategy to ensure our cross-shard queries remain efficient.
  - يرجى مراجعة استراتيجية التجزئة المقترحة لضمان بقاء استعلاماتنا عبر الأجزاء المختلفة كفؤة.
