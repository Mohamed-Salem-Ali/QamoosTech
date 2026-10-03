---
id: credentials
category: security
level: beginner
related: [authentication-vs-authorization, two-factor-authentication]
term: "Credentials"
pronunciation: "كْريدينشلز"
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
