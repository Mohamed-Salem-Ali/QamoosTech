---
id: inheritance
category: programming
subcategory: object-oriented
level: intermediate
related: [class, interface, oop, prototype-chain]
term: "Inheritance"
translation: "الوراثة"
pronunciation: "إنهيرتانس"
keywords: ["إعادة استخدام خصائص الكلاس","علاقة هو نوع من","البرمجة كائنية التوجه","اشتقاق كلاس من آخر","الوراثة في البرمجة","وراثة الدوال والخصائص","إنشاء كلاس فرعي","الفرق بين الوراثة والتركيب","توسيع وظائف الكلاس الأساسي","مفهوم الوراثة في oop","reuse class properties","child class from parent","is a relationship","object oriented programming concepts","extending base class methods","subclassing in code","oop class hierarchy","inheritance vs composition","sharing code between classes","parent child class structure"]
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
- The AdminUser class inherits the login method from User and adds its own permissions.
  - ترث الفئة AdminUser دالة تسجيل الدخول من User، وتضيف صلاحياتها الخاصة.

## خطأ شائع

استخدام الوراثة لمجرد مشاركة الشيفرة. إذا لم تكن العلاقة «هو نوع من»، ففضّل التركيب (composition).

## لا تخلطه مع

الوراثة (inheritance) تُعرّف علاقة «هو نوع من» حيث تعيد الفئة الفرعية استخدام سلوك الأب، بينما يُعرّف التركيب (composition) علاقة «يحتوي على» عبر تجميع كائنات مستقلة.

## قلها في العمل

- Let us use inheritance here so that the admin class can reuse the common user methods.
  - دعنا نستخدم الوراثة هنا لكي تتمكن فئة المسؤول من إعادة استخدام دوال المستخدم المشتركة.
- Please refactor this deeply nested inheritance tree into smaller components to improve maintainability.
  - يرجى إعادة هيكلة شجرة الوراثة المتداخلة هذه بعمق إلى مكونات أصغر لتحسين قابلية الصيانة.
