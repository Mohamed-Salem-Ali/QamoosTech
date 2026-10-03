---
id: csrf
category: security
level: intermediate
related: [authentication-vs-authorization, vulnerability, cookie]
term: "Cross-Site Request Forgery (CSRF)"
pronunciation: "كروس-سايت ريكويست فورجري"
---

## التعريف

هي ثغرة أمنية تخدع المستخدم المصادق عليه (المسجل دخوله) لتنفيذ إجراءات غير مرغوب فيها على تطبيق ويب. تستغل هذه الثغرة ثقة الموقع في متصفح المستخدم عبر إجباره على إرسال طلبات غير مصرح بها.

## أين تسمعه؟

- أثناء مراجعات الكود أو التدقيق الأمني.
- عند مناقشة آليات المصادقة في تطبيقات الويب.
- عند إعداد ترويسات الأمان (Security Headers) أو البرمجيات الوسيطة (Middleware).

## أمثلة

- The application is vulnerable to CSRF because it lacks anti-forgery tokens.
  - التطبيق معرض لثغرة CSRF لأنه يفتقر إلى رموز الحماية من التزوير.
- We must implement CSRF protection on all state-changing endpoints.
  - يجب علينا تطبيق حماية CSRF على جميع نقاط النهاية التي تغير حالة البيانات.

## خطأ شائع

الخلط بين CSRF و XSS (Cross-Site Scripting). فبينما يعتمد XSS على حقن سكربتات خبيثة في الصفحة، يركز CSRF على إجبار المستخدم على تنفيذ إجراءات غير مقصودة باستخدام بيانات جلسته الحالية.
