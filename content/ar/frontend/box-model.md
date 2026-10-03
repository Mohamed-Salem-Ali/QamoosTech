---
id: box-model
category: frontend
level: beginner
related: [responsive-design]
term: "Box Model"
pronunciation: "بوكس موديل"
---

## التعريف

نموذج الصندوق هو مفهوم أساسي في CSS، حيث يتم التعامل مع كل عنصر في HTML كصندوق مستطيل يتكون من المحتوى، والحشوة (padding)، والحدود (border)، والهوامش (margin). يحدد هذا النموذج كيفية تفاعل هذه الطبقات لتحديد الحجم الكلي للعنصر وموقعه.

## أين تسمعه؟

يُناقش عادةً عند تصميم التنسيقات، أو عند تصحيح مشاكل المسافات، أو عند تعلم أساسيات CSS.

## أمثلة

- The browser calculates the total width of an element by adding its content, padding, and border.
  - يقوم المتصفح بحساب العرض الكلي للعنصر عن طريق جمع المحتوى والحشوة والحدود.
- You can change the default behavior of the box model using the `box-sizing` property.
  - يمكنك تغيير السلوك الافتراضي لنموذج الصندوق باستخدام خاصية `box-sizing`.

## خطأ شائع

ينسى الكثير من المبتدئين أن الهامش (margin) يقع خارج الحدود ولا يدخل ضمن لون خلفية العنصر أو حسابات حجمه، مما يؤدي غالباً إلى مشاكل غير متوقعة في المسافات.

## لا تخلطه مع

غالباً ما يتم الخلط بين الهامش (margin) والحشوة (padding)، لكن الهامش ينشئ مساحة خارج حدود العنصر، بينما تضيف الحشوة مساحة داخل الحدود حول المحتوى.

## قلها في العمل

- Let's check the box model in the browser dev tools to see why this card is overflowing.
  - دعنا نتحقق من نموذج الصندوق في أدوات المطور بالمتصفح لنرى سبب تجاوز هذه البطاقة للحجم المحدد.
- Please ensure the box model calculations are correct before adjusting the outer layout.
  - يرجى التأكد من صحة حسابات نموذج الصندوق قبل ضبط التنسيق الخارجي.
