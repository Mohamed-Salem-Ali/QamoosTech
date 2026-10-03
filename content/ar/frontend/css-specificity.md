---
id: css-specificity
category: frontend
level: beginner
related: []
term: "CSS Specificity"
pronunciation: "سي إس إس سبيسيفيسيتي"
keywords: ["ترتيب أولوية محددات سي إس إس","حل مشكلة عدم تطبيق التنسيقات","تجاوز تنسيقات ملفات سي إس إس","أولوية الكلاسات والآي دي في سي إس إس","لماذا لا يعمل كود السي إس إس","حساب وزن المحددات في سي إس إس","الفرق بين الأولوية والتسلسل في سي إس إس","توليف أولوية تنسيقات الويب","css selector priority order","override existing framework styles","why is my css not applying","css weights and selectors","element selector ranking algorithm","fix overridden css rules","css specificity vs cascade","make css rule more specific","css specificity calculation"]
---

## التعريف

هي الخوارزمية التي يستخدمها المتصفح لتحديد أي قاعدة CSS يجب تطبيقها على عنصر معين عندما تتنافس عدة قواعد على استهدافه. تعمل كآلية ترتيب تعتمد على نوع المحددات المستخدمة، مثل المعرفات (IDs) أو الأصناف (Classes) أو الوسوم (Tags).

## أين تسمعه؟

عند تصحيح أخطاء واجهة المستخدم (UI)، أو عند كتابة تنسيقات مخصصة، أو عند محاولة تجاوز تنسيقات جاهزة من إطار عمل معين.

## أمثلة

- The ID selector has higher specificity than the class selector.
  - محدد المعرف (ID) له أولوية أعلى من محدد الصنف (Class).
- I had to increase the specificity of my rule to override the default library style.
  - اضطررت لزيادة أولوية (specificity) القاعدة الخاصة بي لتجاوز تنسيق المكتبة الافتراضي.

## خطأ شائع

الاعتقاد بأن ترتيب كتابة الأكواد في ملف الـ CSS هو العامل الوحيد لتطبيق التنسيق، وتجاهل أن المحدد الأعلى أولوية (Specific) سيفوز دائماً بغض النظر عن موقعه في الملف.

## لا تخلطه مع

غالباً ما يتم الخلط بين CSS Specificity و CSS Cascade؛ فبينما تحدد الـ specificity أي قاعدة لها أولوية أعلى بناءً على وزن المحدد، تحدد الـ cascade النمط النهائي من خلال النظر في ترتيب المصدر والأولوية والوراثة.

## قلها في العمل

- I'm struggling to override this button color because of a specificity issue with the parent container's selector.
  - أواجه صعوبة في تجاوز لون هذا الزر بسبب مشكلة في الـ specificity تتعلق بمحدد الحاوية الأب.
- Please check the CSS specificity of your new rules, as they are currently being overridden by the base styles.
  - يرجى التحقق من الـ CSS specificity لقواعدك الجديدة، حيث يتم تجاوزها حالياً بواسطة التنسيقات الأساسية.
