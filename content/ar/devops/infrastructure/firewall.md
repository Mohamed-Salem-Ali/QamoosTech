---
id: firewall
category: devops
subcategory: infrastructure
level: beginner
related: [security-group, subnet, least-privilege]
aliases: ["iptables", "ufw", "network acl", "network acls"]
term: "Firewall"
translation: "الجدار الناري"
pronunciation: "فايروول"
keywords: ["يمنع الحركة غير المرغوبة", "قواعد سماح للمنافذ", "الوارد والصادر", "المنفذ مغلق", "أمن الشبكة", "الأداتان ufw وiptables", "blocks unwanted traffic", "allow rules for ports", "inbound and outbound", "port closed", "network security", "ufw iptables"]
---

## التعريف

الجدار الناري (Firewall) نظام أمان يسمح بحركة الشبكة أو يمنعها وفق قواعد، مثل المنافذ والعناوين المسموح لها بالاتصال.

## أين تسمعه؟

في إعداد الخوادم (`ufw`)، ومجموعات الأمان في السحابة، وحل مشكلات "رُفض الاتصال أو انتهت المهلة".

## أمثلة

- Open port 443 in the firewall and keep everything else closed.
  - افتح المنفذ 443 في الجدار الناري وأبقِ ما عداه مغلقاً.
- The request times out because the firewall drops it.
  - ينتهي الطلب بمهلة لأن الجدار الناري يُسقطه.
- The firewall blocks the database port from the public internet.
  - يمنع جدار الحماية منفذ قاعدة البيانات من الوصول من الإنترنت العام.

## خطأ شائع

فتح منفذ للإنترنت كله "للتجربة فقط" ونسيانه. اسمح فقط للمصادر التي تحتاجه.

## لا تخلطه مع

المصادقة التي تتحقق من هويتك. أما الجدار الناري فيفحص مصدر الحركة ووجهتها.

## قلها في العمل

- Is the port blocked by the firewall?
  - هل المنفذ محجوب بالجدار الناري؟
- Allow only our office IP on port 22.
  - اسمح لعنوان مكتبنا فقط على المنفذ 22.
