---
id: template
category: web-apis
subcategory: routing-and-views
level: beginner
related: [view, web-framework, url-reversing]
tags: [django, python]
aliases: ["html template", "template engine", "template inheritance"]
term: "Template"
translation: "القالب"
pronunciation: "تيمبليت"
keywords: ["‏HTML بمواضع فارغة", "الخادم يملأ البيانات", "قوالب Jinja وDjango", "حلقات وشروط في HTML", "عرض صفحة", "تخطيط أساسي وكتل", "html with placeholders", "server fills in the data", "jinja or django templates", "loops and conditions in html", "render a page", "base layout and blocks"]
---

## التعريف

القالب (Template) ملف HTML فيه مواضع فارغة ومنطق بسيط (حلقات وشروط) يملؤها الخادم بالبيانات لينتج الصفحة النهائية.

## أين تسمعه؟

في التطبيقات التي يرسمها الخادم (Django وFlask وRails)، وتوليد رسائل البريد، وعندما تشترك الصفحات في تخطيط أساسي.

## أمثلة

- The template loops over the payments and prints a row for each.
  - يمر القالب على الدفعات ويطبع صفاً لكل واحدة.
- Every page extends the base template and fills in its block.
  - كل صفحة ترث القالب الأساسي وتملأ كتلتها.
- The template shows the price and the title of each product in the list.
  - يعرض القالب السعر والعنوان لكل منتج في القائمة.

## خطأ شائع

وضع منطق ثقيل أو استعلامات قاعدة بيانات في القالب. جهّز البيانات في الـ view وأبقِ القالب للعرض فقط.

## لا تخلطه مع

مكوّن React الذي يعمل في المتصفح. أما القالب فيُملأ على الخادم قبل إرسال الصفحة.

## قلها في العمل

- Pass the list to the template as context.
  - مرّر القائمة إلى القالب كسياق.
- Escape user text in the template to avoid XSS.
  - اهرب نص المستخدم في القالب لتجنب XSS.
