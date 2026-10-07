---
id: path-converter
category: web-apis
subcategory: routing-and-views
level: intermediate
related: [url-routing, view, query-parameter]
tags: [django, python]
aliases: ["path parameter", "route parameter", "url converter"]
term: "Path Converter"
translation: "محوّل المسار"
pronunciation: "باث كونفرتر"
keywords: ["معرّف رقمي في الرابط", "التقاط جزء من المسار", "محوّلات slug وuuid", "نوع معامل الرابط", "تحويل معامل المسار", "معامل المسار", "int id in the url", "capture part of the path", "slug and uuid converters", "type of url parameter", "route parameter conversion", "path parameter"]
---

## التعريف

محوّل المسار (Path Converter) هو جزء من نمط الرابط يلتقط قطعة من المسار ويحوّلها إلى نوع، مثل `<int:id>` الذي يعطي الـ view عدداً صحيحاً حقيقياً.

## أين تسمعه؟

في أنماط روابط Django، ومعاملات مسار FastAPI، وتوثيق المسارات مثل `/circles/<int:id>/`.

## أمثلة

- Use `<int:id>` so a non-number gives a 404 before the view runs.
  - استخدم `<int:id>` ليعطي غير الرقم 404 قبل أن تعمل الـ view.
- The `slug` converter allows letters, numbers and hyphens.
  - يسمح محوّل `slug` بالحروف والأرقام والشرطات.

## خطأ شائع

استخدام نص عادي والتحويل داخل الـ view. المحوّل يتحقق أبكر ويبقي الـ views نظيفة.

## لا تخلطه مع

معامل الاستعلام (`?page=2`) الذي يأتي بعد المسار وهو اختياري. أما محوّل المسار فجزء من المسار نفسه.

## قلها في العمل

- Which converter handles the id here?
  - أي محوّل يعالج المعرّف هنا؟
- Add a custom converter for the date format.
  - أضف محوّلاً مخصصاً لصيغة التاريخ.
