---
id: protocol-buffers
category: web-apis
subcategory: data-formats
level: intermediate
related: [grpc, json, json-schema, base64, msgpack]
aliases: ["protobuf", "proto file"]
term: "Protocol Buffers"
translation: "الـ Protocol Buffers"
pronunciation: "بروتوكول بافرز"
keywords: ["بروتوبف", "صيغة ثنائية مضغوطة", "مخطط ملف proto", "أصغر من JSON", "كود مولّد", "أرقام الحقول", "protobuf", "compact binary format", "proto file schema", "smaller than json", "generated code", "field numbers"]
---

## التعريف

‏Protocol Buffers (protobuf) صيغة ثنائية مضغوطة للبيانات المنظمة. تصف الرسالة في ملف `.proto` وتولّد كوداً بأي لغة لقراءتها وكتابتها.

## أين تسمعه؟

في خدمات gRPC، ومخططات رسائل Kafka، والأنظمة الحساسة للحجم.

## أمثلة

- The protobuf message is a fraction of the JSON size.
  - رسالة protobuf جزء من حجم JSON.
- Never reuse or renumber a field number.
  - لا تعد استخدام رقم حقل ولا تغيّر ترقيمه أبداً.

## خطأ شائع

تغيير نوع حقل موجود أو رقمه. فتقرأ الخدمات القديمة والجديدة البيانات خطأً.

## لا تخلطه مع

‏JSON وهو نص مقروء للناس وبلا مخطط افتراضياً. أما protobuf فثنائي ويقوم على مخطط.

## قلها في العمل

- Add the new field with the next number.
  - أضف الحقل الجديد برقمه التالي.
- Regenerate the code after editing the proto.
  - أعد توليد الكود بعد تعديل proto.
