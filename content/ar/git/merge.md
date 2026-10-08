---
id: merge
category: git
level: beginner
related: [branch, merge-conflict, rebase, fast-forward, squash-and-merge]
aliases: ["merge commit"]
term: "Merge"
translation: "دمج"
pronunciation: "ميرج"
keywords: ["دمج الفروع في جيت","جمع التغييرات من فرع لآخر","كيف أعمل ميرج","دمج الكود في الفروع","تطبيق الـ pull request","دمج التحديثات الأخيرة","ميرج الفروع الفرعية","ضم الكود المطور","combine git branches","merge feature branch","bring changes from main","put code together git","merge pull request","integrate branch changes","how to merge in git","marge branch","git combination"]
---
## التعريف

ضمّ تغييرات فرع إلى فرع آخر، وغالبًا فرع ميزة إلى `main`.

## أين تسمعه؟

الـ pull requests ووقت الإصدار.

## أمثلة

- The pull request was approved and merged.
  - تمت الموافقة على الـ pull request ودمجه.
- Merge `main` into your branch to get the latest changes.
  - ادمج `main` في فرعك لتحصل على آخر التغييرات.
- After the merge, the feature is on the main branch but not yet deployed.
  - بعد الدمج صارت الميزة على الفرع الرئيسي main، لكنها لم تُنشر بعد.

## خطأ شائع

الدمج دون تشغيل الاختبارات. دع الفحوصات تنتهي أولًا دائمًا.

## لا تخلطه مع

الـ merge يدمج الفروع عبر إنشاء commit جديدة تحافظ على التاريخ، بينما الـ rebase يعيد كتابة تاريخ المشروع عبر نقل الـ commits الخاصة بك فوق فرع آخر.

## قلها في العمل

- Can someone please review and merge this pull request when you have a moment?
  - هل يمكن لأحدكم مراجعة ودمج هذا الـ pull request من فضلك عندما تتيح لكم الفرصة؟
- Please merge the latest changes from the staging branch before submitting your code for review.
  - يرجى دمج أحدث التغييرات من فرع الـ staging قبل إرسال الكود الخاص بك للمراجعة.
