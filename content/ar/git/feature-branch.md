---
id: feature-branch
category: git
level: beginner
related: [trunk-based-development, branch, pull-request, hotfix]
term: "Feature Branch"
translation: "فرع الميزة"
pronunciation: "فيتشر برانش"
keywords: ["فرع لميزة واحدة", "فرع منفصل لإصلاح", "العمل على فرع", "أنشئ فرعاً لهذه التذكرة", "branch for one feature", "separate branch for a fix", "work on a branch", "create a branch for this ticket", "delete branch after merge"]
---

## التعريف

فرع يُنشأ لميزة واحدة أو إصلاح واحد، ليُطوَّر ويُراجع بمعزل عن الخط الرئيسي قبل دمجه فيه.

## أين تسمعه؟

في سير عمل Git اليومي، وفي التذاكر التي تقول: «أنشئ فرعاً لهذا».

## أمثلة

- I opened a feature branch for the export button.
  - فتحتُ فرع ميزة لزر التصدير.
- Delete the feature branch after the pull request is merged.
  - احذف فرع الميزة بعد دمج طلب السحب.
- The feature branch for the export button merged cleanly after two reviews.
  - دُمج فرع ميزة زر التصدير بسلاسة بعد مراجعتين.

## خطأ شائع

ترك فرع الميزة أسابيع. يبتعد عن الفرع الرئيسي، فيصبح الدمج مؤلماً.

## لا تخلطه مع

فرع الميزة قصير العمر ومُركّز على تغيير واحد، أما الفرع طويل العمر، مثل develop، فيبقى مفتوحاً طوال المشروع.
