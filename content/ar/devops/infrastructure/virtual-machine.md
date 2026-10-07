---
id: virtual-machine
category: devops
subcategory: infrastructure
level: beginner
related: [containerization, virtual-memory, cgroups]
aliases: ["vm", "virtualization", "hypervisor"]
term: "Virtual Machine"
translation: "الجهاز الافتراضي"
pronunciation: "فيرتشوال مشين"
keywords: ["حاسوب داخل حاسوب", "جهاز افتراضي بنظام تشغيله", "المشرف الافتراضي", "نسخة EC2", "عزل كامل", "المحاكاة الافتراضية", "computer inside a computer", "vm with its own os", "hypervisor", "ec2 instance", "full isolation", "virtualization"]
---

## التعريف

الجهاز الافتراضي (Virtual Machine) حاسوب مصنوع بالبرمجيات يشغّل نظام تشغيل كاملاً خاصاً به فوق عتاد حقيقي، ويستخدم مشرفاً افتراضياً (Hypervisor) لتقاسم العتاد بين عدة أجهزة افتراضية.

## أين تسمعه؟

في الخوادم السحابية (EC2 وAzure VMs)، وVirtualBox وVMware، وقرارات "جهاز افتراضي أم حاوية؟".

## أمثلة

- We rent a VM in the cloud and install Linux on it.
  - نستأجر جهازاً افتراضياً في السحابة ونثبّت عليه لينكس.
- A VM boots in a minute; a container starts in a second.
  - يقلع الجهاز الافتراضي في دقيقة وتبدأ الحاوية في ثانية.

## خطأ شائع

الظن بأن الحاوية جهاز افتراضي صغير. الحاوية تشارك نواة المضيف أما الجهاز الافتراضي فيشغّل نواته الخاصة.

## لا تخلطه مع

الحاوية الأخف والأسرع بدءاً وتشارك نواة المضيف بعزل أضعف.

## قلها في العمل

- Should this run on a VM or in a container?
  - هل يعمل هذا على جهاز افتراضي أم في حاوية؟
- Snapshot the VM before upgrading.
  - التقط لقطة للجهاز الافتراضي قبل الترقية.
