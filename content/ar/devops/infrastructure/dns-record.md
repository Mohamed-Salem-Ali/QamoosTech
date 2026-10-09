---
id: dns-record
category: devops
subcategory: infrastructure
level: intermediate
related: [dns, nameserver, ttl]
aliases: ["cname", "cname record", "a record", "aaaa record", "mx record", "txt record", "dns records"]
term: "DNS Record"
translation: "سجل DNS"
pronunciation: "دي إن إس ريكورد"
keywords: ["سجلات A وCNAME وMX وTXT", "يربط الاسم بقيمة", "توجيه النطاق إلى الخادم", "سجلات البريد SPF وDKIM", "سجل AAAA لـ IPv6", "إضافة سجل من لوحة التحكم", "a record cname mx txt", "maps name to value", "point domain to server", "email records spf dkim", "aaaa ipv6 record", "add a record in the dashboard"]
---

## التعريف

سجل DNS (DNS Record) مدخل واحد في إعدادات DNS لنطاق. من أنواعه الشائعة: `A` (اسم إلى IPv4) و`AAAA` (اسم إلى IPv6) و`CNAME` (اسم إلى اسم آخر) و`MX` (خوادم البريد) و`TXT` (نص حر مثل التحقق).

## أين تسمعه؟

عند توجيه نطاق إلى Vercel أو Render أو AWS، وتوثيق نطاق، وإعداد البريد.

## أمثلة

- Add a CNAME for `www` pointing to the hosting provider.
  - أضف سجل CNAME لـ `www` يشير إلى مزود الاستضافة.
- The root domain needs an A record, not a CNAME.
  - يحتاج النطاق الجذري إلى سجل A وليس CNAME.
- After we added the MX record, the company's email started arriving at the new server.
  - بعد إضافة سجل MX، بدأت رسائل الشركة تصل إلى الخادم الجديد.

## خطأ شائع

وضع CNAME على النطاق الجذري. أغلب مزودي DNS لا يسمحون به؛ استخدم سجل A أو ALIAS.

## لا تخلطه مع

الخادم الاسمي (Nameserver) الذي يحمل سجلاتك ويجيب عنها.

## قلها في العمل

- Which record type do I need?
  - أي نوع سجل أحتاج؟
- Add the TXT record to verify the domain.
  - أضف سجل TXT لتوثيق النطاق.
