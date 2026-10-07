---
id: method-chaining
category: programming
subcategory: code-quality
level: beginner
related: [queryset, pure-function, comprehension]
aliases: ["fluent interface", "chained calls", "chaining"]
term: "Method Chaining"
translation: "تسلسل الدوال"
pronunciation: "ميثود تشيننج"
keywords: ["استدعاء الدوال تباعاً", "نقطة بعد نقطة", "كل دالة تُرجع كائناً", "خطوط pandas", "سلاسل تصفية الـ ORM", "واجهة سلسة", "call methods one after another", "dot after dot", "each returns an object", "pandas pipelines", "orm filter chains", "fluent api"]
---

## التعريف

تسلسل الدوال (Method Chaining) هو استدعاء عدة دوال متتابعة على نتيجة الاستدعاء السابق، مثل `qs.filter(...).order_by(...).first()`. وينجح لأن كل دالة تُرجع كائناً يمكنك استدعاء التالية عليه.

## أين تسمعه؟

في استعلامات الـ ORM، وكود pandas ومصفوفات جافاسكربت (`.map().filter()`)، وواجهات البناء.

## أمثلة

- `items.filter(isActive).map(toName).join(', ')` is a chain.
  - الصيغة `items.filter(isActive).map(toName).join(', ')` سلسلة.
- Break a long chain over several lines for readability.
  - قسّم السلسلة الطويلة على أسطر لسهولة القراءة.

## خطأ شائع

كتابة سلاسل طويلة جداً يصعب تصحيحها. قسّمها أو سمِّ النتائج الوسيطة.

## لا تخلطه مع

تداخل الاستدعاءات مثل `f(g(h(x)))` الذي يُقرأ من الداخل للخارج. أما التسلسل فيُقرأ من اليسار لليمين.

## قلها في العمل

- Chain the filters instead of looping.
  - سلسل المرشحات بدل الحلقة.
- Put each call on its own line.
  - ضع كل استدعاء في سطر مستقل.
