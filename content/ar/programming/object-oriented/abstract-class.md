---
id: abstract-class
category: programming
subcategory: object-oriented
level: intermediate
related: [interface, inheritance, polymorphism]
tags: [python]
aliases: ["abstract base class", "abc"]
term: "Abstract Class"
translation: "الصنف المجرّد"
pronunciation: "أبستراكت كلاس"
keywords: ["صنف لا يمكن إنشاء كائن منه", "صنف أساسي بدوال مطلوبة", "وحدة abc", "دالة مجرّدة", "قالب للأصناف الفرعية", "إلزام الأصناف الفرعية بالتنفيذ", "class you cannot instantiate", "base class with required methods", "abc module", "abstract method", "template for subclasses", "force subclasses to implement"]
---

## التعريف

الصنف المجرّد (Abstract Class) صنف أساسي لا يمكن إنشاء كائن منه مباشرة. يعرّف دوال يجب أن ينفذها كل صنف فرعي.

## أين تسمعه؟

في التصميم كائني التوجه، ووحدة `abc` في بايثون، وJava، ومراجعات الكود حول السلوك المشترك.

## أمثلة

- The base `PaymentMethod` is abstract; each concrete class implements `charge()`.
  - الصنف الأساسي `PaymentMethod` مجرّد؛ وكل صنف فعلي ينفّذ `charge()`.
- You cannot instantiate an abstract class.
  - لا يمكنك إنشاء كائن من صنف مجرّد.

## خطأ شائع

إنشاء أساس مجرّد لصنف فرعي واحد. انتظر حتى تتشارك حالتان فعليتان على الأقل في السلوك.

## لا تخلطه مع

الواجهة (Interface) التي تسرد الدوال فقط دون كود مشترك. أما الصنف المجرّد فقد يتضمن كوداً يعمل أيضاً.

## قلها في العمل

- Make the base class abstract so nobody instantiates it by mistake.
  - اجعل الصنف الأساسي مجرّداً حتى لا ينشئ أحد منه كائناً بالخطأ.
- Every subclass must override the abstract method.
  - على كل صنف فرعي أن يعيد تعريف الدالة المجرّدة.
