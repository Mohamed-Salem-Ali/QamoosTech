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

## لا تخلطه مع

غالباً ما يتم الخلط بين CSRF واختطاف الجلسة (Session Hijacking). فبينما تجبر ثغرة CSRF متصفح الضحية على تنفيذ إجراء نيابة عنه، يتضمن اختطاف الجلسة سرقة رمز الجلسة لانتحال شخصية المستخدم بالكامل.

## قلها في العمل

- Did we remember to add the anti-forgery tokens to the new form, or are we leaving it exposed to CSRF?
  - هل تذكرنا إضافة رموز الحماية من التزوير (anti-forgery tokens) إلى النموذج الجديد، أم أننا سنتركه معرضاً لثغرة CSRF؟
- Please ensure that all state-changing API endpoints are protected against CSRF attacks before we merge this PR.
  - يرجى التأكد من أن جميع نقاط النهاية في واجهة البرمجة التي تغير حالة البيانات محمية ضد هجمات CSRF قبل دمج طلب السحب هذا.
