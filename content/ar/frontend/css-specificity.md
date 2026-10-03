---
id: css-specificity
category: frontend
level: beginner
related: []
term: "CSS Specificity"
pronunciation: "سي-إس إس سبيسيفيسيتي"
---

## التعريف

هي الخوارزمية التي يستخدمها المتصفح لتحديد أي قاعدة CSS يجب تطبيقها على عنصر معين عندما تتنافس عدة قواعد على استهدافه. تعمل كآلية ترتيب تعتمد على نوع المحددات المستخدمة، مثل المعرفات (IDs) أو الأصناف (Classes) أو الوسوم (Tags).

## أين تسمعه؟

عند تصحيح أخطاء واجهة المستخدم (UI)، أو عند كتابة تنسيقات مخصصة، أو عند محاولة تجاوز تنسيقات جاهزة من إطار عمل معين.

## أمثلة

- The ID selector has higher specificity than the class selector.
  - محدد المعرف (ID) له أولوية أعلى من محدد الصنف (Class).
- I had to increase the specificity of my rule to override the default library style.
  - اضطررت لزيادة دقة (specificity) القاعدة الخاصة بي لتجاوز تنسيق المكتبة الافتراضي.

## خطأ شائع

الاعتقاد بأن ترتيب كتابة الأكواد في ملف الـ CSS هو العامل الوحيد لتطبيق التنسيق، وتجاهل أن المحدد الأكثر دقة (Specific) سيفوز دائماً بغض النظر عن موقعه في الملف.
