---
id: git-fetch
category: git
level: beginner
related: [repository, merge]
term: "Git Fetch"
pronunciation: "جِت فِيتش"
keywords: ["جلب التغييرات من المستودع","تحديث فروع التتبع البعيدة","تحميل تحديثات الخادم فقط","جيت فيتش","الفرق بين فيتش وسحب","استلام التعديلات بدون دمج","تحديث المراجع المحلية","جلب الكوميتات الجديدة","معرفة التحديثات الجديدة","كيفية مزامنة المستودع المحلي","download remote changes","update local tracking branches","get latest commits only","git fetch vs pull","check for remote updates","sync remote repository metadata","fetch remote branches","git update without merge","retrieve new remote data","git get remote changes"]
---

## التعريف

أمر `git fetch` يقوم بتحميل التغييرات (commits) والملفات والمراجع من المستودع البعيد إلى مستودعك المحلي. يقوم هذا الأمر بتحديث فروع التتبع البعيدة دون تعديل ملفات عملك الحالية أو دمج أي تغييرات.

## أين تسمعه؟

- أثناء مراجعة الكود مع الفريق.
- عند التحضير لتحديث فرعك المحلي بآخر التغييرات من الخادم.
- في الشروحات التي توضح الفرق بين الجلب (fetch) والسحب (pull).

## أمثلة

- Run `git fetch origin` to see if there are any new updates on the server.
  - قم بتشغيل `git fetch origin` لترى إن كانت هناك أي تحديثات جديدة على الخادم.
- I need to run `git fetch` before I can see the new branch my teammate pushed.
  - أحتاج لتشغيل `git fetch` قبل أن أتمكن من رؤية الفرع الجديد الذي رفعه زميلي.

## خطأ شائع

يعتقد الكثير من المبتدئين أن `git fetch` يقوم بتحديث ملفات العمل الحالية تلقائياً. في الواقع، هو يقوم فقط بتحديث البيانات الوصفية المحلية، لذا يجب عليك تنفيذ `git merge` أو `git pull` إذا كنت ترغب في تطبيق تلك التغييرات على الكود الخاص بك.

## لا تخلطه مع

الفرق بين git fetch و git pull هو أن fetch يقوم فقط بتحميل البيانات من المستودع البعيد دون تغيير ملفاتك المحلية، بينما يقوم pull بعملية fetch متبوعة بدمج التغييرات مباشرة في فرعك الحالي.

## قلها في العمل

- I'll run a quick git fetch to make sure my local tracking branches are up to date with the remote.
  - سأقوم بتشغيل git fetch سريع للتأكد من أن فروع التتبع المحلية لدي محدثة مع الفرع البعيد.
- Please run git fetch to retrieve the latest commits before you start working on the integration branch.
  - يرجى تشغيل git fetch لجلب أحدث التغييرات قبل البدء بالعمل على فرع التكامل.
