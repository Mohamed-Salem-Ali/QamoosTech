---
id: cherry-pick
category: git
level: intermediate
related: [commit, merge, rebase]
term: "Cherry-pick"
pronunciation: "تشيري بيك"
translation: "انتقاء الالتزامات"
---

## التعريف

نقل التزام (commit) معين من فرع (branch) إلى فرع آخر دون الحاجة لدمج الفرع بأكمله.

## أين تسمعه؟

في إدارة الإصدارات، عندما تصلح خطأً في فرع الإنتاج وتريد جلب هذا الإصلاح بسرعة إلى فرع التطوير الرئيسي.

## أمثلة

- We need to cherry-pick that bug fix commit into the release branch.
  - نحتاج إلى عمل cherry-pick لالتزام إصلاح العلية هذا في فرع الإصدار.
- I used cherry-pick to grab just the latest feature update without the other experimental changes.
  - لقد استخدمت cherry-pick لجلب تحديث الميزة الأخير فقط دون التغييرات التجريبية الأخرى.

## خطأ شائع

الاعتقاد بأن هذه الطريقة تغني تماماً عن الدمج (merge)، مما يتسبب في تكرار الالتزامات وتعقيد تاريخ المشروع إذا تم استخدامها بافراط.
