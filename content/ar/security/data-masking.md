---
id: data-masking
category: security
level: intermediate
related: [pii, encryption, staging-vs-production]
term: "Data Masking"
pronunciation: "ديتا ماسكينج"
translation: "إخفاء البيانات"
keywords: ["إخفاء المعلومات الحساسة","استبدال البيانات ببيانات وهمية","حماية بيانات المستخدمين في الاختبار","تغيير قيم قاعدة البيانات","تشفير البيانات للاختبار","طريقة إخفاء البيانات","تغطية البيانات الحساسة","ديتا ماسكينج","تغيير بيانات الإنتاج للاختبار","إخفاء الهوية في قواعد البيانات","hide sensitive database fields","replace real data with fake","protect pii in staging","obfuscate production database export","make test data realistic","data masking vs encryption","scramble user information safely","masking sensitive columns","data redaction techniques","protecting privacy in development"]
---

## التعريف

إخفاء البيانات هو عملية إخفاء المعلومات الحساسة الأصلية عبر استبدالها ببيانات وهمية لكنها تبدو واقعية. يضمن هذا الحفاظ على سرية المعلومات مع إبقاء هيكلها صالحاً للاختبار والتطوير.

## أين تسمعه؟

- في مراجعات الأمان قبل مشاركة قواعد البيانات مع جهات خارجية.
- عند إعداد بيئات الاختبار والتجربة باستخدام بيانات تشبه بيانات الإنتاج.
- خلال النقاشات حول الامتثال وحماية خصوصية المستخدمين.

## أمثلة

- We need to apply data masking to the user table before copying it to the staging environment.
  - نحتاج إلى تطبيق إخفاء البيانات على جدول المستخدمين قبل نسخه إلى بيئة الاختبار.
- The script replaces real email addresses with random ones during the data masking process.
  - يقوم السكريبت باستبدال عناوين البريد الإلكتروني الحقيقية بأخرى عشوائية أثناء عملية إخفاء البيانات.

## خطأ شائع

الاعتقاد بأن إخفاء البيانات هو نفسه التشفير. على عكس التشفير، البيانات المخفاة غير مصممة ليتم فك تشفيرها وإرجاعها لشكلها الأصلي، بل يتم تعديلها بشكل دائم للاستخدام الآمن خارج بيئة الإنتاج.

## لا تخلطه مع

غالباً ما يتم الخلط بين إخفاء البيانات وإخفاء هوية البيانات. بينما يقوم إخفاء البيانات باستبدال البيانات الحساسة بقيم وهمية واقعية للحفاظ على التنسيق، فإن إخفاء الهوية يقوم بإزالة البيانات أو تعديلها بشكل لا رجعة فيه لضمان عدم إمكانية التعرف على الأفراد.

## قلها في العمل

- Can we run the data masking job on the production dump before we import it into the dev environment?
  - هل يمكننا تشغيل مهمة إخفاء البيانات على نسخة قاعدة بيانات الإنتاج قبل استيرادها إلى بيئة التطوير؟
- Please ensure that all PII fields in the database export are covered by our data masking policy before sharing the file.
  - يرجى التأكد من أن جميع حقول المعلومات الشخصية في ملف تصدير قاعدة البيانات مغطاة بسياسة إخفاء البيانات الخاصة بنا قبل مشاركة الملف.
