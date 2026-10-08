---
id: map-and-filter
category: programming
subcategory: iteration-and-generators
level: intermediate
related: [comprehension, generator, lazy-evaluation]
aliases: ["map function", "filter function"]
term: "Map and Filter"
translation: "التحويل والتصفية"
pronunciation: "ماب آند فيلتر"
keywords: ["apply a function to every item", "keep only matching items", "python map and filter", "transform a list without a loop", "array map and filter in javascript", "lazy map result", "تطبيق دالة على كل عنصر", "الإبقاء على العناصر المطابقة", "map وfilter في بايثون", "تحويل قائمة دون حلقة", "دالتا map وfilter في JavaScript", "نتيجة map الكسولة"]
---

## التعريف

طريقتان لتحويل مجموعة دون كتابة الحلقة بنفسك. تطبّق map دالة على كل عنصر، وتُبقي filter على العناصر التي تعيد لها الدالة قيمة صحيحة. وفي بايثون تعيد الدالتان مُكرِّراً كسولاً (iterator).

## أين تسمعه؟

في الشيفرة المكتوبة بالأسلوب الوظيفي، وفي خطوط معالجة البيانات، وفي JavaScript حيث تحمل الدالتان الاسمين نفسيهما على المصفوفات.

## أمثلة

- map(str.upper, names) converts every name to uppercase.
  - تحوّل map(str.upper, names) كل اسم إلى حروف كبيرة.
- filter(lambda n: n > 0, numbers) keeps only the positive numbers.
  - تُبقي filter(lambda n: n > 0, numbers) الأعداد الموجبة فقط.
- In JavaScript, items.map(f) and items.filter(f) do the same job on arrays.
  - في JavaScript تؤدي items.map(f) وitems.filter(f) المهمة نفسها على المصفوفات.

## خطأ شائع

معاملة نتيجة map أو filter في بايثون كقائمة. فهي مُكرِّر، فالحلقة الثانية عليه لا تجد شيئاً. غلّفها بـ list() إذا احتجتها مرتين.

## لا تخلطه مع

فهم القائمة (list comprehension) يؤدي المهمة نفسها في تعبير واحد مقروء، مثل [n for n in numbers if n > 0]. اختر الأوضح للفريق.

## قلها في العمل

- Could we filter the orders with a comprehension instead of chaining map and filter?
  - هل نُصفّي الطلبات بفهم القائمة بدل ربط map وfilter؟
- The map call returns an iterator, so wrap it in list() before we count it.
  - تعيد استدعاء map مُكرِّراً، فغلّفه بـ list() قبل أن نعدّه.
