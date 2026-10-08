---
id: stash
category: git
level: beginner
related: [branch, commit, repository]
term: "Stash"
translation: "الحفظ المؤقت للتغييرات"
pronunciation: "ستاش"
keywords: ["حفظ التعديلات بشكل مؤقت","تخزين التعديلات جانبا في جيت","حفظ التعديلات قبل الانتقال للفرع","امر حفظ التعديلات المؤقتة","استرجاع التعديلات المخزنة مؤقتا","ستاش الكود","حفظ العمل الحالي مؤقتا","الاحتفاظ بالتعديلات دون كوميت","save uncommitted changes temporarily","shelve working directory modifications","git stash command","store changes without committing","pause work to switch branch","hide local modifications temporarily","git save work in progress","retrieve stashed changes","git pop stash"]
---

## التعريف

هي ميزة في Git تتيح لك حفظ التعديلات التي لم تقم بعمل `commit` لها بشكل مؤقت، وذلك لتتمكن من الانتقال للعمل على مهمة أخرى. تقوم هذه العملية بتخزين التعديلات جانباً وإعادة ملفات المشروع إلى حالة آخر `commit` قمت به.

## أين تسمعه؟

أثناء مراجعة الكود، أو عند الحاجة للانتقال السريع بين الفروع (branches) لإصلاح خطأ طارئ، أو عند تنظيف مساحة العمل قبل سحب تحديثات جديدة.

## أمثلة

- I need to stash my current work so I can switch to the main branch.
  - أحتاج إلى عمل stash لعملي الحالي حتى أتمكن من الانتقال إلى الفرع الرئيسي.
- You can use `git stash pop` to bring back your saved changes later.
  - يمكنك استخدام أمر `git stash pop` لاستعادة التعديلات التي حفظتها لاحقاً.
- I stashed my half-done changes, pulled the fix, and then popped the stash.
  - خبّأتُ تغييراتي غير المكتملة (stash)، وسحبتُ الإصلاح، ثم استعدتُ التغييرات المخبأة.

## خطأ شائع

الاعتقاد بأن الـ stash وسيلة دائمة لحفظ العمل مثل الـ commit؛ فهي مخصصة للتخزين المؤقت فقط، وقد تضيع التعديلات بسهولة إذا لم تكن حذراً عند استخدام أوامر إدارة الـ stash.

## لا تخلطه مع

الفرق بين Stash و Commit هو أن الـ Stash مخصص لحفظ العمل المؤقت الذي لم تكتمل صياغته بعد، بينما يقوم الـ Commit بإنشاء لقطة دائمة للتعديلات ضمن سجل تاريخ المستودع.

## قلها في العمل

- I'll just stash these local changes real quick so I can pull the latest updates from the server.
  - سأقوم بعمل stash لهذه التعديلات المحلية بسرعة حتى أتمكن من سحب آخر التحديثات من الخادم.
- Please stash your current progress before switching branches to avoid potential merge conflicts in the working directory.
  - يرجى عمل stash لتقدمك الحالي قبل الانتقال بين الفروع لتجنب أي تعارضات محتملة في ملفات مساحة العمل.
