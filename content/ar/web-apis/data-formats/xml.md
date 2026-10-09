---
id: xml
category: web-apis
subcategory: data-formats
level: intermediate
related: [json, serialization, protocol-buffers, parsing]
aliases: ["extensible markup language"]
term: "XML"
translation: "لغة الترميز الموسّعة"
pronunciation: "إكس إم إل"
keywords: ["لغة الترميز الموسعة", "صيغة الوسوم والسمات", "مستند XML", "تحليل ملف XML", "extensible markup language", "tags and attributes format", "xml document", "soap messages use xml", "parse xml file"]
---

## التعريف

صيغة نصية تصف البيانات بوسوم متداخلة، مثل <order><id>7</id></order>. وهي مطوّلة، لكن لها مخططات، ولا تزال شائعة في الأنظمة المؤسسية والحكومية القديمة.

## أين تسمعه؟

في خدمات الويب من نوع SOAP، وملفات الإعداد، وخلاصات RSS، والتكاملات القديمة.

## أمثلة

- The partner sends invoices as XML files.
  - يرسل الشريك الفواتير كملفات XML.
- Parse the XML with a library instead of searching the text.
  - حلّل XML بمكتبة بدلاً من البحث في النص.
- The bank's export is an XML file with one order element per transaction.
  - تصدير البنك ملف XML فيه عنصر طلب لكل معاملة.

## خطأ شائع

تحليل XML بالتعابير النمطية. الصيغة متداخلة ولها قواعد، لذا يلزم محلل حقيقي.

## لا تخلطه مع

XML مطوّل ويعتمد على الوسوم، أما JSON فأقصر ويُترجم مباشرةً إلى كائنات في معظم اللغات.
