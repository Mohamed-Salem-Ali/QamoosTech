---
id: docstring
category: programming
subcategory: code-quality
level: beginner
related: [function, class, pep-8]
tags: [python]
aliases: ["doc string", "documentation string"]
term: "Docstring"
translation: "نص التوثيق"
pronunciation: "دوكسترينج"
keywords: ["نص توثيق في بايثون", "وصف الدالة", "نص بين ثلاث علامات اقتباس", "ناتج help()", "توثيق المعاملات والقيمة المعادة", "توثيق الوحدة", "documentation string in python", "describe a function", "triple quoted string", "help() output", "document parameters and return", "module documentation"]
---

## التعريف

الـ Docstring نص يوضع في بداية وحدة أو صنف أو دالة ويصف ما تفعله. تقرؤه الأدوات والدالة `help()`.

## أين تسمعه؟

في مراجعات كود بايثون، وأدوات التوثيق، وأدلة الأسلوب التي تطلب من كل دالة عامة أن تشرح نفسها.

## أمثلة

- Add a docstring that says what the function returns and when it raises.
  - أضف docstring يقول ما تعيده الدالة ومتى تسبب خطأً.
- `help(my_function)` prints the docstring.
  - `help(my_function)` تطبع الـ docstring.
- The docstring lists the arguments, so the editor shows them when you type the call.
  - يسرد docstring المعاملات، فتعرضها بيئة التطوير حين تكتب الاستدعاء.

## خطأ شائع

تكرار الكود بالكلمات. الـ docstring الجيد يشرح الغرض والحالات المفاجئة وليس كل سطر.

## لا تخلطه مع

التعليق (Comment) الذي يبدأ بـ `#` ويتجاهله البرنامج. أما الـ docstring فبيانات حقيقية مرتبطة بالكائن.

## قلها في العمل

- Please add a docstring to every public function.
  - من فضلك أضف docstring لكل دالة عامة.
- The docstring explains the edge case better than a comment.
  - الـ docstring يشرح الحالة الحدّية أفضل من تعليق.
