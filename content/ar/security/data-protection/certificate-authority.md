---
id: certificate-authority
category: security
subcategory: data-protection
level: intermediate
related: [authentication-vs-authorization, encryption]
term: "Certificate Authority (CA)"
translation: "جهة إصدار الشهادات"
pronunciation: "سيرتيفيكيت أوثوريتي"
keywords: ["جهة إصدار الشهادات الرقمية","الجهة الموثوقة لتأمين المواقع","إصدار شهادات ssl","مزود شهادات التشفير","التحقق من هوية المواقع","سيرتيفيكيت أوثوريتي","الجهة المسؤولة عن التوقيع الرقمي","مرجع الثقة للشهادات","جهة التصديق الرقمي","إصدار شهادات https","ssl certificate issuer","digital identity verifier","trusted security provider","how to get https certificate","root of trust entity","website security signer","who issues ssl certificates","public key infrastructure provider","ca certificate authority","ssl signing authority"]
---

## التعريف

هي جهة موثوقة تقوم بالتحقق من هوية المواقع أو الخوادم وتصدر شهادات رقمية لتمكين الاتصال الآمن عبر بروتوكول HTTPS. تعمل هذه الجهة كمرجع أساسي للتأكد من أن المفتاح العام يعود فعلاً لنطاق (Domain) أو خادم معين.

## أين تسمعه؟

عند إعداد الخوادم، أو تنفيذ بروتوكولات التشفير SSL/TLS، أو عند حل مشاكل تحذيرات الأمان في المتصفحات.

## أمثلة

- The server requires a valid certificate signed by a trusted Certificate Authority to enable HTTPS.
  - يتطلب الخادم شهادة صالحة وموقعة من Certificate Authority موثوقة لتفعيل بروتوكول HTTPS.
- We need to renew our domain certificate before the Certificate Authority expires it.
  - نحتاج إلى تجديد شهادة النطاق الخاصة بنا قبل أن تقوم الـ Certificate Authority بإلغاء صلاحيتها.

## خطأ شائع

الاعتقاد بأن الشهادات الموقعة ذاتياً (Self-signed certificates) تعادل الشهادات الصادرة من جهة موثوقة؛ فالشهادات الموقعة ذاتياً لا يتم التحقق منها من قبل طرف ثالث، مما يسبب ظهور تحذيرات أمنية للمستخدمين عند زيارة الموقع.

## لا تخلطه مع

الخلط بين Certificate Authority و Registration Authority؛ تقوم الـ Certificate Authority بإصدار وتوقيع الشهادات الرقمية فعلياً، بينما تكتفي الـ Registration Authority بالتحقق من هوية الجهات التي تطلب هذه الشهادات.

## قلها في العمل

- We should check if our Certificate Authority supports the new wildcard certificate we need for the staging environment.
  - يجب أن نتحقق مما إذا كانت الـ Certificate Authority الخاصة بنا تدعم شهادة النطاق العام (wildcard) التي نحتاجها لبيئة الاختبار.
- Please ensure that the server is configured to trust the root certificate provided by our Certificate Authority to avoid connection errors.
  - يرجى التأكد من إعداد الخادم ليكون موثوقاً بشهادة الجذر (root certificate) المقدمة من الـ Certificate Authority الخاصة بنا لتجنب أخطاء الاتصال.
