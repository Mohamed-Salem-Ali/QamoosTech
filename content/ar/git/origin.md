---
id: origin
category: git
level: beginner
related: [repository, branch, commit]
term: "Origin"
pronunciation: "أوريجين"
translation: "المستودع الأصلي"
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

## خطأ شائع

الاعتقاد بأن origin هو جزء دائم من بنية Git التحتية بدلاً من مجرد اسم مستعار محلي لرابط بعيد.
