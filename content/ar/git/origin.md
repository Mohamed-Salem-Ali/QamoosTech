---
id: origin
category: git
level: beginner
related: [repository, branch, commit]
term: "Origin"
pronunciation: "أوريجين"
translation: "المستودع الأصلي"
keywords: ["الاسم الافتراضي للمستودع البعيد","ما هو المستودع الأصلي في جيت","الاسم المختصر للمستودع في git","الفرق بين origin و upstream","تغيير رابط المستودع البعيد","اسم المستودع الذي نسخت منه","التعامل مع المستودعات البعيدة","معنى كلمة أوريجين في البرمجة","إعدادات المستودع البعيد في جيت","الاسم المستعار لرابط المشروع","default git remote name","git push target alias","where did i clone from","remote repository shorthand","git origin vs upstream","what is git origin","remote url nickname","git remote connection name","cloned repo default name","git remote repository reference"]
---

## التعريف

الاسم المختصر الافتراضي الذي يمنحه جيت (Git) للمستودع البعيد الذي قمت بنسخ مشروعك منه.

## أين تسمعه؟

عند دفع الكود (push)، أو سحب التحديثات (pull)، أو إدارة الاتصالات بالمستودعات البعيدة.

## أمثلة

- Run `git push origin main` to send your local commits to the remote repository.
  - قم بتشغيل `git push origin main` لإرسال الـ commits المحلية إلى المستودع البعيد.
- Use `git remote -v` to check the URL associated with origin.
  - استخدم `git remote -v` للتحقق من الرابط المرتبط بـ origin.
- Push the feature branch to origin, then open the pull request from there.
  - ادفع فرع الميزة إلى origin، ثم افتح طلب الدمج منه.

## خطأ شائع

الاعتقاد بأن origin هو جزء دائم من بنية Git التحتية بدلاً من مجرد اسم مستعار محلي لرابط بعيد.

## لا تخلطه مع

غالباً ما يتم الخلط بين origin و upstream، ولكن origin يشير إلى المستودع البعيد الخاص بك، بينما يشير upstream عادةً إلى المستودع الأصلي الذي قمت بنسخ المشروع منه.

## قلها في العمل

- I just pushed my latest changes to origin, so you should be able to see them now.
  - لقد قمت للتو بدفع آخر تغييراتي إلى origin، لذا يجب أن تتمكن من رؤيتها الآن.
- Please ensure your local branch is up to date with origin before submitting your pull request.
  - يرجى التأكد من أن الفرع المحلي لديك محدث مع origin قبل إرسال طلب الدمج (pull request).
