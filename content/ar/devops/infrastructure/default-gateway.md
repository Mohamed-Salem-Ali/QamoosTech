---
id: default-gateway
category: devops
subcategory: infrastructure
level: intermediate
related: [routing-table, subnet, dns]
aliases: ["gateway", "internet gateway", "nat gateway"]
term: "Default Gateway"
translation: "البوابة الافتراضية"
pronunciation: "ديفولت جيتواي"
keywords: ["الموجّه الذي يقود للخارج", "وجهة الحركة غير المعروفة", "مخرج الشبكة المحلية", "بوابة الإنترنت وبوابة NAT", "القفزة الأولى", "مغادرة الشبكة الفرعية", "router that leads out", "where unknown traffic goes", "exit of the local network", "internet gateway nat gateway", "first hop", "leave the subnet"]
---

## التعريف

البوابة الافتراضية (Default Gateway) هي الموجّه الذي يرسل إليه الجهاز الحركة حين تكون الوجهة خارج شبكته. وهي المخرج إلى بقية العالم.

## أين تسمعه؟

في إعداد شبكات البيت والمكتب، وشبكات السحابة، وحل مشكلة "أصل للمحلي ولا أصل للإنترنت".

## أمثلة

- The laptop can reach the printer but not the internet; check the default gateway.
  - يصل الحاسوب إلى الطابعة ولا يصل إلى الإنترنت؛ افحص البوابة الافتراضية.
- In AWS, the internet gateway acts as the way out for public subnets.
  - في AWS تعمل بوابة الإنترنت كمخرج للشبكات الفرعية العامة.

## خطأ شائع

الظن بأن البوابة هي خادم DNS. البوابة توجّه الحزم وDNS يحوّل الأسماء إلى IP.

## لا تخلطه مع

الوكيل العكسي أو بوابة الـ API اللذان يعالجان حركة التطبيق الواردة لا مخرج الشبكة.

## قلها في العمل

- What's the default gateway?
  - ما البوابة الافتراضية؟
- Without a gateway nothing leaves the subnet.
  - بدون بوابة لا شيء يغادر الشبكة الفرعية.
