---
id: session
category: web-apis
subcategory: http-and-requests
level: beginner
related: [cookie, bearer-token, stateless-vs-stateful]
term: "Session"
translation: "الجلسة"
pronunciation: "سيشن"
keywords: ["إبقاء المستخدم مسجلاً", "بيانات الجلسة على الخادم", "انتهت الجلسة", "معرّف الجلسة في الكوكي", "keep user logged in", "server side session data", "session expired", "session id in cookie", "session storage on server"]
---

## التعريف

الفترة التي يتعرف فيها الخادم على المستخدم عبر طلباته المتتالية، وعادةً يُحفظ معرّف الجلسة في كوكي وتُخزَّن بياناتها على الخادم.

## أين تسمعه؟

في تدفقات تسجيل الدخول، وإعدادات أطر العمل، ومراجعات الأمان حول انتهاء تسجيل الدخول.

## أمثلة

- The session expires after 30 minutes of inactivity.
  - تنتهي الجلسة بعد 30 دقيقة من عدم النشاط.
- Store the session ID in an HttpOnly cookie.
  - احفظ معرّف الجلسة في كوكي من نوع HttpOnly.
- The session stays active while the user keeps browsing, and ends after logout.
  - تبقى الجلسة نشطة ما دام المستخدم يتصفح، وتنتهي بعد تسجيل الخروج.

## خطأ شائع

وضع بيانات حساسة في معرّف الجلسة نفسه، أو عدم إنهاء الجلسات بعد تسجيل الخروج.

## لا تخلطه مع

الجلسة تحفظ الحالة على الخادم للمستخدم، أما رمز الحامل فيحمل الإثبات في كل طلب.
