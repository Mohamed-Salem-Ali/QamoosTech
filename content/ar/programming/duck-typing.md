---
id: duck-typing
category: programming
level: intermediate
related: [object, pythonic]
term: "Duck Typing"
pronunciation: "دَك تايبينج"
---

## التعريف

هو مفهوم في لغات البرمجة الديناميكية حيث لا يهم نوع الكائن (Object) بقدر ما تهم الدوال (Methods) التي يحتويها. إذا كان الكائن يتصرف بطريقة معينة، فإنه يُعامل على أنه من ذلك النوع بغض النظر عن هيكلية الأصناف (Class hierarchy) الخاصة به.

## أين تسمعه؟

في مراجعات الكود، أو عند مناقشة تصميم اللغات الديناميكية، أو عند شرح سبب عدم الحاجة لوجود واجهات (Interfaces) صارمة في لغات مثل بايثون.

## أمثلة

- Since the object has a `draw()` method, we can pass it to the function without checking its class.
  - بما أن الكائن يحتوي على دالة `draw()`، يمكننا تمريره إلى الدالة دون التحقق من نوعه (Class).
- Python uses duck typing to allow different objects to be used interchangeably as long as they support the expected operations.
  - تستخدم بايثون الـ Duck Typing للسماح باستخدام كائنات مختلفة بالتبادل طالما أنها تدعم العمليات المطلوبة.

## خطأ شائع

الاعتقاد بأن الـ Duck Typing يعني عدم وجود نظام أنواع (Type system) على الإطلاق؛ الحقيقة هي أن التحقق من النوع يتم في وقت التشغيل (Runtime) بناءً على قدرات الكائن وليس بناءً على الوراثة الصريحة.
