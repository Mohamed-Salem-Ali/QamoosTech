---
id: hosted-zone
category: devops
subcategory: infrastructure
level: intermediate
related: [dns-record, nameserver, dns]
aliases: ["dns zone", "zone file", "route 53 zone"]
term: "Hosted Zone"
translation: "المنطقة المستضافة"
pronunciation: "هوستد زون"
keywords: ["حاوية لسجلات DNS", "منطقة Route 53", "منطقة لكل نطاق", "منطقة عامة وخاصة", "ملف المنطقة", "تفويض نطاق فرعي", "container for dns records", "route 53 zone", "one zone per domain", "public and private zone", "zone file", "delegate a subdomain"]
---

## التعريف

المنطقة المستضافة (Hosted Zone) حاوية لكل سجلات DNS لنطاق واحد (أو نطاق فرعي) في خدمة DNS مثل AWS Route 53 أو Cloudflare.

## أين تسمعه؟

في لوحات AWS Route 53، وتعريفات DNS في Terraform، وعمليات ترحيل النطاقات.

## أمثلة

- Create a hosted zone for `example.com`, then copy its nameservers to the registrar.
  - أنشئ منطقة مستضافة لـ `example.com` ثم انسخ خوادمها الاسمية إلى المسجّل.
- A private hosted zone resolves names only inside the VPC.
  - تحلّ المنطقة الخاصة الأسماء داخل الـ VPC فقط.
- The hosted zone for the domain lists the mail server and the website records.
  - تسرد المنطقة المستضافة للنطاق سجلات خادم البريد والموقع.

## خطأ شائع

إنشاء منطقتين للنطاق نفسه وتعديل الخاطئة. فقط المنطقة التي يشير إليها المسجّل فعّالة.

## لا تخلطه مع

سجل DNS وهو مدخل واحد. أما المنطقة فتحمل كل المدخلات.

## قلها في العمل

- Which hosted zone has the live records?
  - أي منطقة مستضافة فيها السجلات الفعّالة؟
- Add it to the zone, not the registrar.
  - أضفه إلى المنطقة وليس المسجّل.
