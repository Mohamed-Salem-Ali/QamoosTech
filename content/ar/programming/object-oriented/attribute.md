---
id: attribute
category: programming
subcategory: object-oriented
level: beginner
related: [object, class, property]
tags: [python]
aliases: ["instance variable", "field", "member variable"]
term: "Attribute"
translation: "الخاصية"
pronunciation: "أتريبيوت"
keywords: ["بيانات مخزنة على كائن", "object.field", "متغير الكائن", "متغير عضو", "self.name في بايثون", "حقل الصنف", "data stored on an object", "instance variable", "member variable", "self.name in python", "field of a class"]
---

## التعريف

الخاصية (Attribute) جزء من البيانات يخص كائناً، مثل `name` لعضو. تقرؤها بالنقطة مثل `member.name`.

## أين تسمعه؟

في الكود كائني التوجه، ودروس بايثون وجافاسكريبت، وأخطاء مثل `AttributeError`.

## أمثلة

- The member object has two attributes: a name and a number of shares.
  - كائن العضو له خاصيتان: اسم وعدد حصص.
- The error says the object has no attribute called `total`.
  - يقول الخطأ إن الكائن لا يملك خاصية اسمها `total`.
- The user object has an email attribute that the login form reads.
  - لكائن المستخدم سمة email يقرؤها نموذج تسجيل الدخول.

## خطأ شائع

الخلط بين الخاصية والدالة. الخاصية تحمل بيانات؛ أما الدالة (method) فتستدعيها بأقواس.

## لا تخلطه مع

الـ Property الذي يبدو كخاصية لكنه ينفّذ كوداً عند قراءته أو كتابته.

## قلها في العمل

- Store it as an attribute set in the constructor.
  - خزّنه كخاصية تُضبط في الـ constructor.
- That attribute is missing on some objects, which is why it crashes.
  - هذه الخاصية مفقودة في بعض الكائنات، ولهذا ينهار الكود.
