---
id: digital-certificate
category: security
subcategory: data-protection
level: intermediate
related: [certificate-authority, ssl-tls, asymmetric-encryption]
aliases: ["ssl certificate", "tls certificate", "certificate", "self-signed certificate", "wildcard certificate", "chain of trust", "certificate chain"]
term: "Digital Certificate"
translation: "الشهادة الرقمية"
pronunciation: "ديجيتال سيرتيفيكيت"
keywords: ["شهادة SSL", "تثبت هوية الموقع", "تحتوي المفتاح العام", "موقّعة من جهة إصدار", "تنتهي وتحتاج تجديداً", "قفل HTTPS", "ssl certificate", "proves the site identity", "contains public key", "signed by a ca", "expires and must renew", "https padlock"]
---

## التعريف

الشهادة الرقمية (Digital Certificate) ملف موقّع يربط مفتاحاً عاماً بهوية، مثل اسم نطاق. تستخدمه المتصفحات للتأكد من أنها تتحدث إلى الموقع الحقيقي.

## أين تسمعه؟

في إعداد HTTPS (Let's Encrypt)، وتنبيهات الانتهاء، والشهادات الشاملة (Wildcard)، وأخطاء الشهادات في المتصفحات.

## أمثلة

- The certificate expired yesterday, so browsers show a warning.
  - انتهت الشهادة أمس لذا تعرض المتصفحات تحذيراً.
- A wildcard certificate covers every subdomain.
  - تغطي الشهادة الشاملة كل النطاقات الفرعية.
- The browser warned that the certificate of the admin site had expired.
  - حذّر المتصفح من أن شهادة موقع الإدارة قد انتهت صلاحيتها.

## خطأ شائع

تركها تنتهي. أتمت التجديد وأرسل تنبيهاً قبل التاريخ بوقت كافٍ.

## لا تخلطه مع

جهة إصدار الشهادات (CA) وهي المؤسسة التي تصدر الشهادات وتوقعها.

## قلها في العمل

- Renew the certificate before it expires.
  - جدّد الشهادة قبل انتهائها.
- The certificate chain is incomplete.
  - سلسلة الشهادة ناقصة.
