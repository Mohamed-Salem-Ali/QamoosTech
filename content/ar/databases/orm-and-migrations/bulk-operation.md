---
id: bulk-operation
category: databases
subcategory: orm-and-migrations
level: intermediate
related: [n-plus-one, orm, transaction]
tags: [django]
aliases: ["bulk insert", "bulk create", "batch insert"]
term: "Bulk Operation"
translation: "العملية الجماعية"
pronunciation: "بَلك أوبريشن"
keywords: ["إدراج صفوف كثيرة دفعة واحدة", "تحديث صفوف كثيرة باستعلام واحد", "‏bulk_create", "تجنب الحفظ داخل حلقة", "إدراج دفعي", "أسرع من واحد تلو الآخر", "insert many rows at once", "update many rows in one query", "bulk_create", "avoid saving in a loop", "batch insert", "faster than one by one"]
---

## التعريف

العملية الجماعية (Bulk Operation) تُدرج صفوفاً كثيرة أو تحدّثها أو تحذفها باستعلام واحد، بدلاً من إرسال استعلام لكل صف.

## أين تسمعه؟

في كود الـ ORM، واستيراد البيانات، وسكريبتات التهيئة، ومراجعات الأداء التي تزيل الحلقات البطيئة.

## أمثلة

- Use a bulk insert for the 10,000 imported rows.
  - استخدم إدراجاً جماعياً للصفوف المستوردة وعددها 10,000.
- Saving each object in a loop sent thousands of queries; the bulk version sends one.
  - حفظ كل كائن في حلقة أرسل آلاف الاستعلامات؛ والنسخة الجماعية ترسل واحداً.
- Inserting the 10,000 rows with one bulk operation took two seconds.
  - استغرق إدراج 10000 صف بعملية جماعية واحدة ثانيتين.

## خطأ شائع

الظن بأن الدوال الجماعية تنفّذ كل منطق النموذج. كثير منها يتخطى الـ signals وكود `save()` المخصص.

## لا تخلطه مع

المعاملة (Transaction) التي تجمع خطوات لتنجح أو تفشل معاً. أما العملية الجماعية فتتعلق بإرسال استعلامات أقل.

## قلها في العمل

- Switch that loop to a bulk insert.
  - حوّل تلك الحلقة إلى إدراج جماعي.
- Do the import in batches of a thousand rows.
  - نفّذ الاستيراد على دفعات من ألف صف.
