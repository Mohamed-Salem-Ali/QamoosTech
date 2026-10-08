---
id: class
category: programming
subcategory: object-oriented
level: beginner
related: [object, inheritance, interface, dataclass]
term: "Class"
translation: "فئة"
pronunciation: "كلاس"
keywords: ["مخطط لإنشاء الكائنات","قالب البرمجة كائنية التوجه","كلاس","تعريف الكائنات في البرمجة","مخطط البيانات والسلوك","إنشاء كلاس جديد","هيكل الكائن البرمجي","blueprint for creating objects","object oriented programming blueprint","define data and behavior template","klas","kelas","create new object blueprint","code template for objects","group data and methods together","java python typescript class"]
---
## التعريف

مخطط يجمع البيانات والدوال التي تعمل عليها. ولكل كائن يُنشأ من الفئة نسخته الخاصة من البيانات.

## أين تسمعه؟

البرمجة كائنية التوجّه في Java وPython وTypeScript وC#.

## أمثلة

- Create a `Invoice` class with a `calculateTotal` method.
  - أنشئ فئة `Invoice` فيها دالة `calculateTotal`.
- This class is doing too much. Let's split it.
  - هذه الفئة تقوم بأكثر من مهمة. لنقسمها.
- The Invoice class has a method that calculates the total from its items.
  - تحتوي الفئة Invoice على دالة تحسب المجموع من عناصرها.

## خطأ شائع

وضع كل شيء في فئة واحدة ضخمة. الفئات الصغيرة ذات المسؤولية الواحدة أسهل في الاختبار.

## لا تخلطه مع

الفئة (Class) تُعرّف المخطط والبنية لإنشاء الكائنات، بينما الكائن (Object) هو النسخة الفعلية من تلك الفئة التي تعمل في الذاكرة.

## قلها في العمل

- Let's create a new class for the payment processing logic to keep things modular.
  - لننشئ فئة جديدة لمنطق معالجة المدفوعات للحفاظ على تنظيم الكود وحدوياً.
- Please ensure this class handles only single-responsibility tasks before we merge the pull request.
  - الرجاء التأكد من أن هذه الفئة تتعامل مع مهام ذات مسؤولية واحدة فقط قبل أن ندمج طلب السحب.
