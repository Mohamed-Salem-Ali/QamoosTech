---
id: crud-operations
category: web-apis
level: beginner
related: [restful-api, database]
term: "CRUD Operations"
translation: "عمليات الإنشـاء والقراءة والتحديث والحذف"
pronunciation: "كرود أوبيريشنز"
---

## التعريف

اختصار يرمز إلى العمليات الأربع الأساسية لإدارة البيانات: الإنشاء، القراءة، التحديث، والحذف. في تطوير الويب، عادة ما ترتبط هذه العمليات مباشرة بطرق بروتوكول HTTP مثل `POST` و `GET` و `PUT` و `DELETE`.

## أين تسمعه؟

- في اجتماعات تصميم واجهات برمجة التطبيقات عند مناقشة بنية نقاط النهاية (Endpoints).
- أثناء إعداد نماذج قواعد البيانات ووحدات التحكم (Controllers).
- في وثائق الواجهة الخلفية التي تصف قدرات الموارد.

## أمثلة

- The user registration form triggers a Create operation to save a new record in the database.
  - يؤدي نموذج تسجيل المستخدمين إلى تشغيل عملية إنشاء (Create) لحفظ سجل جديد في قاعدة البيانات.
- The application performs a Read operation to fetch user profile details for the dashboard.
  - يقوم التطبيق بعملية قراءة (Read) لجلب تفاصيل ملف تعريف المستخدم لوحة التحكم.
- An admin panel executes a Delete operation to remove inactive accounts from the system.
  - تنفذ لوحة التحكم الخاصة بالمسؤول عملية حذف (Delete) لإزالة الحسابات غير النشطة من النظام.

## خطأ شائع

الاعتقاد بأن كل نقطة نهاية في واجهة برمجة التطبيقات يجب أن تتبع عمليات CRUD حرفياً، بينما تتطلب العديد من الإجراءات المعقدة نقاط نهاية مخصصة لا تنطوي بالضرورة تحت الإنشاء أو القراءة أو التحديث أو الحذف.
