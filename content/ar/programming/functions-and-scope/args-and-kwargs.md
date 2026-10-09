---
id: args-and-kwargs
category: programming
subcategory: functions-and-scope
level: intermediate
related: [function, parameter-vs-argument, tuple]
tags: [python]
aliases: ["args kwargs", "variable-length arguments", "varargs"]
term: "*args and **kwargs"
translation: "الوسائط المتغيرة"
pronunciation: "أرجز آند كواورجز"
keywords: ["عدد متغير من الوسائط", "قبول أي وسائط", "تمرير وسائط مسماة إضافية", "فك قائمة إلى وسائط", "الدوال المغلِّفة تمرر الوسائط", "def f(*args, **kwargs)", "variable number of arguments", "accept any arguments", "pass extra keyword arguments", "unpack list into arguments", "wrapper functions forward arguments"]
---

## التعريف

`*args` تجمع الوسائط الموضعية الإضافية في tuple، و`**kwargs` تجمع الوسائط المسماة الإضافية في قاموس، فتقبل الدالة أي عدد منها.

## أين تسمعه؟

في دروس بايثون، والـ decorators والدوال المغلِّفة، وكود المكتبات الذي يمرر الوسائط إلى دالة أخرى.

## أمثلة

- The wrapper takes `*args, **kwargs` and passes them straight to the original function.
  - تأخذ الدالة المغلِّفة `*args, **kwargs` وتمررها مباشرة إلى الدالة الأصلية.
- `total(*numbers)` accepts any number of values.
  - `total(*numbers)` تقبل أي عدد من القيم.
- The decorator accepts *args and **kwargs, so it works with any function signature.
  - يقبل الديكوراتور *args و**kwargs، فيعمل مع أي توقيع دالة.

## خطأ شائع

استخدامها في كل مكان. المعاملات المسماة الواضحة أسهل قراءة وتوثيقاً من حقيبة وسائط خفية.

## لا تخلطه مع

الفك عند الاستدعاء: `f(*items)` توزّع القائمة على وسائط، بينما `def f(*items)` تجمعها.

## قلها في العمل

- Accept `**kwargs` and forward them to the parent class.
  - اقبل `**kwargs` ومرّرها إلى الصنف الأب.
- I'd rather list the real parameters than hide them in kwargs.
  - أفضّل ذكر المعاملات الحقيقية بدل إخفائها في kwargs.
