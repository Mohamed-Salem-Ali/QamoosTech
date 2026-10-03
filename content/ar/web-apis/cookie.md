---
id: cookie
category: web-apis
level: beginner
related: [http-header, authentication-vs-authorization]
term: "Cookie"
translation: "ملف تعريف الارتباط"
pronunciation: "كوكي"
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
