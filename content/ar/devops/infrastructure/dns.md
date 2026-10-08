---
id: dns
category: devops
subcategory: infrastructure
level: beginner
related: [dns-record, nameserver, ttl, dnssec]
aliases: ["domain name system", "dns lookup", "dns propagation", "name resolution"]
term: "DNS"
translation: "نظام أسماء النطاقات"
pronunciation: "دي إن إس"
keywords: ["تحويل اسم النطاق إلى عنوان IP", "دليل هاتف الإنترنت", "لماذا لا يفتح النطاق", "انتشار DNS", "البحث عن اسم مضيف", "الأمران nslookup وdig", "domain name to ip address", "phone book of the internet", "why a domain does not load", "dns propagation", "lookup a hostname", "nslookup dig"]
---

## التعريف

نظام أسماء النطاقات (DNS) هو دليل هاتف الإنترنت: يحوّل اسماً مثل `example.com` إلى عنوان IP للخادم الذي يستضيفه.

## أين تسمعه؟

عند ربط نطاق مخصص بموقع، وعندما "يتعطل الموقع عند بعض الناس"، وفي مقررات الشبكات والسحابة.

## أمثلة

- After changing the DNS record it can take hours to propagate.
  - بعد تغيير سجل DNS قد يستغرق الانتشار ساعات.
- Check with `dig example.com` what the name resolves to.
  - تحقق بـ `dig example.com` إلى ماذا يُحلّ الاسم.
- After we moved the domain, the old IP address still answered until DNS caught up.
  - بعد نقل النطاق، ظل عنوان IP القديم يستجيب إلى أن تحدّث نظام DNS.

## خطأ شائع

لوم الخادم بينما المشكلة في DNS. إن أشار الاسم إلى IP خاطئ فلا يصل الطلب إلى الخادم أصلاً.

## لا تخلطه مع

عنوان IP وهو الموقع الرقمي الفعلي. أما DNS فالنظام الذي يجده من الاسم.

## قلها في العمل

- Is it DNS?
  - هل هي مشكلة DNS؟
- Flush your DNS cache and try again.
  - امسح ذاكرة DNS المؤقتة وحاول ثانية.
