---
id: indentation
category: programming
subcategory: language-basics
level: beginner
related: [control-flow, function, loop]
tags: [python]
term: "Indentation"
translation: "المسافة البادئة"
pronunciation: "إندينتيشن"
keywords: ["مسافات في بداية السطر", "بايثون تستخدم المسافات لتحديد الكتل", "خطأ IndentationError", "الفرق بين tab والمسافات", "هيكل كتلة الكود", "4 مسافات في بايثون", "spaces at start of line", "python uses indentation for blocks", "indentationerror", "tabs vs spaces", "code block structure", "4 spaces python"]
---

## التعريف

المسافة البادئة (Indentation) هي الفراغ في بداية السطر. في بايثون هي جزء من القواعد، إذ تحدد أي الأسطر تنتمي إلى كتلة مثل الحلقة أو الدالة.

## أين تسمعه؟

في دروس بايثون، ورسائل الخطأ مثل `IndentationError`، ونقاشات الأسلوب حول الـ tab مقابل المسافات.

## أمثلة

- The body of the loop must be indented by four spaces.
  - يجب إزاحة جسم الحلقة بأربع مسافات.
- Mixing tabs and spaces causes an indentation error.
  - خلط الـ tab بالمسافات يسبب خطأ في المسافة البادئة.
- The function body needs four spaces of indentation under the def line.
  - يحتاج جسم الدالة إلى أربع مسافات بادئة (indentation) تحت سطر def.

## خطأ شائع

خلط الـ tab بالمسافات في الملف نفسه. اختر المسافات، أربعاً لكل مستوى، واترك المحرر يتولى ذلك.

## لا تخلطه مع

الأقواس `{ }` التي تستخدمها لغات أخرى لتحديد الكتل. في بايثون التنسيق نفسه هو الهيكل.

## قلها في العمل

- That line is off by one level of indentation, so it runs outside the loop.
  - هذا السطر مزاح بمستوى واحد خطأ، فيعمل خارج الحلقة.
- Configure the editor to insert four spaces when you press Tab.
  - اضبط المحرر ليُدرج أربع مسافات عند الضغط على Tab.
