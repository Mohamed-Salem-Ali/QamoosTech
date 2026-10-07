---
id: dictionary
category: programming
subcategory: data-structures
level: beginner
related: [array, tuple, database]
tags: [python]
aliases: ["dict", "hash map", "hashmap", "key-value pair", "key value store", "associative array"]
term: "Dictionary"
translation: "القاموس"
pronunciation: "ديكشنري"
keywords: ["تخزين البيانات بمفتاح", "أزواج المفتاح والقيمة", "القاموس في بايثون", "البحث عن قيمة بالاسم", "شرح الـ hash map", "بحث سريع بالمفتاح", "الكائن كخريطة في جافاسكريبت", "عد العناصر باستخدام قاموس", "store data by key", "key value pairs", "python dict", "look up value by name", "hash map explained", "fast lookup by key", "object as map in javascript", "count items with a dictionary"]
---

## التعريف

القاموس (Dictionary) يخزّن البيانات على شكل أزواج من المفتاح والقيمة، فتصل إلى القيمة بسرعة عبر مفتاحها بدلاً من موضعها.

## أين تسمعه؟

في كود بايثون، والتعامل مع JSON، ونقاشات البحث السريع، ويسمى أيضاً hash map أو object في لغات أخرى.

## أمثلة

- We keep the user's settings in a dictionary keyed by name.
  - نحتفظ بإعدادات المستخدم في قاموس مفتاحه الاسم.
- Looking up a key in a dictionary is much faster than searching a list.
  - البحث عن مفتاح في القاموس أسرع بكثير من البحث في قائمة.

## خطأ شائع

قراءة مفتاح غير موجود مباشرة تسبب خطأً. استخدم `get()` مع قيمة افتراضية عندما قد لا يوجد المفتاح.

## لا تخلطه مع

القائمة (List) يُوصل إليها بالموضع. أما القاموس فيُوصل إليه بالمفتاح، ويجب أن تكون مفاتيحه فريدة.

## قلها في العمل

- Let's use a dictionary here instead of scanning the whole list.
  - لنستخدم قاموساً هنا بدلاً من فحص القائمة كلها.
- Key the dictionary by id so we can look each item up instantly.
  - اجعل مفتاح القاموس هو المعرّف لنصل إلى كل عنصر فوراً.
