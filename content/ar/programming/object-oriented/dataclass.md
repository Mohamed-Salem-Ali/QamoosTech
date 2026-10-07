---
id: dataclass
category: programming
subcategory: object-oriented
level: intermediate
related: [class, attribute, boilerplate]
tags: [python]
aliases: ["data class"]
term: "Dataclass"
translation: "صنف البيانات"
pronunciation: "داتا كلاس"
keywords: ["صنف يحمل البيانات في الغالب", "الـ decorator ‏@dataclass", "init وrepr تُنشأ تلقائياً", "صنف حاوية بيانات", "dataclass غير قابل للتعديل", "أصناف بكود أقل", "class that mostly holds data", "@dataclass decorator", "auto generated init and repr", "data container class", "frozen immutable dataclass", "less boilerplate classes"]
---

## التعريف

الـ Dataclass صنف مخصص أساساً لحمل البيانات. يكتب لك الـ decorator ‏`@dataclass` الدوال `__init__` و`__repr__` و`__eq__` انطلاقاً من قائمة الحقول.

## أين تسمعه؟

في كود بايثون الحديث، ومراجعات الكود التي تزيل الكود المتكرر، وعند شرح السجلات وكائنات القيم.

## أمثلة

- Use a dataclass for the member record instead of writing the constructor by hand.
  - استخدم dataclass لسجل العضو بدلاً من كتابة الـ constructor يدوياً.
- A frozen dataclass cannot be changed after creation.
  - الـ dataclass المجمّد لا يمكن تغييره بعد إنشائه.

## خطأ شائع

استخدام قيمة افتراضية قابلة للتعديل مثل `tags: list = []`. استخدم `field(default_factory=list)` ليحصل كل كائن على قائمته.

## لا تخلطه مع

الـ TypedDict الذي يصف شكل القاموس فقط. أما الـ dataclass فينشئ كائنات حقيقية.

## قلها في العمل

- Make it a dataclass; we don't need a hand-written constructor.
  - اجعله dataclass؛ لا نحتاج constructor مكتوباً يدوياً.
- Freeze the dataclass so it can be used as a dictionary key.
  - جمّد الـ dataclass ليصلح مفتاحاً في قاموس.
