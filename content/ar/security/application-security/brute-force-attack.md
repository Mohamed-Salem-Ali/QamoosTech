---
id: brute-force-attack
category: security
subcategory: application-security
level: beginner
related: [authentication-vs-authorization, vulnerability]
term: "Brute-Force Attack"
translation: "هجوم القوة الغاشمة"
pronunciation: "بروت-فورس أتاك"
keywords: ["هجوم تخمين كلمات المرور","تجربة كل الاحتمالات لكلمة السر","هجوم التجربة والخطأ الأمني","اختراق حسابات بتجربة كل الباسوردات","بروت فورس أتاك","منع تخمين كلمات المرور المتكرر","هجمات التخمين الآلي للباسورد","حظر محاولات تسجيل الدخول الفاشلة","guess passwords by trying every combination","automated password guessing attack","try all password combinations","prevent password guessing scripts","burt force attack","brute force login attempt","trial and error password hacking","systematic password guessing","block repeated login failures"]
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
- Rate limiting the login endpoint makes a brute-force attack much slower.
  - يجعل تحديد معدل الطلبات على نقطة تسجيل الدخول الهجوم بالتخمين المتكرر أبطأ بكثير.

## خطأ شائع

الاعتقاد بأن هجوم الـ Brute-Force هو نفسه هجوم الـ Dictionary Attack؛ الفرق هو أن الـ Brute-Force يجرب كل التوليفات الممكنة من الحروف والأرقام، بينما الـ Dictionary Attack يكتفي بتجربة كلمات موجودة في قائمة محددة مسبقاً.

## لا تخلطه مع

غالباً ما يتم الخلط بين هجوم الـ Brute-force وهجوم الـ Credential stuffing؛ فبينما يحاول الـ Brute-force تخمين بيانات الاعتماد بتجربة كل الاحتمالات، يعتمد الـ Credential stuffing على استخدام أزواج من أسماء المستخدمين وكلمات المرور المسربة مسبقاً للدخول بشكل غير مصرح به.

## قلها في العمل

- We should check the logs to see if someone is attempting a brute-force attack on our API endpoints.
  - يجب أن نتحقق من السجلات لنرى ما إذا كان هناك شخص ما يحاول شن هجوم Brute-force على نقاط نهاية الـ API الخاصة بنا.
- Please review the security report, as it indicates that our login service is vulnerable to a brute-force attack.
  - يرجى مراجعة تقرير الأمان، حيث يشير إلى أن خدمة تسجيل الدخول لدينا معرضة لهجوم Brute-force.
