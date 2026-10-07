---
id: credentials
category: security
subcategory: authentication-and-access
level: beginner
related: [authentication-vs-authorization, two-factor-authentication]
term: "Credentials"
pronunciation: "كْريدينشلز"
keywords: ["بيانات تسجيل الدخول","اسم المستخدم وكلمة المرور","إثبات هوية المستخدم","معلومات التحقق من الهوية","كلمات المرور والمفاتيح","بيانات الاعتماد البرمجية","طريقة دخول المستخدم للنظام","كْريدينشلز","بيانات الدخول الآمنة","تخزين معلومات الوصول","التحقق من هوية المستخدم","مفاتيح الوصول للتطبيقات","username and password pair","login information for apps","how to verify identity","secure access keys","authentication data for login","user identity proof","api keys and secrets","storing user login details","credientials spelling","login tokens and keys","prevent hardcoding passwords","identity verification info"]
---

## التعريف

هي البيانات التي تُستخدم للتحقق من هوية المستخدم أو النظام، مثل اسم المستخدم وكلمة المرور. تعمل هذه البيانات كإثبات على هوية الطرف قبل منحه صلاحية الوصول إلى الموارد.

## أين تسمعه؟

يُستخدم المصطلح عند الحديث عن عمليات التحقق من الهوية (Authentication)، إعدادات الربط مع واجهات البرمجة (APIs)، وعمليات التدقيق الأمني.

## أمثلة

- Please ensure you do not hardcode your database credentials in the source code.
  - يرجى التأكد من عدم كتابة بيانات الاعتماد الخاصة بقاعدة البيانات مباشرة داخل الكود المصدري.
- The application requires valid credentials to access the protected endpoint.
  - يتطلب التطبيق بيانات اعتماد صالحة للوصول إلى نقطة النهاية المحمية.

## خطأ شائع

الخلط بين بيانات الاعتماد (Credentials) والصلاحيات (Permissions)؛ فبيانات الاعتماد تُستخدم لإثبات هويتك، بينما تحدد الصلاحيات ما يمكنك فعله بعد إثبات هويتك بنجاح.

## لا تخلطه مع

بيانات الاعتماد تثبت من أنت عبر التحقق من هويتك، بينما تحدد الصلاحيات ما يُسمح لك بالوصول إليه بعد عملية المصادقة.

## قلها في العمل

- Make sure you update your credentials in the environment variables before running the service locally.
  - تأكد من تحديث بيانات الاعتماد الخاصة بك في متغيرات البيئة قبل تشغيل الخدمة محلياً.
- The automated test suite failed because the expired credentials were not refreshed in the configuration file.
  - فشلت مجموعة الاختبارات التلقائية لعدم تحديث بيانات الاعتماد منتهية الصلاحية في ملف الإعدادات.
