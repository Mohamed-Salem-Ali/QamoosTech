---
id: scope
category: programming
level: beginner
related: [variable, function]
term: "Scope"
translation: "النطاق"
pronunciation: "سكوب"
---
## التعريف

الجزء من الشيفرة الذي يمكن فيه رؤية المتغيّر واستخدامه. المتغيّر المعرّف داخل دالة لا يظهر عادةً خارجها.

## أين تسمعه؟

عند تتبّع أخطاء مثل «x is not defined» وعند شرح الـ closures.

## أمثلة

- The variable is out of scope after the loop ends.
  - المتغيّر خارج النطاق بعد انتهاء الحلقة.
- Keep the scope as small as possible.
  - اجعل النطاق أصغر ما يمكن.

## خطأ شائع

الخلط بينه وبين «scope» في إدارة المشاريع (scope creep). الكلمة واحدة والمعنى مختلف، والسياق هو الذي يحدد.

## لا تخلطه مع

غالباً ما يتم الخلط بين النطاق (Scope) والسياق (Context)؛ فبينما يشير النطاق إلى مدى رؤية المتغيرات وإمكانية الوصول إليها في الكود، يشير السياق إلى الكائن الذي تعمل الدالة ضمنه حالياً.

## قلها في العمل

- I'm getting a reference error because that variable is out of scope inside this callback function.
  - أواجه خطأ في المرجع لأن ذلك المتغير خارج النطاق داخل دالة الـ callback هذه.
- Please ensure that we limit the scope of these temporary variables to the block where they are actually needed.
  - يرجى التأكد من حصر نطاق هذه المتغيرات المؤقتة ضمن الكتلة البرمجية التي تحتاج إليها فعلياً.
