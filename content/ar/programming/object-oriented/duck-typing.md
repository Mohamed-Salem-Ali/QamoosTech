---
id: duck-typing
category: programming
subcategory: object-oriented
level: intermediate
related: [object, pythonic, structural-typing]
term: "Duck Typing"
translation: "الكتابة حسب السلوك"
pronunciation: "دَك تايبينج"
keywords: ["دك تايبينج","التحقق من نوع الكائن حسب سلوكه","الأنواع بناء على الدوال لا الوراثة","مفهوم الأنواع في لغات البرمجة الديناميكية","استخدام الكائنات بدون فحص الصنف","التحقق من الدوال أثناء وقت التشغيل","التعامل مع الكائنات حسب قدراتها","برمجة بايثون بدون واجهات صارمة","duck typing","dynamic type checking by behavior","if it walks like a duck","types based on methods not inheritance","runtime method checking in python","using objects without checking class","dynamic language typing concept","duck typing vs structural typing"]
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
- Any object with a read() method works here, because the function only calls read().
  - يعمل هنا أي كائن له دالة read()، لأن الدالة لا تستدعي إلا read().

## خطأ شائع

الاعتقاد بأن الـ Duck Typing يعني عدم وجود نظام أنواع (Type system) على الإطلاق؛ الحقيقة هي أن التحقق من النوع يتم في وقت التشغيل (Runtime) بناءً على قدرات الكائن وليس بناءً على الوراثة الصريحة.

## لا تخلطه مع

غالباً ما يتم الخلط بين الـ Duck typing والـ structural typing؛ فبينما يتحقق الـ Duck typing من وجود الدوال أثناء وقت التشغيل، يقوم الـ structural typing بفرض هذه المتطلبات برمجياً أثناء مرحلة الترجمة.

## قلها في العمل

- We can simplify this function by using duck typing instead of forcing a specific class inheritance.
  - يمكننا تبسيط هذه الدالة باستخدام الـ duck typing بدلاً من إجبار الكائنات على وراثة صنف معين.
- The current implementation relies on duck typing, so please ensure the passed object implements the required interface methods.
  - يعتمد التنفيذ الحالي على الـ duck typing، لذا يرجى التأكد من أن الكائن الممرر يحتوي على الدوال المطلوبة.
