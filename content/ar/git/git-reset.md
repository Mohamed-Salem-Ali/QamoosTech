---
id: git-reset
category: git
level: intermediate
related: [commit, rollback]
term: "Git Reset"
translation: "التراجع عن الالتزامات"
pronunciation: "جيت ريسيت"
keywords: ["التراجع عن آخر كوميت","حذف التعديلات الأخيرة في جيت","الرجوع إلى كوميت سابق","أمر التراجع في جيت","إلغاء الالتزام الأخير","تنظيف سجل الكوميتات","جيت ريسيت هارد","العودة لنقطة التزام سابقة","إزالة التغييرات المحلية","undo last commit git","move branch pointer back","git reset soft vs hard","delete uncommitted changes git","clean up local commit history","rollback last commit","git reset head","erase last commit safely","rewind git branch"]
---

## التعريف

أمر في جيت يُستخدم لتحريك مؤشر الفرع الحالي إلى نقطة التزام سابقة، مما يتراجع عن التعديلات. يُستعمل لتعديل سجل الالتزامات وإدارة حالة مجلد العمل أو منطقة التحضير.

## أين تسمعه؟

- في مراجعات الكود عندما يحتاج شخص لتنظيف التزاماته المحلية
- أثناء جلسات تصحيح الأخطاء للتراجع عن تعديلات غير مقصودة
- عند تنظيم سجل الالتزامات العشوائي قبل رفعه إلى المستودع المشترك

## أمثلة

- Run `git reset --soft HEAD~1` to undo the last commit while keeping your changes in the staging area.
  - قم بتشغيل هذا الأمر للتراجع عن الالتزام الأخير مع إبقاء تعديلاتك في منطقة التحضير.
- Use `git reset --hard HEAD~1` to completely erase the last commit and all your uncommitted work.
  - استخدِم هذا الأمر لحذف الالتزام الأخير وكل عملك غير المُلتزَم به نهائياً.
- I used git reset to drop the three commits I made on the wrong branch.
  - استخدمتُ git reset لإلغاء الإيداعات الثلاثة التي أجريتها على الفرع الخطأ.

## خطأ شائع

استخدام خيار `--hard` بدون إدراك أنه يحذف التعديلات غير المحفوظة نهائياً، مما يجعل استرجاعها أمراً صعباً للغاية.

## لا تخلطه مع

أمر Git Reset يحرك مؤشر الفرع ويعدل السجل، بينما Git Revert ينشئ التزاماً جديداً يتراجع عن التعديلات السابقة دون إعادة كتابة السجل.

## قلها في العمل

- Let's run a soft git reset on that branch to clean up the last few commits before we merge.
  - دعنا نُجري git reset بنوع soft على ذلك الفرع لتنظيف التزامات الأيام الأخيرة قبل أن نقوم بالدمج.
- Please avoid using git reset --hard on shared branches because it will break other developers' local history.
  - يُرجى تجنب استخدام git reset --hard على الفروع المشتركة لأنه سيؤدي إلى تعطيل السجل المحلي للمطورين الآخرين.
