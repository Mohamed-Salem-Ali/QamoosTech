---
id: dom
category: frontend
level: beginner
related: [rendering, state]
term: "DOM"
pronunciation: "دي-أو-إم"
translation: "نموذج كائنات المستند"
---

## التعريف

هو واجهة برمجية تمثل مستندات HTML أو XML على شكل هيكل شجري من العقد، مما يسمح للبرامج بتعديل محتوى الصفحة وتصميمها وبنيتها.

## أين تسمعه؟

- في كود الواجهات الأمامية عند اختيار العناصر أو الاستماع للنقرات.
- أثناء نقاشات الأداء حول إعادة رسم العناصر وتغيير التخطيط.
- عندما تتحدث إطارات العمل عن التمثيلات الوهمية مقارنة بالعناصر الحقيقية.

## أمثلة

- JavaScript can access elements using `document.getElementById` to change their text.
  - يمكن لجافاسكريبت الوصول إلى العناصر باستخدام `document.getElementById` لتغيير نصها.
- Updating the DOM directly too many times can slow down web page rendering.
  - تحديث الـ DOM مباشرة لعدة مرات قد يبطئ عملية عرض صفحة الويب.

## خطأ شائع

الاعتقاد بأن الـ DOM جزء من لغة جافاسكريبت نفسها، بينما هو في الواقع واجهة برمجية يوفرها المتصفح للتفاعل مع صفحات الويب.

## لا تخلطه مع

الفرق بين DOM و Virtual DOM هو أن الـ DOM هو التمثيل الحي للمستند داخل المتصفح، بينما الـ Virtual DOM هو نسخة خفيفة من جافاسكريبت تستخدمها إطارات العمل لتحسين التحديثات قبل مزامنتها مع الـ DOM الحقيقي.

## قلها في العمل

- We should minimize direct DOM manipulations in this component to keep the UI performance smooth.
  - يجب علينا تقليل التلاعب المباشر بالـ DOM في هذا المكون للحفاظ على سلاسة أداء واجهة المستخدم.
- Please ensure that the new elements are correctly injected into the DOM after the API call completes.
  - يرجى التأكد من إدراج العناصر الجديدة بشكل صحيح في الـ DOM بعد اكتمال استدعاء واجهة برمجة التطبيقات.
