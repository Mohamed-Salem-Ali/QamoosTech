---
id: inheritance
category: programming
level: intermediate
related: [class, interface]
term: "Inheritance"
translation: "الوراثة"
pronunciation: "إنهيرتانس"
---
## التعريف

أن تعيد فئة استخدام خصائص ودوال فئة أخرى، ويمكنها إضافة بعضها أو تعديله.

## أين تسمعه؟

التصميم كائني التوجّه والمقابلات («composition over inheritance»).

## أمثلة

- `AdminUser` inherits from `User`.
  - الفئة `AdminUser` ترث من `User`.
- Deep inheritance chains are hard to maintain.
  - سلاسل الوراثة العميقة يصعب صيانتها.

## خطأ شائع

استخدام الوراثة لمجرد مشاركة الشيفرة. إذا لم تكن العلاقة «هو نوع من»، ففضّل التركيب (composition).
