---
id: cherry-pick
category: git
level: intermediate
related: [commit, merge, rebase]
term: "Cherry-pick"
pronunciation: "تشيري بيك"
translation: "انتقاء الالتزامات"
keywords: ["نقل التزام واحد بين الفروع","نسخ كوميت معين لفرع آخر","اخذ التزام بدون دمج الفرع","نقل إصلاح من فرع لآخر","تشيري بيك","انتقاء الالتزامات","تطبيق كوميت محدد","جلب التزام معين في جيت","apply single commit to another branch","copy specific commit to branch","take commit from another branch","grab one commit without merging","git apply specific commit","transfer single commit git","cherry pick","chery pick","git copy commit"]
---

## التعريف

نقل التزام (commit) معين من فرع (branch) إلى فرع آخر دون الحاجة لدمج الفرع بأكمله.

## أين تسمعه؟

في إدارة الإصدارات، عندما تصلح خطأً في فرع الإصدار وتريد جلب هذا الإصلاح بسرعة إلى فرع التطوير الرئيسي.

## أمثلة

- We need to cherry-pick that bug fix commit into the release branch.
  - نحتاج إلى عمل cherry-pick لالتزام إصلاح الخطأ هذا في فرع الإصدار.
- I used cherry-pick to grab just the latest feature update without the other experimental changes.
  - لقد استخدمت cherry-pick لجلب تحديث الميزة الأخير فقط دون التغييرات التجريبية الأخرى.
- We cherry-picked the security fix onto the release branch.
  - نقلنا إصلاح الأمان إلى فرع الإصدار عبر cherry-pick.

## خطأ شائع

الاعتقاد بأن هذه الطريقة تغني تماماً عن الدمج (merge)، مما يتسبب في تكرار الالتزامات وتعقيد تاريخ المشروع إذا تم استخدامها بإفراط.

## لا تخلطه مع

تطبيق cherry-pick ينقل التزاماً واحداً محدداً إلى فرع آخر، بينما الدمج (merge) يجمع كل الالتزامات من فرع بأكمله.

## قلها في العمل

- Could you please cherry-pick this urgent patch into the production branch?
  - هل يمكنك من فضلك عمل cherry-pick لهذه الرقعة العاجلة في فرع الإنتاج؟
- I have cherry-picked the fix into the staging branch to verify it works correctly.
  - لقد قمت بعمل cherry-pick للإصلاح في فرع التجربة للتحقق من عمله بشكل صحيح.
