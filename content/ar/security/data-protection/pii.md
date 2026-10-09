---
id: pii
category: security
subcategory: data-protection
level: intermediate
related: [gdpr-deletion, field-level-encryption, data-masking]
term: "PII (Personally Identifiable Information)"
translation: "المعلومات الشخصية المعرِّفة"
pronunciation: "بي آي آي"
keywords: ["المعلومات الشخصية المعرِّفة","بيانات تحدد هوية الشخص","إخفاء البيانات الشخصية","معلومات المستخدم الشخصية","بيانات تتعلق بهوية المستخدم","البيانات الشخصية الحساسة","حماية خصوصية المستخدمين","منع تسريب البيانات الشخصية","data that identifies a person","personal data in logs","mask user phone numbers","hide user email addresses","personally identifiable information","user identity data","handle user privacy safely","sensitive user details"]
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
- The support tool hides the phone number and the email, showing only the last four digits.
  - تُخفي أداة الدعم رقم الهاتف والبريد الإلكتروني، فتعرض آخر أربعة أرقام فقط.

## خطأ شائع

الاعتقاد أن الأسماء فقط هي PII. البريد وأرقام الهواتف وعناوين IP قد تكون PII أيضًا.

## لا تخلطه مع

غالباً ما يتم الخلط بين PII والمعلومات الشخصية الحساسة (SPI)؛ فبينما تحدد PII هوية الشخص، تشير SPI إلى مجموعة فرعية أكثر خصوصية من البيانات التي تتطلب حماية أعلى، مثل السجلات الطبية أو البيانات الحيوية.

## قلها في العمل

- We need to make sure we aren't accidentally exposing any PII in the debug logs.
  - يجب أن نتأكد من أننا لا نكشف عن أي PII في سجلات التصحيح عن طريق الخطأ.
- Please ensure that all PII fields are properly encrypted before they are stored in the database.
  - يرجى التأكد من تشفير جميع حقول الـ PII بشكل صحيح قبل تخزينها في قاعدة البيانات.
