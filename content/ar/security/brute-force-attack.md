---
id: brute-force-attack
category: security
level: beginner
related: [authentication-vs-authorization, vulnerability]
term: "Brute-Force Attack"
pronunciation: "بروت-فورس أتاك"
---

## التعريف

هجوم يعتمد على التجربة والخطأ لتخمين كلمات المرور أو مفاتيح التشفير من خلال تجربة كل الاحتمالات الممكنة بشكل آلي ومتكرر.

## أين تسمعه؟

في مراجعات الأمان، سجلات الخادم (server logs)، وعند مناقشة حماية أنظمة المصادقة.

## أمثلة

- The server blocked the IP address after detecting a brute-force attack on the login page.
  - قام الخادم بحظر عنوان الـ IP بعد اكتشاف هجوم Brute-Force على صفحة تسجيل الدخول.
- We implemented account lockout policies to prevent brute-force attacks.
  - قمنا بتطبيق سياسات قفل الحساب لمنع هجمات الـ Brute-Force.

## خطأ شائع

الاعتقاد بأن هجوم الـ Brute-Force هو نفسه هجوم الـ Dictionary Attack؛ الفرق هو أن الـ Brute-Force يجرب كل التوليفات الممكنة من الحروف والأرقام، بينما الـ Dictionary Attack يكتفي بتجربة كلمات موجودة في قائمة محددة مسبقاً.
