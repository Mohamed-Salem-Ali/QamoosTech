---
id: url-encoding
category: web-apis
subcategory: http-and-requests
level: beginner
related: [query-parameter, request-response]
term: "URL Encoding"
pronunciation: "يو-آر-إل إنكودينج"
translation: "ترميز الرابط"
keywords: ["ترميز الروابط للانتترنت","تحويل المسافات في الروابط","معالجة الرموز الخاصة في الرابط","ترميز الرابط في الويب","اصلاح الروابط المعطلة في المتصفح","يو آر إل إنكودينج","ترميز قيم الاستعلام للرابط","تشفير الرموز الخاصة في الurl","percent encoding special characters in links","convert spaces to 20 in urls","fix broken links with special characters","url escaping and encoding","encode query parameters for api","handle special symbols in web links","urle ncoding","percent encode string"]
---

## التعريف

ترميز الرابط هو عملية تحويل الرموز الخاصة إلى صيغة يمكن إرسالها بأمان عبر الإنترنت من خلال الرابط (URL). يتم استبدال الرموز غير الآمنة برمز `%` متبوعاً بقيمتها الست عشرية.

## أين تسمعه؟

عند بناء واجهات برمجة التطبيقات (APIs)، أو معالجة استعلامات البحث، أو إنشاء روابط ديناميكية في تطبيقات الويب.

## أمثلة

- The space character in a URL is encoded as `%20`.
  - يتم ترميز المسافة في الرابط لتصبح `%20`.
- You must encode special characters like `&` or `?` if they are part of a query parameter value.
  - يجب عليك ترميز الرموز الخاصة مثل `&` أو `?` إذا كانت جزءاً من قيمة معامل الاستعلام.
- The search term 'cafe & tea' becomes cafe%20%26%20tea in the URL.
  - تصبح عبارة البحث 'cafe & tea' في الرابط بالشكل cafe%20%26%20tea.

## خطأ شائع

الاعتقاد بأنه يمكنك استبدال الرموز يدوياً بدلاً من استخدام الدوال البرمجية القياسية، مما يؤدي غالباً إلى تعطل الروابط أو حدوث ثغرات أمنية مثل هجمات الحقن.

## لا تخلطه مع

يشير ترميز الرابط (URL encoding) إلى تحويل الرموز غير الآمنة إلى صيغة سادس عشرية، وغالباً ما يُخلط بينه وبين المصطلحات العامة الأخرى للتعامل مع الروابط.

## قلها في العمل

- Make sure you apply URL encoding to the search query before sending the request.
  - تأكد من تطبيق ترميز الرابط على استعلام البحث قبل إرسال الطلب.
- The API endpoint failed because the query parameters lacked proper URL encoding.
  - فشلت نقطة نهاية واجهة برمجة التطبيقات لأن معاملات الاستعلام كانت تفتقر إلى ترميز الرابط المناسب.
