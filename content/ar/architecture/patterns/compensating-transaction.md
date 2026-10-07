---
id: compensating-transaction
category: architecture
subcategory: patterns
level: intermediate
related: [transaction, transactional-outbox, event-driven]
aliases: ["saga", "saga pattern", "compensation"]
term: "Compensating Transaction"
translation: "المعاملة التعويضية"
pronunciation: "كومبنسيتنج ترانزاكشن"
keywords: ["التراجع عن خطوة بخطوة أخرى", "تراجع الـ saga", "استرداد بعد الفشل", "إلغاء إجراء سابق", "بلا معاملة موزعة", "تراجع على مستوى العمل", "undo a step with another step", "saga rollback", "refund after failure", "cancel previous action", "no distributed transaction", "business level undo"]
---

## التعريف

المعاملة التعويضية (Compensating Transaction) تلغي أثر خطوة سابقة بتنفيذ إجراء معاكس، مثل استرداد دفعة، حين تفشل خطوة لاحقة في عملية متعددة الخطوات.

## أين تسمعه؟

في تصاميم الـ saga والخدمات المصغرة، وتدفقات الحجز والدفع، ونقاشات تعذر معاملة واحدة تغطي عدة خدمات.

## أمثلة

- Shipping failed, so the saga runs a compensating transaction to refund the payment.
  - فشل الشحن فتنفذ الـ saga معاملة تعويضية لاسترداد الدفعة.
- Each step needs a defined compensation.
  - كل خطوة تحتاج تعويضاً محدداً.

## خطأ شائع

افتراض أنها تعيد الحالة السابقة تماماً. الاسترداد ليس "لم يُخصم أبداً"؛ فتبقى آثار أخرى (رسائل وسجلات).

## لا تخلطه مع

التراجع في قاعدة البيانات (Rollback) الذي يمحو تغييرات غير مثبتة. أما التعويضية فتعمل بعد التثبيت بتغيير جديد معاكس.

## قلها في العمل

- What's the compensation for this step?
  - ما التعويض لهذه الخطوة؟
- Make the compensation idempotent.
  - اجعل التعويض idempotent.
