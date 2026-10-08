---
id: wildcard-import
category: programming
subcategory: modules-and-libraries
level: intermediate
related: [import, module, namespace, circular-import]
tags: [python]
aliases: ["star import"]
term: "Wildcard Import"
translation: "الاستيراد بالنجمة"
pronunciation: "وايلدكارد إمبورت"
keywords: ["from module import star", "import everything from a module", "star import in python", "name clashes from imports", "linter warns about import star", "unclear where a name comes from", "الاستيراد بالنجمة", "استيراد كل شيء من وحدة", "استيراد بالرمز *", "تعارض أسماء الاستيراد", "المحلل يحذّر من الاستيراد الشامل", "لا يُعرف مصدر الاسم"]
---

## التعريف

استيراد يجلب كل اسم عام من وحدة إلى الملف الحالي، ويُكتب هكذا: from module import *. هو سريع الكتابة، لكنه يُخفي مصدر كل اسم.

## أين تسمعه؟

في السكربتات السريعة، وفي الشيفرة القديمة، وفي تحذيرات أدوات الفحص.

## أمثلة

- from math import * brings sqrt, pi and every other public name into the file.
  - يجلب from math import * الدالة sqrt وpi وكل اسم عام آخر إلى الملف.
- Import only the names you use: from math import sqrt, pi.
  - استورد الأسماء التي تستخدمها فقط: from math import sqrt, pi.
- Linters warn about it, because a later import can silently replace an earlier name.
  - تحذّر أدوات الفحص منه، لأن استيراداً لاحقاً قد يستبدل اسماً سابقاً دون أي تنبيه.

## خطأ شائع

استخدامه في شيفرة مشتركة. قد تُصدّر وحدتان الاسم نفسه، فيفوز الاسم الذي استُورد أخيراً دون أي خطأ.

## لا تخلطه مع

الاستيراد العادي مثل import math يحفظ الأسماء تحت اسم الوحدة، فتعرف مصدر sqrt من math.sqrt. أما الاستيراد بالنجمة فيزيل هذه البادئة.

## قلها في العمل

- Can we swap the star import for explicit names so the linter stays quiet?
  - هل نستبدل الاستيراد بالنجمة بأسماء صريحة حتى يهدأ المحلل؟
- Star imports make review hard: which module does this sqrt come from?
  - تجعل الاستيرادات بالنجمة المراجعة صعبة: من أي وحدة يأتي هذا sqrt؟
