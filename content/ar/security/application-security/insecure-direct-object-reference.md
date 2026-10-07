---
id: insecure-direct-object-reference
category: security
subcategory: application-security
level: intermediate
related: [authentication-vs-authorization, rbac, vulnerability]
term: "Insecure Direct Object Reference (IDOR)"
pronunciation: "إنساكيور دايريكت أوبجكت ريفرنس"
translation: "مرجع الكائن المباشر غير الآمن"
keywords: ["ثغرة IDOR","تعديل معرف المستخدم لرؤية حسابات الآخرين","مرجع الكائن المباشر غير الآمن","الوصول إلى بيانات المستخدمين برقم السجل","ثغرة الصلاحيات في المعرفات","مشكلة الوصول غير المصرّح به للبيانات","فحص الصلاحيات المفقود في نقطة النهاية","تغيير رقم التعريف في الرابط للاختراق","ثغرات أمان واجهات برمجة التطبيقات","مشاكل التفويض المباشر للكائنات","idor vulnerability","access other users data by changing id","insecure direct object reference","modify url parameter to see other accounts","idor bug","broken object level authorization","lack of authorization checks on ids","accessing private records via user id","idor error","unauthorized access via object reference"]
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

## لا تخلطه مع

غالبًا ما يتم خلط IDOR مع تفويض مستوى الكائن المعطل (BOLA)، ولكن في حين أن IDOR هو الثغرة الأساسية الناتجة عن المراجع المباشرة، فإن BOLA هي فئة أمان واجهات برمجة التطبيقات الأوسع التي تصف نقص فحوصات التفويض المناسبة.

## قلها في العمل

- We need to fix this IDOR issue in the user profile endpoint before we deploy to production.
  - نحن بحاجة إلى إصلاح مشكلة IDOR هذه في نقطة نهاية ملف تعريف المستخدم قبل نشر النظام للإنتاج.
- Please ensure that proper authorization checks are implemented to prevent potential IDOR vulnerabilities in this service.
  - يرجى التأكد من تنفيذ عمليات التحقق من الصلاحيات بشكل صحيح لمنع ثغرات IDOR المحتملة في هذه الخدمة.
