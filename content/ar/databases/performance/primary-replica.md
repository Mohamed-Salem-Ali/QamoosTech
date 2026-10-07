---
id: primary-replica
category: databases
subcategory: performance
level: intermediate
related: [database, query, scalability, single-point-of-failure]
term: "Primary / Replica"
translation: "الرئيسي والنسخ المتماثلة"
pronunciation: "برايمري / ريبليكا"
keywords: ["فصل عمليات القراءة والكتابة","توزيع ضغط قاعدة البيانات","النسخ المتماثل لقواعد البيانات","العقدة الرئيسية والعقد التابعة","تحسين أداء استعلامات القراءة","استخدام نسخ للقراءة فقط","توسيع نطاق قاعدة البيانات","نظام العقدة الأساسية والنسخ","توجيه القراءة للنسخ المتماثلة","تخفيف الحمل عن العقدة الرئيسية","database read write separation","master slave database architecture","scaling database read performance","database replication setup","primary and secondary nodes","offload reads to replica","database read only nodes","handle heavy read traffic","primary replica pattern","database node promotion","master replica database setup"]
---

## التعريف

نمط معماري لقواعد البيانات يتم فيه توجيه جميع عمليات الكتابة إلى عقدة رئيسية واحدة، بينما تُنسخ البيانات إلى عقدة واحدة أو أكثر تتعامل مع عمليات القراءة لتحسين الأداء والتوفر.

## أين تسمعه؟

- توسيع نطاق قراءة البيانات
- التخطيط للتوفر العالي
- إعداد نسخ قواعد البيانات المتماثلة

## أمثلة

- We configured the application to send heavy read queries to the replica.
  - قمنا بإعداد التطبيق لإرسال استعلامات القراءة الثقيلة إلى النسخة المتماثلة.
- When the primary node failed, one of the replicas was promoted to take its place.
  - عندما تعطلت العقدة الرئيسية، جرى ترقية إحدى النسخ المتماثلة لتحل محلها.

## خطأ شائع

الاعتقاد بأن النسخ المتماثلة تتلقى تحديثات البيانات بشكل فوري، مما يؤدي إلى قراءة بيانات قديمة غير محدثة إذا قام التطبيق بقراءة البيانات مباشرة بعد كتابتها.

## لا تخلطه مع

غالبًا ما يتم الخلط بين نموذج Primary / Replica ونظام التكتل النشط Active / Active، حيث تتعامل عقد متعددة مع القراءة والكتابة في نفس الوقت، بينما يتعامل العقدة الرئيسية مع الكتابة والنسخ المتماثلة مع القراءة.

## قلها في العمل

- Can we route these heavy analytics queries to the replica so we do not slow down the primary?
  - هل يمكننا توجيه استعلامات التحليلات الثقيلة هذه إلى النسخة المتماثلة حتى لا نبطئ العقدة الرئيسية؟
- Please ensure that the application connection string points write operations exclusively to the primary node.
  - يرجى التأكد من أن نص اتصال التطبيق يوجه عمليات الكتاب حصريًا إلى العقدة الرئيسية.
