---
id: namespace
category: programming
subcategory: modules-and-libraries
level: beginner
related: [module, package, import, wildcard-import]
term: "Namespace"
translation: "فضاء الأسماء"
pronunciation: "نيم سبيس"
keywords: ["تجميع الأسماء لتجنب التعارض", "الاسم نفسه في وحدتين", "بادئة للاسم لتجنب التعارض", "نطاق الأسماء", "group names so they do not clash", "same name in two modules", "name prefix to avoid conflict", "scope of names", "namespace in python"]
---

## التعريف

وعاء يجمع الأسماء، فيمكن أن يوجد الاسم نفسه في أماكن مختلفة دون تعارض، مثل math.sqrt و numpy.sqrt، أو وحدة تحتوي على دوالها الخاصة.

## أين تسمعه؟

في استيرادات بايثون، وشيفرة XML وC#، ونقاشات التسمية في المشاريع الكبيرة.

## أمثلة

- Use the namespace math.sqrt so it does not clash with another sqrt.
  - استخدم فضاء الأسماء math.sqrt حتى لا يتعارض مع دالة sqrt أخرى.
- Keep the logging helpers in their own namespace.
  - احتفظ بمساعدات السجلات في فضاء أسماء خاص بها.
- The billing code and the shipping code both define a create function, each in its own namespace.
  - تعرّف شيفرة الفوترة وشيفرة الشحن كلتاهما دالة create، كلٌّ في فضاء أسماء (namespace) خاص بها.

## خطأ شائع

استخدام الاستيراد بالنجمة، مثل from module import *، الذي يسحب أسماء كثيرة إلى فضاء أسمائك فيسبب تعارضات.

## لا تخلطه مع

فضاء الأسماء يجمع الأسماء في الشيفرة، أما الوحدة فهي ملف واحد يعرّف بعضها، والحزمة مجلد يضم وحدات. أما فضاء أسماء لينكس فمفهوم مختلف، إذ يعزل موارد النظام لعملية ما، كما تفعل الحاويات.
