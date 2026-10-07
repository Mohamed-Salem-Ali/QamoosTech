---
id: import
category: programming
subcategory: modules-and-libraries
level: beginner
related: [module, package, standard-library]
tags: [python, javascript]
aliases: ["import statement", "relative import", "absolute import"]
term: "Import"
translation: "الاستيراد"
pronunciation: "إمبورت"
keywords: ["استخدام كود من ملف آخر", "جملة import", "‏from x import y", "خطأ الاستيراد الدائري", "ImportError", "جلب مكتبة", "use code from another file", "import statement", "from x import y", "circular import error", "importerror", "bring in a library"]
---

## التعريف

الاستيراد (Import) هو الطريقة التي تجلب بها كوداً من وحدة أو حزمة أخرى إلى الملف الحالي لتستخدم دوالها وأصنافها.

## أين تسمعه؟

في أعلى كل ملف بايثون أو جافاسكريبت تقريباً، وفي أخطاء مثل `ImportError` أو الاستيرادات الدائرية.

## أمثلة

- Import only the names you need from the module.
  - استورد فقط الأسماء التي تحتاجها من الوحدة.
- A circular import happens when two modules import each other.
  - الاستيراد الدائري يحدث عندما تستورد وحدتان إحداهما الأخرى.

## خطأ شائع

استخدام `from module import *`. فهو يخفي مصدر الأسماء وقد يستبدل أسماءك.

## لا تخلطه مع

الإدراج أو النسخ واللصق الذي يكرر الكود. أما الاستيراد فيشير إلى الأصل ويحمّله مرة واحدة.

## قلها في العمل

- Move that import inside the function to break the cycle.
  - انقل هذا الاستيراد داخل الدالة لكسر الحلقة.
- Group the imports: standard library first, then third-party, then ours.
  - رتّب الاستيرادات: المكتبة القياسية أولاً ثم الخارجية ثم مكتباتنا.
