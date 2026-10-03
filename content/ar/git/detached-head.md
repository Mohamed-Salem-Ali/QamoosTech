---
id: detached-head
category: git
level: intermediate
related: [branch, commit, rebase]
term: "Detached HEAD"
pronunciation: "دي-تاتشْت هيد"
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
