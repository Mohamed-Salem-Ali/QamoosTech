---
id: squash-and-merge
category: git
level: beginner
related: [merge, pull-request, commit]
term: "Squash and Merge"
translation: "الدمج المضغوط"
pronunciation: "سكواش آند ميرج"
keywords: ["دمج الالتزامات في التزام واحد","تنظيف سجل الالتزامات في جيت","دمج التعديلات كالتزام واحد","تقليص الالتزامات عند الدمج","اختصار تاريخ الفرع البرمجي","دمج التغييرات في commit واحدة","سكواش آند ميرج","إزالة الالتزامات المؤقتة من السجل","طريقة دمج نظيفة في جيت","تجميع الالتزامات في التزام نهائي","combine commits into one","clean up git history","merge feature branch as single commit","squash commits on merge","simplify pull request history","git squash commits","squash and merge git","remove intermediate commit noise","make pr one commit","squash merge vs rebase"]
---

## التعريف

هو أسلوب في Git يدمج جميع الـ commits الخاصة بفرع الميزات (feature branch) في commit واحدة فقط عند دمجها في الفرع الرئيسي. يساعد هذا في الحفاظ على سجل المشروع نظيفاً وسهل القراءة عبر إزالة الـ commits المؤقتة.

## أين تسمعه؟

في إعدادات الـ pull request، أثناء مراجعة الكود، وفي سياسات إدارة المستودعات (repositories).

## أمثلة

- We prefer to use Squash and Merge to keep our main branch history clean.
  - نفضل استخدام Squash and Merge للحفاظ على سجل الفرع الرئيسي نظيفاً.
- Please perform a Squash and Merge so that each feature appears as one commit.
  - يرجى إجراء Squash and Merge لكي تظهر كل ميزة كـ commit واحدة.
- The squash and merge turned twelve messy commits into one clear commit on main.
  - حوّل الدمج بالضغط (squash and merge) اثني عشر إيداعاً فوضوياً إلى إيداع واحد واضح على main.

## خطأ شائع

الاعتقاد بأن عملية الـ squash تحذف عملك؛ فهي في الواقع تدمج سجل الـ commits فقط، بينما تظل حالة الكود النهائية كما هي تماماً.

## لا تخلطه مع

غالباً ما يتم الخلط بين Squash and merge و Rebase؛ فبينما يدمج الـ squash عدة commits في واحدة، يقوم الـ rebase بإعادة كتابة سجل الـ commits عبر نقل سلسلة الـ commits كاملة إلى قاعدة جديدة.

## قلها في العمل

- Let's just use squash and merge for this PR so we don't clutter the main branch with all these tiny fix commits.
  - دعنا نستخدم squash and merge لهذا الـ PR حتى لا نملأ الفرع الرئيسي بكل هذه الـ commits الصغيرة الخاصة بالتعديلات.
- Could you please squash and merge this pull request once the final review is approved?
  - هل يمكنك من فضلك إجراء squash and merge لهذا الـ pull request بمجرد الموافقة على المراجعة النهائية؟
