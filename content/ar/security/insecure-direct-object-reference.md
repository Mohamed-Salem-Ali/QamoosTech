---
id: insecure-direct-object-reference
category: security
level: intermediate
related: [authentication-vs-authorization, rbac, vulnerability]
term: "Insecure Direct Object Reference (IDOR)"
pronunciation: "إنساكيور دايريكت أوبجكت ريفرنس"
translation: "مرجع الكائن المباشر غير الآمن"
---

## التعريف

ثغرة أمنية تتيح للمستخدمين الوصول إلى بيانات أو ملفات خاصة بمستخدمين آخرين عن طريق تعديل معرف الكائن (مثل رقم التعريف) في الطلب المرسل، لغياب التحقق من الصلاحيات.

## أين تسمعه؟

- أثناء مراجعات الأمان البرمجية
- في تقارير اختبارات الاختراق
- عند مناقشة مشاكل الصلاحيات

## أمثلة

- Changing the user ID in the URL parameter from `101` to `102` allows viewing another user's profile.
  - تغيير معرف المستخدم في رابط الصفحة من `101` إلى `102` يتيح لك رؤية ملف تعريف مستخدم آخر.
- An API endpoint that returns account details using an unverified record ID is vulnerable to IDOR.
  - نقطة نهاية برمجية تعيد تفاصيل الحساب باستخدام رقم سجل غير متحقق منه تكون عرضة لثغرة IDOR.

## خطأ شائع

الاعتقاد بأن إخفاء معرف الكائن في واجهة المستخدم يحمي النظام، بينما المشكلة الحقيقية تكمن في عدم تحقق الخادم من صلاحيات المستخدم.
