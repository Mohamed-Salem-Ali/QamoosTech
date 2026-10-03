---
id: encryption
category: security
level: intermediate
related: [hashing, field-level-encryption]
term: "Encryption"
translation: "التشفير"
pronunciation: "إنكريبشن"
keywords: ["تحويل البيانات لرموز غير مفهومة","حماية البيانات من الاختراق","تأمين المعلومات الحساسة","طريقة قفل البيانات بمفتاح","تشفير قاعدة البيانات","إخفاء محتوى الملفات","الفرق بين التشفير والهاش","حماية البيانات اثناء النقل","إنكريبشن","تأمين البيانات المخزنة","جعل البيانات غير قابلة للقراءة","تشفير البيانات الحساسة","make data unreadable","scramble sensitive information","secure data with keys","protect files from unauthorized access","data at rest security","encrypting user information","how to hide data","reversible data protection","encoding data for privacy","encryption vs hashing","data obfuscation techniques","protecting database fields"]
---
## التعريف

تحويل بيانات مقروءة إلى بيانات غير مقروءة باستخدام مفتاح، بحيث لا يستطيع قراءتها إلا من يملك المفتاح الصحيح.

## أين تسمعه؟

HTTPS وقواعد البيانات والامتثال.

## أمثلة

- Data is encrypted in transit with HTTPS and at rest in the database.
  - تُشفَّر البيانات أثناء النقل عبر HTTPS وأثناء التخزين في قاعدة البيانات.
- Without the key, the encrypted file is useless.
  - بدون المفتاح يكون الملف المشفّر عديم الفائدة.

## خطأ شائع

حفظ المفتاح بجوار البيانات المشفّرة. احفظ المفاتيح في مكان منفصل ومحمي.

## لا تخلطه مع

غالباً ما يتم الخلط بين التشفير و hashing؛ التشفير عملية ثنائية الاتجاه مصممة لتكون قابلة للعكس باستخدام مفتاح، بينما hashing عملية أحادية الاتجاه لا يمكن عكسها.

## قلها في العمل

- We need to make sure all sensitive user data is handled with encryption before it hits the database.
  - نحتاج للتأكد من معالجة جميع بيانات المستخدمين الحساسة باستخدام التشفير قبل وصولها إلى قاعدة البيانات.
- Please ensure that the configuration files are stored using encryption to comply with our security standards.
  - يرجى التأكد من تخزين ملفات الإعدادات باستخدام التشفير للامتثال لمعايير الأمان الخاصة بنا.
