---
id: class
category: programming
level: beginner
related: [object, inheritance, interface]
term: "Class"
translation: "فئة"
pronunciation: "كلاس"
---
## التعريف

مخطط يصف البيانات والسلوك الذي سيملكه كل كائن يُنشأ منه.

## أين تسمعه؟

البرمجة كائنية التوجّه في Java وPython وTypeScript وC#.

## أمثلة

- Create a `Invoice` class with a `calculateTotal` method.
  - أنشئ فئة `Invoice` فيها دالة `calculateTotal`.
- This class is doing too much. Let's split it.
  - هذه الفئة تقوم بأكثر من مهمة. لنقسمها.

## خطأ شائع

وضع كل شيء في فئة واحدة ضخمة. الفئات الصغيرة ذات المسؤولية الواحدة أسهل في الاختبار.

## لا تخلطه مع

الفئة (Class) تُعرّف المخطط والبنية لإنشاء الكائنات، بينما الكائن (Object) هو النسخة الفعلية من تلك الفئة التي تعمل في الذاكرة.

## قلها في العمل

- Let's create a new class for the payment processing logic to keep things modular.
  - لننشئ فئة جديدة لمنطق معالجة المدفوعات للحفاظ على تنظيم الكود وحدوياً.
- Please ensure this class handles only single-responsibility tasks before we merge the pull request.
  - الرجاء التأكد من أن هذه الفئة تتعامل مع مهام ذات مسؤولية واحدة فقط قبل أن ندمج طلب السحب.
