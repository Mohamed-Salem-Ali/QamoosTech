---
id: forward-proxy
category: devops
subcategory: infrastructure
level: intermediate
related: [reverse-proxy, firewall, cdn]
aliases: ["proxy server", "corporate proxy"]
term: "Forward Proxy"
translation: "الوكيل الأمامي"
pronunciation: "فورورد بروكسي"
keywords: ["يقف أمام العملاء", "يخفي IP العميل", "وكيل الشركة", "تصفية الحركة الصادرة", "شبيه بـ VPN", "أداة Squid", "sits in front of clients", "hides client ip", "corporate proxy", "filter outgoing traffic", "vpn like", "squid"]
---

## التعريف

الوكيل الأمامي (Forward Proxy) يقف أمام العملاء وينفذ الطلبات إلى الإنترنت نيابة عنهم. يمكنه إخفاء عناوينهم وتخزين الردود مؤقتاً وتصفية ما يزورونه.

## أين تسمعه؟

في شبكات الشركات، وإعدادات جمع بيانات الويب، ومراجعات الأمان، و"إعدادات الوكيل" في الأدوات ومديري الحزم.

## أمثلة

- All outgoing traffic goes through the company's forward proxy.
  - تمر كل الحركة الصادرة عبر الوكيل الأمامي للشركة.
- pip fails because the corporate proxy isn't configured.
  - يفشل pip لأن وكيل الشركة غير مضبوط.

## خطأ شائع

الخلط بينه وبين الوكيل العكسي. الأمامي يخدم العملاء والعكسي يخدم الخوادم.

## لا تخلطه مع

الوكيل العكسي الذي يقف أمام الخوادم ويخفيها عن العملاء.

## قلها في العمل

- Set the `HTTPS_PROXY` variable.
  - اضبط المتغير `HTTPS_PROXY`.
- Is this going through the proxy?
  - هل هذا يمر عبر الوكيل؟
