---
id: base64
category: web-apis
subcategory: data-formats
level: beginner
related: [json, utf-8, protocol-buffers]
aliases: ["base 64", "base64 encoding"]
term: "Base64"
translation: "ترميز Base64"
pronunciation: "بيس ستي فور"
keywords: ["encode binary as text", "base64 string in json", "decode base64 to file", "data url for an image", "base64 is not encryption", "larger payload than raw bytes", "ترميز Base64", "تحويل البيانات الثنائية إلى نص", "فك ترميز نص Base64", "صورة مضمنة كنص", "Base64 ليس تشفيراً", "حجم أكبر من البيانات الأصلية"]
---

## التعريف

طريقة لكتابة البيانات الثنائية باستخدام الحروف والأرقام العادية والرمزين + و / فقط. كل ثلاثة بايتات تصبح أربعة محارف، لذلك يكبر النص بنحو الثلث. وهي تتيح نقل الملفات داخل JSON أو HTML أو البريد الإلكتروني.

## أين تسمعه؟

في عناوين البيانات (data URLs)، وفي واجهات JSON التي تحمل ملفات، وفي رموز المصادقة، وفي مرفقات البريد الإلكتروني.

## أمثلة

- The API sends the uploaded image as a base64 string inside the JSON body.
  - ترسل الواجهة البرمجية الصورة المرفوعة كنص Base64 داخل جسم JSON.
- Decode the base64 string before saving it to disk.
  - فكّ ترميز نص Base64 قبل حفظه على القرص.
- Base64 makes a payload about a third larger, so avoid it for large files.
  - يجعل Base64 الحمولة أكبر بنحو الثلث، لذا تجنّبه للملفات الكبيرة.

## خطأ شائع

اعتبار Base64 حماية. فهو لا يخفي شيئاً، ويستطيع أي أحد إعادته إلى البايتات الأصلية بخطوة واحدة.

## لا تخلطه مع

التشفير يخلط البيانات بمفتاح، فلا يقرؤها إلا من يملكه. أما Base64 فيغيّر فقط طريقة كتابة البايتات، ولا يحتاج إلى مفتاح أصلاً.

## قلها في العمل

- The file comes in as base64, so decode it before you save it.
  - يصل الملف بصيغة Base64، فافكّ ترميزه قبل حفظه.
- Can we upload the file directly instead of putting base64 inside the JSON?
  - هل نرفع الملف مباشرة بدل وضع Base64 داخل JSON؟
