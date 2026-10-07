---
id: set
category: programming
subcategory: data-structures
level: beginner
related: [array, dictionary, tuple]
tags: [python]
aliases: ["hash set", "unique collection"]
term: "Set"
translation: "المجموعة"
pronunciation: "سِت"
keywords: ["مجموعة قيم فريدة", "إزالة التكرار من قائمة", "التحقق السريع من وجود عنصر", "الاتحاد والتقاطع بين المجموعات", "عمليات المجموعات في بايثون", "عناصر فريدة بلا ترتيب", "الفرق بين قائمتين", "اختبار الانتماء", "collection of unique values", "remove duplicates from a list", "check if item exists fast", "set union and intersection", "python set operations", "unordered unique items", "difference between two lists", "membership test"]
---

## التعريف

المجموعة (Set) تجميع غير مرتب من القيم الفريدة. وهي سريعة في التحقق من وجود عنصر وفي إزالة التكرار.

## أين تسمعه؟

في كود بايثون الذي يزيل التكرار، أو يقارن مجموعتين من العناصر، أو يتحقق من الانتماء مرات كثيرة.

## أمثلة

- Convert the list to a set to remove the duplicate emails.
  - حوّل القائمة إلى set لإزالة عناوين البريد المكررة.
- The intersection of the two sets gives the users who are in both groups.
  - تقاطع المجموعتين يعطي المستخدمين الموجودين في المجموعتين.

## خطأ شائع

توقع أن تحافظ المجموعة على الترتيب أو تقبل التكرار. هي لا تفعل أياً منهما، و`{}` تنشئ قاموساً فارغاً وليس مجموعة فارغة.

## لا تخلطه مع

القائمة (List) تحافظ على الترتيب وتسمح بالتكرار. استخدم set عندما تكون الفرادة والبحث السريع أهم.

## قلها في العمل

- Put the ids in a set so the membership check is instant.
  - ضع المعرّفات في set ليكون التحقق من الانتماء فورياً.
- A set will drop the duplicates for us.
  - الـ set سيحذف التكرارات عنا.
