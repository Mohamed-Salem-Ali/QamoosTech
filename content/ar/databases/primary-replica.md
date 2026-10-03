---
id: primary-replica
category: databases
level: intermediate
related: [database, query, scalability, single-point-of-failure]
term: "Primary / Replica"
translation: "الرئيسي والنسخ المتماثلة"
pronunciation: "برايمري / ريبليكا"
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
