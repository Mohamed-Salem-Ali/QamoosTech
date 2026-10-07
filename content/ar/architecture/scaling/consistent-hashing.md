---
id: consistent-hashing
category: architecture
subcategory: scaling
level: intermediate
related: [sharding, load-balancer, hot-shard]
aliases: ["hash ring", "virtual nodes"]
term: "Consistent Hashing"
translation: "التجزئة المتسقة"
pronunciation: "كونسستنت هاشينج"
keywords: ["إضافة خادم ونقل مفاتيح قليلة", "حلقة التجزئة", "توزيع المفاتيح على العقد", "نمو عنقود الذاكرة المؤقتة", "تجنب إعادة خلط كل شيء", "العقد الافتراضية", "add a server move few keys", "hash ring", "spread keys across nodes", "cache cluster growth", "avoid reshuffling everything", "virtual nodes"]
---

## التعريف

التجزئة المتسقة (Consistent Hashing) طريقة لتوزيع المفاتيح على الخوادم بحيث تنقل إضافة خادم أو إزالته جزءاً صغيراً فقط من المفاتيح، بدلاً من إعادة خلط معظمها.

## أين تسمعه؟

في عناقيد الذاكرة المؤقتة، وقواعد البيانات الموزعة، وموزعات الأحمال، ومقابلات تصميم الأنظمة.

## أمثلة

- With consistent hashing, adding a cache node only moves about 1/N of the keys.
  - مع التجزئة المتسقة تنقل إضافة عقدة تخزين مؤقت نحو 1/N من المفاتيح فقط.
- Virtual nodes even out the load between servers.
  - العقد الافتراضية توازن الحمل بين الخوادم.

## خطأ شائع

استخدام `hash(key) % N` العادية. عندما يتغير N يُعاد تعيين كل المفاتيح تقريباً إلى خوادم مختلفة.

## لا تخلطه مع

التجزئة الأفقية للبيانات (Sharding) وهي توزيع البيانات على خوادم. والتجزئة المتسقة طريقة لتقرير أي جزء يذهب إليه المفتاح.

## قلها في العمل

- Use consistent hashing so scaling doesn't flush the cache.
  - استخدم التجزئة المتسقة حتى لا يفرّغ التوسع الذاكرة المؤقتة.
- How many virtual nodes per server?
  - كم عقدة افتراضية لكل خادم؟
