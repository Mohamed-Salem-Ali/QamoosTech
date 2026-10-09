---
id: accessibility
category: frontend
level: intermediate
related: [component, rtl]
term: "Accessibility (a11y)"
translation: "إتاحة الوصول"
pronunciation: "أكسيسيبيليتي"
keywords: ["إتاحة الوصول للمواقع","معايير استخدام قارئات الشاشة","جعل الموقع مناسب لذوي الإعاقة","دعم التنقل عبر لوحة المفاتيح","ماذا يعني اختصار a11y","تحسين تجربة المستخدم لذوي الاحتياجات","تطوير مواقع شاملة للجميع","تطبيق معايير الوصول الرقمي","طريقة كتابة النصوص البديلة","أكسيسيبيليتي في تطوير الويب","make website usable for disabled","a11y meaning","web standards for screen readers","keyboard navigation support","inclusive web design practices","how to make site accessible","alt text and labels","semantic html for screen readers","improving site usability for impaired","a11y compliance checklist"]
---
## التعريف

جعل المواقع قابلة للاستخدام من الجميع، ومنهم من يستخدمون قارئات الشاشة أو لوحة المفاتيح فقط أو لديهم ضعف في الرؤية. وكلمة «a11y» اختصار: حرف a ثم 11 حرفًا ثم y.

## أين تسمعه؟

التدقيق (Lighthouse)، والمتطلبات القانونية، ومراجعات التصميم.

## أمثلة

- Add an `alt` text to every image for accessibility.
  - أضف نصًا بديلًا `alt` لكل صورة لضمان إتاحة الوصول.
- Can you reach every button using only the keyboard?
  - هل تستطيع الوصول إلى كل زر باستخدام لوحة المفاتيح فقط؟
- Labels on the form fields let screen readers announce what each input is for.
  - تتيح تسميات حقول النموذج لقارئات الشاشة أن تعلن الغرض من كل حقل.

## خطأ شائع

إضافة إتاحة الوصول في النهاية. بناء الصفحة بعناصر HTML الدلالية منذ البداية أرخص بكثير.

## لا تخلطه مع

تركز إتاحة الوصول (a11y) على قابلية الاستخدام للأشخاص ذوي الإعاقة، بينما تتعلق قابلية الاستخدام العامة (UX) بجعل المنتج سهلًا وفعالًا لجميع المستخدمين عمومًا.

## قلها في العمل

- Let's check if our new dropdown menu meets accessibility standards before we merge this PR.
  - دعنا نتحقق مما إذا كانت قائمة الخيارات المنسدلة الجديدة تلبي معايير إتاحة الوصول قبل أن ندمج طلب السحب هذا.
- Please ensure that all form inputs have proper labels to improve accessibility for screen reader users.
  - يرجى التأكد من أن جميع حقول الإدخال تحتوي على تسميات مناسبة لتحسين إتاحة الوصول لمستخدمي قارئات الشاشة.
