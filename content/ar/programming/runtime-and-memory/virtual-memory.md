---
id: virtual-memory
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [page-fault, garbage-collection, memory-leak]
aliases: ["swap", "swapping", "address space", "rss"]
term: "Virtual Memory"
translation: "الذاكرة الافتراضية"
pronunciation: "فيرتشوال ميموري"
keywords: ["لكل عملية فضاء عناوينها", "التبديل إلى القرص", "ذاكرة أكثر من الرام", "ترجمة العناوين", "عزل البرامج عن بعضها", "جدول الصفحات", "each process has its own address space", "swap to disk", "more memory than ram", "address translation", "isolation between programs", "page table"]
---

## التعريف

الذاكرة الافتراضية (Virtual Memory) تعطي كل عملية رؤيتها الخاصة للذاكرة. يربط نظام التشغيل تلك العناوين الافتراضية بالذاكرة الحقيقية ويمكنه نقل الأجزاء الأقل استخداماً إلى القرص، فتستخدم البرامج ذاكرة أكبر مما يملكه الجهاز.

## أين تسمعه؟

في مقررات نظم التشغيل، ورسوم استخدام الذاكرة (RSS مقابل الحجم الافتراضي)، وحدود ذاكرة الحاويات، وتصحيح الأداء عندما يبدأ الجهاز بالتبديل.

## أمثلة

- The process shows 4 GB of virtual memory but uses 300 MB of RAM.
  - تعرض العملية 4 جيجابايت افتراضية وتستخدم 300 ميجابايت من الرام.
- The server is swapping, so everything slowed down.
  - الخادم يبدّل إلى القرص لذلك تباطأ كل شيء.

## خطأ شائع

قراءة الحجم الافتراضي كأنه استخدام حقيقي. انظر إلى الذاكرة المقيمة (RSS) لترى ما في الرام فعلاً.

## لا تخلطه مع

الذاكرة الفعلية (RAM) الشرائح الحقيقية. أما الافتراضية فطبقة تربط عناوين البرنامج بها وبالقرص.

## قلها في العمل

- Check the RSS, not the virtual size.
  - افحص الـ RSS وليس الحجم الافتراضي.
- Swap usage is climbing.
  - استخدام الـ swap يرتفع.
