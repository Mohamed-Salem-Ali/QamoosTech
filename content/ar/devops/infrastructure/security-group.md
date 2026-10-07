---
id: security-group
category: devops
subcategory: infrastructure
level: intermediate
related: [firewall, subnet, least-privilege]
aliases: ["security groups"]
term: "Security Group"
translation: "مجموعة الأمان"
pronunciation: "سكيوريتي جروب"
keywords: ["جدار ناري لنسخة AWS", "قواعد واردة وصادرة", "السماح من مجموعة أخرى", "قواعد ذات حالة", "قواعد لكل نسخة", "المنفذ 5432 من التطبيق فقط", "aws instance firewall", "inbound outbound rules", "allow from another group", "stateful rules", "per instance rules", "port 5432 from app only"]
---

## التعريف

مجموعة الأمان (Security Group) جدار ناري سحابي يُربط بنسخة أو خدمة، بقواعد سماح للحركة الواردة والصادرة. وكل ما لم يُسمح به محجوب.

## أين تسمعه؟

في إعداد لوحات AWS وGCP وAzure، وملفات Terraform، وتصحيح "لماذا لا يصل تطبيقي إلى قاعدة البيانات؟".

## أمثلة

- The database security group only allows port 5432 from the app's group.
  - تسمح مجموعة أمان قاعدة البيانات بالمنفذ 5432 من مجموعة التطبيق فقط.
- Security groups are stateful, so replies are allowed automatically.
  - المجموعات ذات حالة لذا تُسمح الردود تلقائياً.

## خطأ شائع

استخدام `0.0.0.0/0` كمصدر لمنافذ الإدارة أو قاعدة البيانات. هذا يعرضها للإنترنت كله.

## لا تخلطه مع

قائمة ACL للشبكة وهي قواعد بلا حالة تنطبق على شبكة فرعية كاملة بدل نسخة واحدة.

## قلها في العمل

- Which security group is attached?
  - أي مجموعة أمان مرتبطة؟
- Reference the app's group instead of an IP range.
  - أشر إلى مجموعة التطبيق بدل نطاق IP.
