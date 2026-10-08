---
id: managed-service
category: devops
subcategory: infrastructure
level: beginner
related: [serverless, scalability]
term: "Managed Service"
translation: "الخدمة المُدارة"
pronunciation: "مانجد سيرفيس"
keywords: ["خدمة سحابية مدارة بالكامل","استضافة تدار بواسطة المزود","تخفيف عبء صيانة الخوادم","خدمات تقنية مدارة خارجياً","الفرق بين الخدمة المدارة والذاتية","من يتولى تحديث البنية التحتية","خدمات سحابية لا تحتاج صيانة","مانجد سيرفيس","إدارة البنية التحتية من المزود","تقليل مهام فريق التشغيل","خدمات مقدمة من طرف ثالث","cloud provider handles maintenance","outsourced infrastructure management","stop patching servers manually","fully hosted database solution","vendor managed cloud components","reduce devops operational overhead","managed services vs unmanaged","platform as a service","automated server administration","offload infrastructure maintenance","managed service provider model"]
---

## التعريف

هي خدمة تقنية يتولى فيها مزود الخدمة (مثل شركات السحابة) إدارة وصيانة وتحديث البنية التحتية أو البرمجيات نيابة عن العميل. يتيح ذلك للمطورين التركيز على كتابة الكود البرمجي بدلاً من الانشغال بإصلاح الثغرات أو صيانة الخوادم.

## أين تسمعه؟

في اجتماعات التخطيط للبنية التحتية السحابية، وعند المفاضلة بين خيارات الاستضافة.

## أمثلة

- We decided to use a managed service for our database to avoid manual backups and patching.
  - قررنا استخدام Managed Service لقاعدة البيانات لتجنب النسخ الاحتياطي اليدوي وعمليات التحديث.
- Using a managed service reduces the operational burden on our small engineering team.
  - استخدام Managed Service يقلل من العبء التشغيلي على فريقنا الهندسي الصغير.
- Our managed service handles the backups, so the team never runs them by hand.
  - تتولى خدمتنا المُدارة النسخ الاحتياطي، فلا يُجريه الفريق يدوياً أبداً.

## خطأ شائع

الاعتقاد بأن الاعتماد على Managed Service يعني عدم الحاجة لأي إعدادات أو مراقبة؛ فما زلت بحاجة إلى ضبط إعدادات تطبيقك ومراقبة أداء الموارد التي تستخدمها.

## لا تخلطه مع

تختلف الخدمة المُدارة (Managed Service) عن البنية التحتية غير المُدارة في أن مزود الخدمة يتولى الصيانة الدورية والتحديثات، بينما تترك الخدمات غير المُدارة كل مسؤوليات إدارة النظام لفريقك.

## قلها في العمل

- Can we just use a managed service for the cache layer so we don't have to patch clusters manually?
  - هل يمكننا استخدام Managed Service لطبقة التخزين المؤقت حتى لا نضطر لتحديث المجموعات يدوياً؟
- Please ensure the proposed architecture relies on a managed service for the message queue to reduce our maintenance overhead.
  - يرجى التأكد من أن البنية المقترحة تعتمد على Managed Service لطابور الرسوميات لتقليل عبء الصيانة لدينا.
