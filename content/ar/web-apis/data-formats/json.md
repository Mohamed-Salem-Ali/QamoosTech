---
id: json
category: web-apis
subcategory: data-formats
level: beginner
related: [json-schema, payload, restful-api, ndjson, markdown, parsing, base64, msgpack]
tags: [python, javascript]
aliases: ["javascript object notation", "json body"]
term: "JSON"
translation: "صيغة JSON"
pronunciation: "جيسون"
keywords: ["صيغة نصية للبيانات", "جسم استجابة الـ API", "أزواج المفتاح والقيمة", "الأقواس المعقوفة والمصفوفات", "قراءة JSON وكتابته", "ترميز كائنات جافاسكربت", "text format for data", "api response body", "key value pairs", "curly braces and arrays", "json parse and stringify", "javascript object notation"]
---

## التعريف

صيغة JSON (ترميز كائنات جافاسكربت) صيغة نصية خفيفة للبيانات المنظمة، مبنية من كائنات (`{}`) ومصفوفات (`[]`) ونصوص وأرقام وقيم منطقية و`null`. تستخدمها أغلب واجهات الـ API.

## أين تسمعه؟

في توثيق الـ API، وأجسام الطلبات والاستجابات، وملفات الإعداد، والسجلات.

## أمثلة

- The API returns JSON with the member's name and balance.
  - تعيد الـ API ملف JSON فيه اسم العضو ورصيده.
- Parse the JSON body, then validate the fields.
  - حلّل جسم JSON ثم تحقق من الحقول.
- The response is JSON, so the app parses it into objects before it shows the prices.
  - الرد بصيغة JSON، لذلك يحوّله التطبيق إلى كائنات قبل أن يعرض الأسعار.

## خطأ شائع

الظن بأن JSON كائن جافاسكربت. هو نص فقط؛ ويحتاج علامات اقتباس مزدوجة صارمة ولا يقبل تعليقات أو فاصلة أخيرة.

## لا تخلطه مع

القاموس (dict) في بايثون وهو كائن حي في الذاكرة. أما JSON فهو النص الذي تحوّله إليه عند الإرسال.

## قلها في العمل

- Send it as JSON with the right content type.
  - أرسله بصيغة JSON مع نوع المحتوى الصحيح.
- The JSON is invalid; there's a trailing comma.
  - ملف JSON غير صالح؛ فيه فاصلة أخيرة.
