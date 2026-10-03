---
id: secret-management
category: security
level: intermediate
related: [encryption, environment-variable]
term: "Secret Management"
translation: "إدارة الأسرار"
pronunciation: "سيكرت مانيدجمنت"
---

## التعريف

إدارة الأسرار هي التخزين الآمن، والتحكم في الوصول، وتدوير بيانات الاعتماد الحساسة مثل كلمات مرور قواعد البيانات، ومفاتيح واجهات برمجة التطبيقات، والمفاتيح الخاصة. وهي تمنع كشف بيانات الاعتماد في الشيفرة المصدرية أو في ملفات الإعدادات غير الآمنة.

## أين تسمعه؟

أثناء مراجعات الأمان، أو عند إعداد البنية التحتية السحابية، أو عند التخطيط لكيفية اتصال التطبيقات بقواعد البيانات.

## أمثلة

- We use a dedicated vault service for secret management instead of hardcoding API keys.
  - نحن نستخدم خدمة خزنة مخصصة لإدارة الأسرار بدلاً من كتابة مفاتيح واجهات برمجة التطبيقات بشكل ثابت في الشيفرة.
- Proper secret management requires rotating database credentials every ninety days.
  - تتطلب إدارة الأسرار بشكل صحيح تحديث بيانات اعتماد قاعدة البيانات كل تسعين يوماً.

## خطأ شائع

التعامل مع إدارة الأسرار بنفس طريقة التعامل مع متغيرات البيئة العادية، مما قد يؤدي إلى كشف بيانات الاعتماد الحساسة عن طريق الخطأ في سجلات النصوص الصريحة أو في تاريخ المستودع.

## لا تخلطه مع

غالباً ما يتم الخلط بين إدارة الأسرار ومتغيرات البيئة؛ فبينما تعد متغيرات البيئة أزواجاً بسيطة من المفتاح والقيمة للإعدادات، توفر إدارة الأسرار التشفير، وتدقيق الوصول، والتدوير التلقائي للبيانات الحساسة.

## قلها في العمل

- We need to stop storing these keys in our config files and move them into our secret management system.
  - نحتاج إلى التوقف عن تخزين هذه المفاتيح في ملفات الإعدادات الخاصة بنا ونقلها إلى نظام إدارة الأسرار.
- Please ensure that the new service integration follows our established secret management policies to avoid hardcoding credentials.
  - يرجى التأكد من أن تكامل الخدمة الجديد يتبع سياسات إدارة الأسرار المعتمدة لدينا لتجنب كتابة بيانات الاعتماد بشكل ثابت في الشيفرة.
