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

## لا تخلطه مع

الوراثة (inheritance) تُعرّف علاقة «هو نوع من» حيث تعيد الفئة الفرعية استخدام سلوك الأب، بينما يُعرّف التركيب (composition) علاقة «يحتوي على» عبر تجميع كائنات مستقلة.

## قلها في العمل

- Let us use inheritance here so that the admin class can reuse the common user methods.
  - دعنا نستخدم الوراثة هنا لكي تتمكن فئة المسؤول من إعادة استخدام دوال المستخدم المشتركة.
- Please refactor this deeply nested inheritance tree into smaller components to improve maintainability.
  - يرجى إعادة هيكلة شجرة الوراثة المتداخلة هذه بعمق إلى مكونات أصغر لتحسين قابلية الصيانة.
