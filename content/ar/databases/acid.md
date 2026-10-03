---
id: acid
category: databases
level: intermediate
related: [database, transaction]
term: "ACID"
pronunciation: "آسيد"
---

## التعريف

هي مجموعة من الخصائص (الذرية، الاتساق، العزل، والمتانة) التي تضمن معالجة معاملات قواعد البيانات بشكل موثوق. تضمن هذه الخصائص بقاء البيانات دقيقة ومتسقة حتى في حال حدوث أخطاء برمجية أو انقطاع في التيار الكهربائي.

## أين تسمعه؟

أثناء نقاشات بنية قواعد البيانات، أو عند اختيار محرك قاعدة بيانات، أو عند تصميم أنظمة تتطلب مستوى عالٍ من سلامة البيانات.

## أمثلة

- We chose a relational database because our financial records require ACID compliance.
  - اخترنا قاعدة بيانات علائقية لأن سجلاتنا المالية تتطلب الامتثال لمعايير ACID.
- The system ensures ACID properties to prevent partial data updates during a transaction.
  - يضمن النظام خصائص ACID لمنع تحديثات البيانات الجزئية أثناء المعاملة.

## خطأ شائع

الاعتقاد بأن جميع قواعد البيانات تدعم ACID بشكل افتراضي؛ فالعديد من قواعد بيانات NoSQL تعطي الأولوية للأداء أو التوفر على حساب ضمانات ACID الصارمة.

## قلها في العمل

- Let us make sure the new payment service supports ACID transactions before we move forward.
  - دعنا نتأكد من أن خدمة الدفع الجديدة تدعم معاملات ACID قبل أن المضي قدماً.
- Please verify that the database configuration guarantees ACID compliance for all critical financial logs.
  - يرجى التحقق من أن إعدادات قاعدة البيانات تضمن الامتثال لـ ACID لجميع السجلات المالية الحرجة.
