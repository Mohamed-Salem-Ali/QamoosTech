---
id: fast-forward
category: git
level: intermediate
related: [merge, branch, commit]
term: "Fast-forward"
translation: "الدمج بالتقدّم الخطي"
pronunciation: "فاست-فورورد"
keywords: ["دمج بدون انشاء كيمت جديد","تحريك مؤشر الفرع في جت","استراتيجية الدمج السريع","دمج فروع جت بشكل خطي","تحديث الفرع بدون كيمت دمج","الدمج السريع في جيت","تاريخ جيت نظيف بدون كيمت","فاست فورورد ميرج","merge without commit","git fast forward merge","move branch pointer forward","fast forward strategy","clean git history merge","linear git merge","update branch without merge commit","fast-forward merge"]
---

## التعريف

نوع من أنواع الدمج في Git يحدث عندما يكون هناك مسار خطي مباشر بين الفرع الحالي والفرع المراد دمجه. يقوم Git بتحريك مؤشر الفرع إلى أحدث التزام (commit) مباشرة دون إنشاء التزام دمج (merge commit) جديد.

## أين تسمعه؟

أثناء مراجعة طلبات السحب (pull requests)، أو في نقاشات الفريق حول تاريخ المستودع، أو عند تنفيذ أوامر `git merge`.

## أمثلة

- The branch was merged using a fast-forward strategy to keep the history clean.
  - تم دمج الفرع باستخدام استراتيجية fast-forward للحفاظ على نظافة سجل التغييرات.
- You cannot perform a fast-forward merge because the branches have diverged.
  - لا يمكنك إجراء دمج من نوع fast-forward لأن الفروع قد تباعدت عن بعضها.
- The hotfix branch was a fast-forward of main, so the merge created no extra commit.
  - كان فرع الإصلاح السريع امتداداً مباشراً لـ main، فلم ينشئ الدمج إيداعاً إضافياً.

## خطأ شائع

الاعتقاد بأن عملية الدمج من نوع fast-forward تنشئ دائماً التزام دمج (merge commit)؛ في الواقع، هي تتجنب إنشاءه تماماً، مما قد يجعل من الصعب أحياناً تحديد متى تم دمج فرع ميزة معين في الفرع الرئيسي.

## لا تخلطه مع

الدمج السريع (fast-forward) يحرك مؤشر الفرع مباشرة بدون التزام جديد، بينما الدمج ثلاثي الاتجاهات (three-way merge) يدمج الفروع المتباعدة وينشئ التزام دمج متميزاً.

## قلها في العمل

- Let's do a fast-forward merge for this PR since nobody else pushed to the main branch.
  - دعنا نقوم بدمج سريع (fast-forward) لهذا الـ PR بما أن لم يقم أي شخص آخر بالدفع إلى الفرع الرئيسي.
- Please ensure your branch is up to date with main so we can perform a clean fast-forward merge.
  - يرجى التأكد من أن فرعك محدث مع الفرع الرئيسي لكي نتمكن من إجراء دمج سريع ونظيف.
