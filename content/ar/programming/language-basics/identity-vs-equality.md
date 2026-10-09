---
id: identity-vs-equality
category: programming
subcategory: language-basics
level: intermediate
related: [reference, object, truthy-vs-falsy]
tags: [python]
aliases: ["is vs", "is vs equals"]
term: "Identity vs Equality"
translation: "الهوية مقابل المساواة"
pronunciation: "آيدنتيتي في إيكوالتي"
keywords: ["الفرق بين is و== في بايثون", "نفس الكائن أم نفس القيمة", "المقارنة مع None", "قائمتان متساويتان لكنهما ليستا الكائن نفسه", "الدالة id()", "ثلاث علامات يساوي في جافاسكريبت", "is vs == in python", "same object or same value", "compare with none", "two lists equal but not the same", "id() function", "triple equals javascript"]
---

## التعريف

المساواة تسأل هل القيمتان متطابقتان؛ أما الهوية فتسأل هل الاسمان يشيران إلى الكائن نفسه. في بايثون `==` تفحص المساواة و`is` تفحص الهوية.

## أين تسمعه؟

في مراجعات كود بايثون، وفي المقابلات، وعندما تبدو قائمتان متساويتين لكنهما تتصرفان بشكل مختلف.

## أمثلة

- Two lists with the same items are equal, but they are not the same object.
  - قائمتان بالعناصر نفسها متساويتان، لكنهما ليستا الكائن نفسه.
- Use `is None` rather than `== None` to check for the absence of a value.
  - استخدم `is None` بدلاً من `== None` للتحقق من غياب القيمة.
- The two lists are equal but not the same object, so the is check returns False.
  - القائمتان متساويتان لكنهما ليستا الكائن نفسه، لذلك تعيد فحص is القيمة False.

## خطأ شائع

استخدام `is` لمقارنة الأرقام أو النصوص. قد يبدو أنها تعمل مع القيم الصغيرة، لكن `==` وحدها موثوقة للقيم.

## لا تخلطه مع

النسخة (Copy) التي لها محتوى مساوٍ لكن هويتها مختلفة.

## قلها في العمل

- Compare with `is None`, not `== None`.
  - قارن باستخدام `is None` وليس `== None`.
- They are equal but not identical, so changing one does not change the other.
  - هما متساويان لكن غير متطابقين في الهوية، فتغيير أحدهما لا يغيّر الآخر.
