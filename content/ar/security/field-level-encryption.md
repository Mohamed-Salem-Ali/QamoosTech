---
id: field-level-encryption
category: security
level: intermediate
related: [encryption, pii]
term: "Field-Level Encryption"
translation: "التشفير على مستوى الحقل"
pronunciation: "فيلد ليفل إنكريبشن"
---
## التعريف

تشفير الأعمدة الحساسة فقط، مثل الرقم القومي، بدل قاعدة البيانات كلها. وحتى مع الوصول إلى القاعدة تبقى غير مقروءة.

## أين تسمعه؟

الرعاية الصحية والتمويل وأي نظام فيه بيانات شخصية.

## أمثلة

- We apply field-level encryption to phone numbers and national IDs.
  - نطبّق التشفير على مستوى الحقل على أرقام الهواتف والأرقام القومية.
- You need the key to search by that column.
  - تحتاج إلى المفتاح للبحث بواسطة ذلك العمود.

## خطأ شائع

تشفير حقل ثم طباعته نصًا واضحًا في السجلات أو رسائل الأخطاء.

## لا تخلطه مع

التشفير على مستوى الحقل يشفر أعمدة محددة في طبقة التطبيق، بينما التشفير الشفاف للبيانات يشفر ملف قاعدة البيانات بالكامل تلقائياً في طبقة التخزين.

## قلها في العمل

- Can we use field-level encryption for the credit card numbers in the payload?
  - هل يمكننا استخدام التشفير على مستوى الحقل لأرقام بطاقات الائتمان في الحمولة؟
- Please ensure that field-level encryption is applied to all personally identifiable information before storing it in the database.
  - يرجى التأكد من تطبيق التشفير على مستوى الحقل على جميع معلومات التعريف الشخصية قبل تخزينها في قاعدة البيانات.
