---
id: routing-table
category: devops
subcategory: infrastructure
level: intermediate
related: [subnet, default-gateway, firewall]
aliases: ["route table", "routes"]
term: "Routing Table"
translation: "جدول التوجيه"
pronunciation: "راوتينج تيبل"
keywords: ["قواعد وجهة الحزم", "من الوجهة إلى القفزة التالية", "مسار إلى الإنترنت", "المسار الافتراضي 0.0.0.0/0", "ربطه بشبكة فرعية", "مسارات VPC", "rules for where packets go", "destination to next hop", "route to the internet", "0.0.0.0/0", "attach to a subnet", "vpc routes"]
---

## التعريف

جدول التوجيه (Routing Table) مجموعة قواعد تخبر الشبكة أين ترسل الحركة: لكل نطاق وجهة يحدد القفزة التالية، مثل بوابة الإنترنت.

## أين تسمعه؟

في إعداد AWS VPC والشبكات المحلية، وعندما "لا يستطيع الخادم الوصول إلى الإنترنت".

## أمثلة

- The public subnet's route table sends `0.0.0.0/0` to the internet gateway.
  - يرسل جدول مسارات الشبكة العامة `0.0.0.0/0` إلى بوابة الإنترنت.
- No route means no connection.
  - لا مسار يعني لا اتصال.
- The routing table sends traffic for the private subnet through the NAT gateway.
  - يرسل جدول التوجيه حركة الشبكة الخاصة عبر بوابة NAT.

## خطأ شائع

نسيان ربط جدول المسارات بالشبكة الفرعية. القاعدة موجودة لكن لا شيء يستخدمها.

## لا تخلطه مع

قاعدة الجدار الناري التي تقرر ما هو مسموح. أما المسار فيقرر وجهة الحركة.

## قلها في العمل

- Check the route table for that subnet.
  - افحص جدول المسارات لتلك الشبكة الفرعية.
- Add a route to the NAT gateway.
  - أضف مساراً إلى بوابة NAT.
