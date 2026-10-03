---
id: pii
category: security
level: intermediate
related: [gdpr-deletion, field-level-encryption]
term: "PII (Personally Identifiable Information)"
translation: "المعلومات الشخصية المعرِّفة"
pronunciation: "بي آي آي"
---
## التعريف

أي بيانات تحدد هوية شخص: الاسم، رقم الهاتف، البريد الإلكتروني، الرقم القومي، العنوان.

## أين تسمعه؟

سياسات الخصوصية ومراجعات الأمان وقواعد التعامل مع البيانات.

## أمثلة

- Do not log any PII.
  - لا تسجّل أي PII في السجلات.
- Mask the PII before sending data to analytics.
  - أخفِ الـ PII قبل إرسال البيانات إلى التحليلات.

## خطأ شائع

الاعتقاد أن الأسماء فقط هي PII. البريد وأرقام الهواتف وعناوين IP قد تكون PII أيضًا.

## لا تخلطه مع

غالباً ما يتم الخلط بين PII والمعلومات الشخصية الحساسة (SPI)؛ فبينما تحدد PII هوية الشخص، تشير SPI إلى مجموعة فرعية أكثر خصوصية من البيانات التي تتطلب حماية أعلى، مثل السجلات الطبية أو البيانات الحيوية.

## قلها في العمل

- We need to make sure we aren't accidentally exposing any PII in the debug logs.
  - يجب أن نتأكد من أننا لا نكشف عن أي PII في سجلات التصحيح عن طريق الخطأ.
- Please ensure that all PII fields are properly encrypted before they are stored in the database.
  - يرجى التأكد من تشفير جميع حقول الـ PII بشكل صحيح قبل تخزينها في قاعدة البيانات.
