---
id: optimistic-locking
category: databases
subcategory: transactions
level: intermediate
related: [pessimistic-locking, race-condition, compare-and-swap]
tags: [sql, django]
aliases: ["optimistic lock", "version column"]
term: "Optimistic Locking"
translation: "القفل المتفائل"
pronunciation: "أوبتيمستيك لوكينج"
keywords: ["عمود الإصدار", "حدّث فقط إن لم يتغير", "اكتشاف التعديلات المتعارضة", "إعادة المحاولة عند التعارض", "لا يُمسك قفل", "منع التحديث الضائع", "version column", "update only if unchanged", "detect conflicting edits", "retry on conflict", "no lock held", "lost update prevention"]
---

## التعريف

القفل المتفائل (Optimistic Locking) يترك عدة مستخدمين يعملون بحرية ويتحقق عند الحفظ، عادة برقم إصدار، أن أحداً لم يغيّر الصف في الأثناء. فإن فعل فشل الحفظ وأُعيدت المحاولة.

## أين تسمعه؟

في ميزات الـ ORM (أعمدة `version`)، والنماذج التي يحرر فيها شخصان السجل نفسه، وأخطاء التعارض.

## أمثلة

- `UPDATE ... WHERE id = 7 AND version = 3` affects 0 rows, so someone else saved first.
  - جملة `UPDATE ... WHERE id = 7 AND version = 3` لا تؤثر في أي صف إذن حفظ شخص آخر قبلك.
- Show the user the conflict and let them reload.
  - اعرض التعارض للمستخدم ودعه يعيد التحميل.
- Two editors opened the same article, and the second save was rejected because the version had changed.
  - فتح محرران المقالة نفسها، فرُفض الحفظ الثاني لأن الإصدار قد تغيّر.

## خطأ شائع

استخدامه حين تكثر التعارضات. إعادة المحاولات المستمرة تهدر العمل؛ وقد يناسب القفل أكثر.

## لا تخلطه مع

القفل المتشائم الذي يقفل الصف أولاً فينتظر الآخرون.

## قلها في العمل

- Add a version column and check it on update.
  - أضف عمود إصدار وافحصه عند التحديث.
- Conflicts are rare here, so optimistic is fine.
  - التعارضات نادرة هنا لذا يكفي المتفائل.
