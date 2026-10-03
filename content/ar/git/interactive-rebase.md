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
