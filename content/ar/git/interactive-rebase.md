---
id: interactive-rebase
category: git
level: intermediate
related: [commit, rebase]
term: "Interactive Rebase"
pronunciation: "إنترأكتيف ريبايز"
---

## التعريف

خاصية في غيت تتيح لك تعديل، دمج، أو إعادة ترتيب الـ commits في تاريخ فرعك المحلي قبل مشاركتها مع الآخرين.

## أين تسمعه؟

أثناء تنظيف الكود، أو تجهيز الـ pull requests، أو إعادة كتابة تاريخ غيت.

## أمثلة

- We use interactive rebase to squash multiple tiny bugfix commits into one clean commit.
  - نستخدم الـ interactive rebase لدمج عدة commits صغيرة خاصة بإصلاح الأخطاء في commit واحدة نظيفة.
- Run `git rebase -i HEAD~3` to modify your last three local commits.
  - قم بتشغيل الأمر `git rebase -i HEAD~3` لتعديل آخر ثلاثة commits محلية لديك.

## خطأ شائع

استخدام الـ interactive rebase على commits تم دفعها مسبقاً إلى فرع مشترك، مما يتسبب في تعطيل عمل باقي أعضاء الفريق.

## لا تخلطه مع

غالباً ما يتم الخلط بين الـ interactive rebase والـ git merge؛ فبينما يقوم الـ merge بإنشاء commit جديدة لدمج تاريخين، يقوم الـ interactive rebase بإعادة كتابة تاريخ الـ commits بشكل خطي للحفاظ على نظافته.

## قلها في العمل

- I'm going to run an interactive rebase to clean up these messy commits before I push my branch.
  - سأقوم بتنفيذ interactive rebase لتنظيف هذه الـ commits غير المرتبة قبل أن أقوم بعمل push للفرع الخاص بي.
- Please perform an interactive rebase to squash your fixup commits into a single logical unit before we merge this PR.
  - يرجى إجراء interactive rebase لدمج الـ commits الخاصة بالإصلاحات في وحدة منطقية واحدة قبل أن نقوم بدمج هذا الـ PR.
