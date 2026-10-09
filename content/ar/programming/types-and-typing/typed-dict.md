---
id: typed-dict
category: programming
subcategory: types-and-typing
level: intermediate
related: [dictionary, type-hint, json-schema]
tags: [python]
term: "TypedDict"
translation: "القاموس المنمّط"
pronunciation: "تايبد ديكت"
keywords: ["وصف شكل القاموس", "قاموس بمفاتيح معروفة", "أنواع البيانات على شكل JSON", "مفاتيح وقيم محددة الأنواع", "الأنواع للقواميس في بايثون", "واجهة للكائنات", "describe shape of a dictionary", "dict with known keys", "json shaped data types", "typed keys and values", "python typing for dicts", "interface for objects"]
---

## التعريف

الـ TypedDict يصف شكل القاموس: أي مفاتيح يملك وما نوع كل قيمة. وقت التشغيل يبقى قاموساً عادياً.

## أين تسمعه؟

في مشاريع بايثون التي تتعامل مع بيانات بشكل JSON، وفي نقاشات فحص الأنواع.

## أمثلة

- The API response is typed as a TypedDict with a name and a list of tags.
  - استجابة الـ API معرّفة كـ TypedDict فيها اسم وقائمة وسوم.
- The checker warns if you read a key that is not in the TypedDict.
  - تنبهك أداة الفحص إن قرأت مفتاحاً غير موجود في الـ TypedDict.
- The config is a TypedDict, so the checker catches a typo in any of its keys.
  - الإعدادات من نوع TypedDict، لذلك يلتقط المدقق أي خطأ مطبعي في أي مفتاح من مفاتيحها.

## خطأ شائع

توقع أن يتحقق الـ TypedDict من البيانات أثناء التشغيل. هو يساعد أداة الفحص فقط؛ استخدم مكتبة تحقق للمدخلات الحقيقية.

## لا تخلطه مع

الـ dataclass الذي ينشئ كائنات حقيقية بخصائص. أما الـ TypedDict فيبقى قاموساً عادياً.

## قلها في العمل

- Use a TypedDict to describe the JSON we receive.
  - استخدم TypedDict لوصف الـ JSON الذي نستقبله.
- Add the missing key to the TypedDict so the checker passes.
  - أضف المفتاح المفقود إلى الـ TypedDict لتنجح أداة الفحص.
