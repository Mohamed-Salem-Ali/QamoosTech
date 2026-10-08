---
id: merge-conflict
category: git
level: beginner
related: [merge, rebase]
term: "Merge Conflict"
translation: "تعارض في الدمج"
pronunciation: "ميرج كونفليكت"
keywords: ["تعارض في الدمج","مشكلة في دمج الكود","جيت لا يستطيع الدمج تلقائيا","تعديل نفس السطر في جيت","حل مشكلة التعارض","ميرج كونفليكت","خطأ دمج الفروع","تداخل التعديلات في جيت","git cannot combine changes automatically","two people edited same lines","resolve git conflict manually","git wont merge branches","overlapping edits in git","merge conflict error","fix git conflict","git merge stop","marge conflict","code merge problem"]
---
## التعريف

عندما لا يستطيع Git دمج تغييرين تلقائيًا لأن كليهما عدّل الأسطر نفسها، فيجب أن يختار شخص ما.

## أين تسمعه؟

أي مشروع جماعي.

## أمثلة

- I have a merge conflict in `package.json`.
  - لدي merge conflict في `package.json`.
- Resolve the conflict, then commit the result.
  - حلّ التعارض ثم احفظ النتيجة بـ commit.
- The merge conflict was in the checkout template, so I kept both changes.
  - وقع التعارض في قالب صفحة الدفع، فأبقيتُ التغييرين معاً.

## خطأ شائع

اختيار «اقبل تغييراتي كلها» دون قراءة. قد تحذف عمل زميلك.

## لا تخلطه مع

يحدث تعارض الدمج عندما لا يستطيع Git دمج التعديلات المتداخلة تلقائياً، بينما تظهر مشكلة البناء عندما يتم تجميع الكود بشكل خاطئ بغض النظر عن طريقة دمجه.

## قلها في العمل

- Hey, could you hop on a quick call with me to help resolve this merge conflict?
  - مرحباً، هل يمكنك الانضمام إليّ في مكالمة سريعة لمساعدتي في حل تعارض الدمج هذا؟
- I have updated the branch and resolved the merge conflict in the configuration file.
  - لقد قمت بتحديث الفرع وحل تعارض الدمج في ملف الإعدادات.
