---
id: detached-head
category: git
level: intermediate
related: [branch, commit, rebase]
term: "Detached HEAD"
translation: "الرأس المنفصل"
pronunciation: "دي-تاتشْت هيد"
keywords: ["جت لا يشير إلى فرع","العمل على كَمِت مباشرة في جت","ضياع التعديلات بعد الانتقال بين الفروع","حالة الهيد المنفصل في جت","جت يشير إلى كَمِت قديم","ديتاتشد هيد في جت","كيف أخرج من حالة الهيد المنفصل","مستودع جت غير مربوط بفرع","git points to commit not branch","commits disappearing after switching branches","git checked out commit directly","lost commits after checkout","git head not on a branch","detached head state","fix git detached head","git working on commit hash"]
---

## التعريف

حالة في جِت (Git) يشير فيها المستودع إلى `commit` معين مباشرة بدلاً من الفرع (branch)، مما يعني أن أي تعديلات أو `commits` جديدة تجريها لن تُحفظ في أي فرع.

## أين تسمعه؟

عند العودة لتفقد `commit` قديم، أو أثناء عملية `rebase` تفاعلية، أو عندما يحاول المطور معرفة سبب اختفاء التعديلات بعد الانتقال بين الفروع.

## أمثلة

- I accidentally entered a detached HEAD state by checking out a commit hash directly.
  - دخلت في حالة detached HEAD عن طريق الخطأ عندما قمت بـ checkout لرقم `commit` مباشرة.
- Any changes made in a detached HEAD state will be lost if you switch branches without creating a new one.
  - أي تعديلات تتم في حالة detached HEAD ستضيع إذا قمت بالانتقال إلى فرع آخر دون إنشاء فرع جديد.

## خطأ شائع

الاعتقاد بأن العمل على حالة detached HEAD سيقوم بتحديث الفرع الرئيسي تلقائياً، أو الذعر وحذف المستودع بدلاً من إنشاء فرع جديد لحفظ العمل.

## قلها في العمل

- Make sure you create a temporary branch right now so you do not stay in a detached HEAD state.
  - تأكد من إنشاء فرع مؤقت الآن حتى لا تظل في حالة detached HEAD.
- Please create a new branch from this commit to preserve your changes and avoid working in a detached HEAD state.
  - يرجى إنشاء فرع جديد من هذا الـ commit للحفاظ على تعديلاتك وتجنب العمل في حالة detached HEAD.
