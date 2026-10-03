---
id: rebase
category: git
level: intermediate
related: [merge, merge-conflict]
term: "Rebase"
translation: "إعادة تأسيس الفرع"
pronunciation: "ريبيس"
---
## التعريف

نقل commits فرعك فوق أحدث commits فرع آخر، للحصول على تاريخ نظيف ومستقيم.

## أين تسمعه؟

سير عمل Git والمقابلات.

## أمثلة

- Rebase your branch on `main` before opening the PR.
  - اعمل rebase لفرعك على `main` قبل فتح الـ PR.
- Never rebase a branch that others already use.
  - لا تعمل rebase لفرع يستخدمه آخرون.

## خطأ شائع

عمل rebase للفروع المشتركة. هذا يعيد كتابة التاريخ ويفسد نسخ زملائك.
