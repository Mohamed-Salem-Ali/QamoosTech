---
id: check-constraint
category: databases
subcategory: modeling
level: intermediate
related: [constraint, unique-constraint, schema]
tags: [sql, django]
aliases: ["check rule"]
term: "Check Constraint"
translation: "قيد التحقق"
pronunciation: "تشك كونسترينت"
keywords: ["قاعدة تفرضها قاعدة البيانات", "يجب أن تكون القيمة موجبة", "رفض الصفوف غير الصالحة", "الأسابيع أكبر من صفر", "قاعدة سلامة البيانات", "قيد على عمود", "rule enforced by the database", "value must be positive", "reject invalid rows", "weeks greater than zero", "data integrity rule", "constraint on a column"]
---

## التعريف

قيد التحقق (Check Constraint) قاعدة مخزنة في قاعدة البيانات يجب أن يحققها كل صف، مثل "يجب أن يكون المبلغ أكبر من صفر". وترفض قاعدة البيانات أي صف يخالفها.

## أين تسمعه؟

في تصميم المخطط، والترحيلات، ونقاشات أين يجب أن يعيش التحقق.

## أمثلة

- A check constraint stops anyone saving a negative amount, even from a script.
  - يمنع قيد التحقق أي أحد من حفظ مبلغ سالب، حتى من سكريبت.
- Add a check constraint so weeks can never be zero.
  - أضف قيد تحقق حتى لا تكون الأسابيع صفراً أبداً.
- The check constraint rejects any order whose quantity is zero.
  - يرفض قيد الفحص (check constraint) أي طلب كميته صفر.

## خطأ شائع

التحقق في كود التطبيق فقط. يستطيع سكريبت آخر أو تعديل يدوي أو خدمة مستقبلية تجاوزه؛ أما قاعدة البيانات فلا يمكن تجاوزها.

## لا تخلطه مع

التحقق في التطبيق الذي يعطي رسائل ودودة لكن يمكن تخطيه. القيد هو خط الدفاع الأخير.

## قلها في العمل

- Put the rule in a check constraint, not just in the form.
  - ضع القاعدة في قيد تحقق وليس في النموذج فقط.
- The insert failed on the check constraint.
  - فشل الإدراج بسبب قيد التحقق.
