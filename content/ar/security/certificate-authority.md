---
id: certificate-authority
category: security
level: intermediate
related: [authentication-vs-authorization, encryption]
term: "Certificate Authority (CA)"
pronunciation: "سيرتيفيكيت أوثوريتي"
---

## التعريف

هي جهة موثوقة تقوم بالتحقق من هوية المواقع أو الخوادم وتصدر شهادات رقمية لتمكين الاتصال الآمن عبر بروتوكول HTTPS. تعمل هذه الجهة كمرجع أساسي للتأكد من أن المفتاح العام يعود فعلاً لنطاق (Domain) أو خادم معين.

## أين تسمعه؟

عند إعداد الخوادم، أو تنفيذ بروتوكولات التشفير SSL/TLS، أو عند حل مشاكل تحذيرات الأمان في المتصفحات.

## أمثلة

- The server requires a valid certificate signed by a trusted Certificate Authority to enable HTTPS.
  - يتطلب الخادم شهادة صالحة وموقعة من Certificate Authority موثوقة لتفعيل بروتوكول HTTPS.
- We need to renew our domain certificate before the Certificate Authority expires it.
  - نحتاج إلى تجديد شهادة النطاق الخاصة بنا قبل انتهاء صلاحيتها.

## خطأ شائع

الاعتقاد بأن الشهادات الموقعة ذاتياً (Self-signed certificates) تعادل الشهادات الصادرة من جهة موثوقة؛ فالشهادات الموقعة ذاتياً لا يتم التحقق منها من قبل طرف ثالث، مما يسبب ظهور تحذيرات أمنية للمستخدمين عند زيارة الموقع.
