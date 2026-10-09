---
id: subnet
category: devops
subcategory: infrastructure
level: intermediate
related: [routing-table, default-gateway, security-group]
aliases: ["subnet mask", "cidr", "subnets", "vpc"]
term: "Subnet"
translation: "الشبكة الفرعية"
pronunciation: "سَبنت"
keywords: ["جزء من شبكة", "الترميز CIDR مثل 10.0.1.0/24", "شبكات فرعية عامة وخاصة", "قناع الشبكة", "تقسيم الـ VPC", "نطاق عناوين IP", "part of a network", "cidr 10.0.1.0/24", "public and private subnets", "subnet mask", "vpc subdivision", "range of ip addresses"]
---

## التعريف

الشبكة الفرعية (Subnet) قسم أصغر من شبكة أكبر له نطاق عناوين IP خاص به، يُكتب بصيغة CIDR مثل `10.0.1.0/24`. ويحدد قناع الشبكة (Subnet Mask) كم من العنوان يعرّف الشبكة.

## أين تسمعه؟

في إعداد AWS VPC، وشبكات Kubernetes وDocker، وقواعد الجدار الناري المبنية على نطاقات IP.

## أمثلة

- Put the database in a private subnet with no internet route.
  - ضع قاعدة البيانات في شبكة فرعية خاصة بلا مسار إلى الإنترنت.
- A /24 subnet has 256 addresses.
  - الشبكة الفرعية /24 فيها 256 عنواناً.
- The web servers sit in a public subnet, and the database sits in a private one.
  - تقع خوادم الويب في شبكة فرعية عامة، وتقع قاعدة البيانات في شبكة فرعية خاصة.

## خطأ شائع

اختيار نطاقات تتداخل مع شبكة أخرى ستربطها لاحقاً. فينكسر التوجيه بينهما.

## لا تخلطه مع

الـ VPC وهو الشبكة الخاصة كاملة. والشبكات الفرعية شرائح داخلها.

## قلها في العمل

- Which subnet is this instance in?
  - في أي شبكة فرعية هذه النسخة؟
- Allow the whole `10.0.0.0/16` range.
  - اسمح بكامل النطاق `10.0.0.0/16`.
