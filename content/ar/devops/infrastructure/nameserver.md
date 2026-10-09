---
id: nameserver
category: devops
subcategory: infrastructure
level: intermediate
related: [dns, dns-record, domain-registrar]
aliases: ["ns record", "name server", "authoritative dns"]
term: "Nameserver"
translation: "الخادم الاسمي"
pronunciation: "نيم سيرفر"
keywords: ["خادم يجيب عن أسئلة DNS", "سجل NS", "تغيير الخوادم الاسمية عند المسجّل", "الخوادم الاسمية في Cloudflare", "DNS المعتمد", "من يدير السجلات", "server that answers dns questions", "ns record", "change nameservers at registrar", "cloudflare nameservers", "authoritative dns", "who manages the records"]
---

## التعريف

الخادم الاسمي (Nameserver) خادم يخزن سجلات DNS للنطاق ويجيب عن الأسئلة المتعلقة بها. والخوادم الاسمية للنطاق تحدد أين تُدار سجلاته.

## أين تسمعه؟

عند نقل DNS إلى Cloudflare أو AWS Route 53، وعندما لا تعمل السجلات التي أضفتها.

## أمثلة

- Point the domain's nameservers to Cloudflare at the registrar.
  - وجّه الخوادم الاسمية للنطاق إلى Cloudflare عند المسجّل.
- Records added at the old provider are ignored after the switch.
  - تُتجاهل السجلات المضافة عند المزود القديم بعد التحويل.
- Pointing the nameservers at the new host moved all the records at once.
  - أدّى توجيه خوادم الأسماء إلى المضيف الجديد إلى نقل كل السجلات دفعة واحدة.

## خطأ شائع

إضافة السجلات عند مزود ليس هو الخادم الاسمي الفعّال للنطاق. لن يكون لها أثر.

## لا تخلطه مع

المسجّل (Registrar) الشركة التي تشتري منها النطاق. وقد تكون هي من تشغّل خوادمك الاسمية أو لا.

## قلها في العمل

- Who hosts our nameservers?
  - من يستضيف خوادمنا الاسمية؟
- Update the NS records at the registrar.
  - حدّث سجلات NS عند المسجّل.
