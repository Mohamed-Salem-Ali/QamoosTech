---
id: schema-registry
category: databases
subcategory: fundamentals
level: intermediate
related: [json-schema, protocol-buffers, event-driven]
aliases: ["avro", "schema compatibility"]
term: "Schema Registry"
translation: "سجل المخططات"
pronunciation: "سكيما ريجستري"
keywords: ["مكان مركزي لمخططات الرسائل", "‏Kafka وAvro", "فحوص التوافق", "المنتجون والمستهلكون متفقون", "مخططات بإصدارات", "تطوير الأحداث بأمان", "central place for message schemas", "kafka avro", "compatibility checks", "producers and consumers agree", "versioned schemas", "evolve events safely"]
---

## التعريف

سجل المخططات (Schema Registry) خدمة تخزن مخططات الرسائل بإصداراتها، مثل تعريفات Avro أو Protobuf، وتتحقق من أن الإصدارات الجديدة تبقى متوافقة مع القديمة.

## أين تسمعه؟

في Kafka والأنظمة المعتمدة على الأحداث بفرق كثيرة، ومنصات البيانات، ونقاشات حوكمة الـ API.

## أمثلة

- The registry rejects a change that removes a required field.
  - يرفض السجل تغييراً يحذف حقلاً مطلوباً.
- Producers register the schema before publishing.
  - يسجّل المنتجون المخطط قبل النشر.
- The producer registers the new Avro schema, and the registry confirms it is compatible.
  - يسجّل المنتِج مخطط Avro الجديد، ويؤكد السجل أنه متوافق.

## خطأ شائع

تغيير صيغ الأحداث دون فحص المستهلكين. تمنع قواعد التوافق في السجل الكسر قبل الإصدار.

## لا تخلطه مع

مخطط قاعدة البيانات الذي يعرّف الجداول. أما السجل فيحمل شكل الرسائل أثناء النقل.

## قلها في العمل

- Is the new schema backward compatible?
  - هل المخطط الجديد متوافق مع الخلف؟
- Register it in the registry first.
  - سجّله في السجل أولاً.
