---
id: view
category: web-apis
subcategory: routing-and-views
level: beginner
related: [url-routing, template, request-response]
tags: [django, python]
aliases: ["view function", "controller"]
term: "View"
translation: "دالة العرض"
pronunciation: "فيو"
keywords: ["دالة تعالج الطلب", "تُرجع استجابة", "الـ view في Django", "منطق المتحكم", "استجابة HTML أو JSON", "طلب يدخل واستجابة تخرج", "function that handles a request", "returns a response", "django view", "controller logic", "html or json response", "request in response out"]
---

## التعريف

الـ view (دالة العرض) هي الدالة أو الصنف الذي يستقبل الطلب ويُرجع استجابة. وفيه تقرر أي بيانات تجلب وماذا ترسل.

## أين تسمعه؟

في كود Django وFlask، ونقاشات MVC وMVT، وتقارير الأخطاء التي تذكر "الـ view الذي يعالج هذا الرابط".

## أمثلة

- The view loads the circle, then renders the page.
  - تحمّل الـ view الجمعية ثم تعرض الصفحة.
- Keep business rules out of the view; call a service function.
  - أبقِ قواعد العمل خارج الـ view واستدعِ دالة خدمة.

## خطأ شائع

وضع كل المنطق في الـ view. تصبح ضخمة وصعبة الاختبار؛ انقل القواعد إلى دوال منفصلة.

## لا تخلطه مع

القالب (Template) الذي يصف شكل الصفحة فقط. أما الـ view فتقرر أي بيانات تصل إلى الصفحة.

## قلها في العمل

- Which view serves this URL?
  - أي view تخدم هذا الرابط؟
- The view returns a 404 when the circle doesn't exist.
  - تُرجع الـ view الخطأ 404 عندما لا توجد الجمعية.
