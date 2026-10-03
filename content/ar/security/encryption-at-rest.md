---
id: encryption-at-rest
category: security
level: beginner
related: [encryption, field-level-encryption]
term: "Encryption at Rest"
pronunciation: "إنكريبتشن أت ريست"
translation: "تشفير البيانات المخزنة"
keywords: ["تشفير البيانات المحفوظة","تأمين البيانات على القرص","تشفير قواعد البيانات المخزنة","حماية البيانات في وسائط التخزين","تشفير الملفات المخزنة","تأمين النسخ الاحتياطية للبيانات","تشفير وحدات التخزين","حماية البيانات من السرقة المادية","تشفير البيانات عند السكون","انكريبتشن أت ريست","encrypt stored database files","secure data on disk","protecting hard drive data","encryption for saved data","disk level security","data at rest protection","how to secure database storage","encrypting backups on server","prevent unauthorized disk access","storage volume encryption"]
---

## التعريف

هي عملية حماية البيانات المخزنة على وسائط مادية، مثل الأقراص الصلبة أو قواعد البيانات، باستخدام خوارزميات التشفير. تضمن هذه العملية بقاء البيانات غير قابلة للقراءة في حال سرقة وسيط التخزين أو الوصول إليه دون مفتاح فك التشفير الصحيح.

## أين تسمعه؟

في مراجعات الأمان، وإعدادات البنية التحتية السحابية، ونقاشات الامتثال المتعلقة بخصوصية البيانات.

## أمثلة

- We must enable encryption at rest for our database backups.
  - يجب علينا تفعيل تشفير البيانات المخزنة (Encryption at rest) لنسخنا الاحتياطية من قاعدة البيانات.
- The security policy requires encryption at rest for all sensitive user files.
  - تتطلب سياسة الأمان تفعيل تشفير البيانات المخزنة لجميع ملفات المستخدمين الحساسة.

## خطأ شائع

الخلط بينه وبين التشفير أثناء النقل (Encryption in transit)، حيث يحمي الأخير البيانات أثناء انتقالها عبر الشبكة، بينما يحمي تشفير البيانات المخزنة البيانات المخزنة على القرص فقط.

## لا تخلطه مع

يحمي تشفير البيانات المخزنة البيانات الموجودة على الوسائط المادية، بينما يؤمن التشفير أثناء النقل البيانات أثناء انتقالها عبر الشبكة.

## قلها في العمل

- Can we double-check if encryption at rest is enabled on the new storage volumes?
  - هل يمكننا التحقق مرتين مما إذا كان تشفير البيانات المخزنة مفَعلاً على وحدات التخزين الجديدة؟
- Please ensure that all customer databases have encryption at rest configured before we migrate to production.
  - يرجى التأكد من ضبط إعدادات تشفير البيانات المخزنة لجميع قواعد بيانات العملاء قبل أن ننتقل إلى البيئة الحية.
