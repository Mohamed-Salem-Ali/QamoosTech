---
id: interactive-rebase
category: git
level: intermediate
related: [commit, rebase]
term: "Interactive Rebase"
translation: "إعادة التأسيس التفاعلية"
pronunciation: "إنترأكتيف ريبايز"
keywords: ["تعديل تاريخ الالتزامات","دمج عدة التزامات برمجية","تنظيف سجل غيت المحلي","إعادة ترتيب سجل الالتزامات","أمر دمج الالتزامات المتعددة","تعديل سجل غيت التفاعلي","تجميع الالتزامات في واحدة","تغيير تاريخ الالتزامات برمجيا","إنترأكتيف ريبايز","تحسين سجل العمل في غيت","edit git commit history","squash multiple commits together","clean up local branch commits","rewrite git history locally","reorder commits in git","git rebase dash i","modify previous git commits","combine commits before push","git squash commits command","interactive git history editor"]
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
- Interactive rebase lets me squash the three fix-up commits before I open the pull request.
  - تتيح إعادة التأسيس التفاعلية دمج إيداعات الإصلاح الثلاثة قبل أن أفتح طلب الدمج.

## خطأ شائع

استخدام الـ interactive rebase على commits تم دفعها مسبقاً إلى فرع مشترك، مما يتسبب في تعطيل عمل باقي أعضاء الفريق.

## لا تخلطه مع

غالباً ما يتم الخلط بين الـ interactive rebase والـ git merge؛ فبينما يقوم الـ merge بإنشاء commit جديدة لدمج تاريخين، يقوم الـ interactive rebase بإعادة كتابة تاريخ الـ commits بشكل خطي للحفاظ على نظافته.

## قلها في العمل

- I'm going to run an interactive rebase to clean up these messy commits before I push my branch.
  - سأقوم بتنفيذ interactive rebase لتنظيف هذه الـ commits غير المرتبة قبل أن أقوم بعمل push للفرع الخاص بي.
- Please perform an interactive rebase to squash your fixup commits into a single logical unit before we merge this PR.
  - يرجى إجراء interactive rebase لدمج الـ commits الخاصة بالإصلاحات في وحدة منطقية واحدة قبل أن نقوم بدمج هذا الـ PR.
