---
id: rebase
category: git
level: intermediate
related: [merge, merge-conflict, detached-head]
term: "Rebase"
translation: "إعادة تأسيس الفرع"
pronunciation: "ريبيس"
keywords: ["إعادة تأسيس الفرع","ترتيب الـ commits بشكل خطي","تحديث الفرع بأحدث التغييرات","الفرق بين ريبيرس ومرج","نقل الـ commits فوق الفرع الرئيسي","عمل ريبس لفرع جيت","تنظيف تاريخ الـ commits","تاريخ جيت المستقيم","move commits to top of main","clean git history linear path","rewrite commit history git","git rebase vs merge","update feature branch with latest changes","put my commits on latest main","git ribas","rebasing shared branches mistake"]
---
## التعريف

نقل commits فرعك فوق أحدث commits فرع آخر، للحصول على تاريخ نظيف ومستقيم.

## أين تسمعه؟

سير عمل Git والمقابلات.

## أمثلة

- Rebase your branch on `main` before opening the PR.
  - اعمل rebase لفرعك على `main` قبل فتح الـ PR.
- Never rebase a branch that others already use.
  - لا تعمل rebase لفرع يستخدمه آخرون.
- After the rebase, the feature branch sits on top of the latest main.
  - بعد إعادة التأسيس، صار فرع الميزة فوق أحدث نسخة من main.

## خطأ شائع

عمل rebase للفروع المشتركة. هذا يعيد كتابة التاريخ ويفسد نسخ زملائك.

## لا تخلطه مع

يعيد Rebase كتابة تاريخ الـ commits لإنشاء مسار خطي، بينما يحافظ merge على التاريخ الدقيق من خلال دمج الفروع بـ commit جديد.

## قلها في العمل

- Let's quickly rebase our feature branches to pick up the latest bug fixes from main.
  - دعنا نقوم بـ rebase لفروع الميزات الخاصة بنا بسرعة لنحصل على أحدث إصلاحات الأخطاء من main.
- Please rebase your branch on top of the latest development branch and resolve any conflicts before requesting a review.
  - يرجى عمل rebase لفرعك فوق أحدث فرع development وحل أي تعارضات قبل طلب المراجعة.
