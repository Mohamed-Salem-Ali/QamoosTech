---
id: serialization
category: programming
subcategory: text-and-data-formats
level: intermediate
related: [payload, json-schema, dto, xml, markdown, parsing, msgpack]
aliases: ["serialisation", "marshalling", "deserialization"]
term: "Serialization"
translation: "التسلسل"
pronunciation: "سيريالايزيشن"
keywords: ["تحويل الكائن إلى JSON", "تحويل البيانات إلى نص أو بايتات", "حفظ كائن في ملف", "إرسال كائن عبر الشبكة", "عكس التسلسل من JSON", "تحويل البيانات للنقل", "convert object to json", "turn data into text or bytes", "save object to file", "send object over network", "deserialize json back", "marshalling data"]
---

## التعريف

التسلسل (Serialization) يحوّل كائناً في الذاكرة إلى نص أو بايتات مثل JSON ليُحفظ أو يُرسل. وعكس التسلسل (Deserialization) يعيده كائناً.

## أين تسمعه؟

في العمل مع الـ API، والتخزين المؤقت، وحفظ البيانات في ملفات، وفي توثيق الأطر مثل serializers في Django REST Framework.

## أمثلة

- The API serializes the order into JSON before sending it.
  - يحوّل الـ API الطلب إلى JSON قبل إرساله.
- Deserialization failed because a required field was missing.
  - فشل عكس التسلسل لأن حقلاً مطلوباً كان مفقوداً.

## خطأ شائع

عكس تسلسل بيانات غير موثوقة بصيغة قد تنفّذ كوداً مثل pickle في بايثون. فضّل صيغة بسيطة مثل JSON.

## لا تخلطه مع

التحقق (Validation) الذي يفحص صحة البيانات. أما التسلسل فيغيّر شكلها فقط.

## قلها في العمل

- Add a serializer so the model can be returned as JSON.
  - أضف serializer ليُعاد النموذج بصيغة JSON.
- Keep the stored format stable, or old data won't deserialize.
  - أبقِ صيغة التخزين ثابتة وإلا لن تُقرأ البيانات القديمة.
