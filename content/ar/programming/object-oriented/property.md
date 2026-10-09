---
id: property
category: programming
subcategory: object-oriented
level: intermediate
related: [attribute, encapsulation, method]
tags: [python]
aliases: ["getter", "setter", "getter and setter"]
term: "Property"
translation: "الخاصية المحسوبة"
pronunciation: "بروبرتي"
keywords: ["getter و setter", "خاصية مع تحقق", "الـ decorator ‏@property", "خاصية محسوبة", "خاصية للقراءة فقط", "تنفيذ كود عند الوصول للخاصية", "getter and setter", "attribute with validation", "@property decorator", "computed attribute", "read only attribute", "run code on attribute access"]
---

## التعريف

الـ Property تبدو كخاصية عادية لكنها تنفّذ كوداً عند قراءتها أو كتابتها، فيستطيع الصنف التحقق من القيم أو حسابها عند الطلب.

## أين تسمعه؟

في أصناف بايثون وC#، ومراجعات الكود حول التحقق، ونقاشات الـ getters والـ setters.

## أمثلة

- `balance` is a read-only property, so callers cannot assign to it.
  - `balance` خاصية للقراءة فقط، فلا يستطيع من يستدعيها تعيين قيمة لها.
- The setter rejects negative ages.
  - يرفض الـ setter الأعمار السالبة.
- The total property is computed from the line items every time it is read.
  - تُحسب الخاصية total من بنود الطلب في كل مرة تُقرأ فيها.

## خطأ شائع

إخفاء عمل بطيء خلف property. يتوقع الناس أن تكون قراءة الخاصية سريعة وبلا آثار جانبية.

## لا تخلطه مع

الدالة (method) التي تستدعيها بأقواس. أما الـ property فتُستخدم بدونها.

## قلها في العمل

- Turn that getter into a property so callers keep the simple syntax.
  - حوّل هذا الـ getter إلى property ليحتفظ من يستخدمه بالصيغة البسيطة.
- Validate it in the setter, not at every call site.
  - تحقق منه في الـ setter وليس عند كل استدعاء.
