---
id: class-method-vs-static-method
category: programming
subcategory: object-oriented
level: intermediate
related: [method, class, constructor]
tags: [python]
aliases: ["classmethod", "staticmethod", "class method", "static method"]
term: "Class Method vs Static Method"
translation: "دالة الصنف مقابل الدالة الساكنة"
pronunciation: "كلاس ميثود في ستاتيك ميثود"
keywords: ["‏@classmethod و @staticmethod", "منشئ بديل", "دالة بلا self", "دالة تستقبل cls", "دالة مساعدة داخل الصنف", "الدالة الساكنة في Java", "@classmethod and @staticmethod", "alternative constructor", "method without self", "method that receives cls", "utility function inside class", "static method java"]
---

## التعريف

دالة الصنف (class method) تستقبل الصنف نفسه وتُستخدم غالباً كمنشئ بديل. أما الدالة الساكنة (static method) فلا تستقبل الكائن ولا الصنف؛ هي مجرد دالة موضوعة داخل الصنف.

## أين تسمعه؟

في تصميم أصناف بايثون وJava، ومراجعات الكود، والمقابلات التي تقارن `@classmethod` بـ `@staticmethod`.

## أمثلة

- `Money.from_string("12.50 EGP")` is a class method that builds a Money object.
  - `Money.from_string("12.50 EGP")` دالة صنف تبني كائن Money.
- The validation helper is a static method because it does not use the object.
  - دالة التحقق المساعدة ساكنة لأنها لا تستخدم الكائن.
- The class method reads cls to build the right subclass, while the static method only does a calculation.
  - تقرأ الدالة الصنفية cls لتبني الفئة الفرعية الصحيحة، أما الدالة الساكنة فتقوم بحساب فقط.

## خطأ شائع

جعل الدالة ساكنة وهي تصلح دالة عادية في الوحدة. إن لم تحتج الصنف ولا الكائن فاسأل هل مكانها الصنف أصلاً.

## لا تخلطه مع

دالة الكائن (instance method) التي تستقبل `self` وتعمل مع كائن محدد.

## قلها في العمل

- Add a class method for creating it from a dictionary.
  - أضف class method لإنشائه من قاموس.
- That static method could just be a function in the module.
  - هذه الدالة الساكنة تصلح دالة عادية في الوحدة.
