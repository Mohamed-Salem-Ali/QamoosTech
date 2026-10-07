---
id: cookie
category: web-apis
subcategory: http-and-requests
level: beginner
related: [http-header, authentication-vs-authorization]
term: "Cookie"
translation: "ملف تعريف الارتباط"
pronunciation: "كوكي"
keywords: ["ملف تعريف الارتباط","حفظ بيانات الجلسة في المتصفح","البقاء مسجل الدخول في الموقع","البيانات المخزنة في المتصفح","إرسال البيانات مع كل طلب","كوكي","ملفات الكوكيز للمتصفح","معرف الجلسة في المتصفح","small piece of browser data","keep user logged in token","send data with every request","http session storage","browser cookie","session cookie","cooki","http state management","store session id in browser"]
---
## التعريف

قطعة بيانات صغيرة يخزّنها المتصفح لموقع معيّن ويرسلها مع كل طلب، وتُستخدم غالبًا لإبقائك مسجّل الدخول.

## أين تسمعه؟

أنظمة تسجيل الدخول، ولافتات الخصوصية، والتحليلات، ومراجعات الأمان.

## أمثلة

- The session id is stored in a cookie.
  - يُخزَّن معرّف الجلسة في cookie.
- Mark the cookie as `HttpOnly` so scripts cannot read it.
  - اجعل الـ cookie من نوع `HttpOnly` حتى لا تقرأه السكربتات.

## خطأ شائع

تخزين بيانات حساسة مباشرة في الـ cookie. خزّن معرّف جلسة فقط وأبقِ البيانات في الخادم.

## لا تخلطه مع

يُخزَّن ملف تعريف الارتباط على جهاز العميل ويُرسل مع كل طلب HTTP، بينما التخزين المحلي موجود على جهاز العميل أيضاً ولكنه يحفظ البيانات دون إرسالها تلقائياً إلى الخادم.

## قلها في العمل

- Can we check if the authentication cookie is being sent properly in the request headers?
  - هل يمكننا التحقق مما إذا كان cookie المصادقة يُرسل بشكل صحيح في ترويسات الطلب؟
- Please ensure that all sensitive cookies are configured with the Secure and SameSite flags before merging this PR.
  - يرجى التأكد من ضبط جميع ملفات تعريف الارتباط الحساسة باستخدام علامات Secure و SameSite قبل دمج طلب السحب هذا.
