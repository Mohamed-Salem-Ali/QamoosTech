---
id: least-privilege
category: security
subcategory: authentication-and-access
level: intermediate
related: [rbac, authentication-vs-authorization, vulnerability, trust-boundary]
term: "Least Privilege"
pronunciation: "ليست بريفيليج"
translation: "مبدأ الحد الأدنى من الصلاحيات"
keywords: ["مبدأ الحد الأدنى من الصلاحيات","منح أقل صلاحيات ممكنة","تقييد صلاحيات المستخدمين والخدمات","صلاحيات محدودة للخدمات والعمليات","تحديد صلاحيات الوصول بدقة","ليست بريفيليج","تقليل الصلاحيات لتجنب الاختراق","منع إعطاء صلاحيات إدارية كاملة","restrict user permissions to minimum","give service account only needed access","principle of least privilege","limit damage from compromised component","minimum required access security","least privilege model","restrict permissions by default","minimal access control","prevent excessive admin rights"]
---

## التعريف

هو مبدأ أمني يتم من خلاله منح المستخدمين أو العمليات أو الخدمات الحد الأدنى فقط من الصلاحيات اللازمة لأداء مهامهم المحددة، مما يقلل من حجم الضرر المحتمل في حال اختراق النظام.

## أين تسمعه؟

في مراجعات الأمان، اجتماعات إعداد صلاحيات الحوسبة السحابية، ونقاشات تصميم الأنظمة الآمنة.

## أمثلة

- The database service account only has read and write access to the specific database it uses, rather than full admin rights.
  - حساب خدمة قاعدة البيانات يمتلك صلاحيات القراءة والكتابة فقط لقاعدة البيانات الخاصة به، بدلاً من صلاحيات المدير الكاملة.
- Developers use staging environment credentials that cannot modify production infrastructure.
  - يستخدم المطورون بيانات اعتماد لبيئة التجارب لا تستطيع تعديل البنية التحتية لبيئة الإنتاج.
- The reporting account can read the orders table but cannot delete any rows.
  - يستطيع حساب التقارير قراءة جدول الطلبات، لكنه لا يستطيع حذف أي صف.

## خطأ شائع

منح صلاحيات إدارية واسعة مؤقتاً لتسهيل العمل ثم نسيان إلغائها لاحقاً.

## لا تخلطه مع

مبدأ الحد الأدنى من الصلاحيات يقيّد ما يمكن للمستخدم أو الخدمة القيام به، بينما فصل المهام يقسم المهام بين أشخاص متعددين لمنع الاحتيال أو الأخطاء.

## قلها في العمل

- We need to apply the principle of least privilege to this microservice so it only accesses the storage bucket it actually requires.
  - عليك تطبيق مبدأ الحد الأدنى من الصلاحيات على هذه الخدمة المصغرة بحيث تتمكن فقط من الوصول إلى مستودع التخزين الذي تحتاجه حقاً.
- Please review the IAM roles to ensure that every service account adheres strictly to the least privilege model.
  - يرجى مراجعة أدوار إدارة الهوية والصلاحيات لضمان التزام كل حساب خدمة بدقة بننموذج الحد الأدنى من الصلاحيات.
