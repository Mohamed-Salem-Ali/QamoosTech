---
id: url-reversing
category: web-apis
subcategory: routing-and-views
level: intermediate
related: [url-routing, view, template]
tags: [django, python]
aliases: ["reverse url", "named routes", "reverse"]
term: "URL Reversing"
translation: "بناء الرابط من اسمه"
pronunciation: "يو آر إل ريفيرسنج"
keywords: ["بناء الرابط من اسمه", "دالة reverse", "اسم الرابط بدل المسار الثابت", "دالة reverse في Django", "رابط يصمد أمام تغيير المسارات", "المسارات المسماة", "build url from its name", "reverse function", "url name instead of hardcoded path", "django reverse", "link that survives route changes", "named routes"]
---

## التعريف

بناء الرابط من اسمه (URL Reversing) ينشئ الرابط من اسم المسار ومعاملاته بدل كتابة المسار يدوياً، فلا يؤدي تغيير مسار إلى كسر كل الروابط.

## أين تسمعه؟

في Django (`reverse()` و`{% url %}`)، وعمليات إعادة التوجيه بعد النماذج، وإعادة الهيكلة التي تغيّر المسارات.

## أمثلة

- Redirect with `reverse('circle-detail', args=[circle.id])`.
  - أعد التوجيه بـ `reverse('circle-detail', args=[circle.id])`.
- Name every route so you can reverse it.
  - سمِّ كل مسار لتستطيع بناء رابطه.
- The template uses reverse to build the link to the order page from its name.
  - يستخدم القالب دالة reverse لبناء الرابط إلى صفحة الطلب من اسمها.

## خطأ شائع

كتابة المسارات حرفياً في الروابط وإعادة التوجيه. تغيير مسار واحد يكسر صفحات في الموقع كله.

## لا تخلطه مع

توجيه الروابط الذي ينتقل من المسار إلى الكود. أما البناء العكسي فيمشي في الاتجاه المعاكس، من الاسم إلى المسار.

## قلها في العمل

- Use the route name, not the literal path.
  - استخدم اسم المسار وليس المسار الحرفي.
- Reverse the URL with the id as an argument.
  - ابنِ الرابط بالمعرّف كمعامل.
